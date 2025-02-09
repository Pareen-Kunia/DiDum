import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import clearSession from '../utils/clearSession';

const IdleTimeoutContext = createContext();

export const useIdleTimeout = () => {
  return useContext(IdleTimeoutContext);
};

export const IdleTimeoutProvider = ({ children }) => {

  const timeoutDuration = parseInt(process.env.REACT_APP_TIMEOUT) || 1800000; 
  const [isIdle, setIsIdle] = useState(false);
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const navigate = useNavigate();

  
  const resetIdleTimer = useCallback(() => {
    setLastActiveTime(Date.now());
    setIsIdle(false);
  }, []);

  
  const checkIdleStatus = useCallback(async () => {

    if(window.location.pathname === '/error' || window.location.pathname === '/session-timeout') return;

    const idleTime = Date.now() - lastActiveTime;
  
    if (idleTime > timeoutDuration && !isIdle) {
      const isSessionExpired = await checkBackendIdleStatus();
  
      if (isSessionExpired && !isIdle) {
        
          const isLoggedOut = await loggingOutTheUser();
          if (isLoggedOut) {
            setIsIdle(true);
          
        }
      } else {
        setLastActiveTime(Date.now());
      }
    }
  }, [lastActiveTime, timeoutDuration, isIdle]); 
  
  const handleNavigationError = async (message) => {
    console.warn(message);
    navigate("/error");
  };

  const checkBackendIdleStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
          console.warn("No token found, assuming session expired.");
          return true; 
      }

      let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/check-session`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      return res.data.expired;
    } catch (error) {

      console.error("Request failed:", error.response?.statusText || error.message);

      clearSession();

      await loggingOutTheUser();

      await handleNavigationError(`Error : Navigating to error page.`);
      return false;
    }
  };


  const loggingOutTheUser = async () => {
    try {
      const token = localStorage.getItem('token');
        if (!token) {
            console.warn("No token found during logout.");
            return true; 
        }

      let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/logout`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
        return res.data.success;

    } catch (error) {
      console.error("Error logging out user:", error);

      clearSession();
      await handleNavigationError(`Error : Navigating to error page.`);
      
      return false;
    }
  };


  const handleUserActivity = useCallback(() => {
    resetIdleTimer();
  }, [resetIdleTimer]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'touchmove', 'keypress', 'mousedown', 'touchstart'];
    events.forEach(event => window.addEventListener(event, handleUserActivity));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleUserActivity));
    };
  }, [handleUserActivity]);

  useEffect(() => {
    
    const idleCheckInterval = setInterval(checkIdleStatus, 300000); 

    return () => clearInterval(idleCheckInterval);
  }, [checkIdleStatus]); 

  useEffect(() => {
    if (isIdle && window.location.pathname !== '/session-timeout') {
      clearSession(); 
      console.log('Navigating to /session-timeout due to idle timeout.');
      navigate("/session-timeout");
    }
  }, [isIdle, navigate]);  

  return (
    <IdleTimeoutContext.Provider value={{ isIdle }}>
      {children}
    </IdleTimeoutContext.Provider>
  );
};
 
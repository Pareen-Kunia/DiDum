import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const IdleTimeoutContext = createContext();

export const useIdleTimeout = () => {
  return useContext(IdleTimeoutContext);
};

export const IdleTimeoutProvider = ({ children }) => {
  const token = localStorage.getItem('token') || "mySecretKey123" 

  const timeoutDuration = parseInt(process.env.REACT_APP_TIMEOUT) || 1800000; 
  const [isIdle, setIsIdle] = useState(false);
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const navigate = useNavigate();

  
  const resetIdleTimer = useCallback(() => {
    setLastActiveTime(Date.now());
    setIsIdle(false);
  }, []);

  
  const checkIdleStatus = useCallback(async () => {
    const idleTime = Date.now() - lastActiveTime;
    console.log(`Idle check: ${idleTime}ms passed.`);
  
    if (idleTime > timeoutDuration && !isIdle) {
      const isSessionExpired = await checkBackendIdleStatus();
  
      if (isSessionExpired && !isIdle) {
        
        if (!isIdle) {
          console.log("inside isidle")
          const isLoggedOut = await loggingOutTheUser();
          if (isLoggedOut) {
            setIsIdle(true);
            console.log(`Idle is set to true`);
          }
        }
      } else {
        setLastActiveTime(Date.now());
      }
    }
  }, [lastActiveTime, timeoutDuration, isIdle]); 
  
  const handleNavigationError = (message) => {
    console.warn(message);
    navigate("/error");
  };

  const checkBackendIdleStatus = async () => {
    try {
      let res = await axios.post("http://localhost:3001/api/check-session", {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res) {
        handleNavigationError("Backend unreachable, navigating to error page.");
        return true;
      }
  
      if (res.status === 200) { 
        return res.data.expired;  
      }
    } catch (error) {
      console.error("Error checking backend session:", error);
  
      if (error.response) {  
        if (error.response.status === 401) {  
          console.warn("Unauthorized session, logging out user.");
          await loggingOutTheUser(); 
        }else if (error.response.status === 404) {
          console.warn("API endpoint not found, redirecting to error page.");
          handleNavigationError("API endpoint not found.");
        }
      } else { 
        console.warn("Network/server error, navigating to error page.");
        handleNavigationError("Network/server error.");
      }
  
      return true; 
    }
  };

  const loggingOutTheUser = async () => {
    try {
      let res = await axios.post("http://localhost:3001/api/logout", {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  
      if (res.status === 200) {
        return res.data.success;
      }
    } catch (error) {
      console.error("Error logging out user:", error);
      handleNavigationError("Error logging out user.");
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


  if (isIdle) {
    clearInterval(idleCheckInterval);
  }

    return () => clearInterval(idleCheckInterval);
  }, [checkIdleStatus]); 

  useEffect(() => {
    if (isIdle && window.location.pathname !== '/session-timeout') {
      console.log('Navigating to /session-timeout due to idle timeout.');
      if (window.location.pathname !== '/session-timeout') {
        navigate("/session-timeout");
      }
    }
  }, [isIdle, navigate]); 

  return (
    <IdleTimeoutContext.Provider value={{ isIdle }}>
      {children}
    </IdleTimeoutContext.Provider>
  );
};

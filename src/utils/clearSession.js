import React from 'react'

export function clearLocalStorage(){
  localStorage.clear();
}

export function clearSessionStorage(){
  sessionStorage.clear();
}

export function clearCookies(){
  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  });
}

export default function clearSession(){
    // Clearing local storage
    clearLocalStorage()

    // Clearing session Storage
    clearSessionStorage()

    //Clear Cookies
    clearCookies()
    
}
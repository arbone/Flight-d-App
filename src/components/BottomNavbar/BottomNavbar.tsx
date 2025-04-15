// src/components/BottomNavbar/BottomNavbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar-container">
      <div className="button-container">
        <Link to="/" className="button">
          <svg
            className="icon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
            ></path>
          </svg>
        </Link>

        <Link to="/my-bookings" className="button">
          <svg
            className="icon-bookings"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M14.76,37.45a1,1,0,0,0-1,1v3.58a1,1,0,0,0,2.06,0V38.48A1,1,0,0,0,14.76,37.45Z"/>
            <path d="M15.79,31.33a1,1,0,0,0-2.06,0v3.58a1,1,0,0,0,2.06,0Z"/>
            <path d="M21.52,32.09h4.24a1,1,0,0,0,0-2.06H21.52a1,1,0,1,0,0,2.06Z"/>
            <path d="M35.93,38.36a1,1,0,0,0-1-1H21.52a1,1,0,1,0,0,2.06H34.9A1,1,0,0,0,35.93,38.36Z"/>
            <path d="M21.52,41.3a1,1,0,1,0,0,2.06h10a1,1,0,0,0,0-2.06Z"/>
            <path d="M56,33.42,51.12,21,54,18.17a4.49,4.49,0,0,0,1.29-2.8,3,3,0,0,0-.88-2.46v0A3.1,3.1,0,0,0,51.94,12a4.51,4.51,0,0,0-2.78,1.29l-2.9,2.9L33.89,11.35a1,1,0,0,0-1.11.23l-2.26,2.26a1,1,0,0,0-.3.79,1.06,1.06,0,0,0,.3.67.39.39,0,0,0,.1.08l2.47,1.92-.31.31a1,1,0,0,0,1.46,1.46l.49-.49,1.75,1.36-.32.32a1,1,0,0,0,1.46,1.46l.5-.5,1.75,1.36L36.49,26l-.53.57-3.27-1.26a1,1,0,0,0-1.1.24L30.14,27a1,1,0,0,0,0,1.46l3.07,3.07c-.05.18-.11.36-.15.54a1.83,1.83,0,0,0,2.22,2.22l.53-.15,3.08,3.07a1,1,0,0,0,1.45,0l1.46-1.46a1,1,0,0,0,.23-1.1l-1.25-3.27c.19-.17.38-.34.56-.52l3.38-3.39,1.37,1.76-.5.49a1,1,0,0,0,0,1.46,1,1,0,0,0,1.46,0l.31-.31,1.37,1.75-.49.49a1,1,0,0,0,1.46,1.46l.3-.31,1.92,2.47.09.1a1.09,1.09,0,0,0,.66.3,1,1,0,0,0,.8-.3l2.26-2.27A1,1,0,0,0,56,33.42ZM34,29.4l-1.71-1.71.26-.25,2.1.8A13.2,13.2,0,0,0,34,29.4ZM32.8,14.47l1-1,10.91,4.27-3.33,3.33ZM39.61,35l-1.7-1.7c.39-.2.78-.42,1.15-.65l.81,2.1Zm.27-5.62a11.07,11.07,0,0,1-4.72,2.79A11,11,0,0,1,38,27.42L50.62,14.75a2.42,2.42,0,0,1,1.5-.7,1,1,0,0,1,.81.3h0a1,1,0,0,1,.28.88,2.33,2.33,0,0,1-.69,1.47ZM52.83,34.5,46.19,26l3.34-3.33,4.26,10.91Z"/>
            <path d="M21.52,32.09h4.24a1,1,0,0,0,0-2.06H21.52a1,1,0,1,0,0,2.06Z"/>
            <path d="M20.49,38.36a1,1,0,0,0,1,1H34.89a1,1,0,1,0,0-2.06H21.52A1,1,0,0,0,20.49,38.36Z"/>
            <path d="M21.52,41.3a1,1,0,1,0,0,2.06h10a1,1,0,1,0,0-2.06Z"/>
            <path d="M49.82,39.56a1,1,0,0,0-1,1v5.73a.35.35,0,0,1-.35.34H7.06l1.51-2a1,1,0,0,0,0-1.24l-2.28-3,2.28-3a1,1,0,0,0,0-1.23L6.29,33,8.57,30a1,1,0,0,0,0-1.23l-1.51-2H24.9a1,1,0,1,0,0-2.06H11.09l.9-4.23L29,24a1,1,0,0,0,.43-2l-17.3-3.68a1.72,1.72,0,0,0-2,1.32L9,24.67H5a1,1,0,0,0-.83,1.65l2.29,3-2.29,3a1.05,1.05,0,0,0,0,1.24L6.46,36.7l-2.29,3a1.05,1.05,0,0,0,0,1.24L6.46,44l-2.29,3a1,1,0,0,0-.09,1.07,1,1,0,0,0,.92.58H48.44a2.41,2.41,0,0,0,2.41-2.41V40.59A1,1,0,0,0,49.82,39.56Z"/>
          </svg>
        </Link>

        <Link to="/credits" className="button" >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
            <path 
              stroke="currentColor"
              strokeLinecap="round"
              d="M12 16v-4"
            />
            <circle cx="12" cy="8" r="1" fill="currentColor"/>
          </svg>
        </Link>

        <Link to="/instructions" className="button">
          <svg
            className="icon"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
          >
            <path 
              d="M1920 332v1257H0V332h1920Zm-115 114H115v1032h1690V446Zm-574 683v113H409v-113h822Zm275-226v113H409V903h1097Zm-275-226v113H409V677h822Z" 
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
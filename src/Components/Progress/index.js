import React from "react";
import "./progress.css";

const Progress = ({ progress }) => {
  // Cap progress at 100 and ensure it doesn't go below 0
  const cappedProgress = Math.max(0, Math.min(progress, 100));

  return (
    <div className="progress">
      <div className="title">Start application</div>
      <div>
        <span className="subtitle">Approximate time to complete:</span>
        <span className="subtitle emp"> {10 - parseInt(progress/100)} minutes</span>
      </div>
      <div className="progressbar">
        
        <div
          className="progressbar-fill"
          style={{ width: `${cappedProgress}%` }} // Dynamically set the width
        ></div>
      </div>
    </div>
  );
};

export default Progress;

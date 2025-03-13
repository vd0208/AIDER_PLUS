import React, { useState } from "react";
import "./styles.css"; 

const EmergencyAlert = () => {
  const [pressTimer, setPressTimer] = useState(null);

  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      alert("🚨 Emergency Notification Sent!");
    }, 5000);
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer);
  };

  return (
    <button 
      className="emergency-btn" 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp} 
      onTouchStart={handleMouseDown} 
      onTouchEnd={handleMouseUp}
    >
 
    </button>
  );
};

export default EmergencyAlert;
// src/components/FloatingButton.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingButton.css";

function FloatingButton({ imageSrc, navigateTo }) {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  // Show message every 7s for 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 10000); // repeat every 7s
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="floating-btn-wrapper">
      <button className="floating-btn" onClick={handleClick}>
        <img src={imageSrc} alt="floating button" />
      </button>
      {showMessage && (
        <div className="floating-msg">💬 Hey, how can I help you?</div>
      )}
    </div>
  );
}

export default FloatingButton;

import React from 'react';
import './LogoFade.css';  // 引入 CSS 檔案

const LogoFade = () => {
  return (
    <<div className="logo-container">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <div className="logos">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="google-logo.png" alt="Google" className="logo fade-in" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="microsoft-logo.png" alt="Microsoft" className="logo fade-in" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src="amazon-logo.png" alt="Amazon" className="logo fade-in" />
        </a>
      </div>
    </div>
  );
}

export default LogoFade;

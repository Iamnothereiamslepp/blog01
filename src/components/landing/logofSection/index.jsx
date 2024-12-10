import React from 'react';
import './LogoFade.css';  // 引入 CSS 檔案

const LogoFade = () => {
  return (
    <div className="logo-container">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <div className="logos">
        <img src="google-logo.png" alt="Google" className="logo fade-in" />
        <img src="microsoft-logo.png" alt="Microsoft" className="logo fade-in" />
        <img src="amazon-logo.png" alt="Amazon" className="logo fade-in" />
      </div>
    </div>
  );
}

export default LogoFade;

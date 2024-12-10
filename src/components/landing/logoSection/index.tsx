import React from "react";
import "./TrustedTeams.css"; // 引入 CSS 文件

const TrustedTeams = () => {
  return (
    <div className="trusted-teams">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <div className="logo-container">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="google-logo.png" alt="Google" className="logo fade" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="microsoft-logo.png" alt="Microsoft" className="logo fade" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src="amazon-logo.png" alt="Amazon" className="logo fade" />
        </a>
      </div>
    </div>
  );
};

export default TrustedTeams;

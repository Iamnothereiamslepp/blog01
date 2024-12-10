import React from 'react';
import './LogoFade.css';  // 引入 CSS 檔案

const LogoFade = () => {
  return (
    <div className="logo-container">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <div className="logos">
        <img src="https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png" alt="Google" className="logo fade-in" />
        <img src="https://hololivepro.com/wp-content/uploads/2023/03/holostars_hp.png" alt="Microsoft" className="logo fade-in" />
        <img src="https://hololivepro.com/wp-content/uploads/2023/03/officialshop_hp.png" alt="Amazon" className="logo fade-in" />
      </div>
    </div>
  );
}

export default LogoFade;
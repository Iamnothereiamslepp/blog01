import React from 'react'
import './components/landing/logoSection/TrustedTeams.css' // 引入 CSS 文件
import { cn } from '@site/src/lib/utils'
import Translate from '@docusaurus/Translate'

const TrustedTeams = ({ className }) => {
  return (
   <div className={className}>
    <div className="trusted-teams">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <div className="logo-container">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png" alt="Google" className="logo fade" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png" alt="Microsoft" className="logo fade" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png" alt="Amazon" className="logo fade" />
        </a>
      </div>
    </div>
   </div>
  );
};

export default TrustedTeams;

import React from 'react';
import './LogoFade.css';  // 引入 CSS 檔案
import {useTranslation} from '@docusaurus/theme-common';

const LogoFade = () => {
  const {translate} = useTranslation();  // 使用翻譯 hook
  
  return (
    <div className="logo-container">
      <h2>{translate({message: 'TRUSTEDBYLEADINGTEAMS'})}</h2>
      <div className="logos">
       <div className="logo-item">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/holostars_hp.png" alt="Google" className="logo fade-in" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/officialshop_hp.png" alt="Microsoft" className="logo fade-in" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src="https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png" alt="Amazon" className="logo fade-in" />
        </a>
      </div>
    </div>
   </div>
  );
}

export default LogoFade;

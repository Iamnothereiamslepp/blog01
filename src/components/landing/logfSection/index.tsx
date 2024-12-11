import React from 'react';
import { Carousel } from 'magic-ui';
import './LogoScroll.css';  // 自定義樣式檔案

const LogoScroll = () => {
  return (
    <div className="logo-container">
      <h2>TRUSTED BY LEADING TEAMS</h2>
      <Carousel 
        autoplay={true}         // 自動播放圖片
        infinite={true}         // 無限循環滾動
        interval={3000}         // 每隔 3 秒滾動一次
      >
        <div>
          <img src="google-logo.png" alt="Google" className="logo" />
        </div>
        <div>
          <img src="microsoft-logo.png" alt="Microsoft" className="logo" />
        </div>
        <div>
          <img src="amazon-logo.png" alt="Amazon" className="logo" />
        </div>
        {/* 更多圖片 */}
      </Carousel>
    </div>
  );
}

export default LogoScroll;

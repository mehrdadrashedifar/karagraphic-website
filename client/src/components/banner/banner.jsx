// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight , FaArrowCircleLeft  } from "../../../node_modules/react-icons/fa";

import styles from './banner.module.css';

// import backgroundImage1 from '../../assets/api.naghshealmas.png';
// import backgroundImage2 from '../../assets/print24-Keyvisual_mobile_030622_FF_m8jkhs.webp';
import backgroundImage3 from '../../assets/Klimaneutral_drucken_Websitebanner_lyqad3.webp';
import backgroundImage4 from '../../assets/individualisierbare-produktausfuehrungen-websitebanner_zpifcf.webp';
import { SlSizeActual, SlSizeFullscreen } from 'react-icons/sl';


function Banner(){

  const backgrounds = [
    backgroundImage3,backgroundImage4
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const nextBackground = () => {
    setCurrentBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevBackground = () => {
    setCurrentBackgroundIndex((prev) => 
      (prev - 1 + backgrounds.length) % backgrounds.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextBackground();
    }, 3000);
    return () => clearInterval(intervalId);
  });

    return (
        <div id='banner' className={styles.banner}>
            <div className={styles.news}>
                <h3>اطلاعیه</h3>
                <div>
                    <h4>عنوان</h4>
                    <p>تغییر در زیر ساخت های چاپخانه
                    به اطلاع می رسانیم به دلیل تغییر در زیر ساخت های چاپخانه و متریال های استفاده شده در چاپخانه زین پس جهت استفاده از رنگ مشکی برای پس زمینه از کد رنگی C85.M70.Y65.K100استفاده نمایید </p>
                    <p>۱۴۰۲/0۱/0۹ </p>
                </div>
            </div>
            <div className={styles.changingBanner}>
                <img src={backgrounds[currentBackgroundIndex]} alt='banner'/>
                <button onClick={nextBackground} className={styles.nextBtn}><FaArrowCircleRight style={{fontSize:'2vw' , color:' rgb(197, 197, 197)'}}/></button>
                <button onClick={prevBackground} className={styles.prevBtn}><FaArrowCircleLeft style={{fontSize:'2vw' , color:' rgb(197, 197, 197)'}}/></button>
            </div>
        </div>
    );
} 
export default Banner;


import React from 'react'
import { PiTelegramLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import rasm from "../../assets/images/logo.jpg"

function Hero() {
  return (
    <div className="hero">
       <div className="container">
          <div className="hero__wrapper">
            <img src={rasm} alt="" />
            <div className="user__wrapper">
                <h1>Nabijonov Yahyojon</h1>
            <h5>Frontend developer</h5>
            </div>
            <ul>
                <li><a href="https://t.me/nabijonovdev"><PiTelegramLogoFill /><h4>TELEGRAM</h4></a></li>
                <li><a href="https://www.instagram.com/yaxyojon_23.03/"><FaInstagram /><h4>INSTAGRAM</h4>
</a></li>
                <li><a href="https://www.linkedin.com/in/yahyobek-nabijonov-0b30232aa/"><TfiLinkedin /><h4>LINKEDIN</h4></a></li>
            </ul>
            <img src={rasm} alt="" />
            <a className='tab__link' href=""><RxHamburgerMenu /><p>taplink.ru</p></a>
        </div>
       </div>
    </div>
  )
}

export default Hero
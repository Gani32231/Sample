import React from 'react'
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Eshop.css'

  
function Eshop() {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      }
    return (
        <div className="eshop" >
            <div className="es__mn__clr"></div>
            <svg className="es__box1" width="1252" height="105" viewBox="0 0 1252 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            
            </g>
            <defs>
                <filter id="filter0_d" x="0.5" y="0" width="1251" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs> 

            </svg>      
            <div className="mr__logo">

            </div>
            <svg className="es__rect2" width="51" height="1" viewBox="0 0 51 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="50" height="1" fill="#DB1505"/>
            </svg>
            <Link to="/">
            <p className="es__nam9" >HOME</p>
            </Link>
            <Link to="/findadel">
            <p className="es__nam10" >FIND A DEALER</p>
            </Link>
            <Link to="/eshop">
            <p className="es__nam11" >E-SHOP</p>
            </Link>
            <Link to="/enquirew">
            <p className="es__nam12" >ENQUIRE AND TEST RIDE</p>
            </Link>
            <Link to="/partwu">
            <p className="es__nam13" >PARTNER WITH US</p>
            </Link>
            <Link to="/review">
            <p className="es__nam14" >REVIEWS</p>
            </Link>
            <p className="es__nam1" >Checkout New Bike Models </p>
            <p className="es__nam2" >Bajaj 546</p>
            <p className="es__nam3" >NOW RIDE SMART INDIA</p>
            <div className="slide-container">
            <Slide {...properties}>
        <div className="each-slide">
          <div className="es__img" >
            
          </div>
        </div>
        <div className="each-slide">
          <div className="es__img1" >
            
          </div>
          </div>
          </Slide>
                
            </div>
            <button className="es__b1">
            GET THIS BIKE   
            <svg className="es__a1" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.56836C0 1.17053 0.151451 0.789004 0.421034 0.507699C0.690618 0.226395 1.05625 0.0683594 1.4375 0.0683594H20.125C20.5062 0.0683594 20.8719 0.226395 21.1415 0.507699C21.4111 0.789004 21.5625 1.17053 21.5625 1.56836C21.5625 1.96618 21.4111 2.34772 21.1415 2.62902C20.8719 2.91033 20.5062 3.06836 20.125 3.06836H1.4375C1.05625 3.06836 0.690618 2.91033 0.421034 2.62902C0.151451 2.34772 0 1.96618 0 1.56836Z" fill="#23292C"/>
</svg>
<svg className="es__a2" width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.919389 0.50611C1.05292 0.36642 1.21155 0.255591 1.38619 0.179972C1.56084 0.104353 1.74806 0.0654297 1.93714 0.0654297C2.12622 0.0654297 2.31344 0.104353 2.48808 0.179972C2.66273 0.255591 2.82136 0.36642 2.95489 0.50611L11.5799 9.50611C11.7138 9.64545 11.82 9.81097 11.8924 9.99321C11.9649 10.1754 12.0022 10.3708 12.0022 10.5681C12.0022 10.7654 11.9649 10.9608 11.8924 11.143C11.82 11.3252 11.7138 11.4908 11.5799 11.6301L2.95489 20.6301C2.68497 20.9118 2.31887 21.07 1.93714 21.07C1.55541 21.07 1.18931 20.9118 0.919389 20.6301C0.649465 20.3484 0.497823 19.9664 0.497823 19.5681C0.497823 19.1698 0.649465 18.7878 0.919389 18.5061L8.52951 10.5681L0.919389 2.63011C0.78552 2.49077 0.67931 2.32525 0.606842 2.14301C0.534373 1.96078 0.49707 1.76541 0.49707 1.56811C0.49707 1.37081 0.534373 1.17544 0.606842 0.993209C0.67931 0.810974 0.78552 0.645447 0.919389 0.50611Z" fill="#23292C"/>
</svg>

            </button>
           
            
            <p className="es__nam4" >Our</p>
            <p className="es__nam5" >Bikes</p>
            <Link to="/spec">
            <div className="es__p2">

            </div>
            </Link>
            <div className="es__p2__img">
                
            </div>
            <p className="es__nam6" >Honda Shine</p>
            <div className="es__p3">

            </div>
            <div className="es__p3__img">
                
            </div>
            <p className="es__nam7" >Honda Shine</p>
            <div className="es__p4">

            </div>
            <div className="es__p4__img">
                
            </div>
            <p className="es__nam8" >TVS ZEST</p>
            <div className="es__p5">

            </div>
            <div className="es__p5__img">
                
            </div>
            <p className="es__nam33" >BAJAJ PLATINA</p>
            <div className="es__p6">

            </div>
            <div className="es__p6__img">
                
            </div>
            <p className="es__nam32" >BAJAJ PLATINA</p>
            <div className="es__p7">

            </div>
            <div className="es__p7__img">
                
            </div>
            <p className="es__nam31" >BAJAJ CT 110</p>
            <button className="es__b2">
                View All
            </button>
            <p className="es__nam21" >Our</p>
            <p className="es__nam22" >Scooters</p>
            <div className="es__p8"></div>
            <div className="es__p8__img"></div>
            <p className="es__nam23">HONDA ACTIVA</p>
            <div className="es__p9"></div>
            <div className="es__p9__img"></div>
            <p className="es__nam15" >HONDA ACTIVA</p>
            <div className="es__p10"></div>
            <div className="es__p10__img"></div>
            <p className="es__nam16" >HONDA ACTIVA</p>
            <div className="es__p11"></div>
            <div className="es__p11__img"></div>
            <p className="es__nam17" >TVS NTORQ</p>
            <div className="es__p12"></div>
            <div className="es__p12__img"></div>
            <p className="es__nam18" >TVS Zest</p>
            <div className="es__p13"></div>
            <div className="es__p13__img"></div>
            <p className="es__nam19" >SUZUKI ACCESS 125</p>
            <button className="es__b3">
            View All
            </button>
        </div>
    )
}

export default Eshop

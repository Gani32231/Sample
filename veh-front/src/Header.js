import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div className="header">
            
        <div className="parallelogram1">

        </div>
        <svg className="header__phn" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4551 0.937347L11.4083 0.196587C11.0772 0.116338 10.7374 0.298442 10.6026 0.625611L9.19641 4.08249C9.07336 4.38497 9.15539 4.73991 9.39855 4.94671L11.1739 6.47761C10.1192 8.84496 8.2765 10.8141 5.9826 11.9469L4.52951 10.0765C4.3303 9.82029 3.99632 9.73387 3.70921 9.8635L0.428031 11.345C0.114561 11.4901 -0.0582874 11.8481 0.0178829 12.1969L0.720994 15.4069C0.794234 15.7402 1.07548 15.9809 1.40653 15.9809C8.9093 15.9809 15 9.57646 15 1.65959C15 1.3139 14.7744 1.01451 14.4551 0.937347Z" fill="#DB1505"/>
        </svg>
        <p className="header__phnnum">+91 9867452155</p>
        <svg className="header__clk" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6709 6V9.5L12.5459 12.125L9.6709 6ZM18.2959 9.5C18.2959 10.5342 18.0728 11.5582 17.6394 12.5136C17.2059 13.4691 16.5706 14.3372 15.7697 15.0685C14.9688 15.7997 14.018 16.3798 12.9715 16.7756C11.9251 17.1713 10.8035 17.375 9.6709 17.375C8.53825 17.375 7.41669 17.1713 6.37025 16.7756C5.32382 16.3798 4.37301 15.7997 3.5721 15.0685C2.7712 14.3372 2.13588 13.4691 1.70244 12.5136C1.26899 11.5582 1.0459 10.5342 1.0459 9.5C1.0459 7.41142 1.9546 5.40838 3.5721 3.93153C5.1896 2.45469 7.38341 1.625 9.6709 1.625C11.9584 1.625 14.1522 2.45469 15.7697 3.93153C17.3872 5.40838 18.2959 7.41142 18.2959 9.5Z" stroke="#DB1505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className="header__clknum" >10 am - 5 pm </p>
        <svg className="parallelogram2" width="532" height="67" viewBox="0 0 532 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <path d="M27.3137 0H532V59H6L27.3137 0Z" />
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="-4" width="538" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
        <Link to="/login">
        <p className="header__nam1">Log In</p>
        </Link>
        <p className="header__nam2" >|</p>
        <p className="header__nam3">New User? Sign Up</p>
        <Link to="/conwu">
        <p className="header__nam4">CONTACT US</p>
        </Link>
        </div>
    )
}

export default Header

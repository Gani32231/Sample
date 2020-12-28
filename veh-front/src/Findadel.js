import React from 'react'
import { Link } from 'react-router-dom'
import './Findadel.css'
function Findadel() {
    return (
        <div className="findadel" >
               
            
            <svg className="fd__box1" width="1252" height="105" viewBox="0 0 1252 105" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg className="fd__rect2" width="51" height="1" viewBox="0 0 51 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="50" height="1" fill="#DB1505"/>
            </svg>
            <Link to="/">
            <p className="fd__nam9" >HOME</p>
            </Link>
            <Link tp="/findadel">
            <p className="fd__nam10" >FIND A DEALER</p>
            </Link>
            <Link to="/eshop">
            <p className="fd__nam11" >E-SHOP</p>
            </Link>
            <Link to="/enquirew">
            <p className="fd__nam12" >ENQUIRE AND TEST RIDE</p>
            </Link>
            <Link to="/partwu">
            <p className="fd__nam13" >PARTNER WITH US</p>
            </Link>
            <Link to="/review">
            <p className="fd__nam14" >REVIEWS</p>
            </Link>
            <p className="fd__nam" >Find A Dealer</p>
            <p className="fd__nam1" >Name of Customer</p>
            <input type="text" className="fd__inp"/>
            <p className="fd__nam2" >Email Address </p>
            <input type="text" className="fd__inp1"/>
            <p className="fd__nam3" >Contact Number</p>
            <input type="text" className="fd__inp2"/>
            <p className="fd__nam4" >Street Address</p>
            <input type="text" className="fd__inp3"/>
            <p className="fd__nam5" >Locality</p>
            <input type="text" className="fd__inp4"/>
            <p className="fd__nam6" >City</p>
            <input type="text" className="fd__inp5"/>
            <p className="fd__nam7" >State</p>
            <input type="text" className="fd__inp6"/>
            <p className="fd__nam8" >Pincode</p>
            <input type="text" className="fd__inp7"/>
            <a href="/">
            <button className="fd__b1">
                Submit
            </button>
            </a>
        </div>
    )
}

export default Findadel

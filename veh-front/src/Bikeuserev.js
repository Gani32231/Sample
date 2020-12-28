import React from 'react'
import './Bikeuserev.css'
import {BrowserRouter as Router, Link} from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
function Bikeuserev() {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      }
    return (
        <Router>
        <div>
              <div className="bur__box">
                
                </div>
                <div className="bur__logo">
                        
                    </div>
                    <Link to="/home">
                <p className="bur__nam1">HOME</p>
                </Link>
                <svg className="bur__rect1" width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="1" fill="#DB1505"/>
                </svg>
                <Link to="/findadel">
                <p className="bur__nam2">FIND A DEALER</p>
                </Link>
                <Link to="/eshop">
                <p className="bur__nam3">E-SHOP</p>
                </Link>
                <Link to="/enquirew">
                <p className="bur__nam4">ENQUIRE AND TEST RIDE</p>
                </Link>
                <Link to="/partwu">
                <p className="bur__nam5">PARTNER WITH US</p>
                </Link>
                <a href="/review">
                <p className="bur__nam6" >REVIEWS </p>
                </a> 
                
                <div className="slidbure-container">
            <Slide {...properties}>
        <div className="each-slide">
          <div className="bure__img" >
            
          </div>
        </div>
        <div className="each-slide">
          <div className="bure__img1" >
            
          </div>
          </div>
          </Slide>
                
            </div>
            <svg className="Bur__sym" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0.975098L13.8179 12.8798L0 14.7778L10 24.0485L7.63587 37.1281L20 30.9563L32.3641 37.1281L30 24.0485L40 14.7907L26.1821 12.8798L20 0.975098Z" fill="#FDE50E"/>
            </svg>
            <p  className="Bur__nam" > 4.5</p>
            <p  className="Bur__nam1" >Specification</p>
            <p  className="Bur__nam2" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p  className="Bur__nam3" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p  className="Bur__nam4" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p  className="Bur__nam5" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <svg className="Bur__sym1" width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 4.00008V0.666748H0V4.00008H5.83333C8.00333 4.00008 9.835 5.39675 10.525 7.33341H0V10.6667H10.525C10.1829 11.6388 9.5482 12.4811 8.70814 13.0779C7.86808 13.6748 6.86383 13.9969 5.83333 14.0001H0V18.0234L9.31 27.3334H14.0233L4.02333 17.3334H5.83333C7.75327 17.3308 9.61359 16.6663 11.1007 15.4519C12.5877 14.2375 13.6105 12.5475 13.9967 10.6667H18.3333V7.33341H13.9967C13.7412 6.12042 13.2147 4.98089 12.4567 4.00008H18.3333Z" fill="black"/>
            </svg>

            <p  className="Bur__nam6" > 40,000</p>
            <p  className="Bur__nam7" > Key features</p>
            <p  className="Bur__nam8" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p  className="Bur__nam9" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p  className="Bur__nam10" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p  className="Bur__nam11" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="Bur__nam12" >CUSTOMER REVIEW</p>
            
            <svg className="Bur__rect1" width="303" height="442" viewBox="0 0 303 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="4" width="295" height="434" fill="#EBEBEB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="303" height="442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className="Bur__circ1" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="75" r="75" fill="#C4C4C4"/>
            </svg>
            <p className="Bur__nam13" >Name</p>
            <p className="Bur__nam25" >4.5</p>
            <p className="Bur__nam14" >Place</p>
            <p className="Bur__nam15" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <svg className="Bur__rect2" width="303" height="442" viewBox="0 0 303 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="4" width="295" height="434" fill="#EBEBEB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="303" height="442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className="Bur__circ2" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="75" r="75" fill="#C4C4C4"/>
            </svg>
            <p className="Bur__nam16" >Name</p>
            <p className="Bur__nam26" >4.5</p>
            <p className="Bur__nam17" >Place</p>
            <p className="Bur__nam18" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <svg className="Bur__rect3" width="303" height="442" viewBox="0 0 303 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="4" width="295" height="434" fill="#EBEBEB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="303" height="442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className="Bur__circ3" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="75" r="75" fill="#C4C4C4"/>
            </svg>
            <p className="Bur__nam19" >Name</p>
            <p className="Bur__nam27" >4.5</p>
            <p className="Bur__nam20" >Place</p>
            <p className="Bur__nam21" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <svg className="Bur__rect4" width="303" height="442" viewBox="0 0 303 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="4" width="295" height="434" fill="#EBEBEB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="303" height="442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className="Bur__circ4" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="75" r="75" fill="#C4C4C4"/>
            </svg>
            <p className="Bur__nam22" >Name</p>
            <p className="Bur__nam28" >4.5</p>
            <p className="Bur__nam23" >Place</p>
            <p className="Bur__nam24" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>


        </div>
        </Router>
    )
}

export default Bikeuserev

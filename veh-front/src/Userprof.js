import React from 'react'
import './Userprof.css'
function Userprof() {
    return (
        <div>
        <div className="up__main" >
            <div className="up__p1">
                
            <p className="up__nam" >USER PROFILE</p>  
           
            <div className="up__img">

            </div>
     


            <p className="up__nam1" >Daniel Joseph</p>    

            <svg className="up__loc" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path d="M11.5 0C7.27279 0 3.83333 3.589 3.83333 7.995C3.80554 14.44 11.2087 19.784 11.5 20C11.5 20 19.1945 14.44 19.1667 8C19.1667 3.589 15.7272 0 11.5 0ZM11.5 12C9.38208 12 7.66666 10.21 7.66666 8C7.66666 5.79 9.38208 4 11.5 4C13.6179 4 15.3333 5.79 15.3333 8C15.3333 10.21 13.6179 12 11.5 12Z" fill="#463E3E"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="-0.166748" y="0" width="23.3335" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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

            <p className="up__nam2">New York, NY.</p>
            <svg className="up__log" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z" fill="#393D45"/>
            </svg>
            <p className="up__nam3" >About</p>
            <svg className="up__lin" width="109" height="4" viewBox="0 0 109 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="2" x2="107" y2="2" stroke="#C0042D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg className="up__lin1" width="788" height="9" viewBox="0 0 788 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <line x1="4.82922" y1="0.5" x2="783.829" y2="0.5" stroke="#716A6A"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.829224" y="0" width="787" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <p className="up__nam4">Contact Information</p>
            <p className="up__nam5">Phone    :</p>
            <p className="up__phn" >+9198437264633</p>
            <p className="up__nam6">Address :</p>
            <p className="up__nam7" >253 E 68th Street
                New York, NY 10651-78 15E-187-66</p>
                <p className="up__nam8" >Email Id  :</p>
                <p className="up__nam9">danieljos@gmail.com </p>    
                <p className="up__nam10" >Basic Information</p>
                <p className="up__nam11" >Birthday     :</p>
                <p className="up__nam12">3th June,1986</p>
                <p className="up__nam13">Age        :</p>
                <p className="up__nam14" >34</p>
                <p className="up__nam15" >Gender   :</p>
                <p className="up__nam16"  >Male</p>
                <button className="up__b1">
                    Edit
                </button>
            </div>
            
        </div>
        
        </div>
    )
}
 
export default Userprof

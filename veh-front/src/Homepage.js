import React from 'react'
import './Homepage.css'
import {Link } from "react-router-dom"
function Homepage() {
    const handleClick=(e)=>{
        e.preventDefault();
        if(e.target.style.color == 'white')
        {
            e.target.style.color= 'red';
        }
        else
        {
            e.target.style.color = 'white';
        }
    
       
        
    }
    return (
        <div className="homepage" >
            <div className="hp__bgimg">

            </div>
            <div className="hp__box">
                
            </div>
            <div className="mr__logo">
                    
                </div>
                <Link to="/">
            <p className="hp__nam1">HOME</p>
            </Link>
            <svg className="hp__rect1" width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="1" fill="#DB1505"/>
            </svg>
            <Link to="/findadel">
            <p className="hp__nam2">FIND A DEALER</p>
            </Link>
            <Link to="/eshop" >
            <p className="hp__nam3">E-SHOP</p>
            </Link>
            <Link to="/enquirew">
            <p className="hp__nam4">ENQUIRE AND TEST RIDE</p>
            </Link>
            <Link to="/partwu">
            <p className="hp__nam5">PARTNER WITH US</p>
            </Link>
            <Link to="/review">
            <p className="hp__nam6" >REVIEWS </p>
            </Link>
            <p className="hp__nam7">Let our bike be your 
Travel Partner</p>
<button className="hp__b1">See More</button>
        <div className="hp__box2">

        </div>
        <div className="hp__box2__img1">

        </div>
        <p className="hp__box2__nam1">16798+</p>
        <p className="hp__box2__nam2">Trusted Customers</p>
        <svg className="hp__box2__ln1" width="1" height="141" viewBox="0 0 1 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.499994" y2="140.5" stroke="#B6B6B6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="hp__box2__img2">

        </div>
        <p className="hp__box2__nam3">11+ Years</p>
        <p className="hp__box2__nam4">Well Managed and experienced</p>
        <svg className="hp__box2__ln2" width="1" height="141" viewBox="0 0 1 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.499994" y2="140.5" stroke="#B6B6B6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="hp__box2__img3">

        </div>
        <p className="hp__box2__nam5">No #2</p>
        <p className="hp__box2__nam6">Two Wheeler Dealer across India</p>
        <svg className="hp__box2__ln3" width="1" height="141" viewBox="0 0 1 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.499994" y2="140.5" stroke="#B6B6B6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="hp__box2__img4">

        </div>
        <p className="hp__box2__nam7">84+</p>
        <p className="hp__box2__nam8">Hours Weekly support</p>
        <svg className="hp__log4" width="181" height="178" viewBox="0 0 181 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172 89C172 133.042 135.654 169 90.5 169C45.3464 169 9 133.042 9 89C9 44.9584 45.3464 9 90.5 9C135.654 9 172 44.9584 172 89Z" fill="#F7FCFE" stroke="#FAE5E3" stroke-width="18"/>
            </svg>

            <svg className="hp__log3" width="383" height="367" viewBox="0 0 383 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M371 183.5C371 277.739 291.123 355 191.5 355C91.8771 355 12 277.739 12 183.5C12 89.2606 91.8771 12 191.5 12C291.123 12 371 89.2606 371 183.5Z" fill="#F7FCFE" stroke="#FAE5E3" stroke-width="24"/>
            </svg>

            <div className="hp__img1">
                
            </div>
            <p className="hp__nam10" >Why</p>
            <p className="hp__nam101" >Triggers</p>
            <p className="hp__nam11" >Hey Biker we understand your hussel in searching for the best bike that matches your personality, We provide you a wide range of Bikes with detiled specifications and Features. Your Biking experience starts with us </p>
            <button className="hp__b2">
            Know More
            </button>
            <p className="hp__nam12">Our</p>
            <p className="hp__nam13">Products</p>
            <div className="hp__p2">
                
            </div>
            <p className="hp__nam14" >All Products</p>
            <div className="hp__p3">
                
            </div>
            <div className="hp__cycsid">

            </div>
            <p className="hp__nam15" >Motorcycle</p>
            <div className="hp__p4">
                
            </div>
            <div className="hp__p4__img">

            </div>
            <p className="hp__nam16" >Scooter</p>
            <div className="hp__p5">
                
            </div>
            <p className="hp__nam17" >Big Bikes</p>
            <div className="hp__cycsid1">

            </div>
            <div className="hp__p6">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart0" type="checkbox"></input>
            <label for="toggle-heart0">❤</label>
            
        </div>
            
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p6__img">

            </div>
            <p className="hp__nam18" >Bajaj CT 110</p>
            <p className="hp__nam19" >50,000</p>



            <div className="hp__p13">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart1" type="checkbox"></input>
            <label for="toggle-heart1">❤</label>
            
        </div>
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p13__img">

            </div>
            <p className="hp__nam1813" >Bajaj CT 110</p>
            <p className="hp__nam1913" >50,000</p>
            <div className="hp__p14">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart2" type="checkbox"></input>
            <label for="toggle-heart2">❤</label>
            
        </div>
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p14__img">

            </div>
            <p className="hp__nam1814" >Suzuki Access 125</p>
            <p className="hp__nam1914" >50,000</p>


            <div className="hp__p15">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart3" type="checkbox"></input>
            <label for="toggle-heart3">❤</label>
            
        </div>
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p15__img">

            </div>
            <p className="hp__nam1815" >Suzuki Access 125</p>
            <p className="hp__nam1915" >50,000</p>
            <div className="hp__p16">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart4" type="checkbox"></input>
            <label for="toggle-heart4">❤</label>
            
        </div>
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p16__img">

            </div>
            <p className="hp__nam1816" >Suzuki Access 125</p>
            <p className="hp__nam1916" >50,000</p>
            <div className="hp__p17">
            <svg className="hp__log5"  width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8515 4.19041H15.1216C14.7381 3.55163 14.2349 2.97471 13.6336 2.484H18.8515C19.1077 2.484 19.3535 2.39411 19.5347 2.2341C19.716 2.07409 19.8178 1.85708 19.8178 1.63079C19.8178 1.40451 19.716 1.18749 19.5347 1.02749C19.3535 0.867479 19.1077 0.777588 18.8515 0.777588H1.45847C1.20219 0.777588 0.956416 0.867479 0.775204 1.02749C0.593992 1.18749 0.492188 1.40451 0.492188 1.63079C0.492188 1.85708 0.593992 2.07409 0.775204 2.2341C0.956416 2.39411 1.20219 2.484 1.45847 2.484H8.75387C9.53136 2.4846 10.299 2.63805 11.0009 2.9332C11.7029 3.22836 12.3216 3.65782 12.8122 4.19041H1.45847C1.20219 4.19041 0.956416 4.2803 0.775204 4.44031C0.593992 4.60031 0.492188 4.81733 0.492188 5.04361C0.492188 5.2699 0.593992 5.48691 0.775204 5.64692C0.956416 5.80693 1.20219 5.89682 1.45847 5.89682H13.8172C13.9517 6.31595 14.02 6.74951 14.0201 7.18516C14.0227 8.42225 13.4699 9.60982 12.4828 10.4878C11.4958 11.3657 10.1549 11.8625 8.75387 11.8693H2.56002C2.37433 11.8695 2.19263 11.9169 2.03668 12.0059C1.88073 12.0949 1.75713 12.2217 1.68067 12.3712C1.60421 12.5206 1.57814 12.6863 1.60556 12.8485C1.63299 13.0106 1.71275 13.1624 1.83531 13.2856L13.1118 24.6673C13.1936 24.757 13.2951 24.8312 13.4103 24.8853C13.5254 24.9394 13.6518 24.9724 13.7818 24.9822C13.9117 24.9921 14.0426 24.9786 14.1665 24.9425C14.2904 24.9065 14.4047 24.8487 14.5027 24.7726C14.6006 24.6966 14.6801 24.6037 14.7363 24.4998C14.7925 24.3959 14.8243 24.283 14.8297 24.1679C14.8352 24.0528 14.8142 23.938 14.7681 23.8302C14.7219 23.7225 14.6516 23.6242 14.5612 23.5411L4.6955 13.5757H8.76353C9.83365 13.568 10.8886 13.3515 11.8528 12.9416C12.8171 12.5317 13.6667 11.9386 14.3408 11.2047C15.015 10.4708 15.4969 9.61439 15.7522 8.69675C16.0075 7.7791 16.0297 6.82295 15.8174 5.89682H18.8515C19.1077 5.89682 19.3535 5.80693 19.5347 5.64692C19.716 5.48691 19.8178 5.2699 19.8178 5.04361C19.8178 4.81733 19.716 4.60031 19.5347 4.44031C19.3535 4.2803 19.1077 4.19041 18.8515 4.19041Z" fill="#C81E2D"/>
            </svg>
            <svg className="hp__log6" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <div className="hp__log7">
            <input id="toggle-heart5" type="checkbox"></input>
            <label for="toggle-heart5">❤</label>
            
        </div>
            <svg className="hp__log8" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log9" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9395 6.87163C18.8097 6.87163 19.6443 6.5421 20.2596 5.95554C20.875 5.36898 21.2207 4.57344 21.2207 3.74392C21.2207 2.9144 20.875 2.11885 20.2596 1.5323C19.6443 0.945736 18.8097 0.616211 17.9395 0.616211C17.0692 0.616211 16.2346 0.945736 15.6193 1.5323C15.0039 2.11885 14.6582 2.9144 14.6582 3.74392C14.6582 4.57344 15.0039 5.36898 15.6193 5.95554C16.2346 6.5421 17.0692 6.87163 17.9395 6.87163ZM17.9395 20.6335C18.8097 20.6335 19.6443 20.304 20.2596 19.7175C20.875 19.1309 21.2207 18.3354 21.2207 17.5058C21.2207 16.6763 20.875 15.8808 20.2596 15.2942C19.6443 14.7077 18.8097 14.3781 17.9395 14.3781C17.0692 14.3781 16.2346 14.7077 15.6193 15.2942C15.0039 15.8808 14.6582 16.6763 14.6582 17.5058C14.6582 18.3354 15.0039 19.1309 15.6193 19.7175C16.2346 20.304 17.0692 20.6335 17.9395 20.6335ZM3.50195 13.7526C4.37219 13.7526 5.20679 13.4231 5.82215 12.8365C6.4375 12.2499 6.7832 11.4544 6.7832 10.6249C6.7832 9.79536 6.4375 8.99981 5.82215 8.41325C5.20679 7.82669 4.37219 7.49717 3.50195 7.49717C2.63171 7.49717 1.79711 7.82669 1.18176 8.41325C0.566405 8.99981 0.220703 9.79536 0.220703 10.6249C0.220703 11.4544 0.566405 12.2499 1.18176 12.8365C1.79711 13.4231 2.63171 13.7526 3.50195 13.7526Z" fill="white"/>
            </svg>
            <svg className="hp__log10" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0017 1.36604L1.12511 6.07391L0.537109 4.95418L10.4137 0.247559L11.0017 1.36604ZM10.4137 13.0012L0.537109 8.2946L1.12642 7.17487L11.003 11.8827L10.415 13.0012H10.4137Z" fill="white"/>
            </svg>
            <svg className="hp__log11" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="28.6719" cy="25.1514" r="24.5" fill="#DD2938"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.171875" y="0.651367" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            <svg className="hp__log12" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02785 9.62415C9.02785 10.4401 9.35264 11.2227 9.93077 11.7997C10.5089 12.3766 11.293 12.7008 12.1106 12.7008C12.9282 12.7008 13.7123 12.3766 14.2904 11.7997C14.8686 11.2227 15.1933 10.4401 15.1933 9.62415C15.1933 8.80817 14.8686 8.02562 14.2904 7.44864C13.7123 6.87166 12.9282 6.54751 12.1106 6.54751C11.293 6.54751 10.5089 6.87166 9.93077 7.44864C9.35264 8.02562 9.02785 8.80817 9.02785 9.62415ZM24.0618 8.91542C21.4524 3.42967 17.5082 0.668945 12.2207 0.668945C6.93048 0.668945 2.98897 3.42967 0.379644 8.91817C0.274983 9.13935 0.220703 9.38091 0.220703 9.62552C0.220703 9.87012 0.274983 10.1117 0.379644 10.3329C2.98897 15.8186 6.93323 18.5793 12.2207 18.5793C17.5109 18.5793 21.4524 15.8186 24.0618 10.3301C24.2737 9.88511 24.2737 9.36868 24.0618 8.91542ZM12.1106 14.4589C9.43521 14.4589 7.26628 12.2942 7.26628 9.62415C7.26628 6.95407 9.43521 4.78944 12.1106 4.78944C14.786 4.78944 16.9549 6.95407 16.9549 9.62415C16.9549 12.2942 14.786 14.4589 12.1106 14.4589Z" fill="white"/>
            </svg>
            </div>
            <div className="hp__p17__img">

            </div>
            <p className="hp__nam1817" >TVS Zest</p>
            <p className="hp__nam1917" >50,000</p>
            <button className="hp__b3">
            View All
            </button>
            <p className="hp__nam20" >Why</p>
            <p className="hp__nam21" >Choose Us ?</p>
            <p className="hp__nam22" >Nothing can be better that getting delivered to home and 
                thats what we do for your biking experience! Exciting EMI facilities and Discounts 365 days</p>
            <button className="hp__b4" >
                Contact Us
            </button>
            <div className="hp__p70"></div>
            <div className="hp__p70__img">

            </div>
            <p className="hp__nam23" >Quality Oriented</p>
            <p className="hp__nam24">Accurately and carefully follows established procedures for
                    completing work tasks. </p>
            <div className="hp__p7">
            <svg className="hp__p971" width="57" height="53" viewBox="0 0 57 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.31712 52.6836H32.9916C34.5918 52.6844 36.1731 52.3386 37.6268 51.6699C39.0805 51.0012 40.3721 50.0255 41.4127 48.81L55.5596 32.3061C55.8559 31.9612 56.0627 31.5486 56.1619 31.1048C56.2612 30.6611 56.2497 30.1997 56.1287 29.7614C56.0076 29.3231 55.7806 28.9213 55.4676 28.5914C55.1546 28.2615 54.7654 28.0136 54.334 27.8696L48.8771 26.0507C47.5582 25.622 46.154 25.525 44.7887 25.7682C43.4234 26.0115 42.1391 26.5875 41.0495 27.4454L32.218 34.5078L30.5072 31.0833C29.5907 29.2374 28.1755 27.685 26.4221 26.602C24.6687 25.5189 22.647 24.9485 20.5861 24.9554H6.31712C3.2587 24.9554 0.771484 27.4426 0.771484 30.501V47.138C0.771484 50.1964 3.2587 52.6836 6.31712 52.6836ZM6.31712 30.501H20.5861C22.7017 30.501 24.6011 31.6739 25.5466 33.565L26.7861 36.0467H14.6356V41.5923H31.3113C31.7379 41.5867 32.1574 41.4823 32.5369 41.2873L32.5452 41.2845L32.5563 41.279H32.5646L32.5702 41.2762H32.5813L32.584 41.2734C32.609 41.2818 32.5924 41.2707 32.5924 41.2707C32.6201 41.2707 32.5979 41.2679 32.5979 41.2679H32.6007L32.6062 41.2651L32.6145 41.2624L32.6201 41.2596L32.6256 41.2568L32.634 41.254L32.6395 41.2513C32.6478 41.2513 32.6423 41.2485 32.645 41.2485L32.6534 41.2429L32.6589 41.2402L32.6645 41.2374L32.6728 41.2346L32.6783 41.2318H32.6811L32.6866 41.2291L32.695 41.2263L32.7005 41.2235C32.7255 41.2208 32.7088 41.2208 32.7088 41.2208L32.7144 41.218C32.8212 41.1535 32.9232 41.0812 33.0194 41.0017L44.5155 31.8043C45.242 31.2275 46.2429 31.0473 47.1219 31.3412L48.6664 31.8569L37.2063 45.2303C36.6792 45.8288 36.0308 46.3085 35.3041 46.6374C34.5775 46.9663 33.7892 47.1369 32.9916 47.138H6.31712V30.501ZM39.591 2.60803e-05H39.5438C39.0918 0.00557172 36.7544 0.108166 34.0453 1.95486C31.4084 0.158077 29.1263 0.01389 28.5884 0.0027987L28.5052 2.60803e-05H28.4941C26.2731 2.60803e-05 24.1824 0.867919 22.6185 2.43456C21.0491 4.00675 20.1812 6.09468 20.1812 8.31848C20.1812 10.5423 21.0491 12.6302 22.5686 14.1525L32.035 24.0958C32.2955 24.3662 32.6078 24.5812 32.9534 24.728C33.2989 24.8748 33.6705 24.9503 34.0459 24.95C34.4213 24.9498 34.7928 24.8738 35.1381 24.7265C35.4835 24.5792 35.7955 24.3638 36.0556 24.0931L45.4721 14.1996C47.0443 12.6302 47.9094 10.5423 47.9094 8.31848C47.9094 6.09468 47.0415 4.00675 45.4749 2.43733C44.705 1.66246 43.789 1.04804 42.7799 0.629665C41.7709 0.211292 40.6888 -0.00271919 39.5965 2.60803e-05H39.591ZM42.3638 8.31848C42.3638 9.05883 42.0754 9.7548 41.5014 10.3288L34.0453 18.162L26.5393 10.2789C26.0152 9.7548 25.7269 9.05883 25.7269 8.31848C25.7269 7.57814 26.0152 6.88216 26.5421 6.35533C27.0435 5.84529 27.7263 5.55423 28.4414 5.54566C28.5108 5.54844 29.8334 5.6344 31.4 6.89048C31.6246 7.07072 31.852 7.2759 32.0849 7.50605L34.0453 9.46643L36.0057 7.50605C36.2386 7.2759 36.466 7.07072 36.6906 6.89048C38.1574 5.71203 39.3969 5.56507 39.6076 5.54844C39.969 5.54837 40.3268 5.61988 40.6604 5.75885C40.9941 5.89782 41.2969 6.10149 41.5513 6.3581C42.0754 6.88216 42.3638 7.57814 42.3638 8.31848Z" fill="#F7FCFE"/>
            </svg>

            </div>
            <p className="hp__nam25" >Incredible Services</p>
            <p className="hp__nam26" >end-to-end service is monitored and taken care by us. We assure the best riding experience</p>
            <div className="hp__p8">

            </div>
            <div className="hp__p8__img">

            </div>
            <p className="hp__nam27" >Exciting offers</p>
            <p className="hp__nam28">Special and seasonal offers to students and working employees.
                    Discounts on every product</p>
                    <div className="hp__p10">

                    </div>
            <div className="hp__p10__img">

            </div>
            <p className="hp__nam29">Better Imapact</p>
            <p className="hp__nam30" >Get your bike test drive at the comfort of your home. No hussel buzzel.</p>
            <p className="hp__nam31" >Get</p>
            <p className="hp__nam32" >Trusted Dealers From</p>
            <div className="hp__nam33__img">

            </div>
            <p className="hp__nam33">Ahmedabad</p>
            <div className="hp__nam34__img">
                
            </div>
            <p className="hp__nam34">Bangalore</p>
            <div className="hp__nam35__img">
                
            </div>
            <p className="hp__nam35">Chennai</p>
            <div className="hp__nam36__img">
                
            </div>
            <p className="hp__nam36" >Hyderabad</p>
            <div className="hp__nam37__img">
                
            </div>
            <p className="hp__nam37" >Kolkata</p>
            <div className="hp__nam38__img">
                
            </div>
            <p className="hp__nam38">Lucknow</p>
            <div className="hp__nam39__img">
                
            </div>
            <p className="hp__nam39">Mumbai</p>
        </div>
    )
}

export default Homepage

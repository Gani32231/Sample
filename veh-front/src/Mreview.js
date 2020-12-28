import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Mreview.css'
function Mreview() {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      }
    return (
        <div>
            <div className="mr__box">
                
                </div>
                <div className="mr__logo">
                        
                </div>
                <a href="/">
                        
                <p className="mr__nam1">HOME</p>
                </a>
                <svg className="bur__rect1" width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="1" fill="#DB1505"/>
                </svg>
                <a href="/findadel">
                <p className="mr__nam2">FIND A DEALER</p>
                </a>
                <a href="/eshop">
                <p className="mr__nam3">E-SHOP</p>
                </a>
                <a href="/enquirew">
                <p className="mr__nam4">ENQUIRE AND TEST RIDE</p>
                </a>
                <a href="/partwu">
                <p className="mr__nam5">PARTNER WITH US</p>
                </a>
                <a href="/review">
                <p className="mr__nam6" >REVIEWS </p>
                </a>
                <div className="Mr__im1"></div>
                <div className="slidemre-container">
            <Slide {...properties}>
        <div className="each-slide">
          <div className="mre__img" >
            
          </div>
        </div>
        <div className="each-slide">
          <div className="mre__img1" >
            
          </div>
          </div>
          </Slide>
                
            </div>

            <p className="Mr__nam" >Bike Reviews</p>
            <button className="Mr__b1" >User review</button>
            <button className="Mr__b2" >Expert review</button>
            <button className="Mr__b3">
            <svg className="mr__mes" width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36875 34.1688C8.69312 34.4944 8.94167 34.8875 9.09669 35.3202C9.25172 35.7528 9.3094 36.2144 9.26562 36.6719C9.046 38.7893 8.62961 40.8817 8.02187 42.9219C12.3812 41.9125 15.0438 40.7438 16.2531 40.1312C16.9391 39.7838 17.729 39.7015 18.4719 39.9C20.6014 40.4677 22.7961 40.7535 25 40.75C37.4875 40.75 46.875 31.9781 46.875 22C46.875 12.025 37.4875 3.25 25 3.25C12.5125 3.25 3.125 12.025 3.125 22C3.125 26.5875 5.05312 30.8438 8.36875 34.1688ZM6.82812 46.3719C6.08771 46.5187 5.3449 46.653 4.6 46.775C3.975 46.875 3.5 46.225 3.74688 45.6437C4.02435 44.9894 4.27867 44.3254 4.50938 43.6531L4.51875 43.6219C5.29375 41.3719 5.925 38.7844 6.15625 36.375C2.32188 32.5312 0 27.5 0 22C0 9.91875 11.1937 0.125 25 0.125C38.8063 0.125 50 9.91875 50 22C50 34.0812 38.8063 43.875 25 43.875C22.5239 43.8783 20.0581 43.5568 17.6656 42.9188C16.0406 43.7406 12.5437 45.2375 6.82812 46.3719Z" fill="black"/>
</svg>


                <svg className="Mr__b32" width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.625 4C6.625 4.8288 6.29576 5.62366 5.70971 6.20971C5.12366 6.79576 4.3288 7.125 3.5 7.125C2.6712 7.125 1.87634 6.79576 1.29029 6.20971C0.70424 5.62366 0.375 4.8288 0.375 4C0.375 3.1712 0.70424 2.37634 1.29029 1.79029C1.87634 1.20424 2.6712 0.875 3.5 0.875C4.3288 0.875 5.12366 1.20424 5.70971 1.79029C6.29576 2.37634 6.625 3.1712 6.625 4ZM19.125 4C19.125 4.8288 18.7958 5.62366 18.2097 6.20971C17.6237 6.79576 16.8288 7.125 16 7.125C15.1712 7.125 14.3763 6.79576 13.7903 6.20971C13.2042 5.62366 12.875 4.8288 12.875 4C12.875 3.1712 13.2042 2.37634 13.7903 1.79029C14.3763 1.20424 15.1712 0.875 16 0.875C16.8288 0.875 17.6237 1.20424 18.2097 1.79029C18.7958 2.37634 19.125 3.1712 19.125 4ZM31.625 4C31.625 4.8288 31.2958 5.62366 30.7097 6.20971C30.1237 6.79576 29.3288 7.125 28.5 7.125C27.6712 7.125 26.8763 6.79576 26.2903 6.20971C25.7042 5.62366 25.375 4.8288 25.375 4C25.375 3.1712 25.7042 2.37634 26.2903 1.79029C26.8763 1.20424 27.6712 0.875 28.5 0.875C29.3288 0.875 30.1237 1.20424 30.7097 1.79029C31.2958 2.37634 31.625 3.1712 31.625 4Z" fill="black"/>
                </svg>
                <p className="Mr__nam1" >Get genuine reviews from our clients</p>
            </button>

            <button className="Mr__b4">
            <svg className="Mr__b41" width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.6665 12.6667H25.9748L28.3144 5.65216C28.7353 4.3855 28.5228 2.98133 27.7415 1.898C26.9603 0.814665 25.6936 0.166748 24.3582 0.166748H20.9998C20.3811 0.166748 19.7957 0.441748 19.3978 0.916748L9.60609 12.6667H4.33317C2.03525 12.6667 0.166504 14.5355 0.166504 16.8334V35.5834C0.166504 37.8813 2.03525 39.7501 4.33317 39.7501H32.0561C32.9038 39.7473 33.7306 39.4872 34.4274 39.0044C35.1241 38.5216 35.6579 37.8386 35.9582 37.0459L41.7019 21.7313C41.7891 21.4974 41.8336 21.2497 41.8332 21.0001V16.8334C41.8332 14.5355 39.9644 12.6667 37.6665 12.6667ZM4.33317 16.8334H8.49984V35.5834H4.33317V16.8334ZM37.6665 20.623L32.0561 35.5834H12.6665V15.5042L21.9748 4.33341H24.3623L21.1082 14.0897C21.0025 14.4028 20.9731 14.7366 21.0222 15.0635C21.0714 15.3903 21.1977 15.7007 21.3908 15.9689C21.5839 16.2372 21.8381 16.4555 22.1324 16.6058C22.4268 16.7562 22.7527 16.8342 23.0832 16.8334H37.6665V20.623Z" fill="black"/>
            </svg>  
            <p className="Mr__b42" >Trusted and verified dealers across India</p>

            </button>
            <button className="Mr__b5">
            <svg className="Mr__b51" width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.2915 8.83333L23.9373 0.5H14.7498V4.66667H22.229L26.3957 8.83333H9.5415C4.33317 8.83333 0.166504 13 0.166504 18.2083C0.166504 23.4167 4.33317 27.5833 9.5415 27.5833C14.1665 27.5833 17.9998 24.2083 18.7498 19.8125L23.1665 17.1667C23.0832 17.5208 23.0832 17.8542 23.0832 18.2083C23.0832 23.4167 27.2498 27.5833 32.4582 27.5833C37.6665 27.5833 41.8332 23.4167 41.8332 18.2083C41.8332 13 37.6665 8.83333 32.4582 8.83333H32.2915ZM14.4165 19.7917C13.7082 21.8958 11.7915 23.4167 9.479 23.4167C8.09767 23.4167 6.77291 22.8679 5.79616 21.8912C4.8194 20.9144 4.27067 19.5897 4.27067 18.2083C4.27067 16.827 4.8194 15.5022 5.79616 14.5255C6.77291 13.5487 8.09767 13 9.479 13C11.8123 13 13.7082 14.5417 14.4165 16.6458H8.49984V19.7708L14.4165 19.7917ZM32.3957 23.4167C31.0143 23.4167 29.6896 22.8679 28.7128 21.8912C27.7361 20.9144 27.1873 19.5897 27.1873 18.2083C27.1873 16.827 27.7361 15.5022 28.7128 14.5255C29.6896 13.5487 31.0143 13 32.3957 13C33.777 13 35.1018 13.5487 36.0785 14.5255C37.0553 15.5022 37.604 16.827 37.604 18.2083C37.604 19.5897 37.0553 20.9144 36.0785 21.8912C35.1018 22.8679 33.777 23.4167 32.3957 23.4167Z" fill="black"/>
            </svg>
             <p className="Mr__b52">Get updates about our latest collection of fresh launches</p>

            </button>
            <div className="Mr__rectb" ></div>
            <p className="Mr__nam2">REVIEWS</p>
            
            <div className="Mr__rect1">
                <span className="Mr__recta11">
                
                </span>
                <p className="Mr__rect12" >Lorem Ipsum</p>
                <svg className="Mr__rect13" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect14" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect15" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect1b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect2">
                <span className="Mr__rect21">
                
                </span>
                <p className="Mr__rect22" >Lorem Ipsum</p>
                <svg className="Mr__rect23" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect24" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect25" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect2b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect3">
                <span className="Mr__rect31">
                
                </span>
                <p className="Mr__rect32" >Lorem Ipsum</p>
                <svg className="Mr__rect33" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect34" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect35" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect3b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect4">
                <span className="Mr__rect41">
                
                </span>
                <p className="Mr__rect42" >Lorem Ipsum</p>
                <svg className="Mr__rect43" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect44" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect45" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect4b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect5">
                <span className="Mr__rect51">
                
                </span>
                <p className="Mr__rect52" >Lorem Ipsum</p>
                <svg className="Mr__rect53" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect154" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect55" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect5b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect6">
                <span className="Mr__rect61">
                
                </span>
                <p className="Mr__rect62" >Lorem Ipsum</p>
                <svg className="Mr__rect63" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect64" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect65" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect6b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect7">
                <span className="Mr__rect71">
                
                </span>
                <p className="Mr__rect72" >Lorem Ipsum</p>
                <svg className="Mr__rect73" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect74" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect75" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect7b">
                View review 
                </button>
                </Link>
            </div>
            <div className="Mr__rect8">
                <span className="Mr__rect81">
                
                </span>
                <p className="Mr__rect82" >Lorem Ipsum</p>
                <svg className="Mr__rect83" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect84" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <svg className="Mr__rect85" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.22857L11.875 7.21429L12.1875 7.92857L12.8668 8.03571L17.0516 8.67143L14.0761 11.7429L13.5666 12.2643L13.6889 12.9786L14.4022 17.3571L10.659 15.2929L10 15L9.36821 15.35L5.625 17.3857L6.30435 13.0071L6.42663 12.2929L5.92391 11.7429L2.9212 8.63571L7.10598 8L7.78533 7.89286L8.09783 7.17857L10 3.22857ZM10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#FBBC05"/>
                </svg>
                <Link to="/ureview">
                <button className="Mr__rect8b">
                View review 
                </button>
                </Link>
            </div>
            <p className="Mr__nam3" >RECENTLY ADDED REVIEWS</p>
            
            <div className="Mr__rect9">
                <p className="Mr__rect91" >Name</p>
                <svg className="Mr__rect92" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#C4C816"/>
                </svg>
                <p className="Mr__rect93" > 4.5</p>
                <p className="Mr__rect94" >Bike Name</p>
                <p className="Mr__rect95" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
 
            </div>
            <div className="mr__bik1"></div>
            <div className="Mr__rect10">
            <p className="Mr__rect91" >Name</p>
                <svg className="Mr__rect92" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#C4C816"/>
                </svg>
                <p className="Mr__rect93" > 4.5</p>
                <p className="Mr__rect94" >Bike Name</p>
                <p className="Mr__rect95" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
 
            </div>
            <div className="mr__bik2"></div>
            <div className="Mr__rect11">
            <p className="Mr__rect91" >Name</p>
                <svg className="Mr__rect92" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L6.90897 6.58571L0 7.63571L5 12.7643L3.81793 20L10 16.5857L16.1821 20L15 12.7643L20 7.64286L13.091 6.58571L10 0Z" fill="#C4C816"/>
                </svg>
                <p className="Mr__rect93" > 4.5</p>
                <p className="Mr__rect94" >Bike Name</p>
                <p className="Mr__rect95" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  
            </div>
            <div className="mr__bik3"></div>
            <p className="Mr__nam4">
            BROWSE USER REVIEW BY BRAND
            </p>
            <div className="Mr__but">
               
            </div>
            <p className="Mr__nam5" >TVS</p>
            <div className="Mr__but1">
               
               </div>
               <p className="Mr__nam6" >Hero</p>
            <div className="Mr__but2">
               
               </div>
               <p className="Mr__nam7" >Honda</p>
               <div className="Mr__but3">
               
               </div>
               <p className="Mr__nam8" >Royal Enfield</p>
               <div className="Mr__but4">
               
               </div>
               <p className="Mr__nam9" >Bajaj</p>
               <div className="Mr__but5">
               
               </div>
               <p className="Mr__nam10" >Yamaha</p>
               <div className="Mr__but6">
               
               </div>
               <p className="Mr__nam11" >KTM</p>
               <div className="Mr__but7">
               
               </div>
               <p className="Mr__nam12" >Suzuki</p>
        </div>
    )
}

export default Mreview

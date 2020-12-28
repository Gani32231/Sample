import React from 'react'
import './Enquires.css'
import {BrowserRouter as Router,Link} from "react-router-dom"
import Enquirew from './Enquirew'
function Enquires() {
    return (
        <Router>
        <div>
        <div className="es__hgp__box">
                
                </div>
                <div className="es__hgp__logo">
                        
                    </div>
                    <Link to="/">
                <p className="es__hgp__nam1">HOME</p>
                </Link>
                <svg className="es__hgp__rect1" width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="1" fill="#DB1505"/>
                </svg>
                <Link to="/findadel">
                <p className="es__hgp__nam2">FIND A DEALER</p>
                </Link>
                <Link to="/eshop" >
                <p className="es__hgp__nam3">E-SHOP</p>
                </Link>
                <Link to="/enquirew">
                <p className="es__hgp__nam4">ENQUIRE AND TEST RIDE</p>
                </Link>
                <Link to="/partwu">
                <p className="es__hgp__nam5">PARTNER WITH US</p>
                </Link>
                <Link to="/review">
                <p className="es__hgp__nam6" >REVIEWS </p>
                </Link>
          
            <svg className="enqs__box1" width="352" height="338" viewBox="0 0 352 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="347" height="333" rx="7.5" fill="white" stroke="#DB1505" stroke-width="5" fill="#DB1505" />
       

            </svg>
            <svg className="enqs__box1ed" width="246" height="144" viewBox="0 0 246 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M123 0.78125L120.555 1.52344L22.8984 34.2422L0.695312 41.5625L13.625 45.7031V114.063C8.96094 116.773 5.8125 121.719 5.8125 127.5C5.8125 131.644 7.4587 135.618 10.389 138.549C13.3192 141.479 17.2935 143.125 21.4375 143.125C25.5815 143.125 29.5558 141.479 32.486 138.549C35.4163 135.618 37.0625 131.644 37.0625 127.5C37.0625 121.719 33.9141 116.773 29.25 114.063V51.0938L44.875 56.2109V96.25C44.875 102.656 48.7812 107.969 53.4219 111.641C58.0625 115.289 63.8281 117.867 70.75 120.18C84.6094 124.789 102.875 127.5 123 127.5C143.125 127.5 161.391 124.797 175.25 120.172C182.172 117.867 187.938 115.289 192.578 111.633C197.219 107.969 201.125 102.656 201.125 96.25V56.2109L223.102 48.8828L245.305 41.5625L223.094 34.2344L125.438 1.52344L123 0.78125ZM123 17.1484L196.242 41.5625L123 65.9766L49.7578 41.5625L123 17.1484ZM60.5 61.5859L120.562 81.6016L123 82.3359L125.445 81.5938L185.5 61.5781V96.25C185.5 96.3281 185.531 97.2344 183.055 99.1797C180.586 101.133 176.156 103.594 170.359 105.531C158.781 109.383 141.711 111.875 123 111.875C104.289 111.875 87.2188 109.391 75.6328 105.523C69.8516 103.594 65.4141 101.125 62.9453 99.1797C60.4609 97.2266 60.5 96.3281 60.5 96.25V61.5781V61.5859Z" fill="black"/>
            </svg>

            <p className="enqs__nam1" >Student</p>
          

            <a href="/enquirew">
            <svg className="enq__box2" width="352" height="338" viewBox="0 0 352 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="347" height="333" rx="7.5" fill="white" stroke="#DB1505" stroke-width="5"/>


            </svg>
            <svg className="enqs__box2s1" width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.2815 78.7219C31.59 78.7219 24.0712 76.4411 17.676 72.1679C11.2807 67.8948 6.29625 61.8211 3.35284 54.7151C0.409428 47.6091 -0.360702 39.7899 1.13983 32.2461C2.64037 24.7024 6.34418 17.7731 11.7829 12.3344C17.2216 6.89569 24.1509 3.19188 31.6946 1.69135C39.2384 0.190812 47.0576 0.960942 54.1636 3.90435C61.2696 6.84776 67.3433 11.8322 71.6164 18.2275C75.8896 24.6227 78.1704 32.1415 78.1704 39.833C78.1704 50.147 74.0732 60.0385 66.7801 67.3316C59.487 74.6247 49.5955 78.7219 39.2815 78.7219ZM39.2815 12.4997C33.7876 12.4997 28.417 14.1288 23.849 17.1811C19.281 20.2333 15.7206 24.5716 13.6182 29.6473C11.5157 34.7231 10.9656 40.3083 12.0375 45.6966C13.1093 51.085 15.7548 56.0345 19.6396 59.9193C23.5244 63.8041 28.474 66.4497 33.8623 67.5215C39.2507 68.5933 44.8359 68.0432 49.9116 65.9408C54.9873 63.8383 59.3256 60.278 62.3779 55.7099C65.4301 51.1419 67.0593 45.7714 67.0593 40.2774C67.0593 36.6296 66.3408 33.0175 64.9448 29.6473C63.5489 26.2772 61.5028 23.215 58.9234 20.6356C56.344 18.0562 53.2817 16.0101 49.9116 14.6141C46.5414 13.2182 42.9293 12.4997 39.2815 12.4997Z" fill="black"/>
            </svg>
            <svg className="enqs__box2s2" width="104" height="72" viewBox="0 0 104 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M103.224 3.44405C73.1597 -3.32105 41.7075 -0.0626599 13.6685 12.7218C9.81234 14.5638 6.55883 17.4634 4.28681 21.0829C2.0148 24.7024 0.817778 28.8928 0.835147 33.1663V66.2218C0.835147 66.9514 0.978847 67.6738 1.25804 68.3478C1.53723 69.0219 1.94645 69.6343 2.46233 70.1502C2.97821 70.6661 3.59065 71.0753 4.26468 71.3545C4.93871 71.6337 5.66114 71.7774 6.3907 71.7774C7.12027 71.7774 7.84269 71.6337 8.51672 71.3545C9.19075 71.0753 9.80319 70.6661 10.3191 70.1502C10.835 69.6343 11.2442 69.0219 11.5234 68.3478C11.8026 67.6738 11.9463 66.9514 11.9463 66.2218V33.1663C11.8979 31.0035 12.4819 28.8737 13.6267 27.0381C14.7715 25.2025 16.4272 23.741 18.3907 22.8329C35.2811 15.0341 53.6758 11.0328 72.2796 11.1107C82.7036 11.0974 93.0918 12.3284 103.224 14.7774V3.44405Z" fill="black"/>
            </svg>
            <svg className="enqs__box2s3" width="102" height="83" viewBox="0 0 102 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.2775 14.2776H67.5553V25.3888H90.722V71.8888H11.9998V25.3888H46.9998V27.7221C46.9998 29.1955 47.5851 30.6086 48.627 31.6505C49.6688 32.6923 51.0819 33.2776 52.5553 33.2776C54.0288 33.2776 55.4418 32.6923 56.4837 31.6505C57.5256 30.6086 58.1109 29.1955 58.1109 27.7221V6.11098C58.1109 4.63755 57.5256 3.22447 56.4837 2.1826C55.4418 1.14073 54.0288 0.55542 52.5553 0.55542C51.0819 0.55542 49.6688 1.14073 48.627 2.1826C47.5851 3.22447 46.9998 4.63755 46.9998 6.11098V14.2776H6.44423C4.9708 14.2776 3.55772 14.863 2.51585 15.9048C1.47398 16.9467 0.888672 18.3598 0.888672 19.8332V77.4443C0.888672 78.9177 1.47398 80.3308 2.51585 81.3727C3.55772 82.4146 4.9708 82.9999 6.44423 82.9999H96.2775C97.751 82.9999 99.164 82.4146 100.206 81.3727C101.248 80.3308 101.833 78.9177 101.833 77.4443V19.8332C101.833 18.3598 101.248 16.9467 100.206 15.9048C99.164 14.863 97.751 14.2776 96.2775 14.2776Z" fill="black"/>
            </svg>
            <p className="enqs__nam2" >Working Women</p>
            </a>
           
            <svg width="1440" height="1029" viewBox="0 0 1440 1029" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.452393" width="1451.11" height="1028.1" fill="#F7FCFE"/>
            </svg>
            <p className="enqs__nam3" >Full Name*</p>
            <input type="text" className="enq__inp1" required ></input>
            <p className="enqs__nam4" >Adhar Number*</p>
            <input type="text" className="enq__inp2" required></input>
            <p className="enqs__nam5" >Your age</p>
            <input type="text" className="enq__inp3"></input>
            <p className="enqs__nam6" >Contact Number*</p>
            <input type="text" className="enq__inp4"></input>
            <p className="enqs__nam7">Father Name*</p>
            
            <input type="text" className="enqs__inp5"></input>
            <p className="enqs__nam8">Parents Occupation*   *</p>
            <input type="text" className="enqs__inp6"></input>
            <p className="enqs__nam9">College Name**</p>
            <input type="text" className="enqs__inp7"></input>
            <p className="enqs__nam10">Persuing Year*</p>
            <input type="text" className="enqs__inp8"></input>
            <p className="enqs__nam11">Interested Bike*</p>
            <input type="text" className="enqs__inp9"></input>
            <p className="enqs__nam14">Email ID*</p>
            <input type="text" className="enqs__inp12"></input>
            <p className="enqs__nam12">Alternate Contact Num </p>
            <input type="text" className="enqs__inp10"></input>
            <p className="enqs__nam13">Mother Name*</p>
            <input type="text" className="enqs__inp11"></input>
            <p className="enqs__nam15">Course</p>
            <input type="text" className="enqs__inp13"></input>
            <p className="enqs__nam16">Branch/Department*</p>
            <input type="text" className="enqs__inp14"></input>
            <p className="enqs__nam17">Model Number*</p>
            <input type="text" className="enqs__inp15"></input>
            <p className="enqs__nam18">Whatsapp Number* </p>
            <input type="text" className="enqs__inp16"></input>
            <p className="enqs__nam19">Are you Interested in Part time Ride (Rapido/Ola/Uber/Swiggy/Zomato)*</p>
            <button type="submit" onClick={{'background-color':'red'}} className="enqs__b2">
                YES
            </button>

            <button type="submit"  className="enqs__b3">
                NO
            </button>
            <p className="enqs__nam20">Permanent Address*</p>
            <input type="text" className="enqs__inp18"></input>
            <input type="checkbox" className="enqs__cb"/>
            <p className="enqs__nam21"><u>By clicking this you consent to our term and conditions</u></p>
            <a href="/">
            <button className="enqs__btn">
                Submit
            </button>
            </a>
        </div>
        </Router>
    )
}

export default Enquires

import React from 'react'
import './Login.css'

import {Link, Route} from "react-router-dom";
function Login() {
    return (
        <div>
            <svg className="log__sq" width="321" height="437" viewBox="0 0 321 437" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.611328" y="0.764893" width="319.95" height="435.444" rx="2" fill="white"/>
</svg>

            <p className="log__nam" >Email Adress*</p>
            <input type="text"className="log__inp"/>
            <p className="log__nam1">Password*</p>
            <input type="text" className="log__inp1"/>
            <Link to="/">
            <button className="log__b1">
                LOGIN
            </button>
            </Link>
            <p className="log__nam2" >Forget password</p>
            <p className="log__nam3" >Requried feilds*</p>
            <svg className="log__ln" width="99" height="2" viewBox="0 0 99 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.265625" y1="1.08447" x2="98.757" y2="1.08447" stroke="#8E8E8E"/>
            </svg>
           <p className="log__nam4" >or login with</p>
           <svg className="log__ln1" width="90" height="2" viewBox="0 0 90 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.875" y1="1.08447" x2="89.1708" y2="1.08448" stroke="#8E8E8E"/>
                    </svg>  

           <svg className="log__sq1" width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               
                <rect x="0.59082" y="0.493164" width="36.931" height="34.6602" rx="7" fill="#DB1505"/>
                    </svg>
                    <a href="www.google.com/Triggerauto">
                    <svg className="log__goog" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3396 7.65191C13.403 8.06469 13.4482 8.47747 13.4482 9.01292C13.4482 13.6873 10.9038 17.0006 7.07366 17.0006C3.4065 17.0006 0.436523 13.3415 0.436523 8.82331C0.436523 4.30513 3.4065 0.645996 7.07366 0.645996C8.86651 0.645996 10.3605 1.4492 11.5195 2.78794L9.71762 4.91873C9.22865 4.33861 8.36848 3.6581 7.07366 3.6581C4.80998 3.6581 2.96278 5.96738 2.96278 8.82331C2.96278 11.6792 4.80998 13.9885 7.07366 13.9885C9.6995 13.9885 10.6865 11.6569 10.8404 10.4632H7.07366V7.65186H13.3396V7.65191ZM19.7487 7.92606V5.55238H17.8129V7.92606H15.8863V10.3112H17.8129V12.6848H19.7487V10.3112H21.6753V7.92606H19.7487Z" fill="white"/>
                </svg>
                </a>
            <svg className="log__sq2" width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.121094" y="0.493164" width="36.931" height="34.6602" rx="7" fill="#0D27B1"/>
                

            </svg>
            <a href="www.facebook.com/Triggerauto">
            <svg className="log__facb" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4524 11.0047L14.1525 7.58375H9.77534V5.36376C9.77534 4.42784 10.3868 3.51555 12.3472 3.51555H14.3371V0.602944C14.3371 0.602944 12.5313 0.371826 10.8048 0.371826C7.20006 0.371826 4.84385 2.01033 4.84385 4.97647V7.58375H0.836914V11.0047H4.84385V19.2748H9.77534V11.0047H13.4524Z" fill="white"/>
                </svg>
                </a>
            <svg className="log__sq3 "  width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.651367" y="0.493164" width="36.931" height="34.6602" rx="7" fill="#18A0FB"/>
            </svg>
            <a href="www.twitter.com/Triggerauto">
            <svg className="log__twit" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1182 4.66036C16.1294 4.84191 16.1294 5.0235 16.1294 5.20505C16.1294 10.7426 12.4945 17.1231 5.85109 17.1231C3.80437 17.1231 1.90306 16.4357 0.303711 15.2427C0.594511 15.2815 0.874089 15.2945 1.17608 15.2945C2.86487 15.2945 4.4195 14.6331 5.66095 13.5049C4.07279 13.466 2.74186 12.2599 2.2833 10.5999C2.50701 10.6388 2.73067 10.6648 2.96557 10.6648C3.2899 10.6648 3.61426 10.6129 3.91622 10.5221C2.26096 10.133 1.01947 8.44715 1.01947 6.41111V6.35925C1.50038 6.6705 2.05963 6.86502 2.65235 6.89093C1.67932 6.13874 1.04185 4.85488 1.04185 3.4024C1.04185 2.62431 1.22076 1.91105 1.53394 1.28856C3.31224 3.83037 5.98529 5.49031 8.98263 5.6719C8.92672 5.36065 8.89315 5.03647 8.89315 4.71225C8.89315 2.40384 10.5037 0.523438 12.5057 0.523438C13.5458 0.523438 14.4853 1.02921 15.1451 1.84622C15.9616 1.66467 16.7445 1.3145 17.4379 0.834683C17.1695 1.80734 16.5991 2.62435 15.8497 3.14305C16.5767 3.05232 17.2813 2.81884 17.93 2.49466C17.438 3.3246 16.8228 4.06378 16.1182 4.66036Z" fill="white"/>
            </svg>
            </a>
            <p className="log__nam5">Don’t have Account?</p>
            <Link to="/signup">
            <p className="log__nam6">Signup</p>
            </Link>
            <Route path="www.google.com/Triggerauto" />
            <Route path="www.facebook.com/Triggerauto" />
            <Route path="www.twitter.com/Triggerauto" />

        </div>
    )
}   

export default Login

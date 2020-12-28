import React from 'react'
import './Footer4.css'
import './Footer.css'
import {Link} from "react-router-dom"

function Footer4() {
    return (
        <div className="footer4__main">
            <p className="footer__name">Triggers</p>
            <p className="footer__name1">About Us</p>
            <p className="footer__name2">We are your Riding partners, Get ur home test ride </p>
            <p className="footer__name3">Contact Us</p>
            {/*<MailIcon className="footer__log"/>*/}
            <svg className="footer__log" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9005 12.2929V1.88336C18.9005 0.923371 18.1635 0.148438 17.2505 0.148438H1.83945C0.926453 0.148438 0.189453 0.923371 0.189453 1.88336V12.2929C0.189453 13.2529 0.926453 14.0279 1.83945 14.0279H17.2505C18.1635 14.0279 18.9005 13.2529 18.9005 12.2929ZM17.4595 1.75614C17.8225 2.13782 17.6245 2.53107 17.4265 2.7277L12.9605 7.03031L17.2505 11.7262C17.3825 11.8881 17.4705 12.1426 17.3165 12.3161C17.1735 12.5011 16.8435 12.4895 16.7005 12.3739L11.8935 8.0597L9.53945 10.3151L7.19645 8.0597L2.38945 12.3739C2.24645 12.4895 1.91645 12.5011 1.77345 12.3161C1.61945 12.1426 1.70745 11.8881 1.83945 11.7262L6.12945 7.03031L1.66345 2.7277C1.46545 2.53107 1.26745 2.13782 1.63045 1.75614C1.99345 1.37445 2.36745 1.55951 2.67545 1.8371L9.53945 7.66645L16.4145 1.8371C16.7225 1.55951 17.0965 1.37445 17.4595 1.75614Z" fill="#DB1505"/>
</svg>

            <p className="footer__name4">contact@triggerauto.in</p>
            {/*<PhoneInTalkIcon className="footer__log1"/>*/}
            <svg className="footer__log1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0003 4.99999C12.1033 4.99999 13.0003 5.89699 13.0003 7.99999H15.0003C15.0003 4.77499 13.2253 2.99999 10.0003 2.99999V4.99999ZM13.4223 10.443C13.2301 10.2683 12.9776 10.1752 12.7181 10.1832C12.4585 10.1912 12.2123 10.2998 12.0313 10.486L9.63828 12.947C9.06228 12.837 7.90428 12.476 6.71228 11.287C5.52028 10.094 5.15928 8.93299 5.05228 8.361L7.51128 5.96699C7.69769 5.78612 7.80642 5.53982 7.81444 5.2802C7.82247 5.02059 7.72917 4.76804 7.55428 4.57599L3.85928 0.512995C3.68432 0.320352 3.44116 0.203499 3.18143 0.187255C2.92171 0.17101 2.66588 0.256653 2.46828 0.425995L0.298282 2.28699C0.125393 2.46051 0.0222015 2.69145 0.00828196 2.93599C-0.00671804 3.18599 -0.292718 9.108 4.29928 13.702C8.30528 17.707 13.3233 18 14.7053 18C14.9073 18 15.0313 17.994 15.0643 17.992C15.3088 17.9783 15.5396 17.8747 15.7123 17.701L17.5723 15.53C17.7417 15.3325 17.8276 15.0768 17.8115 14.817C17.7954 14.5573 17.6788 14.3141 17.4863 14.139L13.4223 10.443Z" fill="#DB1505"/>
            </svg>
            <svg className="footer__log1__nn" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00023 8.999H10.0002C10.0002 3.869 6.12723 0 0.990234 0V2C5.05223 2 8.00023 4.943 8.00023 8.999Z" fill="#DB1505"/>
</svg>
       


            <p className="footer__name5">7995969007, 7995949007</p>
            <Link to="/">
            <div className="footer__img"></div>
            </Link>
            <p className="footer__name6">Quicklinks</p>
            <div className="footer__circ1">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16.2822" r="16" fill="#DB1505"/>
                   
                   
                </svg>
                <svg className="footer__icon1" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1322 1.74132C15.5419 1.99783 14.9173 2.16682 14.2781 2.24296C14.9498 1.84964 15.455 1.22479 15.6988 0.485583C15.0637 0.856924 14.3701 1.11748 13.6476 1.25607C13.3434 0.937232 12.9775 0.683584 12.5722 0.510548C12.1669 0.337513 11.7306 0.248703 11.2899 0.249517C9.50568 0.249517 8.06175 1.67247 8.06175 3.42657C8.06048 3.67056 8.08844 3.91382 8.14502 4.15116C6.86558 4.09118 5.61274 3.76479 4.46666 3.19288C3.32058 2.62097 2.30649 1.81613 1.48929 0.829845C1.20259 1.31316 1.05097 1.86461 1.05027 2.42657C1.05027 3.52821 1.62502 4.50198 2.49289 5.07247C1.9787 5.06027 1.47505 4.92417 1.0247 4.67575V4.71509C1.0247 6.25608 2.13945 7.53804 3.61486 7.82985C3.33741 7.90381 3.0515 7.94128 2.76437 7.94132C2.56062 7.94168 2.35734 7.92191 2.15748 7.8823C2.56765 9.1446 3.76142 10.0626 5.17552 10.0889C4.02646 10.9744 2.61572 11.453 1.16502 11.4495C0.907521 11.4491 0.650258 11.4338 0.394531 11.4036C1.87033 12.346 3.58583 12.8445 5.33683 12.8397C11.2831 12.8397 14.5316 7.99706 14.5316 3.79706C14.5316 3.65935 14.528 3.52165 14.5214 3.38722C15.1519 2.93872 15.6974 2.38136 16.1322 1.74132Z" fill="white"/>
                </svg>

            </div>
            <div className="footer__circ2">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16.2822" r="16" fill="#DB1505"/>
                </svg>
                <svg className="footer__icon2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5433 7.52554C15.5433 3.46946 12.2545 0.180664 8.19839 0.180664C4.14232 0.180664 0.853516 3.46946 0.853516 7.52554C0.853516 11.1914 3.53899 14.23 7.05076 14.7816V9.64933H5.18535V7.52554H7.05076V5.90705C7.05076 4.06656 8.14757 3.0491 9.82509 3.0491C10.6288 3.0491 11.4695 3.19272 11.4695 3.19272V5.00041H10.5429C9.63097 5.00041 9.3457 5.56636 9.3457 6.14805V7.52587H11.3826L11.0573 9.64965H9.3457V14.7822C12.8578 14.231 15.5433 11.1924 15.5433 7.52554Z" fill="white"/>
                </svg>

                

                    
                
            </div>
            <div className="footer__circ3">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16.2822" r="16" fill="#DB1505"/>
                        

                </svg>
                <svg className="footer__icon3" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.19783 2.03287C4.68208 2.03287 5.15545 2.17647 5.55809 2.44551C5.96072 2.71454 6.27454 3.09693 6.45986 3.54431C6.64517 3.9917 6.69366 4.48399 6.59918 4.95894C6.50471 5.43388 6.27152 5.87014 5.92911 6.21256C5.58669 6.55497 5.15043 6.78816 4.67549 6.88263C4.20054 6.9771 3.70825 6.92862 3.26087 6.7433C2.81348 6.55799 2.43109 6.24417 2.16206 5.84154C1.89302 5.4389 1.74943 4.96552 1.74943 4.48128C1.75012 3.83213 2.0083 3.20978 2.46732 2.75076C2.92633 2.29175 3.54869 2.03357 4.19783 2.03287ZM4.19783 0.808838C3.47149 0.808838 2.76146 1.02422 2.15753 1.42776C1.5536 1.83129 1.0829 2.40484 0.80494 3.07589C0.526982 3.74695 0.454255 4.48535 0.595957 5.19773C0.737659 5.91012 1.08742 6.56448 1.60102 7.07808C2.11462 7.59168 2.76899 7.94145 3.48137 8.08315C4.19376 8.22485 4.93216 8.15213 5.60321 7.87417C6.27426 7.59621 6.84782 7.1255 7.25135 6.52157C7.65488 5.91765 7.87027 5.20762 7.87027 4.48128C7.87027 3.50729 7.48335 2.57319 6.79463 1.88447C6.10592 1.19575 5.17182 0.808838 4.19783 0.808838Z" fill="white"/>
                </svg>
                <svg className="footer__icon31" width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.17788 2.42106C0.99629 2.42106 0.818784 2.36721 0.667802 2.26633C0.51682 2.16545 0.399142 2.02206 0.329653 1.85429C0.260163 1.68653 0.241982 1.50193 0.277407 1.32383C0.312833 1.14574 0.400274 0.982147 0.528674 0.853747C0.657074 0.725347 0.820665 0.637906 0.998761 0.60248C1.17686 0.567055 1.36146 0.585237 1.52922 0.654726C1.69698 0.724216 1.84037 0.841892 1.94126 0.992874C2.04214 1.14386 2.09599 1.32136 2.09599 1.50295C2.09624 1.62359 2.07267 1.74309 2.02663 1.8546C1.98058 1.96611 1.91296 2.06742 1.82766 2.15273C1.74235 2.23803 1.64103 2.30565 1.52953 2.3517C1.41802 2.39775 1.29852 2.42132 1.17788 2.42106Z" fill="white"/>
                </svg>
                <svg className="footer__icon32" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2586 1.36039C12.0696 1.36281 12.8467 1.68604 13.4201 2.25949C13.9936 2.83294 14.3168 3.61 14.3192 4.42097V10.5415C14.3168 11.3525 13.9936 12.1295 13.4201 12.703C12.8467 13.2764 12.0696 13.5996 11.2586 13.6021H5.13814C4.32716 13.5996 3.5501 13.2764 2.97665 12.703C2.40321 12.1295 2.07997 11.3525 2.07755 10.5415V4.42097C2.07997 3.61 2.40321 2.83294 2.97665 2.25949C3.5501 1.68604 4.32716 1.36281 5.13814 1.36039H11.2586ZM11.2586 0.136353H5.13814C2.78155 0.136353 0.853516 2.06438 0.853516 4.42097V10.5415C0.853516 12.8981 2.78155 14.8261 5.13814 14.8261H11.2586C13.6152 14.8261 15.5433 12.8981 15.5433 10.5415V4.42097C15.5433 2.06438 13.6152 0.136353 11.2586 0.136353Z" fill="white"/>
                </svg>



            </div>
            <div className="footer__circ4">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16.2822" r="16" fill="#DB1505"/>
                        
         
                </svg>
                <svg className="footer__icon4" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3684 0.136353H2.1087C1.43881 0.136353 0.853516 0.61836 0.853516 1.28038V13.5673C0.853516 14.2329 1.43881 14.8261 2.1087 14.8261H14.3648C15.0383 14.8261 15.5433 14.229 15.5433 13.5673V1.28038C15.5472 0.61836 15.0383 0.136353 14.3684 0.136353ZM5.40701 12.381H3.30257V5.83781H5.40701V12.381ZM4.42759 4.84298H4.4125C3.739 4.84298 3.3029 4.34162 3.3029 3.71403C3.3029 3.07496 3.75048 2.58541 4.43906 2.58541C5.12764 2.58541 5.54899 3.07135 5.56407 3.71403C5.56375 4.34162 5.12764 4.84298 4.42759 4.84298ZM13.0981 12.381H10.9937V8.80331C10.9937 7.94619 10.6875 7.36056 9.92608 7.36056C9.34439 7.36056 9.0001 7.75404 8.84697 8.13735C8.78959 8.27507 8.77418 8.46262 8.77418 8.65411V12.381H6.66974V5.83781H8.77418V6.74838C9.08043 6.31228 9.55883 5.68469 10.672 5.68469C12.0535 5.68469 13.0985 6.59525 13.0985 8.55837L13.0981 12.381Z" fill="white"/>
                </svg>

            </div>

            <p className="footer__name7">Subscribe</p>
            <p className="footer__name8">Register Yourself</p>
            <div >

                <input type="text" className="footer__rect"></input>
                {/*<svg className="footer__rect" width="222" height="35" viewBox="0 0 222 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="222" height="35" rx="5" fill="#F2F2F2"/>
                
                   
                </svg> */}
                <svg className="footer__mail" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9005 12.2929V1.88336C18.9005 0.923371 18.1635 0.148438 17.2505 0.148438H1.83945C0.926453 0.148438 0.189453 0.923371 0.189453 1.88336V12.2929C0.189453 13.2529 0.926453 14.0278 1.83945 14.0278H17.2505C18.1635 14.0278 18.9005 13.2529 18.9005 12.2929ZM17.4595 1.75614C17.8225 2.13782 17.6245 2.53107 17.4265 2.72769L12.9605 7.03031L17.2505 11.7262C17.3825 11.8881 17.4705 12.1426 17.3165 12.3161C17.1735 12.5011 16.8435 12.4895 16.7005 12.3739L11.8935 8.0597L9.53945 10.3151L7.19645 8.0597L2.38945 12.3739C2.24645 12.4895 1.91645 12.5011 1.77345 12.3161C1.61945 12.1426 1.70745 11.8881 1.83945 11.7262L6.12945 7.03031L1.66345 2.72769C1.46545 2.53107 1.26745 2.13782 1.63045 1.75614C1.99345 1.37445 2.36745 1.55951 2.67545 1.8371L9.53945 7.66645L16.4145 1.8371C16.7225 1.55951 17.0965 1.37445 17.4595 1.75614Z" fill="#DB1505"/>
                    </svg>
                    <p className="footer__mnam">Enter your E-Mail</p>
            </div>
            <button className="footer__rect2" >Register</button>
            
            <p className="footer__name10">Trigger©2020 All Rights Reserved</p>

        </div>
    )
}

export default Footer4

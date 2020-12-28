import React from 'react'
import './Contactus.css'

import {Link} from 'react-router-dom'
function Contactus() {
    return (
        <div>
            <div className="cu__p1">

            </div>
            <p className="cu__nam" >Get In Touch with Triggers</p>
            <p className="cu__nam1" >Hey there ! we would love to help our customers, drop us an email 
                or ping us on whatsapp our associates will connect with you and assist you in the best possiblw way</p>
            <div className="cu__p2">
                <p className="cu__nam2">Send us a Message</p>
                <p className="cu__nam3" >Your Name</p>
                <input type="text" placeholder="Daniel James" className="cu__inp"/>
                <p className="cu__nam4" >Phone</p>
                <input type="text" placeholder="(808)234567834" className="cu__inp1"/>
                <p className="cu__nam5" >Message</p>
                <input type="text" placeholder="Hi, Im Daniel Do you have moment to talk abt..!" className="cu__inp2"/>
                <svg className="cu__l1" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1" x2="21" y2="1" stroke="#C0042D" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg className="cu__l2" width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1" x2="16" y2="1" stroke="#C0042D" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg className="cu__l3" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1" x2="9" y2="1" stroke="#C0042D" stroke-width="2" stroke-linecap="round"/>
                </svg>

                <svg className="cu__mil" width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.05L1.10714 0H29.8929L31 1.05V19.95L29.8929 21H1.10714L0 19.95V1.05ZM2.21429 3.2235V18.9H28.7857V3.2256L16.1864 12.39H14.8357L2.21429 3.2235ZM26.6379 2.1H4.36214L15.5 10.2249L26.6379 2.1Z" fill="#C0042D"/>
                </svg>

                <p className="cu__nam6" >Email Name</p>

                <input type="text" placeholder="imdanial@gmail.com" className="cu__inp3"/>
                <p className="cu__nam7" >Company</p>
                <input type="text" placeholder="JP Morgan" className="cu__inp4"/>
                <Link to="/">
                <button className="cu__b1">
                    SEND
                </button>
                </Link>
            </div>
            <div className="cu__p3">
                <p className="cu__nam8" >CONTACT INFORMATION</p>
                <svg className="cu__icon1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M16 0.833252C9.75104 0.833252 4.66662 5.91767 4.66662 12.1595C4.62554 21.2899 15.5693 28.8606 16 29.1666C16 29.1666 27.3744 21.2899 27.3333 12.1666C27.3333 5.91767 22.2489 0.833252 16 0.833252ZM16 17.8333C12.8691 17.8333 10.3333 15.2974 10.3333 12.1666C10.3333 9.03575 12.8691 6.49992 16 6.49992C19.1308 6.49992 21.6666 9.03575 21.6666 12.1666C21.6666 15.2974 19.1308 17.8333 16 17.8333Z" fill="#F1EDED"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.666504" y="0.833252" width="30.6669" height="36.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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

            <p className="cu__nam9" >Survey no 52, Flat no 406, SVS Promotor 
                    palace, Divya Nagar, Hyderabad, Telangana
                    500088</p>
                    <svg className="cu__icon2" width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <path d="M20 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H20C20.5304 28 21.0391 27.7893 21.4142 27.4142C21.7893 27.0391 22 26.5304 22 26V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0ZM14 26H12V24H14V26ZM6 22V2H20V22H6Z" fill="#F1EDED"/>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="26" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <p className="cu__nam10" >7995969007 , 7995949007</p>

                <svg className="cu__icon3" width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M26.9166 0.666748H7.08325C5.95608 0.666748 4.87508 1.11451 4.07805 1.91154C3.28102 2.70857 2.83325 3.78958 2.83325 4.91675V19.0834C2.83325 20.2106 3.28102 21.2916 4.07805 22.0886C4.87508 22.8856 5.95608 23.3334 7.08325 23.3334H26.9166C28.0438 23.3334 29.1248 22.8856 29.9218 22.0886C30.7188 21.2916 31.1666 20.2106 31.1666 19.0834V4.91675C31.1666 3.78958 30.7188 2.70857 29.9218 1.91154C29.1248 1.11451 28.0438 0.666748 26.9166 0.666748ZM26.9166 3.50008L17.7083 9.83258C17.4929 9.95692 17.2486 10.0224 16.9999 10.0224C16.7512 10.0224 16.5069 9.95692 16.2916 9.83258L7.08325 3.50008H26.9166Z" fill="#F1EDED"/>
                        </g>
                            <defs>
                    <filter id="filter0_d" x="-1.16675" y="0.666748" width="36.3333" height="30.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <p className="cu__nam11" >contact@triggerauto.in</p>

                <svg className="cu__icon4" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 2.96969C25.0439 3.45785 24.0034 3.80918 22.9316 3.94602C24.0443 3.16361 24.8776 1.92753 25.2751 0.469689C24.2309 1.20486 23.0871 1.72037 21.8942 1.99336C21.3957 1.36254 20.7927 0.859999 20.1229 0.517054C19.4531 0.174109 18.7308 -0.00189269 18.001 1.53491e-05C15.0482 1.53491e-05 12.6735 2.83285 12.6735 6.30918C12.6735 6.79735 12.7235 7.28551 12.8047 7.75519C8.38337 7.48152 4.44009 4.98152 1.81853 1.15386C1.34086 2.11952 1.09054 3.21904 1.09362 4.33803C1.09362 6.52738 2.03413 8.45785 3.46833 9.5932C2.62314 9.55381 1.79773 9.27885 1.05925 8.79069V8.86835C1.05925 11.9342 2.89028 14.4749 5.33061 15.0592C4.87241 15.2 4.40106 15.2721 3.92765 15.2737C3.58082 15.2737 3.25273 15.233 2.92152 15.1775C3.59644 17.6775 5.56183 19.4933 7.90217 19.5525C6.07115 21.25 3.77767 22.2485 1.28735 22.2485C0.840524 22.2485 0.428074 22.23 0 22.1709C2.36222 23.9645 5.165 25 8.18339 25C17.9822 25 23.3441 15.392 23.3441 7.05253C23.3441 6.77886 23.3441 6.50519 23.3284 6.23152C24.3658 5.33285 25.2751 4.21969 26 2.96969Z" fill="#FEFEFE"/>
                </svg>
                <svg className="cu__icon5" width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.913 7.37887C26.8979 6.32917 26.6853 5.28991 26.2848 4.30757C25.9375 3.47898 25.407 2.72646 24.7273 2.09811C24.0475 1.46976 23.2334 0.979392 22.3371 0.658333C21.288 0.294319 20.1798 0.0974904 19.0595 0.0762281C17.6172 0.0166316 17.1599 0 13.4985 0C9.83713 0 9.36784 9.29361e-08 7.93597 0.0762281C6.81621 0.0976467 5.70849 0.294473 4.65993 0.658333C3.76341 0.979168 2.94922 1.46946 2.26944 2.09784C1.58966 2.72622 1.05926 3.47885 0.712183 4.30757C0.317605 5.27655 0.105138 6.30074 0.0839627 7.3359C0.0194913 8.67059 0 9.0933 0 12.4778C0 15.8623 -1.11709e-08 16.2948 0.0839627 17.6197C0.106453 18.6565 0.317859 19.6793 0.712183 20.6509C1.05985 21.4793 1.59064 22.2316 2.27064 22.8598C2.95065 23.4879 3.76492 23.978 4.66143 24.2987C5.70711 24.6773 6.81503 24.8883 7.93747 24.9224C9.38133 24.982 9.83863 25 13.5 25C17.1614 25 17.6307 25 19.0625 24.9224C20.1828 24.902 21.2911 24.7056 22.3401 24.3417C23.2362 24.0202 24.0501 23.5297 24.7298 22.9014C25.4095 22.2731 25.9401 21.5208 26.2878 20.6924C26.6821 19.7223 26.8935 18.6994 26.916 17.6613C26.9805 16.328 27 15.9053 27 12.5194C26.997 9.13488 26.997 8.70523 26.913 7.37887ZM13.4895 18.8782C9.66021 18.8782 6.55808 16.0106 6.55808 12.4709C6.55808 8.93115 9.66021 6.06359 13.4895 6.06359C15.3278 6.06359 17.0909 6.73864 18.3908 7.94025C19.6907 9.14185 20.4209 10.7716 20.4209 12.4709C20.4209 14.1702 19.6907 15.7999 18.3908 17.0015C17.0909 18.2031 15.3278 18.8782 13.4895 18.8782ZM20.6968 7.32066C19.8017 7.32066 19.0805 6.65262 19.0805 5.82659C19.0805 5.63048 19.1223 5.43628 19.2035 5.2551C19.2847 5.07391 19.4037 4.90929 19.5537 4.77061C19.7037 4.63194 19.8818 4.52194 20.0778 4.44689C20.2738 4.37184 20.4839 4.33321 20.6961 4.33321C20.9082 4.33321 21.1183 4.37184 21.3143 4.44689C21.5103 4.52194 21.6884 4.63194 21.8384 4.77061C21.9884 4.90929 22.1074 5.07391 22.1886 5.2551C22.2698 5.43628 22.3116 5.63048 22.3116 5.82659C22.3116 6.65262 21.5889 7.32066 20.6968 7.32066Z" fill="#FEFEFE"/>
                </svg>
                <svg className="cu__icon6" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.96 0H1.04C0.46475 0 0 0.446875 0 1V24C0 24.5531 0.46475 25 1.04 25H24.96C25.5352 25 26 24.5531 26 24V1C26 0.446875 25.5352 0 24.96 0ZM7.71225 21.3031H3.8545V9.37187H7.71225V21.3031ZM5.785 7.74063C5.34276 7.74063 4.91045 7.61453 4.54274 7.37828C4.17504 7.14204 3.88844 6.80626 3.71921 6.41339C3.54997 6.02053 3.50569 5.58824 3.59196 5.17118C3.67824 4.75412 3.8912 4.37103 4.20391 4.07035C4.51662 3.76966 4.91504 3.56489 5.34878 3.48194C5.78252 3.39898 6.2321 3.44156 6.64068 3.60428C7.04926 3.76701 7.39847 4.04258 7.64417 4.39615C7.88986 4.74971 8.021 5.16539 8.021 5.59062C8.01775 6.77812 7.01675 7.74063 5.785 7.74063ZM22.1552 21.3031H18.3007V15.5C18.3007 14.1156 18.2747 12.3375 16.2955 12.3375C14.2902 12.3375 13.9815 13.8438 13.9815 15.4V21.3031H10.1302V9.37187H13.8287V11.0031H13.8807C14.3942 10.0656 15.652 9.075 17.5305 9.075C21.437 9.075 22.1552 11.5469 22.1552 14.7594V21.3031Z" fill="#FEFEFE"/>
                </svg>

            </div>
        </div>
    )
}

export default Contactus
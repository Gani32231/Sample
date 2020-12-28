import React from 'react'
import './Reset.css'
function Reset() {
    return (
        <div  className="reset__main"  >
            <p className="reset__nam1" >Reset Password</p>
            <div className="reset__b1">
            <svg className="reset__mail" width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2965 0.747559L13.9721 12.0253C13.6806 12.3151 13.2864 12.4777 12.8754 12.4777C12.4645 12.4777 12.0702 12.3151 11.7788 12.0253L0.555421 0.833114C0.520918 0.959924 0.502624 1.09059 0.500977 1.222V16.7776C0.500977 17.1901 0.664865 17.5858 0.956588 17.8775C1.24831 18.1692 1.64397 18.3331 2.05653 18.3331H23.8343C24.2469 18.3331 24.6425 18.1692 24.9343 17.8775C25.226 17.5858 25.3899 17.1901 25.3899 16.7776V1.222C25.3837 1.05996 25.3522 0.899875 25.2965 0.747559ZM3.12209 16.7776H2.04098V15.6653L7.69542 10.0576L8.79209 11.1542L3.12209 16.7776ZM23.8188 16.7776H22.7299L17.0599 11.1542L18.1565 10.0576L23.811 15.6653L23.8188 16.7776Z" fill="black"/>
            </svg>
            <p className="reset__nam2" >Enter Your Email-Id</p>
            </div>
            <button className="reset__b2">
                Send
            </button>
        </div>
    )
}

export default Reset

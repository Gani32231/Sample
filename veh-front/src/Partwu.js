import React from 'react'
import './Partwu.css'
import {Link} from "react-router-dom"
function Partwu() {
    return (
        <div>
              <div className="pw__box">
                
                </div>
                <div className="mr__logo">
                        
                    </div>
                    <Link to="/">
                <p className="pw__hgp__nam1">HOME</p>
                </Link>
                <svg className="pw__hgp__rect1" width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="1" fill="#DB1505"/>
                </svg>
                <Link to="/findadel">
                <p className="pw__hgp__nam2">FIND A DEALER</p>
                </Link>
                <Link to="/eshop" >
                <p className="pw__hgp__nam3">E-SHOP</p>
                </Link>
                <Link to="/enquirew">
                <p className="pw__hgp__nam4">ENQUIRE AND TEST RIDE</p>
                </Link>
                <Link to="/partwu">
                <p className="pw__hgp__nam5">PARTNER WITH US</p>
                </Link>
                <Link to="/review">
                <p className="pw__hgp__nam6" >REVIEWS </p>
                </Link>
             <p className="pw__nam" >Partner with us</p>
            <p className="pw__nam1" >Showroom Name</p>
            <input type="text" className="pw__inp"/>
            <p className="pw__nam2" >Address </p>
            <input type="text" className="pw__inp1"/>
            <p className="pw__nam3" >Locality</p>
            <input type="text" className="pw__inp2"/>
            <p className="pw__nam4" >City</p>
            <input type="text" className="pw__inp3"/>
            <p className="pw__nam5" >State</p>
            <input type="text" className="pw__inp4"/>
            <p className="pw__nam6" >Pincode</p>
            <input type="text" className="pw__inp5"/>
            <p className="pw__con" >Contact Number</p>
            <input type="text" className="pw__inp6"/>
            <Link to="/">
            <button className="pw__b1">
                Submit
            </button>
            </Link>
        </div>
    )
}

export default Partwu

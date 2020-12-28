import React from 'react'
import './Signup.css'

import {Link} from "react-router-dom"

function Signup() {
    return (
        <div>
            
        <div className="signup__main" >
        </div>
            <div className="signup__log">

            </div>
            <p className="signup__nam" >SignUp</p>
            <svg className="signup__log1"  width="185" height="1" viewBox="0 0 185 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="185" y1="0.5" y2="0.5" stroke="#D6171F"/>
            </svg>

        <input className="signup__inp" placeholder="email i'd" type="text"/>
        <input className="signup__inp1" placeholder="password" type="text"/>
        <input className="signup__inp2" placeholder="confirm password" type="text"/>
        <input type="checkbox" className="signup__chk"/>
        <p className="signup__nam1" >I acknowledge all terms and conditions</p>
        <Link to="/">
        <button className="signup__b1">
            Signup
        </button>
        </Link>
        </div>
    )
}

export default Signup

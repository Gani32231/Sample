import React from 'react'
import './Conbookdrv.css'
import {Link} from "react-router-dom"
function Conbookdrv() {
    return (
        <div>
            <p className="cbd__nam" >Confirm</p>
            <p className="cbd__nam1">Test drive at your doorstep</p>
            <p className="cbd__nam2">Name</p>
            <input className="cbd__inp" type="text"/>
            <p className="cbd__nam3">Contact Number</p>
            <input className="cbd__inp1" type="text"/>
            <p className="cbd__nam4">Street Address</p>
            <input className="cbd__inp2" type="text"/>
            <p className="cbd__nam5">City</p>
            <input className="cbd__inp3" type="text"/>
            <p className="cbd__nam6">PIN Code</p>
            <input className="cbd__inp4" type="text"/>
            <p className="cbd__nam7">Near by Landmark</p>
            <input className="cbd__inp5" type="text"/>
            <Link to="/booked">
            <button type="submit" className="cbd__b1">
                Confirm
            </button>
             </Link>
        </div>
    )
}

export default Conbookdrv

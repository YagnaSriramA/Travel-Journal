import React from "react"
import '../style.css'
import logo from '../images/globe.png'


function Navbar()
{
    return(
        <nav className="nav-bar">
            <img src={logo} alt="logo" className="logo"></img>
            <p>My Travel Journal</p>
        </nav>
    )
}

export default Navbar
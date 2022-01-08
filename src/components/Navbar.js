import React from 'react'
import logo from "../logo.png"
import "./navbar.css"
const Navbar = () => {
    return (
        // Add dark bg to nav bar

        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} className="img-nav"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
         {/* Margin left for icons to the left ml-auto */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link" href="#scrollspymain">About me <span className="sr-only"></span></a>
            </li>
            
            <li className="nav-item active ">
              <a className="nav-link" href="#portfolio">Portfolio<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Me</a>
            </li>
           
       
        </ul>
        
        </div>
        </div>
      </nav>
    )
}

export default Navbar

import React from 'react';
import './header.css';
import Typed from 'react-typed';
const header = () => {


    return (
        <div className="header-wrapper">
           <div className="main-info">
               <h1>Web Development & enhancement </h1>
            <Typed className="typed-text" 
            strings={["Web designing","Web Development", "Responsive Web Apps","React Development"]}
            typerSpeed={30}
            backSpeed={60}
            loop/>
            <a className="btn-main-offer" href="#">Contact Us</a>
               </div> 
        </div>  
    )
}

export default header

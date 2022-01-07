import React from 'react'
import "./About.css"
import mine from "../img/mine.jpg"
import Type from "react-typed"
const About = () => {
    return (
        <div className="main  m-5" id="scrollspymain">
            <div className="text">
    <br/>
            <h1>Hi,<br/> I'm <span className="h1 blast ">B</span>
            <span className="h1 blast ">H</span>
            <span className="h1 blast ">A</span>
            <span className="h1 blast ">N</span>
            <span className="h1 blast ">U</span>
            </h1>
            <div className="text-dev">
            <span className="blast "  >A </span>
            <span className="blast"  >  </span>
            <span className="blast D"  > w</span>
            <span className="blast"  >e</span>
            <span className="blast"  >b  </span>
            <span className="blast"  > <br/> </span>
            <span className="blast D"  >D</span>
            <span className="blast"  >e</span>
            <span className="blast"  >v</span>
            <span className="blast"  >e</span>
            <span className="blast"  >l</span>
            <span className="blast"  >o</span>
            <span className="blast"  >p</span>
            <span className="blast"  >e</span>
            <span className="blast"  >r.</span>
          
           
            <span className="blast smile"  >(●'◡'●)</span>
     </div>       
        
            <p className="p3"><Type className="typedtexts" 
            strings={["Based Somewhere in  India :p"]}
            typerSpeed={100}
            backSpeed={60}
            loop/>
</p>
<br/>
<div className="about">
            <p>
                I enjoy working around, creating new styles and making beautiful interface designs. I love performing new tasks and work with HTML, javascript or css.<br/> <br/>
                When i'm not coding or centering a div, you'll find me at gym or library.
            </p>
         </div>
            </div>
            
         <div id="image-pocket"> <img  className="Me" src={mine}/></div>
          
        </div>  
       
    )
}

export default About

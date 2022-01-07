import React from 'react';
import './header.css';
import Typed from 'react-typed';
import Particles from "react-tsparticles";


const header = () => {


    
    return (

        <div className="header-wrapper">
       
       <div className="particles" id="container">
           <Particles id="tsparticles" options={{
               background: {
                   color: {
                       
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 600,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                    
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }}/>
        </div> 
           <div className="main-info">
               <h1>Web Development & enhancement </h1>
            <Typed className="typed-text" 
            strings={["Web designing","Web Development", "Responsive Web Apps","React Development"]}
            typerSpeed={30}
            backSpeed={60}
            loop/>
            <a className="btn-main-offer" href="#contact">Contact Me</a>
               </div> 
        </div>  
    )
}

export default header

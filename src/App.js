import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/header"
import useState from "react"
import  useEffect  from "react";
import Particles from "react-particles-js"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
 

const showParticles = 
setTimeout(() => {
  return true
}, 500);

  return (
     <>
   
             
    <Particles  className="particles-canvas"
    params={{
      particles:{
        enable:{showParticles},
        number:{
          value: 60,
          destiny:{enable:true, value_area:900}
        }, shape:{
          type:"circle",
          stroke:{width:6,color:"000000"}, interactivity: {
          },
         


          
        }
      }}
    }/>
    
     <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
     </> 
  );
}

export default App;

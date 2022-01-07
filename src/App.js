import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/header"
import useState from "react"
import  useEffect  from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
 

  return (
     <>
   
             
   {/* <!-- tsParticles container --> */}

     <Navbar />
      <Header />

      <About />
      <Portfolio />
      <Contact />
     </> 
  );
}

export default App;

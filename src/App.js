import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/header"

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

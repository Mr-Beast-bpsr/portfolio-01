import React from 'react'
import "./Portfolio.css"
import space from "../img/space.png"
import Web3 from "../img/Web3.0.png"
import Forkify from "../img/Forkify.png"
import Other from "../img/Other.png"
const Portfolio = () => {
    return (
        <div className="co" id="portfolio">
            <div className="mainPort">

         <div className="card" style={{width: 
         "18rem"}}>
  <img src={Forkify} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Forkify API Webapp</h5>
 <div className="card-btn">
    <a href="https://forkify-v5.netlify.app/" target={"_blank"} className="btn btn-primary">Visit Website</a>
    <a className="" href="https://github.com/Mr-Beast-bpsr/Forkify-repo"  target={"_blank"}className="btn btn-primary btn-sm git ">View GitHub</a></div>
  </div>
</div>
<div className="card" style={{width: 
         "18rem"}}>
  <img src={space} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">3d Moon (learning)</h5>
 <div className="card-btn">
    <a href="https://new-moon3d.netlify.app/" target={"_blank"} className="btn btn-primary">Visit Website</a> <a className="" href="https://github.com/Mr-Beast-bpsr/3d-Moon"  target={"_blank"}className="btn btn-primary btn-sm git ">View GitHub</a></div>
  </div>
</div>
<div className="card" style={{width: 
         "18rem"}}>
           <div>
  
  <img src={Web3} className="card-img-top" alt="..."/>
           </div>
  <div className="card-body">
    <h5 className="card-title">Web 3.0 NFTs</h5>
 <div className="card-btn">

    <a href="https://web-3-0-build.vercel.app/"  target={"_blank"}className="btn btn-primary">Visit Website</a>
    <a className="" href="https://github.com/Mr-Beast-bpsr/Web-3.0"  target={"_blank"}className="btn btn-primary btn-sm git ">View GitHub</a>
 </div>
  </div>
</div>
<div className="card" style={{width: 
         "18rem"}}>
  <img src={Other} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Other Vanila Projects</h5>
 <div className="card-btn">

    <a href="https://codepen.io/mr-beast-bpsr"  target={"_blank"} className="btn btn-primary">Visit Website</a>
    <a className="" href="https://github.com/Mr-Beast-bpsr/Uber"  target={"_blank"}className="btn btn-primary btn-sm git ">Uber(undeveloped)</a>
 </div>
    
  </div>
</div>
             </div>
        </div>
    )
}

export default Portfolio

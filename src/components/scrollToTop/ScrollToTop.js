import React, { useState } from 'react'
import "./ScrollToTop.css"


const ScrollToTopnew = () => {
       const [show, setShow] = useState(false);

        const scrolltop=()=>{
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        var b = document.body;
        b.onscroll=()=>{
          var h = document.documentElement,
          st = 'scrollTop',
          sh = 'scrollHeight';
          const percentageScrolled= Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

          if(percentageScrolled >1)setShow(true);
          else setShow(false);
          let pgv=document.querySelector(".progress-value");
        pgv.style.background=`conic-gradient(#f6901e ${percentageScrolled}%, transparent 0 100%)`
        }
        
        
  return (
    
         <div className={`progress-bar ${show?"":" scrolldis"}`} onClick={scrolltop}>
          <div className="progress-value" ></div>
          <div className="progress-status">
            <img src={require('../../assets/images/witch.svg').default} alt="" />
          </div>
        </div>
      
    
  )
}

export default ScrollToTopnew
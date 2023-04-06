import React from 'react'
import $ from 'jquery'
import '../../Assets/Vendors/hovertree';
import "./greeting.scss"
function Greeting() {
    const sentence1 = "Hi, I'm".split("");
    const sentence2 = "Tahir Tahirli".split("")
    const sentence3 = "Full Stack Web Developer".split("");
  
   
  
    const bounce =(e)=>{
  
      $(e.target).addClass("bounce")
  
      $(e.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  
        $(e.target).removeClass('bounce');
  
    });
}
  return (
    <div id='greeting' className="greeting p-0 ">
      <div className="greeting_content text-start  ">
      <div>
         {sentence1.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
      </div>
          <div>

        {sentence2.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter name ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
          </div>
          <div>

        {sentence3.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
          </div>
      </div>
    <canvas id='canvas'></canvas>
    </div>
  )
}

export default Greeting
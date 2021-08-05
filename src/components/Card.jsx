import React from 'react';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
   return(
    <section>
     <div className="card">
    <div onClick={onClose}  className="button">X</div>
    <div >
      <figure className="card__profile">
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="Short description"/>
      </figure>
    </div>
    <div className="info" >
      <h3 >{name}</h3>
      <p >Min &nbsp;&nbsp; Max</p>
      <p >{min}°&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{max}°</p>
    </div>
  </div>
  </section>
   ); 
};

  




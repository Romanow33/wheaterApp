import React from 'react';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
   return(
    <section class="wrapper">
     <div class="card" data-effect="zoom">
    <button  onClick={onClose} class="card__save " type="button">
      <i class="fa  fa-bookmark">X</i>
     </button>
     <figure  class="card__image">
      <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description"/>
    </figure>
    
    <div class="card__header">
      <figure class="card__profile">
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="Short description"/>
      </figure>
    </div>
    <div class="card__body">
      <h3 class="card__name">{name}</h3>
      <p class="card__job">Min &nbsp;&nbsp; Max</p>
      <p class="card__bio">{min}°&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{max}°</p>
    </div>
  </div>
  </section>
   ); 
};

  




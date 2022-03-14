import React from "react";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <section>
      <div className="card">
        <div onClick={onClose} className="button">
          X
        </div>
        <div>
          <figure className="card__profile">
            <img
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              alt="Short description"
            />
          </figure>
        </div>
        <h1>{name}</h1>
        <div className="info">
          <div>
            <p>Minima</p>
            <p>{min}°</p>
          </div>
          <div>
            <p> Maxima</p>
            <p>{max}°</p>
          </div>
        </div>
      </div>
    </section>
  );
}

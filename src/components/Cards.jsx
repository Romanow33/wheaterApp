import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max= {Math.floor(c.max - 273.15)}
          min={Math.floor(c.min - 273.15)}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}

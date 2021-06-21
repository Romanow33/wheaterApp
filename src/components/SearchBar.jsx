import React, { useState } from "react";
import './input.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className='search'
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit" className ="btn">Agregar</button>
      {/* <input type="submit" value="Agregar" /> */}
    </form>
  );
}

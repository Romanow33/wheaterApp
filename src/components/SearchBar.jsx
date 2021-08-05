import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    
    <div class="search-box">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <button type="submit" className ="btn-search">
      <img src="" alt="" />
      </button>
      <input className='input-search'
        type="text"
        placeholder="BUSCAR"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      

      {/* <input type="submit" value="Agregar" /> */}
    </form>
    </div>
  );
}

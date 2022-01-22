import React from 'react';
import './../css/header.style.css';


const Header = ({setSearchTerm}) => {
  return (
      <div className='header'>
          <h1>Crypto Price Page</h1>

          <input type="text" placeholder='Enter Cryptocurrency Name...!!!' onChange={(e) => {setSearchTerm(e.target.value)}} />

      </div>
  );
};

export default Header;

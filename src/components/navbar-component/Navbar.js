import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div></div>
      <input
        className='search'
        type='text'
        placeholder='Search For News'
      />
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between '>
        <div className=' logo my-3'>
        <img
           src="/logo.jpg"
           className="d-inline-block align-top ms-4"
           alt="React Bootstrap logo"/>
        </div>
        <div id='link' className=' my-3 me-4'>
        
          <Link to={'/'} >Topics</Link>
          <Link to={'/'} >Statistics</Link>
          <Link to={'/'}>Blog</Link>
        
        </div>
     </nav>
    );
};

export default Navbar;
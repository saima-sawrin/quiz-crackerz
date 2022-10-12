import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Topics from '../Topics/Topics';
import Courses from '../Haeder/Header';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid';
import Header from '../Haeder/Header';
const Navbar = () => {
  
    return (
    <div>
            <nav className='d-flex justify-content-between '>
        <div className=' logo my-3'>
        <img
           src="/logo.jpg"
           className="d-inline-block align-top ms-4"
           alt="React Bootstrap logo"/>
        </div>
        <div id='link' className=' my-3 me-4'>
          <Link to={'/'} >Topics</Link>
          <Link to={'/statistics'} >Statistics</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/quiz'}></Link>
        
        </div>

        </nav>
        <div>
          <Header></Header>
        </div>
     
     
  
    
    </div>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Topics from '../Topics/Topics';
import Courses from '../Courses/Courses';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid';
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
        <div className='Header'>
          <div className='container'>
          <img src="" alt="" />
          <h1>Free online courses to <br /> achieve your goals</h1>
          <p className='mt-3'>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re PlaceMaking Edu, <br /> a leading destination for learning and teaching online. 
          </p>
          <p>
          If you’re new  to online <br /> learning and not sure where to start, you’re not <br /> alone. We’ve           curated a free collection of courses for professionals. <br /> Take one of these courses and           learn new skills (on us).
          </p>
          <button className='py-2 px-3 '><a href="#topics" className='text-white text-decoration-none'>Take Free Course</a>
          </button>
         
        </div>
    
 
  
       
        </div>
       
     
     
  
    
    </div>
    );
};

export default Navbar;
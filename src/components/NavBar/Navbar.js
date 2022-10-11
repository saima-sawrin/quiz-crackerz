import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Navbar.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
const Navbar = () => {
    const cart = useLoaderData();
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
          <Link to={'/'} >Statistics</Link>
          <Link to={'/'}>Blog</Link>
        
        </div>
        <h2>Total:{cart.length}</h2>
     </nav>
     <div className='HomeContainer'>
     <Home></Home>
     </div>
      <div>
        <Courses></Courses>
      </div>
    </div>
    );
};

export default Navbar;
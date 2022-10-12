import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Header.css';
const Header = () => {
//  const{name} = course;

    return (
      <div className='Header'>
      <div className='container'>
      <img src="" alt="" />
      <h1>Free online courses to <br /> achieve your goals</h1>
      <p className='mt-3'>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re PlaceMaking Edu, <br /> a leading destination for learning and teaching online. 
      </p>
      <p>
      If you’re new  to online <br /> learning and not sure where to start, you’re not <br /> alone. We’ve           curated a free collection of courses for professionals. <br /> Take one of these courses and           learn new skills (on us).
      </p>
      <button className='py-2 px-3 '><a href="http://localhost:3000/" className='text-white text-decoration-none'>Take Free Course</a>
      </button>
     
    </div>
    </div>
   
    );
};

export default Header;
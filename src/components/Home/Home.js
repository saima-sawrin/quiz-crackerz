import React from 'react';
import Courses from '../Courses/Courses';
import './Home.css';
const Home = () => {
    return (
        <div className='container'>
          <img src="" alt="" />
          <h1>Free online courses to <br /> achieve your goals</h1>
          <p className='mt-3'>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re PlaceMaking Edu, <br /> a leading destination for learning and teaching online. 
          </p>
          <p>
          If you’re new  to online <br /> learning and not sure where to start, you’re not <br /> alone. We’ve           curated a free collection of courses for professionals. <br /> Take one of these courses and           learn new skills (on us).
          </p>
          <button className='py-2 px-3'>Take Free Course</button>
       
        </div>
    );
};

export default Home;
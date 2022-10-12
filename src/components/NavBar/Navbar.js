import React, { useState } from 'react';
// import { Link} from 'react-router-dom';
import Link from '../Link/Link';
import './Navbar.css';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid';
import Topics from '../Topics/Topics';
import Courses from '../Haeder/Header';
import Header from '../Haeder/Header';
const Navbar = () => {
  const [open , setOpen] = useState(true);
  const routes = [
      {id:1, Name: 'Topics' , path: '/'},
      {id:2, Name: 'Statistics' , path: '/statistics'},
      {id:3, Name: 'Blog' , path: '/blog'},
    
      {id:4 , path: '/quiz'}
  ]
    return (
    <div  id='navBar'>
            {/* <nav className='d-flex justify-content-between  '>
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

        </nav> */}

<nav className='flex justify-content-between ' >
       <div className=' logo my-3 '>
        <img
           src="/logo.jpg"
           className="d-inline-block align-top ms-2"
           alt="React Bootstrap logo"/>
        </div>

        <div id='link' onClick={ ()=> setOpen(!open)} className='h-6 w-6 text-white-400 md:hidden'>
        {
            open ?  <XMarkIcon/> : <Bars3Icon/>
        }
        </div>
       
        <ul id='navLink' className= {`md:flex justify-center gap-5  ms-5  md:static absolute duration-300 ease-in w-full ${open? 'top-6' : 'top-[-120px]'  }`}>
            {
            
              routes.map(route => <Link  route={route} key={route.id}></Link>)
                   
            }
        </ul>
       </nav>
        <div>
          <Header></Header>
        </div>
     
    
    </div>
    );
};

export default Navbar;
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
    <div  id='navBar' >
      

<nav className='flex justify-content-between ' >
       <div className=' logo my-3 '>
        <img
           src="/logo.jpg"
           className="d-inline-block align-top ms-2"
           alt="React Bootstrap logo"/>
        </div>

        <div onClick={ ()=> setOpen(!open)} className='h-6 w-6 text-white-400 md:hidden'>
        {
            open ?  <XMarkIcon/> : <Bars3Icon/>
        }
        </div>
       
        <ul id='navLink' className= {`md:flex justify-center gap-5 md:static absolute duration-300 ease-in w-full ${open? 'top-4' : 'top-[-150px]'  }`}>
            {
            
              routes.map(route => <Link route={route} key={route.id}></Link>)
                   
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
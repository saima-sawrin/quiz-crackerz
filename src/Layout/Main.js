import React from 'react';
import { Outlet } from 'react-router-dom';
import Topics from '../components/Topics/Topics';
import Navbar from '../components/NavBar/Navbar';

const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
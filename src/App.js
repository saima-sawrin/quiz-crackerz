import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Navbar></Navbar>
    },
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Courses></Courses>
    },
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

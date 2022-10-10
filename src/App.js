import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Navbar></Navbar>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

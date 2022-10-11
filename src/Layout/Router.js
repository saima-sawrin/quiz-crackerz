import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import Topics from "../components/Topics/Topics";
import Navbar from "../components/NavBar/Navbar";
import Statistics from "../components/Statistics/Statistics";
import Main from './Main';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:
        [
            {
                path:'/' , 
                loader: async()=>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz`)
                  }, 
                element: <Topics></Topics>
            },
             {
                path:'/statistics',
                element: <Statistics></Statistics>
                
             },
             {
                path:'/blog',
                element: <Blog></Blog>
                
             },

        ]

    
      },
     

    
    // {
    //     path:'/country/:name',
    //     loader: async({params}) =>{
    //       return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
    //     },
    //     element: <Country></Country>
    // }
]);
export default router;
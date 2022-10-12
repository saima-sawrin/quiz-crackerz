import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Main from './Main';
import Quiz from "../components/Quiz/Quizes";
import PageNotFound from "../components/PageNotFound/PageNotFound";

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
             {
                path:'/quiz/:id',
                loader: async({params})=>{
                    return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)

                },
                element: <Quiz></Quiz>
                
             },

        ],
      
    
      },
     {
        path:'*',
        element:<PageNotFound></PageNotFound>
     }

]);
export default router;
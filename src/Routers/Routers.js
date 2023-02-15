import { createBrowserRouter } from "react-router-dom";
import AllPosts from "../Pages/AllPosts/AllPosts";
import Article from "../Pages/Article/Article";
import Education from "../Pages/Education/Education";
import Event from "../Pages/Event/Event";
import Home from "../Pages/Home/Home";
import Job from "../Pages/Job/Job";
import Main from "../Pages/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllPosts></AllPosts>
                    },
                    {
                        path: '/article',
                        element: <Article></Article>
                    },
                    {
                        path: '/event',
                        element: <Event></Event>
                    },
                    {
                        path: '/education',
                        element: <Education></Education>
                    },
                    {
                        path: '/job',
                        element: <Job></Job>
                    },
                ]
            }, 
            
        ]
    }
])

export default router;
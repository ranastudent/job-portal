import {
      createBrowserRouter,
     
    } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/home/Register/Register";
import SignIn from "../pages/home/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/jobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";




    const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>route not found</h2>,
        children: [
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
                  path:'/jobs/:id',
                  element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                  loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                  path:'/jobApply/:id',
                  element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                  path:'register',
                  element:<Register></Register>
            },
            {
                  path:'signin',
                  element:<SignIn></SignIn>
            },
           
        ]
      },
    ]);

    export default router
    
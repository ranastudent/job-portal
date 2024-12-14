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
import MyApplication from "../pages/MyApplications/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostesJob from "../pages/MyPostesJob/MyPostesJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";




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
                  path:'/addJob',
                  element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
            },
            {
                  path:'/myPostJob',
                  element:<PrivateRoute><MyPostesJob></MyPostesJob></PrivateRoute>,
            },
            {
                  path:'/myApplications',
                  element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
            },
            {
                  path:'/viewApplication/:job_id',
                  element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                  loader:({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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
    
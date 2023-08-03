import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Layout/Home/Home';
import AddTask from './Layout/AddTask/AddTask';
import TaskList from './Layout/TaskList/TaskList';
import AboutUs from './Layout/About/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://assignment-mrs-server.vercel.app/tasks`)
      },
      {
        path: '/addTask',
        element: <AddTask></AddTask>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/taskList',
        element: <TaskList></TaskList>,
        loader: () => fetch(`https://assignment-mrs-server.vercel.app/tasks`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

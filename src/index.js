import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';


const router = createBrowserRouter([
  {path: "/", element: <Popular/>,}, 
  {path:"/toprated",element: <TopRated/>},
  {path:"/upcoming",element: <Upcoming/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

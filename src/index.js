import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Search/Home';
// import Home from './Meal/Home';
import "./Search/style.css"
// import "./Meal/style.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 
    <>
    <Home/>
    <ToastContainer />
    </>
 
);


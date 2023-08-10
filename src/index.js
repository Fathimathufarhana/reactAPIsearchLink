import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Search/Home';
import "./Search/style.css"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Search/Product';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/product/:id' element={<Product />} ></Route>
            </Routes>
        </BrowserRouter>
         {/* <Home/> */}
    <ToastContainer />
    </>

);


// import Home from './Meal/Home';
// import "./Meal/style.css";
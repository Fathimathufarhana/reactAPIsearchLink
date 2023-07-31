import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Router } from 'react-router-dom';

import Layout from './Layout';
import Application from './facebook/Application';
import Password from './facebook/Password';
import Security from './facebook/Security';
import Account from './facebook/Account';
import Notification from './facebook/Notification';
import Fetch from './Fetch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path='/' element={<Layout />}>
    //                 <Route path='/application' element={<Application />}></Route>
    //                 <Route path='/password' element={<Password />}></Route>

    //                 <Route path='/Security' element={<Security />}></Route>

    //                 <Route path='/notification' element={<Notification />}></Route>

    //                 <Route path='' element={<Account />}></Route>


    //         </Route>
    //     </Routes>
    // </BrowserRouter >

    // </>
<Fetch/>
    


);



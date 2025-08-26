import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import UserForms2 from './components/formik.jsx'
import PassApp from './components/passwordGenerator.jsx'
import FromButton from './App.jsx'



createRoot(document.getElementById('root')).render(
    <StrictMode>
<BrowserRouter>
<Routes>
    <Route path='/' element={ <FromButton/> }/>
    <Route path='/formik' element={<UserForms2/>} />
    <Route path='/passwordgenerator' element={<PassApp/> }/>



</Routes>
</BrowserRouter>

    </StrictMode>
);

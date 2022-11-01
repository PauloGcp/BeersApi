import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import List from './List'
import About from './About'

export default () => {
    return(
        <Routes>
            <Route path='list' element={<List/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/' element={<List/>}/>
            <Route path='*' element = {<Navigate to={'/'}/>}/>
        </Routes>
    )
}
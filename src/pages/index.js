import React from "react";
import { Route, Routes } from "react-router-dom";

import List from './List'
import About from './About'

export default () => {
    return(
        <Routes>
            <Route path='list' element={<List/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/' element={<List/>}/>
        </Routes>
    )
}
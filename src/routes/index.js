import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../code/LandPage';
import Contact from '../code/subPages/Contact';
import Experience from '../code/subPages/Exp';
import Work from '../code/subPages/Work';

export default function Routss() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path='/Experience' element={<Experience />} />
                    <Route path='/Work' element={<Work />} />
                    <Route path='/Contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
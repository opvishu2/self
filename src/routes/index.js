import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import LandPage from '../code/LandPage';
import Home from '../code/LandPage';
import Contact from '../code/subPages/Contact';
import Experience from '../code/subPages/Exp';
import Work from '../code/subPages/Work';

export default function Routss() {
    return (
        <div>
            <BrowserRouter>
                {/* <>
                    <Link to="/Experience">EXP</Link>
                </>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/Experience' element={<Experience />} />
                    <Route path='/Work' element={<Work />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes> */}
                <LandPage />
            </BrowserRouter>
        </div>
    )
}










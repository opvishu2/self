import React, { useState } from 'react'
import './LandPage.css';
import self from '../assets/images/self.png'
import Nav from './Nav';


export default function LandPage() {
    const [nav_view, toogleNavView] = useState(false)
    return (
        <div className={nav_view == "left" ? "App" : "App_top"}>
            <Nav nav_view={nav_view} toogleNavView={toogleNavView} />
            <div className='content'>
                <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
            </div>
        </div>
    )
}

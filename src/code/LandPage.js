
import React, { useState } from 'react'
import './LandPage.css';
import self from '../assets/images/self.png'
import Nav from './Nav';
import { CSSTransition } from 'react-transition-group';


export default function LandPage() {
    const [top_nav, toggleTopNav] = useState(false)
    const [nav, setNav] = useState(false)
    return (<>
        {
            // !top_nav && !nav &&
            <div className={nav == "left" ? "App" : "App_top"}>
                <Nav top_nav={top_nav} toggleTopNav={toggleTopNav} nav={nav} setNav={setNav} />

                {/* <CSSTransition in={top_nav} timeout={300} classNames="content2" unmountOnExit>
                    <div className='content2'>
                        <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                        <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                    </div>
                </CSSTransition> */}
                <CSSTransition in={nav == "top"} timeout={1000} classNames="content" unmountOnExit onExit={() => toggleTopNav(true)} >
                    <div className='content'>
                        <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                        <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                    </div>
                </CSSTransition>
                {nav != "top" &&
                    <div className='content2'>
                        <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                        <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                    </div>

                }
            </div>
        }
    </>
    )
}


import React, { useState } from 'react'
import './LandPage.css';
import self from '../assets/images/self.png'
import Nav from './Nav';
import { CSSTransition } from 'react-transition-group';


export default function LandPage() {
    const [top_nav, toggleTopNav] = useState(false)
    const [side_bar, toggleSideBar] = useState(false)
    return (<>
        {!top_nav && !side_bar &&
            <div className={"App"}>
                <Nav top_nav={top_nav} toggleTopNav={toggleTopNav} side_bar={side_bar} toggleSideBar={toggleSideBar} />
                <div className='content'>
                    <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                </div>
            </div>
        }
        <CSSTransition
            in={side_bar}
            // nodeRef={nodeRef}
            timeout={412}
            classNames="App"
            unmountOnExit
            onEnter={() => toggleTopNav(false)}
        // onExited={() => { toggleTopNav(true) }}
        >
            <div className={"App"}>
                <Nav top_nav={top_nav} toggleTopNav={toggleTopNav} side_bar={side_bar} toggleSideBar={toggleSideBar} />
                <div className='content'>
                    <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition
            in={top_nav}
            // nodeRef={nodeRef}
            timeout={412}
            classNames="App_top"
            unmountOnExit
            onEnter={() => toggleSideBar(false)}
            onExited={() => { toggleSideBar(true) }}
        >
            <div className={"App_top"}>
                <Nav top_nav={top_nav} toggleTopNav={toggleTopNav} side_bar={side_bar} toggleSideBar={toggleSideBar} />
                <div className='content'>
                    <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
                </div>
            </div>
        </CSSTransition>
    </>
    )
}

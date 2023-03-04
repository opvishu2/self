
import React, { useState } from 'react'
import './LandPage.css';
import self_ng1 from '../assets/images/self_ng1.png'
import self_dy1 from '../assets/images/self_dy1.png'
import Nav from './Nav';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';
import { ActionChangeTheme } from '../global_store/only_reducer';


export default function LandPage(props) {
    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const dispatch = useDispatch()
    const [top_nav, toggleTopNav] = useState(false)
    const [nav, setNav] = useState("top")

    const findImage = () => {
        if (theme == "ng1") {
            return self_ng1
        } else {
            return self_dy1
        }
    }


    console.warn("process.env == ", process.env)

    return (<>
        <div className={nav == "left" ? "App" : "App_top"} style={{ background: colors[theme].bg1 }}>
            <Nav top_nav={top_nav} toggleTopNav={toggleTopNav} nav={nav} setNav={setNav} />
            <CSSTransition in={nav == "top"} timeout={1000} classNames="content" unmountOnExit onExit={() => toggleTopNav(true)} >
                <div className='content'>
                    <div className='left_c' style={{ color: colors[theme].style1 }}><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={findImage()}></img></div>
                </div>
            </CSSTransition>
            {nav != "top" &&
                <div className='content'>
                    <div className='left_c' style={{ color: colors[theme].style1 }}><h1 className='typed'>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={findImage()}></img></div>
                </div>

            }
        </div>
    </>
    )
}

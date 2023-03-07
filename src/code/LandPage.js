

import React, { useEffect, useRef, useState, } from 'react'
import './LandPage.css';
import self_ng1 from '../assets/images/self_ng1.png'
import self_dy1 from '../assets/images/self_dy1.png'
import Nav from './Nav';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';

let selff_ng1 = self_ng1
let selff_dy1 = self_dy1

export default function LandPage(props) {
    const dispatch = useDispatch()
    const [top_nav, toggleTopNav] = useState(false)
    // const [timeout, setTime] = useState(false)
    // const [content, setContent] = useState(true)
    const [nav, setNav] = useState("top")
    const [active_side_menu, setSideMenu] = useState(NaN)
    const YscrollRef = useRef(undefined)
    const [y_scroll, setYScroll] = useState(0)

    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const n_mode = useSelector((state) => state.AllReducerCombined.themeChangeReducers.night_mode)
    let { bg_day, bg_night, style1, style2, style3, font1, font2, font3 } = colors[theme]
    let BG = n_mode ? bg_night : bg_day

    const handleImage = () => {
        if (theme == "thm1") {
            return selff_ng1
        } else {
            return selff_dy1
        }
    }


    const onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = YscrollRef.current.scrollTop
        // console.log("REFF.curent.scrollTop : ", YscrollRef.current.scrollTop)
        // console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        // setYScroll(scrollTop)
        if (scrollTop > 40) {
            if (nav != "top") {
                setYScroll(scrollTop)
                setNav("top")
            }
        }
        if (nav != "left" && scrollTop <= 40) {
            setYScroll(scrollTop)
        }
    }


    console.warn("process.env == ", process.env)
    return (<>
        <div className={nav == "left" ? "App" : "App_top"} style={{ background: bg_night, fontFamily: font1 }} ref={YscrollRef} onScroll={onScroll}>
            {/* <div className={nav == "left" ? "App" : "App_top"}> */}
            <Nav
                active_side_menu={active_side_menu}
                setSideMenu={setSideMenu}
                y_scroll_check={y_scroll > 40 ? false : true}
                top_nav={top_nav} toggleTopNav={toggleTopNav}
                nav={nav}
                setNav={setNav}
            />
            <CSSTransition in={nav == "top"} timeout={1000} classNames="content" unmountOnExit onExit={() => toggleTopNav(true)} >
                <div className='content'>
                    <div className='left_c' style={{ color: style1 }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    {/* <div className='left_c' ><h1 className='typed'>Hi, Vishal M. here!</h1></div> */}
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>
            </CSSTransition>
            {nav != "top" &&
                <div className='content'>
                    {/* <div className='content' style={{ opacity: content ? 1 : 0 }}> */}
                    <div className='left_c' style={{ color: style1 }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    {/* <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div> */}
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>

            }
        </div>
    </>
    )
}

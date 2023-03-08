

import React, { useRef, useState, } from 'react'
import './LandPage.css';
import self_thm1 from '../assets/images/self_thm1.png'
import self_thm2 from '../assets/images/self_thm2.png'
import self_thm3 from '../assets/images/self_thm3.png'
import self_thm4 from '../assets/images/self_thm4.png'
import Nav from './Nav';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';
import TestClass from './TestClass';
import TestFunctional from './testFunctional';
import { MdOutlineDarkMode } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ActionChangeTheme, ActionChangeDayNight } from '../global_store/theme_reducer';
import { useMediaQuery } from 'react-responsive';



let selff_thm1 = self_thm1
let selff_thm2 = self_thm2
let selff_thm3 = self_thm3
let selff_thm4 = self_thm4


export default function LandPage(props) {
    const dispatch = useDispatch()
    const [top_nav, toggleTopNav] = useState(false)
    // const [timeout, setTime] = useState(false)
    // const [content, setContent] = useState(true)
    const [nav, setNav] = useState("top")
    const [setting_modal, setSettingModal] = useState(false)
    const [active_side_menu, setSideMenu] = useState(NaN)
    const YscrollRef = useRef(undefined)
    const settingRef = useRef(null)
    const [y_scroll, setYScroll] = useState(0)
    const is_mobile1 = useMediaQuery({ query: `(max-width: 549px)` });
    const is_mobile2 = useMediaQuery({ query: `(max-width: 300px)` });
    const side_setting_off = useMediaQuery({ query: `(min-width: 1921px)` });

    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const n_mode = useSelector((state) => state.AllReducerCombined.themeChangeReducers.night_mode)
    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3 } = colors[theme]
    let BG = n_mode ? bg_night : bg_day
    let text_color = n_mode ? style1 : style4

    const handleImage = () => {
        if (theme == "thm1") {
            return selff_thm1
        } else if (theme == "thm2") {
            return selff_thm2
        } else if (theme == "thm3") {
            return selff_thm3
        } else {
            return selff_thm4
        }
    }


    const onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = YscrollRef.current.scrollTop
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


    const handleSetting = () => {
        setSettingModal(true)
        console.warn("22")
        // handleThemeChange()
    }


    const handleThemeChange = (thm) => {
        dispatch(ActionChangeTheme({ active_theme: thm }))
    }


    const handleDayNight = () => {
        dispatch(ActionChangeDayNight({ n_mode: !n_mode }))
    }

    console.warn("process.env == ", process.env)
    return (<>
        {/* <TestFunctional /> */}
        {/* <TestClass /> */}
        <div onClick={() => { setting_modal && setSettingModal(false) }}
            className={nav == "left" ? "App" : "App_top"}
            style={{ background: BG, fontFamily: font1, opacity: setting_modal ? 0.95 : 1 }}
            ref={YscrollRef} onScroll={onScroll}

        >
            <Nav
                active_side_menu={active_side_menu}
                setSideMenu={setSideMenu}
                y_scroll_check={y_scroll > 40 ? false : true}
                top_nav={top_nav} toggleTopNav={toggleTopNav}
                nav={nav}
                setNav={setNav}
                handleSetting={handleSetting}
            />
            <CSSTransition
                setting_modal={setting_modal}
                setSettingModal={setSettingModal}
                in={nav == "top"} timeout={1000}
                classNames="content"
                unmountOnExit
                onExit={() => toggleTopNav(true)}
            >
                <div className='content'>
                    <div className='left_c' style={{ color: text_color }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    {/* <div className='left_c' ><h1 className='typed'>Hi, Vishal M. here!</h1></div> */}
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>
            </CSSTransition>
            {nav != "top" &&
                <div className='content'>
                    {/* <div className='content' style={{ opacity: content ? 1 : 0 }}> */}
                    <div className='left_c' style={{ color: text_color }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    {/* <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div> */}
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>}

        </div>

        <CSSTransition
            in={setting_modal} timeout={500}
            classNames="setting_modal"
            unmountOnExit
            onExit={""} >
            <div className='setting_modal' style={{
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "20vw",
                minWidth: "200px",
                height: "15vh",
                maxHeight: "150px",
            }}>
                <div style={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
                    <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "90%", width: "100%", }}>
                        {<div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%", height: "60%", borderRadius: "15px", background: text_color, opacity: 0.1 }}></div>}
                        <div style={{ zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%", height: "60%", borderRadius: "15px", }}>
                            {
                                Object.keys(colors).map((thme, id) => (
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "25%", cursor: "pointer" }}
                                        onClick={() => { handleThemeChange(thme) }}
                                    >
                                        <div style={{ height: "40px", width: "20px", borderRadius: "20px 0px 0px 20px", background: n_mode ? colors[thme].bg_night : colors[thme].bg_day }}></div>
                                        <div style={{ height: "40px", width: "20px", borderRadius: "0px 20px 20px 0px", background: colors[thme].style1 }}></div>
                                    </div>
                                )
                                )
                            }
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", alignItems: "flex-end", height: "30%", width: is_mobile1 ? "40%" : "20%", }}>
                            <MdOutlineDarkMode color={text_color} size={30} onClick={handleDayNight} style={{ cursor: 'pointer' }} />
                            <AiOutlineDoubleRight color={text_color} size={30} onClick={() => { setSettingModal(false) }} style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
                {/* <div style={{ width: "30%", borderBottom: `1px dashed ${style1}`, }} /> */}
            </div>
        </CSSTransition>
    </>
    )
}

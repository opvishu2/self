


import React, { useLayoutEffect, useRef, useState, } from 'react'
import './LandPage.css';
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
import Experience from './subPages/Exp';
import Work from './subPages/Work';
import Contact from './subPages/Contact';
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import About from './subPages/About';


export default function LandPage(props) {
    const dispatch = useDispatch()
    const [top_nav, toggleTopNav] = useState(false)
    const [curr_route_page, setRoute] = useState(0)
    const [nav, setNav] = useState("top")
    const [setting_modal, setSettingModal] = useState(false)
    const [active_menu, setActiveMenu] = useState(NaN)
    const pages = ["About", "Experience", "Work", "Contact"]
    const YscrollRef = useRef(undefined)
    const settingRef = useRef(null)
    const [y_scroll, setYScroll] = useState(0)
    const is_mobile1 = useMediaQuery({ query: `(max-width: 549px)` });
    const is_mobile2 = useMediaQuery({ query: `(max-width: 300px)` });
    const side_setting_off = useMediaQuery({ query: `(min-width: 1921px)` });
    const navigate = useNavigate();
    const [discrete_scroll_value, setDiscreteScroll] = useState(40)


    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const n_mode = useSelector((state) => state.AllReducerCombined.themeChangeReducers.night_mode)
    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3 } = colors[theme]
    let BG = n_mode ? bg_night : bg_day
    let text_color = n_mode ? style1 : style4


    useLayoutEffect(() => {
        Top()
    }, [])

    useLayoutEffect(() => {
        if (!nav && y_scroll > 40) { // if user scrolls down when only TRIPLE-BAR is visible, So setting Top NAV ON 
            setNav("top")
        }
    }, [y_scroll])

    const Top = () => {
        navigate({ pathname: "/" })
        setActiveMenu(0)
        handleNavClickScroll("About")
    }

    const handleNavClickScroll = (screen) => {
        const element = document.getElementById(screen);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // console.log("window.innerWidth :", window.innerWidth)

    const handleScroll = async (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        const before_scroll_margin = 100
        let route_index = Math.abs(Math.trunc((e.target.scrollHeight - e.target.scrollTop - before_scroll_margin) / e.target.clientHeight) - 3)

        if (Math.trunc(route_index) !== curr_route_page) { // For changing route name in sync with scroll
            navigate({ pathname: route_index == 0 ? "/" : pages[route_index] })
            setActiveMenu(route_index)
            setRoute(route_index)
        }

        const scrollY = window.scrollY
        const scrollTop = YscrollRef.current.scrollTop


        // console.log("e : ", e)
        // console.log("bottom : ", bottom)
        // console.log("e.target.scrollHeight : ", e.target.scrollHeight)
        // console.log("e.target.scrollTop : ", e.target.scrollTop)
        // console.log("e.target.scrollBottom : ", e.target.scrollBottom)
        console.log("e.target.clientHeight : ", e.target.clientHeight)
        // console.warn("route_index : ", route_index)
        // console.warn("curr_route_page : ", curr_route_page)
        // console.log("Scrolltop : ", scrollTop)
        // console.log("YscrollRef.current.scrollHeight : ", YscrollRef.current.scrollHeight)

        if (nav == "left") { // If scroll detected hide SideBar
            if (scrollTop > 40) {
                if (nav != "top") {
                    await setYScroll(scrollTop)
                    await setActiveMenu(active_menu)
                    setNav("top")
                }
            }
        }
        if (nav != "top") {
            setYScroll(scrollTop)
        }
        if (nav == "top" && scrollTop == 0) { // to make top nav's side button visible (if user scrolls top of screen and if top nav is visible)
            setYScroll(0)
        }

        controlledRerenderOnScroll(scrollTop)
    }

    const controlledRerenderOnScroll = (scrollTop) => { // for re-rendering only once in each scroll range
        const quantization = 100
        if (Math.abs(scrollTop - discrete_scroll_value) >= quantization) {
            setDiscreteScroll(Math.trunc(scrollTop / quantization) * quantization)
            setYScroll(scrollTop)
        }
    }


    const handleSetting = () => {
        setSettingModal(true)
    }


    const handleThemeChange = (thm) => {
        dispatch(ActionChangeTheme({ active_theme: thm }))
    }


    const handleDayNight = () => {
        dispatch(ActionChangeDayNight({ n_mode: !n_mode }))
    }


    console.warn("process.env == ", process.env)
    // console.log("nav : ", nav)
    // console.log("y_scroll : ", y_scroll)
    // console.log("show_triple_bar : ", y_scroll, y_scroll > 40 ? false : true)
    return (<div className="container" ref={YscrollRef} onScroll={handleScroll}>
        {/* <TestFunctional /> */}
        {/* <TestClass /> */}
        <div onClick={() => { setting_modal && setSettingModal(false) }}
            className={nav == "left" ? "App" : "App_top"} id="About"
            style={{ background: BG, fontFamily: font1, opacity: setting_modal ? 0.95 : 1 }}
        >
            <Nav
                active_menu={active_menu}
                setActiveMenu={setActiveMenu}
                top_nav={top_nav} toggleTopNav={toggleTopNav}
                nav={nav}
                setNav={setNav}
                handleSetting={handleSetting}
                handleNavClickScroll={handleNavClickScroll}
                Top={Top}
                show_triple_bar={y_scroll > 40 ? false : true}
                y_scroll={y_scroll}
                pages={pages}
                is_mobile1={is_mobile1}
                is_mobile2={is_mobile2}
                side_setting_off={side_setting_off}
            />
            {nav == "left" && <Routes>
                <Route path="/" element={<About
                    nav={nav}
                    setting_modal={setting_modal}
                    text_color={text_color}
                    colors={colors}
                    toggleTopNav={toggleTopNav}
                    theme={theme}
                />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/Work' element={<Work />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>}

            {nav !== "left" &&
                <>
                    <About
                        nav={nav}
                        setting_modal={setting_modal}
                        text_color={text_color}
                        colors={colors}
                        toggleTopNav={toggleTopNav}
                        theme={theme}
                    />
                    <Experience />
                    <Work />
                    <Contact />
                </>
            }
        </div>


        {!is_mobile1 &&
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
                    position: "absolute",
                    top: "9vh",
                    right: "5vh",
                    zIndex: 2,
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
                </div>
            </CSSTransition>}


        {is_mobile1 &&
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
                    justifyContent: "center",
                    width: "100vw",
                    minWidth: "300px",
                    height: "15vh",
                    maxHeight: "150px",
                    position: "absolute",
                    bottom: "2vh",
                    zIndex: 2,
                }}>
                    <div style={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", width: "20vw", minWidth: "300px" }}>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", alignItems: "flex-end", height: "30%", marginRight: 20 }}>
                            <MdOutlineDarkMode color={text_color} size={30} onClick={handleDayNight} style={{ cursor: 'pointer' }} />
                        </div>
                        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%", width: "100%", }}>
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

                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", alignItems: "flex-end", height: "30%", marginLeft: 20 }}>
                            <AiOutlineDoubleRight color={text_color} size={30} onClick={() => { setSettingModal(false) }} style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
            </CSSTransition>}
    </div>
    )
}

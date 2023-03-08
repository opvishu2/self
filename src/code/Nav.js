

import React, { useLayoutEffect, useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri"
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';
import { ActionChangeTheme, ActionChangeDayNight } from '../global_store/theme_reducer';
import logo_thm_2 from '../assets/images/logo_thm_2.png'
import logo_thm1_dy from '../assets/images/logo_thm1_dy.png'
import { base_url } from '../config/env'
import { useMediaQuery } from 'react-responsive';

let logoo_thm_2 = logo_thm_2
let logoo_thm1_dy = logo_thm1_dy


export default function Nav(props) {
    const cv = 'https://gurf-vi-s3-bucket1.s3.ap-south-1.amazonaws.com/cv/CvVishalM.pdf'

    const { collapseSidebar } = useProSidebar();
    const dispatch = useDispatch()
    const is_mobile1 = useMediaQuery({ query: `(max-width: 549px)` });
    const is_mobile2 = useMediaQuery({ query: `(max-width: 300px)` });



    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const n_mode = useSelector((state) => state.AllReducerCombined.themeChangeReducers.night_mode)
    let { bg_day, bg_night, style1, style2, style3, font1, font2, font3 } = colors[theme]
    let BG = n_mode ? bg_night : bg_day

    const handleTopNavButtonsStyle = (id) => {
        let styles = { bg: "", clr: "", brdr: "" }
        styles.bg = props.active_side_menu == id ? style3 : ""
        styles.brdr = `${theme == "thm1" ? "2px" : "1.5px"} solid ${style3}`
        styles.clr = props.active_side_menu == id ? bg_night : theme == "thm2" ? style1 : ""

        return styles
    }
    const handleSideNavButtonsStyle = (id) => {
        let styles = { bg: "", clr: "", brdr: "" }
        styles.brdr = props.active_side_menu == id ? `2px solid ${style1}` : ""

        return styles
    }


    const decideClassNames = (className) => {
        let final_name = ""

        if (className == "nav1_top") {
            final_name = theme == "thm1" ? 'nav1_top' : "nav1_top2"
        }

        return final_name
    }


    const handleThemeChange = () => {
        dispatch(ActionChangeTheme({ active_theme: theme == "thm1" ? "thm2" : "thm1" }))
    }


    const handleDayNight = () => {
        dispatch(ActionChangeDayNight({ n_mode: !n_mode }))
    }


    const handleImage = () => {
        if (theme == "thm1") {
            return logoo_thm1_dy
        } else {
            return logoo_thm_2
        }
    }


    // useLayoutEffect(() => {
    //     window.addEventListener("resize", handleResolutionChanges) //activating the listner from very begginging
    // })


    // const handleResolutionChanges = () => {
    //     if (window.innerWidth < 550) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }


    // const download = () => {
    //     // fetch(`${base_url}/dwn`)
    //     fetch(`https://gurf-vi-s3-bucket1.s3.ap-south-1.amazonaws.com/cv/CvVishalM.pdf`)
    //         .then(response => {
    //             response.blob().then(blob => {
    //                 let url = window.URL.createObjectURL(blob);
    //                 let a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = 'CvVishalM.pdf';
    //                 a.click();
    //             });
    //         });
    // }


    console.log("re-rendering ,window.innerWidt:", is_mobile1)
    return (
        <div className={"nav"}>
            {/* <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }} onClick={handleDayNight}>day</div>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }} onClick={handleDayNight}>night</div>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>1</div>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>2</div>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>3</div> */}
            {/* <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }} onClick={() => { setIsMobile(false) }} >4</div> */}
            <div className={'nav_img_contn'} >
                {(!props.nav && props.y_scroll_check) && <HiOutlineBars3CenterLeft className='nav_btn' size={"2.5vw"} color={style3}
                    onClick={() => { props.setNav("left") }}
                />}

            </div>

            <CSSTransition in={props.nav == "top"} timeout={1000} classNames="nav_top" unmountOnExit>
                <div className={'nav_top'} style={{ color: style3 }}>
                    {!is_mobile2 && <div className='sign_top'>
                        <img className='nav_logo' src={handleImage()} />
                    </div>}
                    <div className='top_nav_right' style={{ fontFamily: font2 }}>
                        <div className={'nav_top_menus'}>
                            {!is_mobile1 && <IoIosArrowDropleftCircle className={'hide'} size={"2vw"} color={theme == "thm1" ? style3 : style1}
                                onClick={() => { props.setNav(false); }}
                            />}
                            {is_mobile1 &&
                                <a className='cv' href={cv} target="_blank"><RiFileDownloadFill size={"6vw"} /></a>
                            }
                            {is_mobile1 && <FaReact className='r_icon' size={"6vw"} color={style1} onClick={props.handleSetting} />}
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className={decideClassNames("nav1_top")}
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{ background: handleTopNavButtonsStyle(id).bg, color: handleTopNavButtonsStyle(id).clr }}
                                >{el}</div>
                            )}
                            {!is_mobile1 && <div className={decideClassNames("nav1_top")}
                                onClick={() => { props.setSideMenu(4) }}
                                style={{ border: handleTopNavButtonsStyle(4).brdr, background: handleTopNavButtonsStyle(4).bg, color: handleTopNavButtonsStyle(4).clr, }}
                            >
                                <a className='cv' href={cv} target="_blank">Resume</a>
                            </div>}
                            {!is_mobile1 && <FaReact className='r_icon' size={"3vw"} color={style1} onClick={props.handleSetting} />}
                        </div>
                    </div>
                </div>
            </CSSTransition >

            {<div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: BG, color: style1, fontFamily: font3, }}>
                <Sidebar className='sidebar_body' style={{ border: 0 }} defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500}>
                    <div className='sidebar_main' style={{ background: BG }}>
                        <div className='bar_upper_portion'>
                            <div className='side_settings' >
                                <HiBarsArrowUp color={style3} className='arrow_up' size={30}
                                    onClick={() => { collapseSidebar(); setTimeout(() => { props.setNav("top") }, 501) }}
                                />
                                <div onClick={handleThemeChange}>
                                    <FaReact color={style1} size={20} />
                                </div>
                            </div>
                            <div className='bar_logo_cont'>
                                <img className='bar_logo' src={handleImage()} />
                            </div>
                        </div>
                        <div className='bar_middle_portion'
                        // menuItemStyles={{ button: { '&:hover': { backgroundColor: style3, color: bg_night, borderRadius: "8px" }, } }}
                        >
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{
                                        border: handleSideNavButtonsStyle(id).brdr
                                        //  color: props.active_side_menu == id ? bg_night : "", 
                                    }}
                                > {el}
                                </div>)}
                            <div key={4} active={true} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                style={{
                                    border: handleSideNavButtonsStyle(4).brdr
                                    // color: props.active_side_menu == 4 ? bg_night : "", 
                                }}
                            >
                                <a className='cv_side' href={cv} target="_blank"
                                    onClick={() => { props.setSideMenu(4) }}
                                >Resume</a>
                            </div>
                        </div>
                        <div className='bar_bottom_protion' >
                        </div>
                    </div>
                </Sidebar>
            </div>}

        </div>
    )
}

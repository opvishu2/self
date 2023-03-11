

import React, { useLayoutEffect, useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { RiFileDownloadFill } from "react-icons/ri"
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';
import logo_thm_2 from '../assets/images/logo_thm_2.png'
import logo_thm_1_day from '../assets/images/logo_thm_1_day.png'
import logo_thm_1_night from '../assets/images/logo_thm_1_night.png'
import logo_thm_3 from '../assets/images/logo_thm_3.png'
import logo_thm_4 from '../assets/images/logo_thm_4.png'
import logo_thm_2_phone from '../assets/images/logo_thm_2_phone.png'
import logo_thm_1_day_phone from '../assets/images/logo_thm_1_day_phone.png'
import logo_thm_1_night_phone from '../assets/images/logo_thm_1_night_phone.png'
import logo_thm_3_phone from '../assets/images/logo_thm_3_phone.png'
import logo_thm_4_phone from '../assets/images/logo_thm_4_phone.png'
import { base_url } from '../config/env'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


// let logoo_thm_2 = logo_thm_2
// let logoo_thm_1_day = logo_thm_1_day
// let logoo_thm_1_night = logo_thm_1_night
// let logoo_thm_3 = logo_thm_3
// let logoo_thm_4 = logo_thm_4
// let logoo_thm_2_phone = logo_thm_2_phone
// let logoo_thm_1_day_phone = logo_thm_1_day_phone
// let logoo_thm_1_night_phone = logo_thm_1_night_phone
// let logoo_thm_3_phone = logo_thm_3_phone
// let logoo_thm_4_phone = logo_thm_4_phone


export default function Nav(props) {
    const cv = 'https://gurf-vi-s3-bucket1.s3.ap-south-1.amazonaws.com/cv/CvVishalM.pdf'

    const { collapseSidebar } = useProSidebar();
    const dispatch = useDispatch()


    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const n_mode = useSelector((state) => state.AllReducerCombined.themeChangeReducers.night_mode)
    let { bg_day, bg_night, style1, style2, style3, style4, style5, font1, font2, font3 } = colors[theme]
    let BG = n_mode ? bg_night : bg_day
    let text_color = n_mode ? style1 : style4

    let logoo_thm_2 = props.is_mobile1 ? logo_thm_2_phone : logo_thm_2
    let logoo_thm_1_day = props.is_mobile1 ? logo_thm_1_day_phone : logo_thm_1_day
    let logoo_thm_1_night = props.is_mobile1 ? logo_thm_1_night_phone : logo_thm_1_night
    let logoo_thm_3 = props.is_mobile1 ? logo_thm_3_phone : logo_thm_3
    let logoo_thm_4 = props.is_mobile1 ? logo_thm_4_phone : logo_thm_4

    const handleTopNavButtonsStyle = (id) => {
        let styles = { bg: "", clr: "", brdr: "" }
        styles.bg = props.active_menu == id ? style3 : ""
        styles.brdr = `${theme == "thm1" ? "2px" : "2px"} solid ${text_color}`
        styles.clr = props.active_menu == id ? n_mode ? BG : style5 : text_color

        return styles
    }
    const handleSideNavButtonsStyle = (id) => {
        let styles = { bg: "", clr: "", brdr: "" }
        styles.brdr = props.active_menu == id ? `2px solid ${text_color}` : ""

        return styles
    }


    const decideClassNames = (className) => {
        let final_name = ""

        if (className == "nav1_top") {
            final_name = theme == "thm1" ? 'nav1_top' : "nav1_top2"
        }

        return final_name
    }


    const handleImage = () => {
        if (theme == "thm1") {
            return n_mode ? logoo_thm_1_night : logoo_thm_1_day
        } else if (theme == "thm2") {
            return logoo_thm_2
        } else if (theme == "thm3") {
            return logoo_thm_3
        } else if (theme == "thm4") {
            return logoo_thm_4
        }
    }


    return (
        <div className={"nav"}>
            <div className={'nav_img_contn'} >
                {(!props.nav && props.show_triple_bar) && <HiOutlineBars3CenterLeft className='nav_btn' size={"2.5vw"} color={text_color}
                    onClick={() => { props.setNav("left") }}
                />}

            </div>

            <CSSTransition in={(props.nav == "top")} timeout={1000} classNames="nav_top" unmountOnExit>
                <div className={'nav_top'} style={{ color: style3, }}>
                    {console.log("window.innerWidth : ", window.innerWidth)}
                    {!props.is_mobile2 && <div className='sign_top' >
                        <img className='nav_logo' style={{ minHeight: props.is_mobile1 ? "30px" : "", position: props.is_mobile1 ? "fixed" : "", left: props.is_mobile1 ? "2vw" : "", top: props.is_mobile1 ? "2vh" : "" }} src={handleImage()} />
                    </div>}
                    <div className='top_nav_right' style={{ fontFamily: font2, position: props.is_mobile1 ? "fixed" : "", left: props.is_mobile1 ? window.innerWidth * 0.45 : "", minWidth: props.is_mobile1 ? window.innerWidth * 0.40 : "", maxWidth: window.innerWidth * 0.50, }}>
                        <div className={'nav_top_menus'}>

                            <div style={{ width: 30, height: "5vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <CSSTransition in={(!props.is_mobile1 && props.show_triple_bar)} timeout={1000} classNames="hide" unmountOnExit>
                                    <IoIosArrowDropleftCircle className={'hide'} size={30} color={text_color}
                                        onClick={() => {
                                            props.setNav(false)
                                            props.Top()
                                        }}
                                    />
                                </CSSTransition >
                            </div>

                            {props.is_mobile1 &&
                                <a className='cv' href={cv} target="_blank"><ImDownload size={28} color={text_color} style={{
                                    position: "fixed", top: "2vh", left: window.innerWidth * 0.25,
                                }} /></a>
                            }
                            {props.pages.map((el, id) =>
                                <Link to={el == "About" ? "/" : el} key={id} className={"nav1_top"}
                                    // background-color: aquamarine;
                                    // color: rgb(13, 25, 28);
                                    onMouseEnter={(e) => { if (id !== props.active_menu) { e.target.style.color = BG; e.target.style.background = style3 } }}
                                    onMouseLeave={(e) => { if (id !== props.active_menu) { e.target.style.color = text_color; e.target.style.background = "inherit" } }}
                                    onClick={() => { props.setActiveMenu(id); props.handleNavClickScroll(el) }}
                                    style={{ background: handleTopNavButtonsStyle(id).bg, color: handleTopNavButtonsStyle(id).clr }}
                                >{el}</Link>
                            )}
                            {!props.is_mobile1 && <div className={"nav1_top"}
                                onClick={() => { props.setActiveMenu(4) }}
                                style={{ border: handleTopNavButtonsStyle().brdr }} >
                                {!props.is_mobile1 && < a className='cv' href={cv} target="_blank" style={{ color: text_color }}
                                >Resume</a>}
                            </div>}
                            {!props.is_mobile1 && <FaReact className='r_icon' size={28} color={text_color} onClick={props.handleSetting} />}
                            {props.is_mobile1 && <FaReact className='r_icon' size={33} color={text_color} onClick={props.handleSetting} />}
                        </div>
                    </div>
                </div>
            </CSSTransition >

            {< div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: BG, color: text_color, fontFamily: font3, }
            }>
                <Sidebar className='sidebar_body' style={{ border: 0 }} defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500}>
                    <div className='sidebar_main' style={{ background: BG }}>
                        <div className='bar_upper_portion'>
                            <div className='side_settings' >
                                <HiBarsArrowUp color={text_color} className='arrow_up' size={30}
                                    onClick={() => {
                                        collapseSidebar();
                                        setTimeout(() => { props.setNav("top") }, 501)
                                        setTimeout(() => { props.setNav("top") }, 501)

                                        setTimeout(() => {
                                            props.handleNavClickScroll(`${props.active_menu == 0 ? "/" : `${props.pages[props.active_menu]}`}`)
                                        }, 550);
                                    }}
                                />
                                <div
                                    onClick={props.handleSetting}
                                // onClick={handleThemeChange}
                                >
                                    {!props.side_setting_off && <FaReact color={text_color} size={25} />}
                                </div>
                            </div>
                            <div className='bar_logo_cont'>
                                <img className='bar_logo' src={handleImage()} />
                            </div>
                        </div>
                        <div className='bar_middle_portion'
                        // menuItemStyles={{ button: { '&:hover': { backgroundColor: style3, color: bg_night, borderRadius: "8px" }, } }}
                        >
                            {props.pages.map((el, id) =>
                                <Link to={el == "About" ? "/" : el} key={id} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                    onClick={() => { props.setActiveMenu(id) }}
                                    style={{
                                        border: handleSideNavButtonsStyle(id).brdr,
                                        color: text_color,
                                    }}
                                > {el}
                                </Link>)}
                            <div key={4} active={true} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                style={{
                                    border: handleSideNavButtonsStyle(4).brdr
                                    // color: props.active_menu == 4 ? bg_night : "", 
                                }}
                            >
                                <a className='cv_side' href={cv} target="_blank" style={{ border: 0 }}
                                // onClick={() => { props.setActiveMenu(4) }}
                                >Resume</a>
                            </div>
                        </div>
                        <div className='bar_bottom_protion' >
                        </div>
                    </div>
                </Sidebar>
            </div >}

        </div >
    )
}

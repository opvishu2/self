

import React, { useEffect, useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { useSelector, useDispatch } from 'react-redux'
import { theme_combinations as colors } from '../global_store/theme_combinations';
import { ActionChangeTheme } from '../global_store/only_reducer';
import logo_thm_2 from '../assets/images/logo_thm_2.png'
import logo_thm1_dy from '../assets/images/logo_thm1_dy.png'
import { base_url } from '../config/env'


export default function Nav(props) {

    const cv = 'https://gurf-vi-s3-bucket1.s3.ap-south-1.amazonaws.com/cv/CvVishalM.pdf'

    const { collapseSidebar } = useProSidebar();
    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const dispatch = useDispatch()
    let { bg1, style1, style2, style3, font1, font2, font3 } = colors[theme]

    // let bg =

    const findImage = () => {
        if (theme == "thm1") {
            return logo_thm1_dy
        } else {
            return logo_thm_2
        }
    }




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
    console.log("Y:", props.y_scroll_check)
    return (
        <div className={"nav"}>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>day</div>
            <div style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>night</div>
            <div className={'nav_img_contn'} >
                {(!props.nav && props.y_scroll_check) && <HiOutlineBars3CenterLeft className='nav_btn' size={35} color={style3}
                    onClick={() => { props.setNav("left") }}
                />}

            </div>

            <CSSTransition in={props.nav == "top"} timeout={1000} classNames="nav_top" unmountOnExit>

                <div className={'nav_top'} style={{ color: style3 }}>
                    <div className='sign_top'>
                        <img className='nav_logo' src={findImage()} />
                    </div>
                    <div className='top_nav_right' style={{ fontFamily: font2 }}>
                        <div className={'nav_top_menus'}>
                            {<IoIosArrowDropleftCircle className={'hide'} size={25} color={theme == "thm1" ? style3 : style1}
                                onClick={() => { props.setNav(false); }}
                            />}
                            {/* <FaReact className='r_icon_phone' size={28} color={theme == "thm1" ? style3 : style1} onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "thm1" ? "thm2" : "thm1" })) }} /> */}
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className={theme == "thm1" ? 'nav1_top' : "nav1_top2"}
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{ background: props.active_side_menu == id ? theme == "thm1" ? style1 : style3 : "", color: props.active_side_menu == id ? bg1 : theme == "thm2" ? style1 : "", }}
                                >{el}</div>
                            )}
                            <div className={theme == "thm1" ? 'nav1_top' : "nav1_top2"}
                                onClick={() => { props.setSideMenu(4) }}
                                style={{ border: `${theme == "thm1" ? "2px" : "1.5px"} solid ${style3}`, background: props.active_side_menu == 4 ? theme == "thm1" ? style1 : style3 : "", color: props.active_side_menu == 4 ? bg1 : theme == "thm2" ? style1 : "", }}
                            >
                                {/* <div className='cv_a' onClick={download}>
                                    Resume
                                </div> */}
                                <a className='cv' href={cv} target="_blank">Resume</a>
                            </div>
                            <FaReact className='r_icon' size={28} color={theme == "thm1" ? style3 : style1} onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "thm1" ? "thm2" : "thm1" })) }} />
                        </div>
                    </div>
                </div>
            </CSSTransition >

            {<div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: bg1, color: style1, fontFamily: font3, }}>
                <Sidebar className='sidebar_body' style={{ border: 0 }} defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500}>
                    <div className='sidebar_main' style={{ background: bg1 }}>
                        <div className='bar_upper_portion'>
                            <div className='side_settings' >
                                <HiBarsArrowUp color={style3} className='arrow_up' size={30}
                                    onClick={() => { collapseSidebar(); setTimeout(() => { props.setNav("top") }, 501) }}
                                />
                                <div onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "thm1" ? "thm2" : "thm1" })) }}>
                                    <FaReact color={theme == "thm1" ? style3 : style1} size={20} />
                                </div>
                            </div>
                            <div className='bar_logo_cont'>
                                <img className='bar_logo' src={findImage()} />
                            </div>
                        </div>
                        <div className='bar_middle_portion'
                        // menuItemStyles={{ button: { '&:hover': { backgroundColor: style3, color: bg1, borderRadius: "8px" }, } }}
                        >
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{
                                        border: props.active_side_menu == id ? `2px solid ${style1}` : "",
                                        //  color: props.active_side_menu == id ? bg1 : "", 
                                    }}
                                > {el}
                                </div>)}
                            <div key={4} active={true} className={theme == "thm1" ? 'side_item' : "side_item2"}
                                style={{
                                    border: props.active_side_menu == 4 ? `2px solid ${style1}` : "",
                                    // color: props.active_side_menu == 4 ? bg1 : "", 
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

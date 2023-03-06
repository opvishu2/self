

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
import black_logo from '../assets/images/black_logo.png'
import blue_logo from '../assets/images/blue_logo.png'
import { base_url } from '../config/env'


export default function Nav(props) {

    const cv = 'https://gurf-vi-s3-bucket1.s3.ap-south-1.amazonaws.com/cv/CvVishalM.pdf'

    const { collapseSidebar } = useProSidebar();
    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const dispatch = useDispatch()
    let { bg1, style1, style2, style3, font1, font2, font3 } = colors[theme]

    const findImage = () => {
        if (theme == "ng1") {
            return blue_logo
        } else {
            return black_logo
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
            <div className={'nav_img_contn'} >
                {(!props.nav && props.y_scroll_check) && <HiOutlineBars3CenterLeft className='nav_btn' size={35} color={style3}
                    onClick={() => { props.setNav("left") }}
                />}

            </div>
            <CSSTransition in={props.nav == "top"} timeout={1000} classNames="nav_top" unmountOnExit>
                <div className={'nav_top'} style={{ color: style3 }}>
                    <div className='sign_top'>

                        {/* <img className='nav_logo' src={findImage()} /> */}
                    </div>
                    <div className='top_nav_right' style={{ fontFamily: font2 }}>
                        <div className={'nav_top_menus'}>
                            {<IoIosArrowDropleftCircle className={'hide'} size={25} color={style3}
                                onClick={() => { props.setNav(false); }}
                            />}
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className='nav1_top'
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{ background: props.active_side_menu == id ? style1 : "", color: props.active_side_menu == id ? bg1 : "", }}
                                >{el}</div>
                            )}
                            <div className='nav1_top'
                                onClick={() => { props.setSideMenu(4) }}
                                style={{ border: `2px solid ${style3}`, background: props.active_side_menu == 4 ? style1 : "", color: props.active_side_menu == 4 ? bg1 : "", }}
                            >
                                {/* <div className='cv_a' onClick={download}>
                                    Resume
                                </div> */}
                                <a className='cv' href={cv} target="_blank">Resume</a>
                            </div>
                            <FaReact size={25} color={style3} onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "ng1" ? "dy1" : "ng1" })) }} />
                        </div>
                    </div>
                </div>
            </CSSTransition >

            {<div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: bg1, color: style1, fontFamily: font3, }}>
                <Sidebar className='sidebar_body' style={{ border: 0 }} defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500}>
                    <div className='sidebar_main' style={{ background: bg1 }}>
                        <div className='bar_upper_portion'>
                            <div className='side_settings' >
                                <HiBarsArrowUp className='arrow_up' size={30}
                                    onClick={() => { collapseSidebar(); setTimeout(() => { props.setNav("top") }, 501) }}
                                />
                                <div onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "ng1" ? "dy1" : "ng1" })) }}>
                                    <FaReact size={20} />
                                </div>
                            </div>
                            {/* <div className='bar_logo_cont'>
                            <img className='bar_logo' src={findImage()} />
                        </div> */}
                        </div>
                        <div className='bar_middle_portion'
                        // menuItemStyles={{ button: { '&:hover': { backgroundColor: style3, color: bg1, borderRadius: "8px" }, } }}
                        >
                            {["About", "Experience", "Work", "Contact"].map((el, id) =>
                                <div key={id} className='side_item'
                                    onClick={() => { props.setSideMenu(id) }}
                                    style={{
                                        border: props.active_side_menu == id ? `2px solid ${style1}` : "",
                                        //  color: props.active_side_menu == id ? bg1 : "", 
                                    }}
                                > {el}
                                </div>)}
                            <div key={4} active={true} className='side_item'
                                style={{
                                    background: props.active_side_menu == 4 ? style1 : "",
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

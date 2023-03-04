
import React, { useState } from 'react'
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


    const { collapseSidebar } = useProSidebar();
    const theme = useSelector((state) => state.AllReducerCombined.themeChangeReducers.active_theme)
    const dispatch = useDispatch()

    const findImage = () => {
        if (theme == "ng1") {
            return blue_logo
        } else {
            return black_logo
        }
    }


    const download = () => {
        fetch(`${base_url}/dwn`)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'CvVishalM.pdf';
                    a.click();
                });
                //window.location.href = response.url;
            });
    }

    return (
        <div className={"nav"}>
            <div className={'nav_img_contn'} >
                {!props.nav && <HiOutlineBars3CenterLeft className='nav_btn' size={35} color={colors[theme].style1}
                    onClick={() => { props.setNav("left") }}
                />}

            </div>
            <CSSTransition in={props.nav == "top"} timeout={1000} classNames="nav_top" unmountOnExit>
                <div className={'nav_top'} style={{ color: colors[theme].style1 }}>
                    <div className='sign_top'>

                        <img className='nav_logo' src={findImage()} />
                    </div>
                    <div className='top_nav_right'>
                        <div className={'nav_top_menus'}>
                            {<IoIosArrowDropleftCircle className={'hide'} size={25} color={colors[theme].style1}
                                onClick={() => { props.setNav(false); }}
                            />}
                            <div className='nav1_top'>About</div>
                            <div className='nav1_top'>Experience</div>
                            <div className='nav1_top'>Work</div>
                            <div className='nav1_top'>Contact</div>
                            <div className='nav1_top'>
                                <a className='cv_a' onClick={download}>
                                    Resume
                                </a></div>
                            <div onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "ng1" ? "dy1" : "ng1" })) }}>
                                <FaReact />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition >

            {<div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: colors[theme].style1 }}>
                <Sidebar className='sidebar_body' style={{ color: colors[theme].style2 }} defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500} >
                    <div className='bar_upper_portion'>
                        <div className='side_settings'>
                            <HiBarsArrowUp className='arrow_up' size={30} color={colors[theme].style2}
                                onClick={() => { collapseSidebar(); setTimeout(() => { props.setNav("top") }, 501) }}
                            />
                            <div onClick={() => { dispatch(ActionChangeTheme({ active_theme: theme == "ng1" ? "dy1" : "ng1" })) }}>
                                <FaReact size={20} />
                            </div>
                        </div>
                        <div className='bar_logo_cont'>
                            <img className='bar_logo' src={findImage()} />
                        </div>
                    </div>
                    <Menu className='bar_middle_portion'>
                        <MenuItem> About</MenuItem>
                        <MenuItem> Experience</MenuItem>
                        <MenuItem> Work</MenuItem>
                        <MenuItem> Contact</MenuItem>
                        <MenuItem> <a className='cv_a' onClick={download}>
                            Resume
                        </a></MenuItem>
                    </Menu>
                    <div className='bar_bottom_protion'>

                    </div>
                </Sidebar>
            </div>}
        </div>
    )
}


import React, { useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';


export default function Nav(props) {


    let design_color = "#61dafb"
    let bgcolor = "#282c34"
    let design_color2 = "black"


    const { collapseSidebar } = useProSidebar();


    return (
        <div className={"nav"}>
            <div className={'nav_img_contn'} >

                {props.nav != "left" && <HiOutlineBars3CenterLeft className='nav_btn' size={35} color={design_color}
                    onClick={() => { props.setNav("left") }}
                />}


                {<FaReact className={'hide'} size={25} color={design_color2}
                    onClick={() => { props.setNav(false); }}
                />}

            </div>
            <CSSTransition in={props.nav == "top"} timeout={1000} classNames="nav_top" unmountOnExit>
                <div
                    className={'nav_top'}
                    style={{ background: design_color }}
                // style={props.nav !== "top" ? { background: design_color, display: "none" } : { background: design_color, }}

                >
                    <div className='sign_top'>sign</div>
                    <div className={'nav_top_menus'}>
                        <div className='nav1_top'>nav1</div>
                        <div className='nav1_top'>nav2</div>
                        <div className='nav1_top'>nav3</div>
                        <div className='nav1_top'>nav4</div>
                        <div className='nav1_top'>nav5</div>
                    </div>
                </div>
            </CSSTransition >

            {<div className={props.nav == "left" ? 'sidebar' : "sidebar_closed"} style={{ background: design_color }}>
                <Sidebar defaultCollapsed={props.nav != "left"} collapsedWidth={"0px"} transitionDuration={500} >
                    {<HiBarsArrowUp size={35} color={design_color}
                        onClick={() => { collapseSidebar(); setTimeout(() => { props.setNav("top") }, 501) }}
                    />}
                    <Menu>
                        <MenuItem> Documentation</MenuItem>
                        <MenuItem> Calendar</MenuItem>
                        <MenuItem> E-commerce</MenuItem>
                    </Menu>
                </Sidebar>
            </div>}
        </div>
    )
}

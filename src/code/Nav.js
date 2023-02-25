
import React, { useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';


export default function Nav(props) {
    let design_color = "#61dafb"
    let bgcolor = "#282c34"
    let font_color = "black"
    return (<div className={"nav"}>
        <div className={'nav_img_cont'} >
            {!props.side_bar && <HiOutlineBars3CenterLeft size={35} color={"#61dafb"}
                onClick={() => { props.toggleSideBar(true); }}
            />}

            {props.side_bar && <HiBarsArrowUp size={35}
                onClick={() => { props.toggleSideBar(false); setTimeout(() => { props.toggleTopNav(true) }, 450) }}
            />}

            {<FaReact className={'hide'} size={25} color={design_color}
                onClick={() => { props.toggleTopNav(false); props.toggleSideBar(false) }}
            />}

        </div>

        {props.side_bar &&

            <div className={'nav_menus_left'} style={{ background: design_color }}>
                <div style={{ marginTop: 40 }} className='sign'>sign</div>
                <div className={'menus'}>
                    <div className='nav1'>nav1</div>
                    <div className='nav1'>nav2</div>
                    <div className='nav1'>nav3</div>
                    <div className='nav1'>nav4</div>
                    <div className='nav1'>nav5</div>
                </div>
            </div>
        }

        {props.top_nav &&
            <div className={'nav_top'} style={{ background: design_color }}>
                <div className='sign_top'>sign</div>
                <div className={'nav_menus_top'}>
                    <div className='nav1_top'>nav1</div>
                    <div className='nav1_top'>nav2</div>
                    <div className='nav1_top'>nav3</div>
                    <div className='nav1_top'>nav4</div>
                    <div className='nav1_top'>nav5</div>
                </div>
            </div>
        }
        {/* <CSSTransition
            in={props.side_bar}
            // nodeRef={nodeRef}
            timeout={412}
            classNames="nav_menus_left"
            unmountOnExit
            // onEnter={() => props.toggleTopNav(false)}
            onExited={() => { props.toggleTopNav(true) }}
        >


            <div className={'nav_menus_left'}>
                <div style={{ marginTop: 40 }} className='sign'>sign</div>
                <div className={'menus'}>
                    <div className='nav1'>nav1</div>
                    <div className='nav1'>nav2</div>
                    <div className='nav1'>nav3</div>
                    <div className='nav1'>nav4</div>
                    <div className='nav1'>nav5</div>
                </div>
            </div>

        </CSSTransition>

        <CSSTransition
            in={props.top_nav}
            // nodeRef={nodeRef}
            timeout={412}
            classNames="nav_top"
            unmountOnExit
            // onEnter={() => props.toggleTopNav("left")}
            onExited={() => props.toggleSideBar(true)}
        >


            <div className={'nav_top'}>
                <div style={{ marginTop: 40 }} className='sign'>sign</div>
                <div className={'menus'}>
                    <div className='nav1'>nav1</div>
                    <div className='nav1'>nav2</div>
                    <div className='nav1'>nav3</div>
                    <div className='nav1'>nav4</div>
                    <div className='nav1'>nav5</div>
                </div>
            </div>

        </CSSTransition> */}

    </div>
    )
}

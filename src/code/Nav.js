import React, { useState } from 'react'
import './Nav.css'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { HiBarsArrowUp, HiOutlineBars3CenterLeft, HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";
import { FaReact } from "react-icons/fa";


export default function Nav(props) {
    let design_color = "#61dafb"
    let bgcolor = "#282c34"
    let font_color = "black"
    return (<div className={props.nav_view == "top" ? 'nav_top' : "nav"}>
        <div className={props.nav_view == 'left' ? 'nav_img_cont' : 'nav_img_cont_top'} >
            {(!props.nav_view || props.nav_view == "top") && <HiOutlineBars3CenterLeft size={35} color={props.nav_view ? "black" : "#61dafb"}
                onClick={() => { props.toogleNavView("left") }} />}
            {(props.nav_view == "left") && <HiBarsArrowUp size={35}
                onClick={() => { props.toogleNavView("top") }} />}
            {props.nav_view && <FaReact className={props.nav_view == "left" ? 'hide' : "hide_top"} size={25} color={design_color}
                onClick={() => { props.toogleNavView(false) }} />}

        </div>

        {props.nav_view &&
            <div className={props.nav_view == "left" ? 'nav_menus_left' : "nav_menus_top"}>
                <div className='sign'>sign</div>
                <div className={props.nav_view == "left" ? 'menus' : "left_menus"}>
                    <div className='nav1'>nav1</div>
                    <div className='nav1'>nav2</div>
                    <div className='nav1'>nav3</div>
                    <div className='nav1'>nav4</div>
                    <div className='nav1'>nav5</div>
                </div>
            </div>}
    </div>
    )
}

import React from 'react'
import { CSSTransition } from 'react-transition-group'
import self_thm1 from '../../assets/images/self_thm1.png'
import self_thm2 from '../../assets/images/self_thm2.png'
import self_thm3 from '../../assets/images/self_thm3.png'
import self_thm4 from '../../assets/images/self_thm4.png'




let selff_thm1 = self_thm1
let selff_thm2 = self_thm2
let selff_thm3 = self_thm3
let selff_thm4 = self_thm4


export default function About(props) {

    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3 } = props.colors[props.theme]

    const handleImage = () => {
        if (props.theme == "thm1") {
            return selff_thm1
        } else if (props.theme == "thm2") {
            return selff_thm2
        } else if (props.theme == "thm3") {
            return selff_thm3
        } else {
            return selff_thm4
        }
    }

    return (
        <>
            <CSSTransition
                in={props.nav == "top"} timeout={1000}
                classNames="content"
                unmountOnExit
                onExit={() => props.toggleTopNav(true)}
            >
                <div className='content'>
                    <div className='left_c' style={{ color: props.text_color }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>
            </CSSTransition>
            {props.nav != "top" &&
                <div className='content'>
                    <div className='left_c' style={{ color: props.text_color }}><h1 className='typed' style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                    <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                </div>}
        </>
    )
}

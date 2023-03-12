import React, { useEffect, useLayoutEffect, useState } from 'react'
import { memo } from 'react';
import { CSSTransition } from 'react-transition-group'
import self_thm1 from '../../assets/images/self_thm1.png'
import self_thm2 from '../../assets/images/self_thm2.png'
import self_thm3 from '../../assets/images/self_thm3.png'
import self_thm4 from '../../assets/images/self_thm4.png'
import { TypeAnimation } from 'react-type-animation';



let selff_thm1 = self_thm1
let selff_thm2 = self_thm2
let selff_thm3 = self_thm3
let selff_thm4 = self_thm4


const About = memo(function Abt(props) {
    const [cursorr, setCursor] = useState(true)
    // const all_desg = ["Web Developer", "App Developer", "Node Developer", "Programmer"]
    const all_desg = ["a Web Developer", "an App Developer", "a Node Developer", "a Programmer"]
    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3 } = props.colors[props.theme]
    let text_color = props.text_color

    let styless = {
        intro: { color: props.text_color, width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", }
    }

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
            {!props.is_mobile1 &&
                <div>
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
                </div>}

            {props.is_mobile1 &&
                <div style={{ height: "100vh", }}>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "30vh" }}>
                        <div style={{ ...styless.intro, }}>
                            <div style={{
                                fontFamily: font2, overflow: "hidden", fontSize: "8vw", whiteSpace: "nowrap",
                            }}>
                                Hi !
                            </div>
                        </div>
                        <div style={{ ...styless.intro, marginTop: "2vh" }}>
                            <div style={{
                                fontFamily: font3, overflow: "hidden", fontSize: "8vw", whiteSpace: "nowrap",
                            }}>
                                <TypeAnimation
                                    sequence={["I'm Vishal",]}
                                    wrapper="div"
                                    cursor={false}
                                    repeat={0}
                                    // repeat={infinity}
                                    style={{ display: "inline", fontFamily: font3 }}
                                />
                            </div>
                        </div>
                    </div>


                    <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}
                    ><img src={handleImage()}
                        style={{ height: "40vh", objectFit: "cover" }}
                    ></img>
                    </div>

                    {/* <div>
                        <div className='typingg' style={{ ...styless.intro, width: "100%" }}>
                            <div style={{
                                fontFamily: font3, overflow: "hidden", fontSize: "8vw", whiteSpace: "nowrap", borderRight: `2px solid ${text_color}`,
                                animation: "typingg 1.5s steps(30, end) forwards, blinking 1s 1.5s",
                            }}
                            > {`I Am a ${all_desg[0]}`}
                            </div>
                        </div>
                    </div> */}

                    <div>
                        <div style={{ ...styless.intro, width: "100%" }}>
                            {console.warn("cursorr :", cursorr)}
                            <div
                                style={{
                                    color: props.text_color, width: "100vw", display: "flex", alignItems: "center",
                                    fontFamily: font3, fontSize: "8vw", paddingLeft: "20vw"
                                }}
                            >
                                <div style={{ display: "inline", maxWidth: '40vw' }}>
                                    <TypeAnimation
                                        sequence={[1000, "I am"]}
                                        wrapper="div"
                                        cursor={false}
                                        repeat={0}
                                        // repeat={infinity}
                                        style={{ display: "inline", fontFamily: font2 }}
                                    />
                                    &nbsp;
                                </div>
                                {<TypeAnimation
                                    sequence={[1500,
                                        all_desg[0], // Types 'One'
                                        2500, // Waits 1s
                                        all_desg[1],// Deletes 'One' and types 'Two'
                                        3500, // Waits 2s
                                        all_desg[2], // Types 'Three' without deleting 'Two'
                                        4500,
                                        all_desg[3],
                                        () => {
                                            setCursor(false)
                                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                        },
                                    ]}
                                    wrapper="div"
                                    cursor={false}
                                    repeat={0}
                                    // repeat={infinity}
                                    style={{ display: "inline", fontFamily: font2 }}
                                />}
                            </div>

                        </div>
                    </div>



                </div>
            }
        </>
    )

});


export default About;

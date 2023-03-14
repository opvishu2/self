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
    const all_desg = ["a Web Developer", "a Node Developer", "a Programmer", "an App Developer"]
    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3, font4, } = props.colors[props.theme]
    let { is_mobile1, text_color, is_tablet1, is_tablet2, is_low_pc1, is_high_pc1, is_mid_high_pc1 } = props
    let fontSize = is_high_pc1 ? "3vw" : is_mid_high_pc1 ? "2.5vw" : is_tablet1 ? "4vw" : is_low_pc1 ? "3vw" : "3.5vw"
    let big_font = is_high_pc1 ? "2.5vw" : is_mid_high_pc1 ? "3.5vw" : is_tablet1 ? "5vw" : is_low_pc1 ? "3.5vw" : "4vw"
    let styless = {
        intro: { color: props.text_color, width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", }
    }
    let styles = {
        flex_common1: { display: "flex", justifyContent: "center", },
        flex_common2: { display: "flex", justifyContent: "center", alignItems: "center" }
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
            {!props.is_mobile1 && // PC ONLY
                <div>
                    <CSSTransition
                        in={props.nav == "top"} timeout={1000}
                        classNames="content"
                        unmountOnExit
                        onExit={() => props.toggleTopNav(true)}
                    >
                        <div className='content'
                            style={{ ...styles.flex_common1, minHeight: "100vh", width: "100vw", }}
                        >
                            <div
                                style={{ ...styles.flex_common2, width: "60%", color: props.text_color, }}>
                                {/* <h1 style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1> */}

                                <div style={{
                                    ...styles.flex_common2, flexDirection: "column", justifyContent: "space-between", width: "100%",
                                    height: "70%",
                                }}>
                                    <div style={{
                                        display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-end",
                                        width: "100%", height: "50%",
                                    }}>

                                        <div style={{ ...styless.intro, alignItems: "flex-end", height: "100%", width: "100%", }}>
                                            <div
                                                style={{
                                                    ...styles.flex_common1, color: props.text_color, width: "100vw",
                                                    fontFamily: font3, fontSize: fontSize
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", maxWidth: '40vw' }}>
                                                    <TypeAnimation
                                                        sequence={["Hi! I am"]}
                                                        wrapper="div"
                                                        cursor={false}
                                                        repeat={0}
                                                        // repeat={infinity}
                                                        style={{ fontFamily: font2 }}
                                                    />
                                                    &nbsp;
                                                </div>
                                                {
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", maxWidth: '60vw' }}>
                                                        <TypeAnimation
                                                            sequence={[600, "Vishal Maurya"
                                                            ]}
                                                            wrapper="div"
                                                            cursor={false}
                                                            repeat={0}
                                                            // repeat={infinity}
                                                            style={{ fontFamily: font4, fontSize: big_font, wordBreak: "break-word" }}
                                                        />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                    </div>


                                    <div style={{
                                        display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-end",
                                        width: "100%", height: "50%",
                                    }}>
                                        <div style={{ ...styless.intro, alignItems: "flex-start", height: "100%", width: "100%", }}>
                                            <div
                                                style={{
                                                    ...styles.flex_common1, color: props.text_color, width: "100%",
                                                    fontFamily: font3, fontSize: fontSize,
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: '50%' }}>
                                                    <TypeAnimation
                                                        sequence={[1500, "I am"]}
                                                        wrapper="div"
                                                        cursor={false}
                                                        repeat={0}
                                                        // repeat={infinity}
                                                        style={{ fontFamily: font2 }}
                                                    />
                                                    &nbsp;
                                                </div>
                                                {
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: '50%' }}>
                                                        <TypeAnimation
                                                            sequence={[1800,
                                                                all_desg[0], // Types 'One'
                                                                1000, // Waits 1s
                                                                all_desg[1],// Deletes 'One' and types 'Two'
                                                                1000, // Waits 2s
                                                                all_desg[2], // Types 'Three' without deleting 'Two'
                                                                1000,
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
                                                            style={{ fontFamily: font2, wordBreak: "break-word" }}
                                                        />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div style={{ ...styles.flex_common2, width: "40%", }} className='right_c'>
                                <img
                                    style={{ height: "60vh", objectFit: "contain" }}
                                    src={handleImage()}></img>
                            </div>
                        </div>
                    </CSSTransition>


                    {
                        props.nav != "top" &&
                        <div className='content'>
                            <div className='left_c' style={{ color: props.text_color }}><h1 style={{ fontFamily: font3 }}>Hi, Vishal M. here!</h1></div>
                            <div className='right_c'><img className="App-logo" alt="logo" src={handleImage()}></img></div>
                        </div>
                    }
                </div >}


            {
                props.is_mobile1 && // MOBILE ONLY
                <div style={{ height: "100vh", }}>

                    <div style={{
                        display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center",
                        height: "30vh"
                    }}>
                        <div style={{ ...styless.intro, }}>
                            <div style={{
                                fontFamily: font2, overflow: "hidden", fontSize: fontSize, whiteSpace: "nowrap",
                            }}>
                                Hi !
                            </div>
                        </div>
                        <div style={{ ...styless.intro, marginTop: "2vh" }}>
                            <div style={{
                                fontFamily: font3, overflow: "hidden", fontSize: fontSize, whiteSpace: "nowrap",
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


                    <div style={{ height: "55vh", display: "flex", alignItems: "center", justifyContent: "center", }}
                    ><img src={handleImage()}
                        style={{ height: "40vh", objectFit: "cover" }}
                    ></img>
                    </div>

                    <div>
                        <div style={{ ...styless.intro, width: "100%" }}>
                            {console.warn("cursorr :", cursorr)}
                            <div
                                style={{
                                    ...styles.flex_common2,
                                    color: props.text_color, width: "100vw",
                                    fontFamily: font3, fontSize: fontSize,
                                }}
                            >
                                <div style={{ ...styles.flex_common2, justifyContent: "flex-end", width: '37vw', }}>
                                    <TypeAnimation
                                        sequence={[1000, "I am"]}
                                        wrapper="div"
                                        cursor={false}
                                        repeat={0}
                                        // repeat={infinity}
                                        style={{
                                            fontFamily: font2, display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                    &nbsp;
                                </div>
                                <div style={{ ...styles.flex_common2, justifyContent: "flex-start", width: '63vw', }}>
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
                                        style={{
                                            fontFamily: font2, display: "flex",
                                            alignItems: "center",
                                        }}
                                    />}
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            }
        </>
    )

});


export default About;

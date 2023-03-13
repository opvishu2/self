import React from 'react'
import { CSSTransition } from 'react-transition-group'
import "./skills.css"
import ProgressBar from "@ramonak/react-progress-bar";
import {
    TbBrandCss3, TbBrandHtml5, TbBrandMysql, TbBrandDjango, TbBrandGit, TbBrandGithub, TbBrandUbuntu, TbBrandReactNative,
    TbBrandRedux, TbWebhook, TbBrandNextjs, TbBrandTypescript, TbBrandYoutube,
} from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { FaAws, FaAppStoreIos, } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoFreebsdDevil } from "react-icons/io";
import {
    SiSemanticuireact, SiNodedotjs, SiExpress, SiJavascript, SiPython, SiReduxsaga, SiMongodb, SiFirebase, SiHackerrank,
    SiJest, SiAndroidstudio, SiXcode,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




export default function Skills(props) {
    let { bg_day, bg_night, style1, style2, style3, style4, font1, font2, font3 } = props.colors[props.theme]
    let { BG, is_mobile1, text_color, active_menu, pages, theme, n_mode, is_mobile2, } = props
    let dWidth = window.innerWidth
    let dHeight = window.innerHeight
    let styles = {
        flex_common1: { display: "flex", justifyContent: "center", },
        flex_common2: { display: "flex", justifyContent: "center", alignItems: "center" }
    }

    let skills = [{ skill_name: "React", skilled: 80 }, { skill_name: "ReactNative", skilled: 90 },
    { skill_name: "Node", skilled: 50 }, { skill_name: "Express", skilled: 60 }, { skill_name: "AWS", skilled: 50 },
    { skill_name: "MySQL", skilled: 50 }, { skill_name: "Django", skilled: 50 }, { skill_name: "python", skilled: 80 }, { skill_name: "Javascript", skilled: 90 },
    ]
    const decideIconCircle = (el) => {
        console.warn("decideIconCircle : ", el)
        let color = text_color; let size = is_mobile1 ? 20 : "11vh"
        if (el.skill_name == "React") {
            return <SiSemanticuireact color={color} size={size} />
        }
        if (el.skill_name == "ReactNative") {
            return <TbBrandReactNative color={color} size={size} />
        }
        if (el.skill_name == "Node") {
            return <SiNodedotjs color={color} size={size} />
        }
        if (el.skill_name == "AWS") {
            return <FaAws color={color} size={size} />
        }
        if (el.skill_name == "Express") {
            return <SiExpress color={color} size={size} />
        }
        if (el.skill_name == "Django") {
            return <TbBrandDjango color={color} size={size} />
        }
        if (el.skill_name == "MySQL") {
            return <TbBrandMysql color={color} size={size} />
        }
        if (el.skill_name == "Javascript") {
            return <SiJavascript color={color} size={size} />
        }
        if (el.skill_name == "python") {
            return <SiPython color={color} size={size} />
        }

    }


    let all_soft_skills = [
        { skill_name: "REST-API", skilled: 70 }, { skill_name: "Redux", skilled: 100 }, { skill_name: "Saga", skilled: 95 },
        { skill_name: "React-Hooks", skilled: 90 }, { skill_name: "MongoDb", skilled: 50 }, { skill_name: "Linux", skilled: 70 },
        { skill_name: "Firebase-FCM", skilled: 90 }, { skill_name: "HTML5", skilled: 80 },
        { skill_name: "CSS3", skilled: 90 }, { skill_name: "Next.js", skilled: 50 }, { skill_name: "Typescript", skilled: 60 },
        { skill_name: "Jest", skilled: 50 }, { skill_name: "Compt-Programming", skilled: 95 }, { skill_name: "Android-Studio", skilled: 90 },
        { skill_name: "IOS", skilled: 80 }, { skill_name: "Xcode", skilled: 90 }, { skill_name: "Logo-Design", skilled: 50 },
        { skill_name: "Thumbnail-Design", skilled: 50 }, { skill_name: "Git", skilled: 90 }, { skill_name: "Github", skilled: 80 },

    ]


    const decideIcon = (el) => {
        let color = text_color; let size = is_mobile1 ? 23 : "5.5vh"
        if (el.skill_name == "REST-API") {
            return <AiOutlineApi color={color} size={size} />
        }
        if (el.skill_name == "Redux") {
            return <TbBrandRedux color={color} size={size} />
        }
        if (el.skill_name == "Saga") {
            return <SiReduxsaga color={color} size={size} />
        }
        if (el.skill_name == "React-Hooks") {
            return <TbWebhook color={color} size={size} />
        }
        if (el.skill_name == "MongoDb") {
            return <SiMongodb color={color} size={size} />
        }
        if (el.skill_name == "Linux") {
            return <TbBrandUbuntu color={color} size={size} />
        }
        if (el.skill_name == "Firebase-FCM") {
            return <SiFirebase color={color} size={size} />
        }
        if (el.skill_name == "Next.js") {
            return <TbBrandNextjs color={color} size={size} />
        }
        if (el.skill_name == "Typescript") {
            return <TbBrandTypescript color={color} size={size} />
        }
        if (el.skill_name == "Jest") {
            return <SiJest color={color} size={size} />
        }
        if (el.skill_name == "Compt-Programming") {
            return <SiHackerrank color={color} size={size} />
        }
        if (el.skill_name == "HTML5") {
            return <TbBrandHtml5 color={color} size={size} />
        }
        if (el.skill_name == "CSS3") {
            return <TbBrandCss3 color={color} size={size} />
        }
        if (el.skill_name == "Logo-Design") {
            return <IoLogoFreebsdDevil color={color} size={size} />
        }
        if (el.skill_name == "Thumbnail-Design") {
            return <TbBrandYoutube color={color} size={size} />
        }
        if (el.skill_name == "Android-Studio") {
            return <SiAndroidstudio color={color} size={size} />
        }
        if (el.skill_name == "IOS") {
            return <FaAppStoreIos color={color} size={size} />
        }
        if (el.skill_name == "Xcode") {
            return <SiXcode color={color} size={size} />
        }
        if (el.skill_name == "Github") {
            return <TbBrandGithub color={color} size={size} />
        }
        if (el.skill_name == "Git") {
            return <BsGit color={color} size={size} />
        }

    }



    console.log("theme : ", theme)
    return (
        <div id="Skills" style={{ height: "100vh", }}>
            {console.warn("act : ", active_menu, "is mobile1", is_mobile1)}
            {!is_mobile1 && <div className='skill_p'> {/* PC */}
                <CSSTransition in={pages[active_menu] == "Skills"} timeout={700} classNames="skill_p_container" unmountOnExit>
                    <div className='skill_p_container'
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}>

                        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-between", }}>


                            <div style={{ ...styles.flex_common2, width: "50%", }} >
                                <div style={{
                                    display: "flex", alignItems: "center", flexDirection: "column", width: "75%",
                                    minHeight: "80%", maxHeight: "100vh", overflowY: "auto",
                                }}>
                                    {skills.map((el, id) =>
                                        <div style={{ ...styles.flex_common2, width: "100%", marginTop: "3.5vh", }}>
                                            <div style={{ ...styles.flex_common2, width: "50%", }} >
                                                <div style={{
                                                    ...styles.flex_common2, flexDirection: "column",
                                                    alignItems: "center", width: "90%", marginRight: "2vw",
                                                }}>
                                                    {decideIconCircle(el)}
                                                    <div style={{
                                                        ...styles.flex_common2, fontSize: is_mobile2 ? "5vh" : "4vh",
                                                        fontFamily: font2, wordBreak: "break-word", color: text_color,
                                                    }}>
                                                        {el.skill_name}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ ...styles.flex_common2, justifyContent: "flex-start", width: "50%", }}>
                                                <div style={{
                                                    ...styles.flex_common2,
                                                }}>
                                                    <div style={{
                                                        ...styles.flex_common2, width: "100%", position: "relative", height: "fit-content",
                                                    }}>
                                                        <CircularProgressbarWithChildren
                                                            // percentage={20}
                                                            value={el.skilled}
                                                            background
                                                            styles={{
                                                                // Customize the root svg element
                                                                root: {
                                                                    height: "20vh",
                                                                    position: "relative",
                                                                },
                                                                // Customize the path, i.e. the "completed progress"
                                                                path: {
                                                                    // Path color
                                                                    // stroke: `rgba(0, 0, 0, ${el.skilled / 100})`,
                                                                    stroke: `${text_color}`,
                                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                                    strokeLinecap: "butt",
                                                                    // Customize transition animation
                                                                    transition: 'stroke-dashoffset 2s ease 0s',
                                                                    // Rotate the path
                                                                    transform: 'rotate(0.5turn)',
                                                                    transformOrigin: 'center center',
                                                                },
                                                                // Customize the circle behind the path, i.e. the "total progress"
                                                                trail: {
                                                                    // Trail color
                                                                    stroke: `${"gray"}`,
                                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                                    strokeLinecap: 'butt',
                                                                    // Rotate the trail
                                                                    transform: 'rotate(0.25turn)',
                                                                    transformOrigin: 'center center',
                                                                    // transition: "transform 2s ease",
                                                                },
                                                                // Customize the text
                                                                text: {
                                                                    // Text color
                                                                    fill: '#f88',
                                                                    // Text size
                                                                    fontSize: is_mobile2 ? "2.5vh" : "2.5vh",
                                                                },
                                                                // Customize background - only used when the `background` prop is true
                                                                background: {
                                                                    fill: `${BG}`,
                                                                },
                                                            }}
                                                        >
                                                        </CircularProgressbarWithChildren>
                                                        <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                                            <div style={{ ...styles.flex_common2, flexDirection: "column", width: "100%" }}>
                                                                <div style={{ ...styles.flex_common2, color: text_color, }}>
                                                                    {/* {decideIconCircle(el)} */}
                                                                    <div style={{ display: "inline", fontFamily: font2, fontSize: is_mobile2 ? "2.5vh" : "2.5vh", paddingLeft: "0.5vw" }}>{el.skilled}%</div>
                                                                </div>
                                                                {/* <div style={{ ...styles.flex_common2, fontSize: is_mobile2 ? "2.5vh" : "2.5vh", wordBreak: "break-word", color: text_color, maxWidth: "50%" }}>
                                                            {el.skill_name} 
                                                            </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>

                            </div>





                            <div style={{ width: "50%", }} >
                                <div style={{ width: "82%", minHeight: "80%", maxHeight: "100vh", overflowY: "auto", }} >
                                    {all_soft_skills.map((el, id) =>
                                        <div style={{ height: "fit-content", marginTop: "3.5vh", }}>
                                            <div style={{ display: "flex", width: "97%", justifyContent: "space-between", marginBottom: "0.3vh" }}>
                                                {decideIcon(el)}
                                                <div style={{ ...styles.flex_common2, color: text_color, fontFamily: font2, fontSize: is_mobile2 ? "20px" : "20px", }}>{`${el.skill_name} `}</div>
                                            </div>
                                            <ProgressBar
                                                completed={el.skilled}
                                                bgColor={text_color}
                                                height={"4vh"}
                                                baseBgColor={BG}
                                                customLabel={`${el.skilled}%`}
                                                // borderRadius={"1vh"}
                                                labelSize={"2.5vh"}
                                                labelColor={BG}
                                                animateOnRender={true}
                                                barContainerClassName={`bar_container_p_${theme}${n_mode ? "_n" : "_d"}`}
                                                initCompletedOnAnimation={50}
                                                transitionDuration={"1.5s"}
                                                customLabelStyles={{ fontFamily: font2 }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>}

            {is_mobile1 && <div className='skill_p' style={{ height: "100%" }}>{/* Phone */}
                <CSSTransition in={pages[active_menu] == "Skills"} timeout={700} classNames="skill_p_container_p" unmountOnExit>
                    <div className='skill_p_container_p'
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}>

                        <div style={{ height: "100%", overflowY: "auto", width: "100%", display: "flex", justifyContent: "space-between", }}>


                            <div style={{ minHeight: "80%", maxHeight: "100vh", overflowY: "auto", width: "50%", }} >
                                {skills.map((el, id) =>
                                (<div style={{ height: "fit-content", marginTop: "3.5vh", width: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <CircularProgressbarWithChildren
                                        // percentage={20}
                                        value={el.skilled}
                                        background
                                        styles={{
                                            // Customize the root svg element
                                            root: {
                                                height: "13vh",
                                                position: "relative",
                                            },
                                            // Customize the path, i.e. the "completed progress"
                                            path: {
                                                // Path color
                                                // stroke: `rgba(0, 0, 0, ${el.skilled / 100})`,
                                                stroke: `${text_color}`,
                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: "butt",
                                                // Customize transition animation
                                                transition: 'stroke-dashoffset 2s ease 0s',
                                                // Rotate the path
                                                transform: 'rotate(0.5turn)',
                                                transformOrigin: 'center center',
                                            },
                                            // Customize the circle behind the path, i.e. the "total progress"
                                            trail: {
                                                // Trail color
                                                stroke: `${"gray"}`,
                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: 'butt',
                                                // Rotate the trail
                                                transform: 'rotate(0.25turn)',
                                                transformOrigin: 'center center',
                                                // transition: "transform 2s ease",
                                            },
                                            // Customize the text
                                            text: {
                                                // Text color
                                                fill: '#f88',
                                                // Text size
                                                fontSize: '16px',
                                            },
                                            // Customize background - only used when the `background` prop is true
                                            background: {
                                                fill: `${BG}`,
                                            },
                                        }}
                                    >
                                    </CircularProgressbarWithChildren>
                                    <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                        <div style={{ ...styles.flex_common2, flexDirection: "column", width: "100%" }}>
                                            <div style={{ ...styles.flex_common2, color: text_color, }}>{decideIconCircle(el)}
                                                <div style={{ display: "inline", fontSize: is_mobile2 ? "12px" : "4vw", paddingLeft: "0.5vw" }}>{el.skilled}%</div>
                                            </div>
                                            <div style={{
                                                ...styles.flex_common2, wordBreak: "break-word", color: text_color,
                                                fontFamily: font1, fontSize: is_mobile2 ? "12px" : "2.5vw", maxWidth: "50%"
                                            }}>{el.skill_name} </div>
                                        </div>
                                    </div>
                                </div>)
                                )}

                            </div>





                            <div style={{ minHeight: "80%", maxHeight: "100vh", overflowY: "auto", width: "50%", }} >
                                {all_soft_skills.map((el, id) =>
                                    <div style={{ height: "fit-content", marginTop: "3.5vh", width: "95%", }}>
                                        <div style={{ display: "flex", width: "97%", justifyContent: "space-between", }}>
                                            {decideIcon(el)}
                                            <div style={{ color: text_color, fontFamily: font1, fontSize: is_mobile2 ? "12px" : "3vw" }}>{`${el.skill_name} `}</div>
                                        </div>
                                        <ProgressBar
                                            completed={el.skilled}
                                            bgColor={text_color}
                                            height={"3vh"}
                                            baseBgColor={BG}
                                            customLabel={`${el.skilled}%`}
                                            // borderRadius={"1vh"}
                                            labelSize={"1.8vh"}
                                            labelColor={BG}
                                            animateOnRender={true}
                                            barContainerClassName={`bar_container_p_${theme}${n_mode ? "_n" : "_d"}`}
                                            initCompletedOnAnimation={50}
                                            transitionDuration={"0.8s"}
                                            customLabelStyles={{ fontFamily: font3 }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>}
        </div>
    )
}

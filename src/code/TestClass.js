// import React from 'react'

// export default class TestClass extends React.PureComponent {

//     render() {
//         console.warn("TestClass 1")
//         return (
//             <div>
//                 {console.warn("TestClass 2")}
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class TestClass extends React.PureComponent {
    state = {
        value: 0,
        arr: [0, 10],
        obj: { x: 20 },
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("from shouldComponentUpdate, this.state = ", this.state)
        console.log("from shouldComponentUpdate, nextState = ", nextState)
        // if (this.state != nextState) {
        //     console.warn("if condition , this.state != nextState ")
        // }
        // else {
        //     console.warn(" condition , (this.state == nextState) ")
        // }
        if (this.state.obj != nextState.obj) {
            console.warn("if condition , this.state.obj != nextState.obj ")
        }
        else {
            console.warn(" condition , (this.state.obj == nextState.obj) ")
        }
        return true
    }

    render() {
        const { value, arr, obj } = this.state
        console.warn("from JSX 1, re-render :")
        return (
            <div>
                <button style={{ zIndex: 10, marginTop: "100px" }} onClick={() => {
                    this.setState({ value: 0 })
                    // this.setState({ obj: { x: 20 } })
                    // this.state.obj.x = this.state.obj.x + 1


                    console.log("OnclickedLast line value,this.state.obj.x,state :", value, this.state.obj.x, this.state);
                }} >
                    shouldComponetupdateButton
                </button>
                {console.warn("from JSX 2, re-render, value,this.state.obj.x,state :", value, this.state.obj.x, this.state)}
            </div>
        )
    }
}



import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class CONDITIONAL_RENDERING extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged : true,
            LoginCheck :false // true rendering korbe home k and false rendering korbe login page k
        }
    }
  render() {

    // System 1
    // if(this.state.isLogged){
    //     return <Home />
    // }
    // else{
    //     return <Login />
    // }

    // const {LoginCheck} = this.state;
    // let element;
    // if(LoginCheck){
    //     element = <Home />
    // }
    // else{
    //     element = <Login />
    // }

    const {LoginCheck} = this.state
    // var element = LoginCheck ? <Home /> : <Login /> // ternary oparator 

    return(
        <div>
            {/* {element} */}
            {LoginCheck ? <Home /> : <Login />}  
            {/* jsx ar vitor o bebohar kora jay ternary operator */}
        </div>
    )
}
}

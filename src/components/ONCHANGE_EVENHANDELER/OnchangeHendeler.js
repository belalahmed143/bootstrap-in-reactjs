import React, { Component } from 'react'

export default class ONCHANGE_EVENHANDELER extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ChangeValue : ""
      }
    }
    handelChangeValue = (e) =>{
        this.setState({
            ChangeValue : e.target.value
        },()=>{
            console.log(this.state.ChangeValue) // inpute ar value change ar sathe aro akta value k cjange korar jonno amra callbeck function bebohar korbo
        })
    }
    render() {
        return (
        <div>
            <input onChange={this.handelChangeValue}></input>
            <p>{this.state.ChangeValue}</p>
        </div>
        )
    }
}

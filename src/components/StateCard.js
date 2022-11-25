import React, { Component } from 'react'
// state bebohar korar jonno constructor fuction bebohar korte hobe abong ar this.state ar vitor joto gula issa variable nia kaj kora jabe
export default class StateCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }
    Increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    Decriment = () =>{
        this.setState ({
            count : this.state.count -1
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Usees State</h1>
        <h4>Count : {count}</h4>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decriment} disabled={count===0 ? true:false}>-</button>
      </div>
    )
  }
}

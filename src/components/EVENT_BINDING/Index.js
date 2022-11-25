import React, { Component } from 'react'

export default class EVENT_BINDING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }

    //   constractor ar vitor korle arom hobe

      this.eventEndel = this.eventEndel.bind(this)
    }
    // avabe use korle kaj korbe but jokhon normal function babohar korbo tokhon error asbe tai binding korte hobe
    
    // eventEndel = () =>{
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    eventEndel(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h1>EVENT_BINDING</h1>
        <h3>{this.state.count}</h3>
        {/* es6 functionbabohar korle */}
        {/* <button onClick={this.eventEndel}>Increse</button> */} 

        {/* normal function bebohar kore */}

        {/* <button onClick={this.eventEndel.bind(this)}>Increse</button>  */}

        {/* constractor ar vitor kor */}

        <button onClick={this.eventEndel}>Increse</button> 
      </div>
    )
  }
}

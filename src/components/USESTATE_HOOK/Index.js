import React, { useState } from 'react'

export default function USESTATE_HOOK() {
    const [count, setCount] = useState(0)
    const EventHandeler = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        <h1>USESTATE_HOOK</h1>
        <h3>Count : {count}</h3>
        <button onClick={EventHandeler}>Incress usees function</button>
    </div>
  )
}

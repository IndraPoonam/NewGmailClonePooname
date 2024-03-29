import React, { useContext } from "react"
import {data} from "/App"

function Context3() {
    const Pooja= useContext(data)
  return (
    <div>
        <h1>I am context3</h1>
        
        <h3>{Object.entries(Pooja)}</h3>
    </div>
  )
}

export default Context3






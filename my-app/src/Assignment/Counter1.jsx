import React, { useState } from 'react'
function Counter1() {
const[count,setCount] =useState(0);
  return (
    <>
    <center>
    <h2>Number==={count}</h2>
<button onClick={() => setCount(count + 1)}>increment</button> &nbsp;
<button onClick={() => setCount(count - 1)}>decrement</button>
    </center>
    </>
  )
}
export default Counter1
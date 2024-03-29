import React, {useMemo,useState} from 'react'

function UseMemoPrac() {
const[counter,setCounter] =useState(0);
const[counterTwo,setCounterTwo] =useState(0);

const Add1=()=>{
setCounter(counter +1)

}
const Add2=()=>{
setCounterTwo(counterTwo +1)

}

const isEven =useMemo(()=>{
console.warn(".....")
// let i=0;
// while(i<2000000000) i++;
return counter%2===0
},[counter])


  return (
    <><center><h1>UseMemoPractice</h1>
    <button onClick={Add1}>counter - {counter}</button> &nbsp;
    <span>{isEven? "Even" : "Odd"}</span>
    <button onClick={Add2}>counterTwo - {counterTwo}</button>
    
    </center>
    </>
  )
}

export default UseMemoPrac
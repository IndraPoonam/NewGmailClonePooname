import React, { useContext } from 'react'
import{Togglercontext} from '../Hooks/Togglercontext'
const  Togglerp=()=> {
  const {theme,handleOnClick}= useContext(Togglercontext)
  return (
    <div> 
      <h4>My Toggler with {theme}</h4>
      <button 
      className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`} 
      onClick={handleOnClick}>
        {theme=== "dark" ?  "light" :"dark"}
        </button>
    </div>
  )
}  

export default  Togglerp;


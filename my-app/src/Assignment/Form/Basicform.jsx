// import React,{useState} from 'react'

// const Basicform =()=> {
// const[email, setEmail]=useState("");
// const[password, setPassword]= useState("");

//   return (
//     <>
//     <center>
// <form action=''>
// <div>
//     <label htmlFor='email'>Email</label>
//     <input type='text' name='email' id='email'
//     value={email}
//     onChange={(e)=> setEmail(e.target.value) }
//     />
// </div>
// <br></br>
// <div>
//     <label htmlFor='password'>Password</label>
//     <input type='password' name='password' id='password'
//      value={password}
//      onChange={(e)=> setPassword(e.target.value) }
//      />
// </div>
// <br></br>
// <button type='submit'>Login</button>
// </form>
//     </center>
    
//     </>
//   )
// }
// export default Basicform


import React, { useState, useEffect } from 'react';

const Basicform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email); 
    const isPasswordValid = password.length >= 6; 

    setValidForm(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:=</label>
          <input  type='text'  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor='password'>Password:=</label>
          <input type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type='submit'disabled={!validForm} >Login</button>
      </form>
    </center>
  );
};
export default Basicform;
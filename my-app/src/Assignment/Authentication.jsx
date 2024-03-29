// import React from 'react';
// import { useAuth } from './AuthContext';

// const Authentication = () => {
//   const { authenticated, login, logout } = useAuth();

//   return (
//     <div>
//       {authenticated ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}
//       <p>User is {authenticated ? 'logged in' : 'logged out'}</p>
//     </div>
//   );
// };

// export default Authentication;

import React from 'react'
import { useAuth } from './Authenticationcontext'

function Authentication() {
const {  authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn}=useAuth()

    const logIn=(e)=>{
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({
            name:'Poonam Singh'
        })
    }

    const logOut=(e)=>{
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
    }

  return (
    <>
    <center>
        <span>User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}</span><br/>
        {isLoggedIn ? (<span>User name:= {authUser.name}</span>): null}
        <br/>
{isLoggedIn 
  ?  <button onClick={(e)=>logOut(e)}>Log Out</button> :
  <button onClick={(e)=>logIn(e)}> Log In</button>
}


   
    </center>
    </>
  )
}

export default Authentication






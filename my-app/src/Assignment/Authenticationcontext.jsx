// // const Authenticationcontext = ({ children }) => {
// //     const [authenticated, setAuthenticated] = useState(false);
  
// //     const login = () => {
// //       setAuthenticated(true);
// //     };
  
// //     const logout = () => {
// //       setAuthenticated(false);
// //     };
  
// //     return (
// //       <AuthContext.Provider value={{ authenticated, login, logout }}>
// //         {children}
// //       </AuthContext.Provider>
// //     );
// //   };
  
// //   const useAuth = () => {
// //     const authContext = useContext(AuthContext);
// //     if (!authContext) {
// //       throw new Error('useAuth must be used within an AuthProvider');
// //     }
// //     return authContext;
// //   };
  
// //   export { Authenticationcontext , useAuth };

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// const Authenticationcontext = ({ children }) => {
//     const [authenticated, setAuthenticated] = useState(false);
  
//     const login = () => {
//       setAuthenticated(true);
//     };
  
//     const logout = () => {
//       setAuthenticated(false);
//     };
  
//     return (
//       <AuthContext.Provider value={{ authenticated, login, logout }}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };
  
//   const useAuth = () => {
//     const authContext = useContext(AuthContext);
//     if (!authContext) {
//       throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return authContext;
//   };
  
//   export { Authenticationcontext , useAuth };

// authenticationcontext.jsx

import React, {useState, useEffect, useContext} from 'react'
const Authenticationcontext= React.createContext()

export function useAuth(){
    return useContext(Authenticationcontext);
}

export function AuthProvider(props){
    const[authUser,setAuthUser]=useState(null)
    const[isLoggedIn,setIsLoggedIn]=useState(false)


    const value={
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return(
        <Authenticationcontext.Provider  value={value}>
              {props.children}
        </Authenticationcontext.Provider>

    )
}


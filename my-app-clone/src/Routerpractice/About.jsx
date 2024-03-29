
// // function About() {
// //   return (
// //     <h1><b>Tell me About yourself</b></h1>
// //     // <h1 style="color: blue;"><b>Tell me About yourself</b></h1>

// //   )
// // }

// // export default About;

// import { useEffect, useState } from "react";
// const About = () => {
//     const [accessToken, setAccessToken] = useState("")
//     const handleLogin = () => {
       
//         const CLIENT_ID="596033763070-964ic9mbrl2h0iqh4bssb79k5vddtdgi.apps.googleusercontent.com";
//         const REDIRECT_URL="http://localhost:3000";
//         const SCOPE ="https://www.googleapis.com/auth/gmail.readonly ";
//         const AUTH_URL=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect
//         _uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
//         window.location.href = AUTH_URL;
//     };
//     const getAccessToken = () => {
//         const url = window.location.href
//         const token = url.match(/access_token=([^&]+)/)
//         console.log("Token is", localStorage.getItem("Token"))  

//     }
//     useEffect(() => (
//         getAccessToken()
//     ), [])
//     const getEmailData = () => {
//         let token = localStorage.getItem("Token")
//         console.log("hello", token)
//         let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
//         const options = {
//             method : 'GET',
//             headers : {
//                 'Authorization' : `Bearer ${token}`,
//                 'Content-Type':'application/json'
//             }
//         }
//         fetch(url,options)
//         .then(response => response.json())
//         .then(json=>console.log(fetchMail(json.messages[0].id)))
//         .catch(error=>console.log('Error in fetching mails',error))
//     }

// const fetchMail = () => {
//     let id = '18e28f8a1ea93a27'
//     let token = localStorage.getItem("Token")
//     const options = {
//         method : 'GET',
//         headers : {
//             'Authorization' : `Bearer ${token}`,
//             'Content-Type':'application/json'
//         }
//     }
//     let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`
//     fetch(url,options)
//     .then(response => response.json())
//     .then(json=>console.log(json))
//     .catch(error=>console.log('Error in fetching mails',error))
// }

//     return (

//         <div>
//             {accessToken ? (
//                 <div>
//                     <h1>Access token</h1>
//                     <p>Access Token: {accessToken}</p>
//                 </div>) : (
//                 <>
//                     <button onClick={handleLogin}>Login with google</button>
//                     <button onClick={() => getEmailData()}> Get Emails</button>
//                     <button onClick={() => fetchMail()}> Fetch Emails</button>


//                 </>

//             )

//             }

//         </div>
//     )


// };
// export default About;





// import React, { useEffect, useState } from 'react'
// function TokenPoonam() {
// const[accesstoken,setAccesstoken]=useState('')
// const handlelogin =()=>{
// // console.log("handle login clicked")
// const CLIENT_ID="123789108396-5kabfo2e2ak6t6bg2uhtj4l7mc9f7ieb.apps.googleusercontent.com";
// const REDIRECT_URL="http://localhost:3000";
// // const SCOPE = "http://www.googleapis.com/auth/gmail.readonly";      //this line// show error
// const SCOPE ="https://www.googleapis.com/auth/gmail.readonly ";
// const AUTH_URL=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect
// _uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
// window.location.href=AUTH_URL
// }
// const getAccessToken = () => {
// const url = window.location.href;
// const token = url.match(/access_token=([^&]+)/);
// // localStorage.setItem("Token", token[1]);                 //erroe show null problem
// }



// useEffect(() => {
// getAccessToken()
// }, [])
// const getEmailData=()=>{
// let token= localStorage.getItem("Token");
// console.log("hello",token);
// let url="https://gmail.googleapis.com/gmail/v1/users/me/messages"
// const options={
// method:"GET",
// headers:{
// 'Authorization':`Bearer ${token}`,
// 'Content-Type':`application/json`
// }
// }
// fetch(url,options)
// .then(response=>response.json())
// .then(json=>console.log(fetchMail(json.messages[0].id)))
// .catch(error=>console.log('Error in fetching mails',error))
// }




// const fetchMail=(id)=>{
//     console.log("Message id is==",id)
// // let id="18e28f8a1ea93a27";             //id give
// let token=localStorage.getItem("Token")
// const options={
// method:"GET",
// headers:{
// 'Authorization':`Bearer ${token}`,
// 'Content-Type':`application/json`
// }
// }
// let url= `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
// fetch(url,options)
// .then(response=>response.json())
// .then(json=>console.log(json))
// .catch(error=>console.log('Error in fetching mails',error))
// }
// return (
// <>
// <div>
// {accesstoken? (
// <div>
// <h1>Access token otaines</h1>
// <p>Access Token:{accesstoken}</p>
// </div>):(
// <>
// <button onClick={handlelogin}>Login with google</button>
// <button onClick={()=>getEmailData()}>get Email</button>
// <button onClick={()=>fetchMail()}>Fetch Emails</button>
// </>
// )
// }
// </div>
// </>
// )
// }
// export default TokenPoonam;


import React, { useEffect, useState } from 'react'


function About() {
    const[accesstoken,setAccesstoken]=useState('')
    const handlelogin =()=>{
    console.log("handle login clicked")
    const CLIENT_ID="123789108396-5kabfo2e2ak6t6bg2uhtj4l7mc9f7ieb.apps.googleusercontent.com";
    const REDIRECT_URL="http://localhost:3000";
    const SCOPE =`https://www.googleapis.com/auth/gmail.readonly`;
    const AUTH_URL=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
    window.location.href=AUTH_URL
    }
    const getAccessToken = () => {
        // console.log(window.location.href)                  //token get in console
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        // console.log(token[1])
        localStorage.setItem("Token", token[1]);                //erroe show null problem
    // console.log("token is",localStorage.getItem("Token"))
    
    };
        useEffect(() => {
        getAccessToken()
        }, [])

        const getEmailData=()=>{
            // console.log("hello poonam")
            let token= localStorage.getItem("Token");
            console.log("hello poonam",token);
            let url="https://gmail.googleapis.com/gmail/v1/users/me/messages"
            const options={
            method:"GET",
            headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type':`application/json`
            }
            }
            fetch(url,options)
            .then(response=>response.json())

            // .then(json=>console.log(json.messages[0].id))                //reason not show fetch mail
            .then(json=>console.log(fetchMail(json.messages[0].id)))
            .catch(error=>console.log('Error in fetching mails',error))
            }


const fetchMail=(id)=>{
    // let id="18e28f8a1ea93a27";
    console.log("Message id is==",id)
    let token=localStorage.getItem("Token")
    const options={
    method:"GET",
    headers:{
    'Authorization':`Bearer ${token}`,
    'Content-Type':`application/json`
    }
    }
    let url= `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
    fetch(url,options)
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log('Error in fetching mails',error))
    }

    return (
    <>
    
    <div>
{accesstoken? (
<div>
<h1>Access token otaines</h1>
<p>Access Token:{accesstoken}</p>
</div>):(
<>
<button onClick={handlelogin}>Login with google</button>
<button onClick={()=>getEmailData()}>get Email</button>
<button onClick={()=>fetchMail("18e5625dcbe85445")}>Fetch Emails</button>
</>
)
}
</div>
    
    
    </>
  )
}

export default About
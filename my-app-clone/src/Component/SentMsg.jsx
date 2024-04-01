// import { Route, Routes } from "react-router-dom";
// import Container from "./Container";
// import Header from "./Header";
// import  Leftside from "./Leftside";
// import Mail from "./Mail";
// import Starred from "./Starred";
// import Inbox from "./Inbox";
// import FooterBody from "./FooterBody";

// import FooterBody from "./FooterBody";



// function Main (){
//     return (
//  <div class="body-wrapper">
// <Leftside/>
// <Header/>

// <Mail/>
// // <FooterBody/> 
// {/* <Navbar/>
//  <Routes><Route path="/inbox" element={<Inbox/>}></Route>
// <Route path="/starred" element={<Starred/>}></Route>
// </Routes> */}
// <Container/>

// </div> 
//     )
// };
// export default Main;




// import { Route, Routes } from "react-router-dom";
// import Container from "./Container";
// import Header from "./Header";
// import Leftside from "./Leftside";
// import Mail from "./Mail";
// import Starred from "./Starred";
// import TokenPoonam from "../Routerpractice/TokenPoonam";
// function Main (){
// return (
// <div class="body-wrapper">
// <Leftside/>
// <Header/>
// {/* <Mail/> */}
// <Routes><Route path="/" element={<TokenPoonam/>}></Route>
// <Route path="/starred" element={<Starred/>}></Route>
// </Routes>
// <Container/>
// </div>
// )
// };
// export default Main;


// // import { Route, Routes } from "react-router-dom";
// import Container from "./Container";
// import FooterBody from "./FooterBody";
// import Header from "./Header";
// import Leftside from "./Leftside";
// import Mail from "./Mail";
// function Main (){
// return (
// <div class="body-wrapper">
// <Leftside/>
// <Header/>
// {/* 
// <Routes>
//     <Route path="/" element={<Contact/>}></Route>
// <Route path="/inbox" element={<About/>}></Route>
// <Route path="/sent" element={<Home/>}></Route>
// </Routes> */}
// <Mail/>

// <FooterBody/>
// <Container/>
// </div>
// )
// };
// export default Main;


import { Routes,Route } from "react-router-dom";
import Leftside from "./Leftside";
import Header from "./Header";
import Mail from "./Mail";
import FooterBody from "./FooterBody";
import Container from "./Container";
// import Starred from "./Starred";
function Main (){
    return (
 <div class="body-wrapper">
<Leftside/>
<Header/>
<Mail/>
<Routes>
         <Route path='/' element={<Mail params="Login"/>}/> 
         <Route path='/inboxmsg' element={<Mail params="InboxMsg"/>}/> 
         <Route path='/sentmsg' element={<Mail params="SentMsg"/>}/> 
         <Route path='/draft' element={<Mail params="Draft"/>}/> 
          </Routes>

<FooterBody/>
<Container/>
</div> 
    )
};
export default Main;
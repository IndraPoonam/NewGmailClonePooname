// import { useEffect, useState } from 'react'
// import select2 from '../icons/check_box_outline_blank_black_24dp.svg'
//  import drag from '../icons/drag_indicator_black_24dp.svg'
// import starred from '../icons/star_border_black_24dp.svg'
// import archive from '../icons/archive_black_24dp.svg'
// import delete2 from '../icons/delete_black_24dp.svg'
// import unread from '../icons/mark_as_unread_black_24dp.svg'
// import snooze from '../icons/access_time_filled_black_24dp.svg'
// import useCustomHook from '../Component/useCustomHook'
// // import { json } from 'react-router-dom'

// function InboxMsg() {
//   const data = useCustomHook('https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:inboxMsg');
//   function convertTimestampToTime(timestamp) {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const meridiem = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 || 12;
//     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//     return `${formattedHours}:${formattedMinutes} ${meridiem}`;
//   }
// // const[data,setData]=useState([])    

// //new change in promise
//     // useEffect(() => {
//     //     const url = window.location.href;
//     //     const token = url.match(/access_token=([^&]+)/);
//     //     localStorage.setItem("Token", token && token[1]);
//     //     getEmaildata();
//     //   }, []);
    
// //       function convertTimestampToTime(timestamp) {
// //         const date = new Date(timestamp);
// //         const hours = date.getHours();
// //         const minutes = date.getMinutes();
// //         const meridiem = hours >= 12 ? "AM" : "PM";
// //         const formattedHours = hours % 12 || 12;
// //         const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
// //         return `${formattedHours}:${formattedMinutes}:${meridiem}`;
// //     }

// //       const getEmaildata = () => {
// //         let token = localStorage.getItem("Token");
// //         console.log("hello", token);
// //         let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:inboxmsg";
// //         const options = {
// //           method: "GET",
// //           headers: {
// //             'Authorization': `Bearer ${token}`,
// //             'Content-Type': `application/json`
// //           }
// //         };
// //         fetch(url, options)
// //           .then(response => response.json())
// //           .then(json => fetchMail(json.messages))
// //           .catch(error => console.log('error in fetching mails', error));
// //       };
    
// //       const fetchMail =async (id) => {                       //async use
// //         console.log("message id is ===", id)
        
// //         let token = localStorage.getItem("Token");
// //         const options = {
// //           method: "GET",
// //           headers: {
// //             'Authorization': `Bearer ${token}`,
// //             'Content-Type': `application/json`
// //           }
// //         };
// // let maildata=[]
// // // id.slice(0,10).map(async (value,index)=>{
// //   for(let message_id of id.slice(0,10)){

// //   // console.log("value is",value.id)
// //   // console.log("index",index)
// //   // let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${value.id}`;
// //   let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`;
// // const response= await fetch(url,options)
// //   const message_data= await response.json();
// // maildata.push(message_data)
// // console.log("message data is==",maildata)
// //   }

// //     console.log("email data is ==",maildata)
// //     setData(maildata)
// //       };

// //       console.log("state data is",data)
// // console.log("Data is",data)
// // setData(maildata)
//   return (
//     <> 



//    <div class="content">                       
//   <div class="content">                                  
//     <div class="mail">
//         {data && data.map((value)=>(<> 
//           {/* {console.log
//                 ("header is === ",value.payload.headers)}      */}
//             <div class="inbox-message-item">
// {console.log(value)}
// <div class="checkbox">
//   <button class="btn">
//     <img src={select2} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
//   </button>
// </div>

// <div class="message-group-hidden">
//   <button class="btn-alt btn-nofill drag-indicator" >
//     <img src={drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled"/>
//   </button>
// </div>

// <button class="btn star">
//   <img src={starred} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
// </button>

// <div class="message-default" >

//   <div class="message-sender message-content unread" >
//     <span >{value.payload.headers.find(item => item.name == "From").value}</span>
//   </div>

//   <div class="message-subject message-content unread">
//     {/* <span>Dev Horror Stories: 👻 2000 lines of inline styles</span> */}
//     <span >{value.payload.headers.find(item=>item.name == "From").value}</span>
//   </div>

//   <div class="message-seperator message-content"> - </div>

//   <div class="message-body message-content">
//     <span>{value.snippet}</span>
//   </div>
  
//   <div class="gap message-content" > &nbsp; </div>
// {/* 
//   <div class="message-date center-text unread" >
//   <span>{value.payload.headers.find(item=>item.name == "Date").value}</span>
//   </div> */}

//   <div class="message-date center-text unread" >
//      <span>{convertTimestampToTime(value.payload.headers.find(item=>item.name=="Date").value)}</span>
//                             </div>

// </div>

// <div class="message-group-hidden" >
//   <div class="inbox-message-item-options">
//     <button class="btn">
//       <img src={archive} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
//     </button>

//     <button class="btn">
//       <img src={delete2} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
//     </button>

//     <button class="btn">
//       <img src={unread} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
//     </button>

//     <button class="btn">
//       <img src={snooze} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
//     </button>
//   </div>
// </div>

// </div></>))}                

        
        


       
        
//       {/* //code commentout */}
//     </div> 
    
//     </div>   
    
//     </div> 
    
    

//     </>
//   )
// }

// export default InboxMsg



import useCustom from "../Component/useCustomHook";
const InboxMsg = () => {
 const data = useCustom("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:inbox")
const convertToAMPM = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
};
    return(
<>
{console.log("static data is" , data)}
<div class="content">
   <div class="mail">
   {data && data.map((Value) =>(<>          
       <div class="inbox-message-item">
                <div class="checkbox"  >
                  <button class="btn">
                    <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                  </button>
                </div>
                <div class="message-group-hidden">
                  <button class="btn-alt btn-nofill drag-indicator" >
                    <img src="./icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                  </button>
                </div>

                <button class="btn star" >
                  <img src="./icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                </button>

                <div class="message-default" >

                  <div class="message-sender message-content unread" >
                    <span >{Value.payload.headers.find(item=>item.name == "From").value}</span>
                  </div>
      
                  <div class="message-subject message-content unread">
                    <span>{Value.payload.headers.find(item=>item.name == "Subject").value}</span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span>{Value.snippet}</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text unread" > 
                    <span>{convertToAMPM(Value.payload.headers.find(item=>item.name == "Date").value)}</span>
                  </div>

                </div>

                <div class="message-group-hidden" >
                  <div class="inbox-message-item-options">
                    <button class="btn">
                      <img src="./icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
                  </div>
                </div>

              </div></>))}      

          </div>






        </div>
</>
    );
}
export default InboxMsg;
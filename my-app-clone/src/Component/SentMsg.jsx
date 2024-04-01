// import React,{useEffect,useStateb} from 'react'
// import checkbox from '../icons/check_box_outline_blank_black_24dp.svg';
// import drag from '../icons/drag_indicator_black_24dp.svg';
// import star from '../icons/star_border_black_24dp.svg';
// import archive from '../icons/archive_black_24dp.svg';
// import delet from '../icons/delete_black_24dp.svg';
// import mark from '../icons/mark_as_unread_black_24dp.svg';
// import time from '../icons/access_time_filled_black_24dp.svg';
// import useCustomHook from '../Component/useCustomHook';

// const Sent = () => {
//   const data = useCustomHook('https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:sentMsg')
// // const data=UseCustomHook('https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:sentMsg')
// function convertTimestampToTime(timestamp) {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const meridiem = hours >= 12 ? 'PM' : 'AM';
//   const formattedHours = hours % 12 || 12;
//   const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//   return `${formattedHours}:${formattedMinutes} ${meridiem}`;
// }

//   return (
//     <div>
//       {data && data.map((value) => (

//         <div className="inbox-message-item">
//           {console.log(value)}
//           <div className="checkbox">
//             <button className="btn">
//               <img src={checkbox} alt="Select" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
//             </button>
//           </div>
//           <div className="message-group-hidden">
//             <button className="btn-alt btn-nofill drag-indicator">
//               <img src={drag} alt="Drag" className="btn-icon-sm btn-icon-alt btn-icon-disabled" />
//             </button>
//           </div>
//           <button className="btn star">
//             <img src={star} alt="Not starred" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
//           </button>
//           <div className="message-default">
//             <div className="message-sender message-content unread">
//               <span>{value.payload.headers.find(item => item.name == "From").value}</span>
//             </div>
//             <div className="message-subject message-content unread">
//               <span>{value.payload.headers.find(item => item.name == "From").value}</span>

//             </div>
//             <div className="message-separator message-content"> - </div>
//             <div className="message-body message-content">
//               <span>{value.snippet}</span>
//             </div>
//             <div className="gap message-content">&nbsp;</div>
//             <div className="message-date center-text unread">
//               <span>{convertTimestampToTime(value.payload.headers.find(item=>item.name=="Date").value)}</span>
//               <span>{value.payload.headers.find(item => item.name == "Date").value}</span>
//             </div>
//           </div>
//           <div className="message-group-hidden">
//             <div className="inbox-message-item-options">
//               <button className="btn">
//                 <img src={archive} alt="Archive" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
//               </button>
//               <button className="btn">
//                 <img src={delet} alt="Delete" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
//               </button>
//               <button className="btn">
//                 <img src={mark} alt="Mark as unread" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
//               </button>
//               <button className="btn">
//                 <img src={time} alt="Snooze" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
//       }

// export default Sent;


import useCustom from "../Component/useCustomHook";

const SentMsg = () => {
  const data = useCustom("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:sent")

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
                    <span >{Value.payload.headers.find(item=>item.name === "From").value}</span>
                  </div>
      
                  <div class="message-subject message-content unread">
                    <span>{Value.payload.headers.find(item=>item.name === "Subject").value}</span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span>{Value.snippet}</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text unread" > 
                    <span>{convertToAMPM(Value.payload.headers.find(item=>item.name === "Date").value)}</span>
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
export default SentMsg;
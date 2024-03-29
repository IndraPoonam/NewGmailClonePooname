// // import { useRef ,useState} from 'react';
// // function PracticeUseref() {
// //   const hook = useRef('')
// //   const [name, setName] = useState("input field")
  
// //   function Reset() {
// //     setName("2000")
// //    hook.current.focus()
// //   }
// //   function Color(){
// //     hook.current.style.color='red'
// //   }
  
// // return (
// //   <div className="App">
// //     <h1>useRef</h1>
// //     <input ref={hook} type='text' value={name} onChange={(e) => setName(e.target.value)} />
// //     <button onClick={Reset}>Reset</button>
// //     <button onClick={Color}> Change input color</button>
// //   </div>
// // );

// // }


// ============================counter alert useref=========================


// import React, { useRef } from 'react';

// function PracticeUseref() {
//   const clickCountRef = useRef(0);

//   const handleClick = () => {
//     clickCountRef.current += 1;
//     const clickCountElement = document.getElementById('clickCount');
//     if (clickCountElement) {
//      clickCountElement.textContent = clickCountRef.current;
//     // alert(`Button clicked! Current click count: ${clickCountRef.current}`);
//     }
//   };

//   return (
//     <div><center>
//       <p>Number of clicks: Alert show how may you touch button
//          <span id="clickCount">{clickCountRef.current}</span>
//       </p>
//       <button onClick={handleClick}>Click me</button></center>
//     </div>
//   );
// }

// export default PracticeUseref;



import React, { useRef } from 'react';

function PracticeUseref() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  // function Color(){
  //        inputRef.current.style.color='red'
  //   }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick} >Focus Input</button>
    </div>
  );
}

export default PracticeUseref;

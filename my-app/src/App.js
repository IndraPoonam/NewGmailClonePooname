
import './App.css';

// import Tail from './Component/Tail';
import TailwindPrac from './TailwindPrac';
// import UserefPract from './Component/UserefPract';
// import TokenPoonam from './TokenPoonam';


function App() {


  return(
    <>
    <TailwindPrac/>
    {/* <UserefPract/> */}
    {/* <Menu/> */}
    {/* <h1>Menu Component Example</h1> */}
      {/* Pass props to Menu component */}
      {/* <Menu a="10" b="38" /> */}
                               {/* <Tail/> >>>>>>>>.>// */}
    {/* <AuthProvider>
   <Authentication/>
   </AuthProvider> */}



    </>
  );
}
export default App;


// import React from 'react';
// import { AuthProvider } from './authentication';
// import MyComponent from './MyComponent';

// function App() {
//   return (
//     <AuthProvider>
//       <div className="App">
//         <MyComponent />
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;


// import { useRef ,useState} from 'react';
// import './App.css';

// function App() {
//   const hook = useRef('')
//   const [name, setName] = useState("Input field")
  
//   function Reset() {
//     setName("")
//    hook.current.focus()
//   }
//   function Color(){
//     hook.current.style.color='red'
//   }
  
// return (
//   <div className="App">
//     <h1>useRef</h1>
//     <input ref={hook} type='text' value={name} onChange={(e) => setName(e.target.value)} />
//     <button onClick={Reset}>Reset</button>
//     <button onClick={Color}> Change input color</button>
//   </div>
// );

// }



// export default App;

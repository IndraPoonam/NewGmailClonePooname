import { useRef ,useState} from 'react';

function UserefPract() {
  const hook = useRef('')
  const [name, setName] = useState("Input field")
  
  function Reset() {
    setName("")
   hook.current.focus()
  }
  function Color(){
    hook.current.style.color='red'
  }
  
return (
  <div className="App">
    <h1>useRef</h1>
    <input ref={hook} type='text' value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={Reset}>Reset</button>
    <button onClick={Color}> Change input color</button>
  </div>
);

}



export default UserefPract;


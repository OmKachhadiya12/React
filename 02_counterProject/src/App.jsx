import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10);

  function increaseValue() {
    console.log("Working...");
    counter = counter + 1;
    if(counter > 20){
      return alert("Counter can't be greater than 20.")
    }
    setCounter(counter);
  }

  function decreaseValue() {
    console.log("Working...");
    counter = counter - 1;
    if(counter < 0) {
      return alert("Counter can't be smaller than 0.")
    }
    setCounter(counter);
  }

  return (
    <>
      Hello Guys!!!
      <h2>Counter: {counter}</h2>
      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
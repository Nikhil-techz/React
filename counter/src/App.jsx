import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // useState return empty array- which has variable and function . variable & functio naming kuch bhi skta hai. method control the variable
  // let counter = 15;

  const addvalue = () => {
    console.log("value added.");
    if (counter <= 20) {
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    console.log("remove value:");
    if (counter >= 10) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h3>chai aur react</h3>
      <h3>counter value:{counter}</h3>
      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removevalue}>decrease value {counter}</button>
    </>
  );
}

export default App;

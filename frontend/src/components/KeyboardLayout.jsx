import React, { useCallback, useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './keyboardLayout.css';


function KeyboardLayout({count,setCount}) {

  const [input, setInput] = useState("");
  // const [layout, setLayout] = useState("default");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    console.log(input.split(" ").length);
    if(!timerInterval) startTimer();
    console.log(timerInterval , "interval")
    if(button === "{enter}"){
      setCount(0);
      stopTimer();
      setElapsedTime(0);
      setTimerInterval(0);
      alert("your speed is "+ Math.floor(input.split(" ").length/elapsedTime*60) + " word per minute");
      keyboard.current.setInput("");
    }
    else setCount(count+1);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  const startTimer = () => {
    setTimerInterval(setInterval(updateTimer, 1000));
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const updateTimer = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  };

  return (
    <>
    <h1>{elapsedTime}</h1>

      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <div className="App">
      <Keyboard 
        physicalKeyboardHighlight = {true}
        physicalKeyboardHighlightPress = {true} 
        physicalKeyboardHighlightTextColor = "white"
        physicalKeyboardHighlightBgColor= "#9ab4d0"


        keyboardRef={r => (keyboard.current = r)}
        // layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      </div>

    </>
  );

}

export default KeyboardLayout


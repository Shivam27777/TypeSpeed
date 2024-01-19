import React, { useCallback, useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './keyboardLayout.css';
import Score from "./Score";
import Fact from "./Fact";


function KeyboardLayout({count,setCount}) {

  const [input, setInput] = useState("");
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
    <Score elapsedTime = {elapsedTime} input = {input}/>
    <Fact/>
      <input
        value={input}
        className="border-2 border-gray-300 rounded-md p-2 h-16 w-full focus:outline-none focus:border-grey-500 px-5 my-1"
        placeholder={"Tap on the keyboard to start"}
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


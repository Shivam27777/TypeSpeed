import React, { useCallback, useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './keyboardLayout.css';
import Score from "./Score";
import Modal from "./Modal"; // Import the Modal component

function KeyboardLayout({ count, setCount }) {
  const [input, setInput] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speed, setSpeed] = useState(0); // State to store the calculated speed

  const keyboard = useRef();

  const onChange = (input) => {
    if(!isModalOpen){
      setInput(input);
      console.log("Input changed", input);
    }

  };

  const onKeyPress = (button) => {
    if(!isModalOpen){
      if (!timerInterval) startTimer();
      if (button === "{enter}") {
        setCount(0);
        stopTimer();
        const wordsPerMinute = Math.floor(input.split(" ").length / elapsedTime * 60);
        setSpeed(wordsPerMinute); // Set speed for display in the modal
        setIsModalOpen(true); // Open the modal
        setElapsedTime(0);
        setTimerInterval(0);
        keyboard.current.setInput("");
      } else {
        setCount(count + 1);
      }
    }

  };

  const onChangeInput = (event) => {
    if(!isModalOpen){
      const input = event.target.value;
    }
    
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
      <Score elapsedTime={elapsedTime} input={input} />
      <input
        value={input}
        className="border-2 border-gray-300 rounded-md p-2 h-16 w-full focus:outline-none focus:border-grey-500 px-5 my-1"
        placeholder={"Tap on the keyboard to start"}
        onChange={onChangeInput}
      />
      <div className="App">
        <Keyboard
          physicalKeyboardHighlight={true}
          physicalKeyboardHighlightPress={true}
          physicalKeyboardHighlightTextColor="white"
          physicalKeyboardHighlightBgColor="#9ab4d0"
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      
      <Modal
        isOpen={isModalOpen}
        closeModal={() => [setIsModalOpen(false), keyboard.current.setInput("")]}
        speed={speed}
      />
    </>
  );
}

export default KeyboardLayout;

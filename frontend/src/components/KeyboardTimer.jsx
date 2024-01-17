import React, { useState, useEffect } from 'react';

function KeyboardTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    setTimerInterval(setInterval(updateTimer, 1000));
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const updateTimer = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      stopTimer();
    } else {
      if (!timerInterval) {
        startTimer();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearInterval(timerInterval);
    };
  }, [timerInterval]);

  return (
    <div>
      <p>Press any key to start the timer. Press Enter to stop the timer.</p>
      <p>{elapsedTime} seconds</p>
    </div>
  );
}

export default KeyboardTimer;
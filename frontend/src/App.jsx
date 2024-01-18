import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KeyboardLayout from './components/KeyboardLayout'
import KeyboardTimer from './components/KeyBoardTimer'

function App() {
  const [count, setCount] = useState(0)
  const [guessedLetters, setGuessedLetters] = useState("");

    // keyboard event handler
    useEffect(() => {
      const handler = (e) => {
        const key = e.key
  
        if (!key.match(/^[a-z]$/)) {
          return
        } else {
          e.preventDefault();
          // addGuessLetter(key);
        }
      }
  
      document.addEventListener('keypress', handler)
  
      return () => {
        document.removeEventListener("keypress", handler)
        setCount((count) => count + 1)
      }
      
    }, [guessedLetters]);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <KeyboardLayout count = {count} setCount = {setCount}/>
    </>
  )
}

export default App

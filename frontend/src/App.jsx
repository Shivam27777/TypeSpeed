import { useEffect, useState } from 'react'
import './App.css'
import KeyboardLayout from './components/KeyboardLayout'
import Header from './components/Header';
import Fact from './components/Fact';


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
    <Header/>
    <Fact/>
      <KeyboardLayout count = {count} setCount = {setCount}/>
    </>
  )
}

export default App

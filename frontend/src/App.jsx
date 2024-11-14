import { useEffect, useState } from 'react';
import './App.css';
import KeyboardLayout from './components/KeyboardLayout';
import Header from './components/Header';
import Fact from './components/Fact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState("");

  // keyboard event handler
  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) {
        return;
      } else {
        e.preventDefault();
        // addGuessLetter(key);
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener("keypress", handler);
      setCount((count) => count + 1);
    };
  }, [guessedLetters]);

  return (
    <div className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-1 bg-gray-100">
    <Fact />
    <div className="keyboard-layout-container">
      <KeyboardLayout count={count} setCount={setCount} />
    </div>
  </main>
  <Footer />
</div>
  );
}

export default App;

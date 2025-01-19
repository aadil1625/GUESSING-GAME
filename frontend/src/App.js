import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [message, setMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      setMessage('Please enter a valid number!');
      return;
    }
    if (guess < 1 || guess > 100) {
      setMessage('Enter a number between 1 and 100!');
      return;
    }

    setPreviousGuesses([...previousGuesses, guess]);
    setRemainingAttempts(remainingAttempts - 1);

    if (guess === randomNumber) {
      setMessage('Hurrah! You Win!');
      setGameOver(true);
    } else if (remainingAttempts - 1 === 0) {
      setMessage(`Game Over! The number was ${randomNumber}`);
      setGameOver(true);
    } else if (guess < randomNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }

    setUserGuess('');
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setPreviousGuesses([]);
    setMessage('');
    setRemainingAttempts(10);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100. You have 10 attempts!</p>
      <form onSubmit={handleGuess}>
        <label htmlFor="guessField">Enter Your Guess:</label>
        <input
          type="number"
          id="guessField"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          disabled={gameOver}
        />
        <button type="submit" disabled={gameOver}>
          Submit Guess
        </button>
      </form>
      <div className="results">
        <p>Previous Guesses: {previousGuesses.join(', ')}</p>
        <p>Guesses Remaining: {remainingAttempts}</p>
        <p className="message">{message}</p>
      </div>
      {gameOver && (
        <button className="new-game" onClick={resetGame}>
          Start New Game
        </button>
      )}
    </div>
  );
};

export default App;

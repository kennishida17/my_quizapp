import './App.css';
import React, { useState } from 'react';
import Quiz from './Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
  };

  const returnToHomePage = () => {
    setShowQuiz(true);
  };


  return (
    <div>
      {showQuiz ? (
        <div>
          {!quizStarted ? (
            <div>
              <h1>Welcome to the Quiz App</h1>
              <button onClick={startQuiz}>Start Quiz</button>
            </div>
          ) : (
            <Quiz onComplete={handleQuizComplete} />
          )}
        </div>
      ) : (
        <div>
          <h2>Welcome to the Quiz App</h2>
          <button onClick={returnToHomePage}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;

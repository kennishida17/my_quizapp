import React, { useState } from 'react';

const quizData = [
  {
    question: 'Question 1',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 1,
  },
  {
    question: 'Question 2',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 2,
  },
  // Add more questions as needed
];

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion === quizData.length - 1) {
        setQuizCompleted(true);
    }else{
        setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption('');
    setQuizCompleted(false)
  };

  const returnToHomePage = () => {
    onComplete();
  };

  return (
    <div>
      {(!quizCompleted)? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={checkAnswer}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}</p>
          <button onClick={resetQuiz}>Restart Quiz</button> {/* リセットボタンを追加 */}
          <button onClick={returnToHomePage}>Return to Top</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;

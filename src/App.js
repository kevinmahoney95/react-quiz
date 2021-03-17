import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of Vermont?",
      answerOptions: [
        { answerText: "Burlington", isCorrect: false },
        { answerText: "Milton", isCorrect: false },
        { answerText: "Essex", isCorrect: false },
        { answerText: "Montpelier", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Florida?",
      answerOptions: [
        { answerText: "Tallahassee", isCorrect: true },
        { answerText: "Tampa", isCorrect: false },
        { answerText: "Miami", isCorrect: false },
        { answerText: "Orlando", isCorrect: false },
      ],
    },
    {
      questionText: "Who directed Poltergeist (1982)?",
      answerOptions: [
        { answerText: "Steven Spielberg", isCorrect: false },
        { answerText: "Tobe Hooper", isCorrect: true },
        { answerText: "John Carpenter", isCorrect: false },
        { answerText: "William Friedkin", isCorrect: false },
      ],
    },
    {
      questionText: "How many films are there in the Friday the 13th franchise?",
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "12", isCorrect: true },
        { answerText: "13", isCorrect: false },
      ],
    },
  ];

  //Tracks current question
  const [currentQ, setCurrentQ] = useState(0);
  //Tracks if we are displaying score or questions
  const [showScore, setShowScore] = useState(false);
  //Tracks score
  const [score, setScore] = useState(0)

  
  //adds up score
  function handleAnswerButton(isCorrect) {
    if(isCorrect) {
      setScore(score + 1)
    } 

    let nextQ = currentQ + 1;

    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  }

  //resets game
  function handleResetButton() {
    setCurrentQ(0);
    setShowScore(false);
    setScore(0);
    
  }

  return (
    <div className="App">
      {/* Ternary to render either score or a questions screen */}
      {showScore ? (
        <>
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
        <button onClick={handleResetButton}>Reset</button>
        </>
      ) : (
        <>
          <div className="questions-section">
            <div className="question-count">
              <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQ].questionText}
            </div>
          </div>
          <div className="answers-section">
            {questions[currentQ].answerOptions.map((answerOptions) => (
              <button onClick={() => handleAnswerButton(answerOptions.isCorrect)}>
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

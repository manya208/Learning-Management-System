import { useState } from "react";
import "./Quiz.css";

function Quiz() {

  const questions = [
    {
      question: "Which language is mainly used to structure a web page?",
      options: [
        "Python",
        "HTML",
        "Java",
        "C++"
      ],
      answer: "HTML"
    },
    {
      question: "Which technology is used to style web pages?",
      options: [
        "CSS",
        "MongoDB",
        "Node.js",
        "Python"
      ],
      answer: "CSS"
    },
    {
      question: "Which library is commonly used to build React applications?",
      options: [
        "React",
        "Django",
        "Flask",
        "Laravel"
      ],
      answer: "React"
    },
    {
      question: "Which database are we using for the LMS project?",
      options: [
        "MySQL",
        "MongoDB",
        "Oracle",
        "SQLite"
      ],
      answer: "MongoDB"
    },
    {
      question: "Which technology is commonly used to create REST APIs with JavaScript?",
      options: [
        "Express.js",
        "Bootstrap",
        "CSS",
        "HTML"
      ],
      answer: "Express.js"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  


  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };


  const handleNext = () => {

    if (!selectedAnswer) {
      return;
    }

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedAnswer("");

    }  else {

  setSubmitted(true);

}
  };



  const restartQuiz = () => {

    setCurrentQuestion(0);

    setSelectedAnswer("");

    setScore(0);

    setSubmitted(false);

  };


  if (submitted) {

    return (

      <div className="quiz-page">

        <div className="quiz-result">

          <div className="result-icon">
            <i className="bi bi-trophy-fill"></i>
          </div>

          <h1>Quiz Completed!</h1>

          <p>
            Great job! Here is your result.
          </p>

          <div className="score-circle">

            <strong>
              {score}/{questions.length}
            </strong>

            <span>Score</span>

          </div>

          <div className="result-message">

            {score >= 4
              ? "Excellent work! 🎉"
              : score >= 3
              ? "Good job! Keep learning."
              : "Keep practicing and try again!"
            }

          </div>

          <div className="result-buttons">

            <button
              className="restart-btn"
              onClick={restartQuiz}
            >
              <i className="bi bi-arrow-repeat"></i>
              Try Again
            </button>

            <a
              href="/student-dashboard"
              className="dashboard-btn"
            >
              Dashboard
            </a>

          </div>

        </div>

      </div>

    );

  }


  return (

    <div className="quiz-page">

      {/* NAVBAR */}

      <header className="quiz-navbar">

        <div className="quiz-brand">

          <i className="bi bi-mortarboard-fill"></i>

          EduVerse

        </div>

        <div className="quiz-title">

          Full Stack Web Development

        </div>

        <a
          href="/learning/1"
          className="exit-quiz"
        >
          <i className="bi bi-x-lg"></i>
          Exit Quiz
        </a>

      </header>


      {/* QUIZ */}

      <main className="quiz-container">

        <div className="quiz-top">

          <div>

            <span>
              Module Assessment
            </span>

            <h1>
              Web Development Basics
            </h1>

          </div>

          <div className="question-count">

            Question {currentQuestion + 1} of{" "}
            {questions.length}

          </div>

        </div>


        {/* PROGRESS */}

        <div className="quiz-progress">

          <div
            className="quiz-progress-fill"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`
            }}
          ></div>

        </div>


        {/* QUESTION CARD */}

        <div className="question-card">

          <h2>
            {questions[currentQuestion].question}
          </h2>


          <div className="options">

            {questions[currentQuestion].options.map(
              (option, index) => (

                <button
                  key={index}
                  className={
                    selectedAnswer === option
                      ? "quiz-option selected"
                      : "quiz-option"
                  }
                  onClick={() =>
                    handleAnswer(option)
                  }
                >

                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    {option}
                  </span>

                  {selectedAnswer === option && (

                    <i className="bi bi-check-circle-fill"></i>

                  )}

                </button>

              )
            )}

          </div>


          {/* BUTTON */}

          <div className="quiz-navigation">

            <span>

              {selectedAnswer
                ? "Answer selected"
                : "Select an answer to continue"
              }

            </span>

            <button
              className="next-question-btn"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >

              {currentQuestion ===
              questions.length - 1
                ? "Finish Quiz"
                : "Next Question"
              }

              <i className="bi bi-arrow-right"></i>

            </button>

          </div>

        </div>


        {/* QUIZ INFO */}

        <div className="quiz-info">

          <div>

            <i className="bi bi-clock"></i>

            <span>
              No time limit
            </span>

          </div>

          <div>

            <i className="bi bi-check-circle"></i>

            <span>
              {questions.length} questions
            </span>

          </div>

          <div>

            <i className="bi bi-award"></i>

            <span>
              Pass mark: 60%
            </span>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Quiz;
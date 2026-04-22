import React, { useState } from 'react';
import { CheckCircle2, XCircle, Award } from 'lucide-react';
import axios from 'axios';

const QuizEngine = ({ courseId, questions }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return; // Prevent double clicking
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === questions[currentQIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (currentQIndex + 1 < questions.length) {
        setCurrentQIndex(currentQIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        finishQuiz(score + (isCorrect ? 1 : 0));
      }
    }, 1500); // Wait 1.5s so student sees if they were right/wrong
  };

  const finishQuiz = async (finalScore) => {
    setShowResults(true);
    // Submit score to backend
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/quiz/submit', 
        { courseId, score: finalScore, total: questions.length },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error("Failed to save score");
    }
  };

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-lg mx-auto mt-10">
        <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
        <p className="text-xl text-gray-600 mb-6">You scored {score} out of {questions.length}</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(score / questions.length) * 100}%` }}></div>
        </div>
        <button onClick={() => window.location.reload()} className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition">
          Back to Course
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-10">
      <div className="flex justify-between text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">
        <span>Question {currentQIndex + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{currentQ.questionText}</h3>
      
      <div className="space-y-4">
        {currentQ.options.map((option, index) => {
          
          // Logic for displaying colors after selection
          let btnClass = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all ";
          let Icon = null;

          if (!isAnswered) {
            btnClass += "border-gray-200 hover:border-blue-500 hover:bg-blue-50";
          } else if (index === currentQ.correctAnswer) {
            btnClass += "border-green-500 bg-green-50 text-green-800";
            Icon = <CheckCircle2 className="text-green-500 w-6 h-6" />;
          } else if (index === selectedOption) {
            btnClass += "border-red-500 bg-red-50 text-red-800";
            Icon = <XCircle className="text-red-500 w-6 h-6" />;
          } else {
            btnClass += "border-gray-200 opacity-50";
          }

          return (
            <button 
              key={index}
              onClick={() => handleAnswer(index)}
              className={btnClass}
              disabled={isAnswered}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {Icon}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizEngine;
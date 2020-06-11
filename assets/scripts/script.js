// DEFINE VARIABLES
var myQuizArray = [{
    question: "Commonly used data types DO NOT include",
    answers: ["strings", "booleans", "numbers", "alerts"],
    correctAnswer: 3
  },
  {
    question: "The condition in an if / else statement is enclosed within________",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correct: 2
  },
  {
    question: "Arrays in JavaScript can be used to store_____",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correct: 4
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correct: 3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correct: 4
  },
];
console.log(myQuizArray);





// DEFINE FUNCTIONS
function setmyQuiz() {
  // Use DOM Manipulation to take an array and put it on the page
  document.getElementById("my-quiz").innerHTML = myQuizArray[0].question;
}

setmyQuiz();

// FUNCTION CALLS
questionNumber = 0;
function nextQuestion()
{
  document.getElementById("my-quiz").innerHTML = myQuizArray[questionNumber].question;
  questionNumber++;

}


// EVENT LISTENERS
document.getElementById("next").addEventListener("click", nextQuestion)






// for (var i = 0; i, myQuiz.length; i++) {
//   if (i === myQuiz[0].correctAnswer) {
//     console.log("that answer is correct");
//   } else {
//     console.log("that answer is wrong");
//   }
// };




// As you proceed in your career as a web developer, 
// you will probably be asked to complete a coding assessment, 
// which is typically a combination of multiple - choice questions 
// and interactive challenges.Build a timed code quiz with multiple - 
// choice questions.This app will run in the browser and feature 
// dynamically updated HTML and CSS powered by your JavaScript code.
// It will also feature a clean and polished user interface and be 
// responsive, ensuring that it adapts to multiple screen sizes.
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
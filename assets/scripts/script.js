// DEFINE VARIABLES
var 
var myQuizArray = [{
    questionStringOne: "Commonly used data types DO NOT include",
    answersArrayOne: ["strings", "booleans", "alerts", "alerts"],
    correctAnswerOne: 3
  },
  {
    questionStringTwo: "The condition in an if / else statement is enclosed within________",
    answersArrayTwo: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswerTwo: 2
  },
  {
    questionStringThree: "Arrays in JavaScript can be used to store_____",
    answersArrayThree: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswerThree: 4
  },
  {
    questionStringFour: "String values must be enclosed within _______ when being assigned to variables",
    answersArrayFour: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswerFour: 3
  },
  {
    questionStringFive: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answersArrayFive: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswerFive: 4
  },
]; console.log(myQuizArray);

// DEFINE FUNCTIONS
function setmyQuiz(){
  // Use DOM Manipulation to take an array and put it on the page
  var myQuiz = JSON.parse(myQuizArray);
  document.getElementById("my-quiz").innerHTML = myQuiz.questionStringOne;
}
  

// FUNCTION CALLS



// EVENT LISTENERS







// for (var i = 0; i, myQuiz.length; i++) {
//   if (i === myQuiz[0].correctAnswer) {
//     console.log("that answer is correct");
//   } else {
//     console.log("that answer is wrong");
//   }
// };
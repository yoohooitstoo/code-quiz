// DEFINE VARIABLES
var myQuiz = [{
    questionString: "Commonly used data types DO NOT include",
    answersArray: ["strings", "booleans", "alerts", "alerts"],
    correctAnswer: 3
  },
  {
    questionString: "The condition in an if / else statement is enclosed within________",
    answersArray: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
  },
  {
    questionString: "Arrays in JavaScript can be used to store_____",
    answersArray: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 4
  },
  {
    questionString: "String values must be enclosed within _______ when being assigned to variables",
    answersArray: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3
  },
  {
    questionString: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answersArray: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 4
  },
]; console.log(myQuiz);

for (var i = 0; i, myQuiz.length; i++) {
  if (i === myQuiz[0].correctAnswer) {
    console.log("that answer is correct");
  } else {
    console.log("that answer is wrong");
  }
};
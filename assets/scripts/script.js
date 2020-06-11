// DEFINE VARIABLES
var questionNumber = 0;
var timeLeft = 100;


var myQuizArray = [{
    question: "Commonly used data types DO NOT include",
    answers: ["strings", "booleans", "numbers", "alerts"],
    correctAnswer: 3
  },
  {
    question: "The condition in an if / else statement is enclosed within________",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 1
  },
  {
    question: "Arrays in JavaScript can be used to store_____",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 3
  },
];
console.log(myQuizArray);





// DEFINE FUNCTIONS
function setmyQuiz() {
  // Use DOM Manipulation to take an array and put it on the page
  nextQuestion();
}

setmyQuiz();

// FUNCTION CALLS
// questionAnswer = 0;
function nextQuestion(answerSelected)
{
  correctAnswer = -1;
  if(questionNumber!=0)
  {
    correctAnswer = myQuizArray[questionNumber-1].correctAnswer;
  }
  document.getElementById("my-quiz").innerHTML = myQuizArray[questionNumber].question;
  document.getElementById("answer0").innerHTML = myQuizArray[questionNumber].answers[0];
  document.getElementById("answer1").innerHTML = myQuizArray[questionNumber].answers[1];
  document.getElementById("answer2").innerHTML = myQuizArray[questionNumber].answers[2];
  document.getElementById("answer3").innerHTML = myQuizArray[questionNumber].answers[3];

  result = "Wrong!";
  if(answerSelected === correctAnswer)
  {
    result = "Correct!";
  }
  else
  {
    result = "Wrong!"
    timeLeft = timeLeft - 15;
  }
  document.getElementById("result").innerHTML = result; //
  setTimeout(function() {document.getElementById("result").innerHTML="";}, 500)
  // questionAnswer++;
  questionNumber++;

}


// EVENT LISTENERS
document.getElementById("answer0").addEventListener("click", function(e) {nextQuestion(0)});
document.getElementById("answer1").addEventListener("click", function(e) {nextQuestion(1)});
document.getElementById("answer2").addEventListener("click", function(e) {nextQuestion(2)});
document.getElementById("answer3").addEventListener("click", function(e) {nextQuestion(3)});


var downloadTimer = setInterval(function()
{
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
  }
  timeLeft -= 1;
}, 1000);


/*var startTimer = document.querySelector("#startTimer");
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
function setTime() {
  startTimer.addEventListener("click", function () {
      mainPage.style.display = "none";
      myQuizArray.style.display = "block";
  
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  });
}*/
  
  //myQuizArray.addEventListener("clicks", function {
  //    myQuizArray.style.display = "none";
  //});
  
  setTime();


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
// DEFINE VARIABLES
//the start position of the quiz
var questionNumber = 0;
//timer
var timeLeft = 100;
//where we will store the high score
var highScores = [];

//My array for Questions and answers will need to iterate through
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
  {
    question: "dummy question",
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
//How we will display each question and the selections
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
function nextQuestion(answerSelected) {
  correctAnswer = -1;
  if (questionNumber != 0) {
    correctAnswer = myQuizArray[questionNumber - 1].correctAnswer;
  }
  document.getElementById("my-quiz").innerHTML = myQuizArray[questionNumber].question;
  document.getElementById("answer0").innerHTML = myQuizArray[questionNumber].answers[0];
  document.getElementById("answer1").innerHTML = myQuizArray[questionNumber].answers[1];
  document.getElementById("answer2").innerHTML = myQuizArray[questionNumber].answers[2];
  document.getElementById("answer3").innerHTML = myQuizArray[questionNumber].answers[3];
  //If a selection is incorrect notify user briefly and dock the timer 15 seconds
  // WHEN I answer a question incorrectly
  // THEN time is subtracted from the clock
  result = "Wrong!";
  if (answerSelected === correctAnswer) {
    result = "Correct!";
  } else {
    result = "Wrong!"
    timeLeft = timeLeft - 15;
  }
  document.getElementById("result").innerHTML = result; //
  setTimeout(function () {
    document.getElementById("result").innerHTML = "";
  }, 500)
  // questionAnswer++;
  questionNumber++;
  if (questionNumber > 5) {
    
  // GIVEN I am taking a code quiz
  // WHEN I click the start button

    document.getElementById("welcome-page").style.visibility = "hidden";
    document.getElementById("quiz-page").style.visibility = "hidden";
    document.getElementById("score-page").style.visibility = "visible";
    document.getElementById("highscore-page").style.visibility = "hidden";
    clearTimeout(downloadTimer);
    if (timeLeft === 0)
      document.getElementById("score-page").style.visibility = "visible";
  }
}

var downloadTimer;

function start() {
  downloadTimer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = 0;
    } else {
      document.getElementById("timer").innerHTML = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
  document.getElementById("welcome-page").style.visibility = "hidden";
  document.getElementById("quiz-page").style.visibility = "visible";
  document.getElementById("score-page").style.visibility = "hidden";
  document.getElementById("highscore-page").style.visibility = "hidden";
}

// EVENT LISTENERS

document.getElementById("submitButton").addEventListener("click", function (e) {
  document.getElementById("welcome-page").style.visibility = "hidden";
  document.getElementById("quiz-page").style.visibility = "hidden";
  document.getElementById("score-page").style.visibility = "hidden";
  document.getElementById("highscore-page").style.visibility = "visible";
  highscore = document.getElementById("timer").innerText;
  document.getElementsByClassName("finalScore").innerText = highscore;
});
document.getElementById("startButton").addEventListener("click", function (e) {
  start();
});
document.getElementById("answer0").addEventListener("click", function (e) {
  nextQuestion(0)
});
document.getElementById("answer1").addEventListener("click", function (e) {
  nextQuestion(1)
});
document.getElementById("answer2").addEventListener("click", function (e) {
  nextQuestion(2)
});
document.getElementById("answer3").addEventListener("click", function (e) {
  nextQuestion(3)
});
document.getElementById("goBack").addEventListener("click", function (e) {
  setmyQuiz();
});
// A timer for the quiz



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score








/*An idea for the local Storage
  if (event.target.matches(".submit-button")) {
    //Push timeLeft and initials into array. We use index 0 because it is the only input.
    highScoresSaved.push({"initials":initialsEl[0].value, "score":timeLeft});
    console.log(highScoresSaved)
  //save timeLeft and initials in local storage
  localStorage.setItem("highScores",JSON.stringify((highScoresSaved)));
  questionSection.innerHTML = "";
  renderHighScores();
  }
});
function renderHighScores(){
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  
  for (var i = 0; i < highScores.length; i++) {
    //create the element
      var highScoresMessage = document.createElement("h3");
      //add content
      highScoresMessage.textContent = highScores[i].initials + " scored " + highScores[i].score;
      //append to existing element
      questionSection.append(highScoresMessage); */


// A poorly functioning timer
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




// for (var i = 0; i, myQuiz.length; i++) {
//   if (i === myQuiz[0].correctAnswer) {
//     console.log("that answer is correct");
//   } else {
//     console.log("that answer is wrong");
//   }
// };


document.getElementById("quiz-page").style.visibility = "hidden";
document.getElementById("score-page").style.visibility = "hidden";
document.getElementById("highscore-page").style.visibility = "hidden";
/*Add your JavaScript here*/

var skiScore = 0;
var snowScore = 0;

var questionCount = 0;

// Storing elements using DOM //

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

// Adding event listeners // 

q1a1.addEventListener("click", ski);
q1a2.addEventListener("click", snowboard);

q2a1.addEventListener("click", snowboard);
q2a2.addEventListener("click", ski);

q3a1.addEventListener("click", ski);
q3a2.addEventListener("click", snowboard);

q4a1.addEventListener("click", snowboard);
q4a2.addEventListener("click", ski);

q5a1.addEventListener("click", snowboard);
q5a2.addEventListener("click", ski);

// Using functions and if statements //

function ski() {
  skiScore = skiScore + 1;
  questionCount = questionCount + 1;

  console.log("questionCount = " + questionCount + " skiScore = " + skiScore);

if (questionCount == 5) {
  console.log("The quiz is complete!");
  updateResult();
}
      if (skiScore >= 3) {
        console.log("You are meant to be a skier!");
      } else if (snowScore >= 3) {
        console.log("You are meant to be a snowboarder!");
      }
}

function snowboard() {
  snowScore = snowScore + 1;
  questionCount = questionCount + 1;

  console.log("questionCount = " + questionCount + " snowScore = " + snowScore);

if (questionCount == 5) {
  console.log("The quiz is complete!");
  updateResult();
}
      if (skiScore >= 3) {
        console.log("You are meant to be a skier!");
        
      } else if (snowScore >= 3) {
        console.log("You are meant to be a snowboarder!");
      }
}

// Final outcome //

if (skiScore >= 3) {
  console.log("You are meant to be a skier!");
} else if (snowScore >= 3) {
  console.log("You are meant to be a snowboarder!");
}

function updateResult() {
  if (skiScore >= 3) {
    result.innerHTML = "You are meant to be a skier!";
    console.log("You are meant to be a skier!");
  } else if (snowScore >= 3) {
    result.innerHTML = "You are meant to be a snowboarder!";
    console.log("You are meant to be a snowboarder!");
  }
}

// Setting up the restart button //

var restart = document.getElementById("restart");

restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  skiScore = 0;
  snowScore = 0;
  questionCount = 0;
  result.innerHTML = "You are meant to be a...";
}

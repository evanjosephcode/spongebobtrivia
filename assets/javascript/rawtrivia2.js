
//tallies 
var wins = 0;
var losses = 0; 
var noResponse = 0;
// where it is on game in terms of questions
var count = 0;

var showQuestion;

//array of questions
var questions = [
  {
    question: "which species is spongebob's best friend?",
    answers: ["Starfish", "Squid", "Crab", "Stingray"],
    correctAnswer: "Starfish", 
  },

  {
    question: "where does spongebob work?",
    answers: ["Patrick's Palace", "Buzzfeed", "Krabby Patty", "Longjohn Bobbies"],
    correctAnswer: "Krabby Patty",
  },

  {
    question: "how big of a guy is Krabby Patty's arch nemesis, Plankton?",
    answers: ["yuge!", "average size", "very wide", "extremely small"],
    correctAnswer: "extremely small",
  },

  {
    question: "the actor with the following last name has which same first name as Spongebob's pet snail?",
    answers: ["Cruise", "Oldman", "Goldblum", "Baldwin"],
    correctAnswer: "Oldman",
  },

  {
    question: "What does Sandy the squirrel wear to be able to breathe while underwater?",
    answers: ["astronaut helmet", "defibrillator", "gas mask", "Squidward"],
    correctAnswer: "astronaut helmet",
  },

  {
    question: "what instrument does Squidward play?",
    answers: ["sax", "cowbell", "clarinet", "trumpet"],
    correctAnswer: "clarinet",
  },

  {
    question: "what does Patrick's domestic situation look like?",
    answers: ["his house is bigger than Squidward's", "he lives under a rock", "he shacks up with Spongebob", "he's a nomad"],
    correctAnswer: "he lives under a rock",
  },

  {
    question: "How many seasons has Spongebob held down?",
    answers: ["nine", "thirteen", "ten", "eleven"],
    correctAnswer: "eleven",
  },

  {
    question: "which sort of character is the live actor featured in the intro of the show?",
    answers: ["sailor", "generic narrator", "pirate", "there is no live actor in the intro"],
    correctAnswer: "pirate",
  },

  {
    question: "what happen's to spongebob's muscles in the bodybuilding episode?",
    answers: ["he loses strength by being lazy", "he never had strength and cheated, his fake arms deflate", "Plankton gets magical powers to impersonate Spongebob and gain strength overnight", "Sandy gives him land powers to be able to bench like a boss"],
    correctAnswer: "he never had strength and cheated, his fake arms deflate"
  },
];

var intervalID;

var clockRunning = false;

var stopwatch = {
  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
  },

  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },

  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },

  timeConverter: function(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
  }
}



$("#start").click(startGame);
$("#stop").click(stopGame);




function questionRotation() {

  // reset count to -1 bc then nextQuestion with count++ makes count= 0 and proceeds with else statement starting at questions[0]
  if (count === questions.length) {
    count = -1;
  } 

  else {
  $(".statusMeme").empty();
  $(".options").empty();
  stopwatch.reset();
  $(".question").text(questions[count].question); // good so far 
  // for displaying answers
  for (var i = 0; i < questions[count].answers.length; i++) {
    var answerChoice = $("<button>");
    answerChoice.addClass("choices");
    answerChoice.attr("data-name", questions[count].answers[i]); 
    answerChoice.text(questions[count].answers[i]);
    $(".options").append(answerChoice); 
    }
  }
}

$(document).on("click", ".choices", winloss);
function winloss() {
  console.log(questions[count].correctAnswer);
  if ($(this).data("name") === questions[count].correctAnswer) {
    win(); 
    $(document).off("click", ".choices", winloss)
  }
  else {
    wrong();
    $(document).off("click", ".choices", winloss)
  }
} 

  // if (answerChoice.attr("data-name") === correctAnswer) {
    // $(answerChoice).on("click", function () {
    // alert("this works finally!");
  // });
// };

// $(".choices").click() {
  // get value name of data attribute clicked === question[count].correctAnswer {
    // win ()

function nextQuestion() {
  count++; 
  console.log(count);
  $(".options, .correctAnswer").empty();
  questionRotation();
  $(document).on("click", ".choices", winloss)
}


function stopGame() {
  count = 0; 
  console.log(count);
  clearInterval(showQuestion);
};


function startGame() {
    // interval of 4 seconds before next question 
    showQuestion = setInterval(nextQuestion, 5000);
    console.log(count);
    questionRotation(); 
    stopwatch.start();
};
  
function win() {
  console.log("you chose the right answer");
  wins++;
  // console.log(wins);
  $(".statusMeme").prepend('<img src="assets/images/wins.jpg" />');
  // turnChoicesOff();
}

// function turnChoicesOff(){
//   document.querySelectorAll('.choices').forEach(function (choice){
//   })
// }

function wrong() {
  console.log("you chose the wrong answer, the right answer is "+questions[count].correctAnswer);
  losses++;
  // console.log(losses);
  $(".statusMeme").prepend('<img src="assets/images/losses.jpg" />');
  $(".correctAnswer").append("The correct answer is: " +questions[count].correctAnswer).css("color", "red").css("margin-bottom", "30px");
}


// $("#start").on("click", stopwatch.start);


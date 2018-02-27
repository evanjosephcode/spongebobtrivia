
//tallies 
var wins = 0;
var losses = 0; 
var noResponse = 0;
// where it is on game in terms of questions
var count = 0;

var showQuestion;

//object of questions 
var questions = [
  {
    ask: "which animal is spongebob's best friend?",
    a: "Starfish",
    b: "Squid",
    c: "Crab",
    d: "Stingray", 
  },

  {
    ask: "where does spongebob work?",
    a: "Patrick's Palace",
    b: "Buzzfeed",
    c: "Krabby Patty",
    d: "Longjohn Bobbies",
  },

  {
    ask: "how big is Krabby Patty's arch nemesis, Plankton?",
    a: "bigly yuge!",
    b: "average size, nothing special",
    c: "wide",
    d: "extremely small",
  },

  {
    ask: "the actor with the following last name has which same first name as Spongebob's pet snail?",
    a: "Cruise",
    b: "Oldman", 
    c: "Goldblum",
    d: "Baldwin",
  },

  {
    ask: "What does Sandy the snail wear to be able to breathe while underwater?",
    a: "astronaut helmet",
    b: "defibrillator", 
    c: "gas mask",
    d: "Squidward",
  },

  {
    ask: "what instrument does Squidward play?",
    a: "sax",
    b: "cowbell",
    c: "clarinet",
    d: "trumpet",
  },

  {
    ask: "what does Patrick's domestic situation look like?",
    a: "his house is bigger than Squidward's",
    b: "he lives under a rock",
    c: "he shacks up with Spongebob",
    d: "he's a nomad",
  },

  {
    ask: "How many seasons has Spongebob held down?",
    a: "nine",
    b: "thirteen",
    c: "ten",
    d: "eleven",
  },

  {
    ask: "which sort of character is the live actor featured in the intro of the show?",
    a: "sailor",
    b: "generic narrator",
    c: "pirate",
    d: "there is no live actor in the intro",
  },

  {
    ask: "what happen's to spongebob's muscles in the bodybuilding episode?",
    a: "he loses strength by being lazy",
    b: "he never had strength and cheated, his fake arms deflate",
    c: "Plankton gets magical powers to impersonate Spongebob and gain strength overnight",
    d: "Sandy gives him land powers to be able to bench like a boss",
  },
];

//answer key: 
// 0a, 1c, 2d, 3b, 4a, 5c, 6b, 7d, 8c, 9b, 

$("#start").click(startGame);
$("#stop").click(stopGame);



// may not be needed var randomNumber = Math.floor(Math.random() * questions.length);
// may not be needed var pickedQuestion = questions[randomNumber];



function questionRotation() {

  // reset count to -1 bc then nextQuestion with count++ makes count= 0 and proceeds with else statement starting at questions[0]
  if (count === questions.length) {
    count = -1;
  } 

  else {
  $(".question").text(questions[count].ask);
  $("#a").text("A: "+questions[count].a); 
  $("#b").text("B: "+questions[count].b); 
  $("#c").text("C: "+questions[count].c);
  $("#d").text("D: "+questions[count].d);
  }
}; 

function nextQuestion() {
  count++; 
  console.log(count);
  questionRotation();
};


function stopGame() {
  count = 0; 
  console.log(count);
  clearInterval(showQuestion);
};


function startGame() {

    // TODO: Use setInterval to run nextQuestion.
    // interval of 5 seconds 
    showQuestion = setInterval(nextQuestion, 4000);
    console.log(count);
    questionRotation(); 


    // this works but trying to hook to when they select the right answer 
  

      $("#a").click(function() {
        alert("you chose the right answer");
        wins++;
        console.log(wins);
        $(".statusMeme").prepend('<img src="assets/images/wins.jpg" />');
      }); 

      $("#b").click(function() {
        alert("you chose the wrong answer");
        losses++;
        console.log(losses);
      $(".statusMeme").prepend('<img src="assets/images/losses.jpg" />');
      });

      //if NO CLICK function() {
      // alert("you chose no answer, time's up");
      // noResponse++;
      // console.log(noResponse);
      // $(".statusMeme").prepend('<img src="assets/images/noresponse.jpg" />');
      // });

  
};
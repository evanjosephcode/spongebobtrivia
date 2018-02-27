
//tallies 
var wins = 0;
var losses = 0; 
var noResponse = 0;
// where it is on game in terms of questions
var count = 0;

var showQuestion;

//object of questions 
var questions = {
  one: {
    ask: "Which animal is spongebob's best friend?",
    a: "Starfish",
    b: "Squid",
    c: "Crab",
    d: "Stingray", 
  },

  two: {
    ask: "where does spongebob work?",
    a: "Patrick's Palace",
    b: "Buzzfeed",
    c: "Krabby Patty",
    d: "Longjohn Bobbies",
  },

  three: {
    ask: "how big is Krabby Patty's arch nemesis, Plankton?",
    a: "bigly yuge!",
    b: "average size, nothing special",
    c: "wide",
    d: "extremely small",
  },

  four: {
    ask: "the actor with the following last name has which same first name as Spongebob's pet snail?",
    a: "Cruise",
    b: "Oldman", 
    c: "Goldblum",
    d: "Baldwin",
  },

  five: {
    ask: "What does Sandy the snail wear to be able to breathe while underwater?",
    a: "astronaut helmet",
    b: "defibrillator", 
    c: "gas mask",
    d: "Squidward",
  },

  six: {
    ask: "what instrument does Squidward play?",
    a: "sax",
    b: "cowbell",
    c: "clarinet",
    d: "trumpet",
  },

  seven: {
    ask: "what does Patrick's domestic situation look like?",
    a: "his house is bigger than Squidward's",
    b: "he lives under a rock",
    c: "he shacks up with Spongebob",
    d: "he's a nomad",
  },

  eight: {
    ask: "How many seasons has Spongebob held down?",
    a: "nine",
    b: "thirteen",
    c: "ten",
    d: "eleven",
  },

  nine: {
    ask: "which sort of character is the live actor featured in the intro of the show?",
    a: "sailor",
    b: "generic narrator",
    c: "pirate",
    d: "there is no live actor in the intro",
  },

  ten: {
    ask: "what happen's to spongebob's muscles in the bodybuilding episode?",
    a: "he loses strength by being lazy",
    b: "he never had strength and cheated, his fake arms deflate",
    c: "Plankton gets magical powers to impersonate Spongebob and gain strength overnight",
    d: "Sandy gives him land powers to be able to bench like a boss",
  },
}

//answer key: 
// 1a, 2c, 3d, 4b, 5a, 6c, 7b, 8d, 9c, 10b, 

$("#start").click(startGame);
$("#stop").click(stopGame);



var randomNumber = Math.floor(Math.random() * questions.length);
var pickedQuestion = questions[randomNumber];

function nextQuestion() {
  count++; 
  console.log(count);
  $(".question").text(questions.two.ask);
  $("#a").text("A: "+questions.two.a); 
  $("#b").text("B: "+questions.two.b); 
  $("#c").text("C: "+questions.two.c);
  $("#d").text("D: "+questions.two.d);
}


function startGame() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    // count++ interval of 15 seconds 
    showQuestion = setInterval(nextQuestion, 5000);
    console.log(count);

    $(".question").text(questions.one.ask);
    $("#a").text("A: "+questions.one.a); 
    $("#b").text("B: "+questions.one.b); 
    $("#c").text("C: "+questions.one.c);
    $("#d").text("D: "+questions.one.d);
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

      //  if (count === questions.length) {
      // count = 0;
      // } 
  }

  // doesnt work function stopGame() {
  // clearInterval(showQuestion);
  // }

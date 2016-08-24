
"use strict";
var theNumber
var userGuess
var num
var newCount


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//getting dom objects
  	var newGameButton = $("a.new");
  	var form = '$("form")';
  	var num = 0; 
  	var countAmount = '$("#count")';
  	var guessList = '$("#guessList")';

  	//when pages loads
  	newGame();
  	//clicking buttons
  	newGameButton.click(newGame);
  	$("#guessButton").on("click", function(event) {
  		event.preventDefault();
  		takeUserGuess();
  	});
});

//Starts new game
function newGame() {
	generateNumber();
	console.log('The number is ' + theNumber);
	resetVariable();
	//need to take theNumber ?
}

//generate number
function generateNumber() {
	theNumber = Math.floor(Math.random() * 100) + 1; 
	console.log('The number is ' + theNumber);
}

//Understands users number
function takeUserGuess() {
	console.log('The number is ' + theNumber);
	//take user number
	userGuess = $("#userGuess").val();
	//reset input field
	$("#userGuess").val('');
	//give the guess feedback
	guessFeedback(theNumber, userGuess);
	//track guesses
	trackGuesses();
}

//Guess feedback
function guessFeedback(theNumber, userGuess) {
	console.log('The number is ' + theNumber + ' The user number is ' + userGuess);
		if(userGuess == theNumber) {
		userFeedback('winner')
	}
	else if((userGuess - theNumber) < 10 ) {
		userFeedback('very hot')
	}
	else if((userGuess - theNumber)	< 20 && (userGuess - theNumber) > 9) {
		userFeedback('kinda hot')
	}
	else if((userGuess - theNumber) < 30 && (userGuess - theNumber) > 19 ) {
		userFeedback('warm')
	}
	else if((userGuess - theNumber) < 50 && (userGuess - theNumber) > 29) {			
		userFeedback('cold')
	}
	else {
		userFeedback('ice cold')
	}; 
}

//Feedback for user
function userFeedback(feedbackText){
	console.log(feedback);
	$("#feedback").text(feedbackText);
}

//Keeping track of the past guesses
function trackGuesses() {
	//var num = 1;
	var newCount = guessAmount();
	console.log('The newCount is ' + newCount);
	$("#count").text(newCount);
	$("#guessList").append("<li>" + userGuess + "</li>");
}

function guessAmount(){
	return num++
}
var num = 1;

//Reset the variable
function resetVariable(){
	console.log('reset');
	userFeedback('Make your Guess!');
	$("#userGuess").val('');
	$("#guessList").empty();
	num = 1;
	$("#count").text('');
}



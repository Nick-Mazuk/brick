var openingScreen;
var questionContainer;
var questionNumber = 1;
var prompt;
var optionA;
var optionB;
var optionC;
var optionD;
var userInput;
window.addEventListener("DOMContentLoaded", function() {start();});
var questions = [
	["If I were to give you a brick, what would you do?", "Throw it", "Grind it and make art", "Do nothing, it doesn't matter anyways"],
	["Who would you throw the brick at?", "Your teacher", "My boss", "Anyone who's around, I don't care who"],
	["What piece of art would you make with the brick?", "Some sort of poem", "Whatever makes money", "All art is the same"],
	["If you won't do anything with the brick, what would you do anyways?", "Write a masterpiece", "Go to work, just like every other day", "Just stay where I am"]
];
var answers = [];
var personalityCount = [];

function start() {
	openingScreen = document.getElementById("openingScreen");
	questionContainer = document.getElementById("questionContainer");
	prompt = document.getElementById("question");
	optionA = document.getElementById("optionA");
	optionB = document.getElementById("optionB");
	optionC = document.getElementById("optionC");
	optionD = document.getElementById("optionD");
	userInput = document.getElementById("userInput");
	optionA.addEventListener("click",function(){nextQuestion("a")});
	optionB.addEventListener("click",function(){nextQuestion("b")});
	optionC.addEventListener("click",function(){nextQuestion("c")});
	userInput.onkeypress = function(e){if (!e) e = window.event;var keyCode = e.keyCode || e.which;if (keyCode == '13'){nextQuestion("d")}}
	openingScreen.addEventListener("click",function() {clickScreen();});
}

function clickScreen() {
	openingScreen.style.display = "none";
	questionContainer.style.display = "inline-flex";
}

function nextQuestion(answer) {
	if(questionNumber > questions.length - 1) {
		return null;
	}
	if(answer == "a") {
		answers.push(["A", optionA.innerHTML.substring(3)]);
		personalityCount.push(0);
		changeBackground(findIndex(personalityCount));
	} else if(answer == "b") {
		answers.push(["B", optionB.innerHTML.substring(3)]);
		personalityCount.push(1);
		changeBackground(findIndex(personalityCount));
	} else if(answer == "c") {
		answers.push(["C", optionC.innerHTML.substring(3)]);
		personalityCount.push(2);
		changeBackground(findIndex(personalityCount));
	} else if(answer == "d") {
		answers.push(["D", userInput.value]);
		personalityCount.push(3);
		changeBackground(findIndex(personalityCount));
	}
	renderQuestion(questionNumber);
}

function renderQuestion(number) {
	questionNumber++;
	prompt.innerHTML = questionNumber +  ". " + questions[number][0];
	optionA.innerHTML = "A. " + questions[number][1];
	optionB.innerHTML = "B. " + questions[number][2];
	optionC.innerHTML = "C. " + questions[number][3];
	userInput.value = "";
}

function print2dArray(array) {
	console.log(" ");
	for(i = 0; i < array.length; i++) {
		var output = "";
		for(j = 0; j < array[i].length;j++) {
			output += array[i][j] + " ";
		}
		console.log(output);
	}
}

function printArray (array) {
	console.log(" ");
	var output = "";
	for(i = 0; i < array.length; i++) 
		output += array[i] + ", ";
	console.log(output.substring(0,output.length-2));
}

function changeBackground (color) {
	document.body.style.WebkitTransition = "backgroundColor " + (60/questionNumber) + "s";
	document.body.style.MozTransition = "backgroundColor " + (60/questionNumber) + "s";
	document.body.style.transition = "backgroundColor " + (60/questionNumber) + "s";
	if(color == 0 && questionNumber > 4) {
		document.body.style.backgroundColor = "#9999FF";
	} else if (color == 1 && questionNumber > 4) {
		document.body.style.backgroundColor = "#FF9999";
	} else if (color == 2 && questionNumber > 4) {
		document.body.style.backgroundColor = "#99FF99";
	} else if (color == 3 && questionNumber > 4) {
		document.body.style.backgroundColor = "#99FFFF";
	}
}

function findIndex(array) {
	var max = array[0];
	var maxIndex = 0;
	for (var i = 1; i < array.length; i++) {
	    if (array[i] > max) {
	        maxIndex = i;
	        max = array[i];
	    }
	}
	return maxIndex;
}

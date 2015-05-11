var openingScreen;
var questionContainer;
var questionNumber = 1;
var prompt;
var optionA;
var optionB;
var optionC;
var optionD;
var userInput;
var numQuestions = 4;
var results;
var questionIndex = 1;
var finalStory = "";
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
	results = document.getElementById("results");
	optionA.addEventListener("click",function(){nextQuestion("a")});
	optionB.addEventListener("click",function(){nextQuestion("b")});
	optionC.addEventListener("click",function(){nextQuestion("c")});
	userInput.onkeypress = function(e){if (!e) e = window.event;var keyCode = e.keyCode || e.which;if (keyCode == '13'){nextQuestion("d")}}
	openingScreen.addEventListener("click",function() {clickScreen();});
}

function clickScreen() {
	openingScreen.style.display = "none";
	questionContainer.style.display = "block";
	questionContainer.style.display = "inline-flex";
	document.getElementById("progress").style.width = (questionNumber/numQuestions) * 100 + "%";
}

function nextQuestion(answer) {
	if(answer == "a") {
		answers.push([questionIndex, "A", optionA.innerHTML.substring(3)]);
		personalityCount.push(0);
		changeBackground(findMode(personalityCount));
	} else if(answer == "b") {
		answers.push([questionIndex, "B", optionB.innerHTML.substring(3)]);
		personalityCount.push(1);
		changeBackground(findMode(personalityCount));
	} else if(answer == "c") {
		answers.push([questionIndex, "C", optionC.innerHTML.substring(3)]);
		personalityCount.push(2);
		changeBackground(findMode(personalityCount));
	} else if(answer == "d") {
		answers.push([questionIndex, "D", userInput.value]);
		personalityCount.push(3);
		changeBackground(findMode(personalityCount));
	}
	if (questionNumber >= numQuestions || questionNumber > questions.length - 1) {
		finished();
		return null;
	}
	renderQuestion(questionIndex);
}

function renderQuestion(number) {
	questionNumber++;
	questionIndex++;
	prompt.innerHTML = questionNumber +  ". " + questions[number][0];
	optionA.innerHTML = "A. " + questions[number][1];
	optionB.innerHTML = "B. " + questions[number][2];
	optionC.innerHTML = "C. " + questions[number][3];
	userInput.value = "";
	document.getElementById("progress").style.width = (questionNumber/numQuestions) * 100 + "%";
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
	if(color == 0 && questionNumber > 1) {
		document.body.style.backgroundColor = "#FF3300";
	} else if (color == 1 && questionNumber > 1) {
		document.body.style.backgroundColor = "#00CC00";
	} else if (color == 2 && questionNumber > 1) {
		document.body.style.backgroundColor = "#0066FF";
	} else if (color == 3 && questionNumber > 1) {
		document.body.style.backgroundColor = "#FFFF00";
	}
}

function findMode(array) {
	if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}

function finished() {
	questionContainer.style.display = "none";
	results.style.display = "block";
	var identity = document.getElementById("identity");
	if(findMode(personalityCount) == 0) {
		identity.innerHTML += "You most closely relate to Stephen Deadalus";
	} else if(findMode(personalityCount) == 1) {
		identity.innerHTML += "You most closely relate to Gregor";
	} else if(findMode(personalityCount) == 2) {
		identity.innerHTML += "You most closely relate to Mersault";
	} else if(findMode(personalityCount) == 3) {
		identity.innerHTML += "You most closely relate to the perfect existentialist";
	}
	for(i = 0; i < answers.length; i++) {
		showQuestion(answers[i]);
	}
}

function showQuestion(array) {
	var output = "<div class='question'><h3>" + (array[0]) + ". ";
	output += questions[array[0]-1][0] + "</h3>";
	output += "<p>" + array[1] + ". " + array[2] + "</p></div>";
	results.innerHTML += output;
}

//chooses the next question based on current answer
function nextQ(num) {

}
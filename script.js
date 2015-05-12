var openingScreen;
var questionContainer;
var questionNumber = 1;
var prompt;
var optionA;
var optionB;
var optionC;
var optionD;
var userInput;
var numQuestions = 20;
var results;
var questionIndex = 0;
var finalStory = "";
var itemsToInsert = "";
window.addEventListener("DOMContentLoaded", function() {start();});
var user = {
	brickAction: "",
	throwAt: "",
	kindArt: ""
}
var questions = [
	["If I were to give you a brick, what would you do?", "Throw it", "Make art", "Do nothing, it doesn't matter anyways"],
	["Who would you throw the brick at?", "Your teacher", "Your boss", "Anyone who's around, I don't care who"],
	["What piece of art would you make with the brick?", "Some sort of poem", "Whatever makes money", "All art is the same"],
	["If you won't do anything with the brick, what would you do anyways?", "Write a masterpiece", "Go to work, just like every other day", "Just stay where I am"],
	["Hello world, still need to complete this question", "A", "B", "C"],
	["So you're sitting in class and decide to throw a brick at your teacher. Your teacher turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display your arrogance and admit guilt", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting at work and decide to throw a brick at your boss. Your boss turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display your arrogance and admit guilt", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting on a sidewalk and decide to throw a brick at a stranger. The stranger turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display your arrogance and admit guilt", "Blame the person next to you", "Wait for someone else to do something"],
	["So you decide to throw a brick at %s when they aren't looking. They turn around and exclaim, \"Who did this&#8253;\" What do you?", "Display your arrogance and admit guilt", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're inscribing a poem onto your brick when someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" What do you respond?", "\"Who cares about the American Dream\"", "\"The American Dream does not exist\"", "\"I never thought about that\""],
	["Num: 10", "A", "B", "C"],
	["Num: 11", "A", "B", "C"],
	["Num: 12", "A", "B", "C"],
	["Num: 13", "A", "B", "C"],
	["Num: 14", "A", "B", "C"],
	["Num: 15", "A", "B", "C"],
	["Num: 16", "A", "B", "C"],
	["Num: 17", "A", "B", "C"],
	["Num: 18", "A", "B", "C"],
	["Num: 19", "A", "B", "C"],
	["Num: 20", "A", "B", "C"],
	["%s becomes enraged and throws the brick back. Fearing a large fight, you decide to run away. Where do you go?", "Out of the country", "Back home", "Anywhere but here"],
	["%s  becomes enraged and throws the brick at the other person. Fearing a large fight, you decide to run away. Where do you go?", "Out of the country", "Back home", "Anywhere but here"],
	["%s becomes enraged and throws the brick randomly. Fearing a large fight, you decide to run away. Where do you go?", "Out of the country", "Back home", "Anywhere but here"],
	["%s becomes enraged and throws the brick at you. Fearing a large fight, you decide to run away. Where do you go?", "Out of the country", "Back home", "Anywhere but here"],
	["Num: 25", "A", "B", "C"],
	["Num: 26", "A", "B", "C"],
	["Num: 27", "A", "B", "C"],
];
var answers = [];
var personalityCount = [];
//To reference decisions later on


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
		answers.push([questionIndex, questionNumber, "A", optionA.innerHTML.substring(3),itemsToInsert]);
		personalityCount.push(0);
		changeBackground(findMode(personalityCount));
		nextQ(1);
	} else if(answer == "b") {
		answers.push([questionIndex, questionNumber, "B", optionB.innerHTML.substring(3),itemsToInsert]);
		personalityCount.push(1);
		changeBackground(findMode(personalityCount));
		nextQ(2);
	} else if(answer == "c") {
		answers.push([questionIndex, questionNumber, "C", optionC.innerHTML.substring(3),itemsToInsert]);
		personalityCount.push(2);
		changeBackground(findMode(personalityCount));
		nextQ(3);
	} else if(answer == "d") {
		answers.push([questionIndex, questionNumber, "D", userInput.value,itemsToInsert]);
		personalityCount.push(3);
		changeBackground(findMode(personalityCount));
		nextQ(4);
	}
	if (questionNumber >= numQuestions || questionNumber > questions.length - 1) {
		finished();
		return null;
	}
	renderQuestion(questionIndex, itemsToInsert);
}

function renderQuestion(number, insertItems) {
	questionNumber++;
	prompt.innerHTML = parse(questionNumber +  ". " + questions[number][0],insertItems);
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
	if(color == 0 && questionNumber > 8) {
		document.body.style.backgroundColor = "#FF3300";
	} else if (color == 1 && questionNumber > 8) {
		document.body.style.backgroundColor = "#00CC00";
	} else if (color == 2 && questionNumber > 8) {
		document.body.style.backgroundColor = "#0066FF";
	} else if (color == 3 && questionNumber > 8) {
		if(personalityCount.indexOf(0)==personalityCount(1)&&personalityCount.indexOf(2)==-1)
			document.body.style.backgroundColor = "#FFFF00";
		else
			document.body.style.backgroundColor = "#FF00FF";
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
		if(personalityCount.indexOf(0)==personalityCount(1)&&personalityCount.indexOf(2)==-1)
			identity.innerHTML += "You most closely relate to the perfect existentialist";
		else
			identity.innerHTML += "You are almost a perfect existentialist";
	}
	for(i = 0; i < answers.length; i++) {
		showQuestion(answers[i]);
	}
}

function showQuestion(array) {
	var output = "<div class='question'><h3>" + (array[1]) + ". ";
	output += parse(questions[array[0]][0],array[4]) + "</h3>";
	output += "<p>" + array[2] + ". " + array[3] + "</p></div>";
	results.innerHTML += output;
}

//chooses the next question based on current answer
function nextQ(num) {
	switch(questionIndex) {
		case 0:
			if(num == 1) {
				user.brickAction = "throw";
				itemsToInsert = "";
				questionIndex = 1;
			} else if(num == 2) {
				user.brickAction = "make art from";
				itemsToInsert = "";
				questionIndex = 2;
			} else if(num == 3) {
				user.brickAction = "do nothing with";
				itemsToInsert = "";
				questionIndex = 3;
			} else {
				user.brickAction = userInput.value;
				itemsToInsert = "";
				questionIndex = 4;
			}
			break;
		case 1:
			if(num == 1) {
				user.throwAt = "teacher";
				itemsToInsert = "";
				questionIndex = 5;
			} else if(num == 2) {
				user.throwAt = "boss";
				itemsToInsert = "";
				questionIndex = 6;
			} else if(num == 3) {
				user.throwAt = "anyone";
				itemsToInsert = "";
				questionIndex = 7;
			} else {
				user.throwAt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 8;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;
		/*case 2: //not done
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 13;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 14;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 15;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 16;
			}
			break;
		case 2: //not done
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;*/
		case 5: //not done
			if(num == 1) {
				itemsToInsert = "Your teacher";
				questionIndex = 21;
			} else if(num == 2) {
				itemsToInsert = "Your teacher";
				questionIndex = 22;
			} else if(num == 3) {
				itemsToInsert = "Your teacher";
				questionIndex = 23;
			} else {
				itemsToInsert = "Your teacher";
				questionIndex = 24;
			}
			break;
		case 6: //not done
			if(num == 1) {
				itemsToInsert = "Your boss";
				questionIndex = 21;
			} else if(num == 2) {
				itemsToInsert = "Your boss";
				questionIndex = 22;
			} else if(num == 3) {
				itemsToInsert = "Your boss";
				questionIndex = 23;
			} else {
				itemsToInsert = "Your boss";
				questionIndex = 24;
			}
			break;
		case 7:
			if(num == 1) {
				itemsToInsert = "The stranger";
				questionIndex = 21;
			} else if(num == 2) {
				itemsToInsert = "The stranger";
				questionIndex = 22;
			} else if(num == 3) {
				itemsToInsert = "The stranger";
				questionIndex = 23;
			} else {
				itemsToInsert = "The stranger";
				questionIndex = 24;
			}
			break;
		case 8:
			if(num == 1) {
				itemsToInsert = user.throwAt;
				questionIndex = 21;
			} else if(num == 2) {
				itemsToInsert = user.throwAt;
				questionIndex = 22;
			} else if(num == 3) {
				itemsToInsert = user.throwAt;
				questionIndex = 23;
			} else {
				itemsToInsert = user.throwAt;
				questionIndex = 24;
			}
			break;
		/*case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = "";
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = "";
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = "";
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = userInput.value;
				questionIndex = 12;
			}
			break;*/
		default:
			finished();
	}
}

//used to insert items into a string
function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}
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
var itemsToInsert = [];
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
	["Where do you intend to %s?", "Not here", "Where my family is", "It doesn't matter"],
	["So you're sitting in class and decide to throw a brick at your teacher. Your teacher turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting at work and decide to throw a brick at your boss. Your boss turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting on a sidewalk and decide to throw a brick at a stranger. The stranger turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you decide to throw a brick at %s when they aren't looking. They turn around and exclaim, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're inscribing a poem onto your brick when someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" What do you respond?", "\"Who cares about the American Dream\"", "\"The American Dream does not exist\"", "\"I never thought about that\""],
	["So you're trying to sell your artwork, and a potential buyer insults your work saying, \"No one will ever buy that!\" What do you do?", "Punch them in the face", "Persevere until someone buys it", "Nothing, his opinion doesn't matter"],
	["So you're talking about the play you just watched in the lobby, and the lead actor overhears your comment about art. They walk towards you to confront you. What do you do?", "Take pride in your beliefs and decide to argue", "\"Remember\" that you have work to finish", "Just stand still"],
	["While you are making %s, Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making %s?\" What do you respond?", "I want to express my emotions", "To settle a deal with another person", "I don't know"],
	["Num: 13", "A", "B", "C"],
	["Num: 14", "A", "B", "C"],
	["Num: 15", "A", "B", "C"],
	["Num: 16", "A", "B", "C"],
	["Num: 17", "A", "B", "C"],
	["Num: 18", "A", "B", "C"],
	["Num: 19", "A", "B", "C"],
	["Num: 20", "A", "B", "C"],
	["%s becomes enraged and throws the brick back. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s  becomes enraged and throws the brick at the other person. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged and throws the brick randomly. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged that you %s and throws the brick at you. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
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
	prompt.innerHTML = parse2(questionNumber +  ". " + questions[number][0],insertItems);
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
		if(personalityCount.indexOf(0)==personalityCount.indexOf(1)&&personalityCount.indexOf(2)==-1)
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
		identity.innerHTML += "<img src='Pictures/stephen.png' width='300px'><br>You most closely relate to Stephen Deadalus";
	} else if(findMode(personalityCount) == 1) {
		identity.innerHTML += "You most closely relate to Gregor";
	} else if(findMode(personalityCount) == 2) {
		identity.innerHTML += "You most closely relate to Meursault";
	} else if(findMode(personalityCount) == 3) {
		if(personalityCount.indexOf(0)==personalityCount.indexOf(1)&&personalityCount.indexOf(2)==-1)
			identity.innerHTML += "<img src='Pictures/perfect existentialist.png' width='100%'><br>You most closely relate to the perfect existentialist";
		else
			identity.innerHTML += "You are almost a perfect existentialist";
	}
	document.getElementById("story").innerHTML = finalStory;
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
				itemsToInsert = [];
				questionIndex = 1;
			} else if(num == 2) {
				user.brickAction = "make art from";
				itemsToInsert = [];
				questionIndex = 2;
			} else if(num == 3) {
				user.brickAction = "do nothing with";
				itemsToInsert = [];
				questionIndex = 3;
			} else {
				user.brickAction = userInput.value.toLowerCase();
				itemsToInsert = [userInput.value.toLowerCase()];
				questionIndex = 4;
			}
			break;
		case 1:
			if(num == 1) {
				user.throwAt = "teacher";
				itemsToInsert = [];
				questionIndex = 5;
				finalStory += "After given a brick by a random stranger, you decide to bring it to school to throw at your teacher. ";
			} else if(num == 2) {
				user.throwAt = "boss";
				itemsToInsert = [];
				questionIndex = 6;
				finalStory += "After given a brick by a random stranger, you decide to bring it to work to throw at your boss. ";
			} else if(num == 3) {
				user.throwAt = "anyone";
				itemsToInsert = [];
				questionIndex = 7;
				finalStory += "After given a brick by a random stranger, you decide to throw it at a random person. ";
			} else {
				user.throwAt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 8;
				finalStory += "After given a brick by a random stranger, you decide to throw at " + userInput.value + ". ";
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
				finalStory += "After given a brick by a random stranger, you decide to inscribe a poem into it. "
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
				finalStory += "After given a brick by a random stranger, you decide to transform it into a piece of artwork that you can sell for money. ";
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
				finalStory += "After given a brick by a random stranger, you decide to make a piece of art. What kind of art doesn't matter. "
			} else {
				user.kindArt = userInput.value.toLowerCase();
				itemsToInsert = [userInput.value.toLowerCase(), userInput.value.toLowerCase()];
				questionIndex = 12;
				finalStory += "After given a brick by a random stranger, you decide to make a " + userInput.value + ". ";
			}
			break;
		/*case 2: //not done
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 13;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 14;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 15;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 16;
			}
			break;
		case 2: //not done
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;*/
		case 5: //not done
			if(num == 1) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "admit";
				questionIndex = 21;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. "
			} else if(num == 2) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "blame";
				questionIndex = 22;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. "
			} else if(num == 3) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "wait";
				questionIndex = 23;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. "
			} else {
				itemsToInsert = ["Your teacher", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 24;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". "
			}
			break;
		case 6: //not done
			if(num == 1) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "admit";
				questionIndex = 21;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. "
			} else if(num == 2) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "blame";
				questionIndex = 22;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. "
			} else if(num == 3) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "wait"
				questionIndex = 23;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. "
			} else {
				itemsToInsert = ["Your boss", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 24;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". "
			}
			break;
		case 7:
			if(num == 1) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "admit";
				questionIndex = 21;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. "
			} else if(num == 2) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "blame";
				questionIndex = 22;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. "
			} else if(num == 3) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "wait"
				questionIndex = 23;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. "
			} else {
				itemsToInsert = ["The stranger", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 24;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". "
			}
			break;
		case 8:
			if(num == 1) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "admit";
				questionIndex = 21;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. "
			} else if(num == 2) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "blame";
				questionIndex = 22;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. "
			} else if(num == 3) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "wait"
				questionIndex = 23;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. "
			} else {
				itemsToInsert = [user.throwAt, userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 24;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". "
			}
			break;
		/*case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;
		case 2:
			if(num == 1) {
				user.kindArt = "poem";
				itemsToInsert = [];
				questionIndex = 9;
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
			} else {
				user.kindArt = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 12;
			}
			break;*/
		default:
			finished();
	}
}

//used to insert items into a string
function parse(str,replace) {
	if(str.indexOf("%s") == -1) {
		return str;
	}
    return str.substring(0,str.indexOf("%s")) + replace + str.substring(str.indexOf("%s") + 2);
}

function parse2(str,arr) {
	var out = str;
	for(i = 0; i < arr.length; i++) {
		out = parse(out, arr[i]);
	}
	return out;
}
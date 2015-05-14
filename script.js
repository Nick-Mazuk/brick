var questions = [["If I were to give you a brick, what would you do?", "Throw it", "Make art", "Do nothing, it doesn't matter anyways"], ["Who would you throw the brick at?", "Your teacher", "Your boss", "Anyone who's around, I don't care who"], //both are put on this line so the index numbers for the following questions line up with the line numbers
	["What piece of art would you make with the brick?", "Some sort of poem", "Whatever makes money", "All art is the same"],
	["Why do you choose to do nothing with the brick?", "I have better things to do", "I am expected at work", "Why bother?"],
	["Where do you intend to %s?", "In the city", "In my house", "It doesn't matter"],
	["So you're sitting in class and decide to throw a brick at your teacher. Your teacher turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting at work and decide to throw a brick at your boss. Your boss turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're sitting on a sidewalk and decide to throw a brick at a stranger. The stranger turns around and exclaims, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you decide to throw a brick at %s when they aren't looking. They turn around and exclaim, \"Who did this&#8253;\" What do you?", "Display audacity and admit to it", "Blame the person next to you", "Wait for someone else to do something"],
	["So you're inscribing a poem onto your brick when someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" What do you respond?", "\"Why does the American Dream matter?\"", "\"The American Dream does not exist\"", "\"Can't you see&#8253;\""],
	["So you're trying to sell your artwork, and a potential buyer insults your work saying, \"No one will ever buy that!\" What do you do?", "Punch them in the face", "Persevere until someone buys it", "Nothing, his opinion doesn't matter"],
	["So you're talking about the play you just watched in the lobby, and the lead actor overhears your comment about art. They walk towards you to confront you. What do you do?", "Take pride in your beliefs and decide to argue", "\"Remember\" that you have work to finish", "Just stand still"],
	["So, while you're making %s, Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making %s?\" What do you respond?", "I want to express my emotions", "To settle a deal with another person", "I don't know"],
	["So you're the king of your dominion, Utopolis, and a peasant gave you a brick for saving the kingdom from an earthquake. After responding \"%s,\" the peasant looked insulted. What do you do?", "Show your dominance over him", "Explain to him that it doesn't matter what he thinks", "Apologize for your rudeness"],
	["So you're sitting %s %s and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. What do you do?", "Immediately run over to help", "Call for medical assistance", "Wait for someone else to do something"],
	["%s becomes enraged and throws the brick back. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s  becomes enraged and throws the brick at the other person. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged and throws the brick randomly. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged that you %s and throws the brick at you. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["The stranger responds, \"What do you mean, '%s?' All art obviously deals with the American Dream! \" What do you do?", "Give up arguing and continue to work", "Try to win the argument", "Move somewhere else peaceful"],
	["The stranger responds, \"How does <i>that</i> talk about the American Dream?\" How do you respond?", "It symbolizes the metaphorical death of the American Dream", "It shows the opportunity omnipresent in society", "It demonstrates the meaningless of the American Dream"],
	["Stunned, he hesitates a second only to punch you back after realizing what happened. How do you respond?", "Continue fighting until you win", "Apologize for your absurd reaction", "Run away to stay away from future trouble"],
	["Months go by, and the only customers you have said disparaging comments. With little chance of success, how do you choose to continue.", "Give up and move on", "Try to create something new with the brick", "Decide to restore world peace with the brick after all the negativity you've recieved"],
	["While you decide to ignore him, he persists on insulting you and claims he will spread the word of your inferior work. You decide to:", "\"Teach him a lesson\" on what good art is", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
	["Question", "A", "B", "C"],
];
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
}
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
		answers.push([questionIndex, questionNumber, "A", optionA.innerHTML.substring(3),itemsToInsert]);
		changeBackground(findMode(personalityCount));
		nextQ(1);
	} else if(answer == "b") {
		answers.push([questionIndex, questionNumber, "B", optionB.innerHTML.substring(3),itemsToInsert]);
		changeBackground(findMode(personalityCount));
		nextQ(2);
	} else if(answer == "c") {
		answers.push([questionIndex, questionNumber, "C", optionC.innerHTML.substring(3),itemsToInsert]);
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
	console.log(questionIndex);
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
				personalityCount.push(0);
			} else if(num == 2) {
				user.brickAction = "make art from";
				itemsToInsert = [];
				questionIndex = 2;
				personalityCount.push(1);
			} else if(num == 3) {
				user.brickAction = "do nothing with";
				itemsToInsert = [];
				questionIndex = 3;
				personalityCount.push(2);
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
				personalityCount.push(0);
			} else if(num == 2) {
				user.throwAt = "boss";
				itemsToInsert = [];
				questionIndex = 6;
				finalStory += "After given a brick by a random stranger, you decide to bring it to work to throw at your boss. ";
				personalityCount.push(1);
			} else if(num == 3) {
				user.throwAt = "anyone";
				itemsToInsert = [];
				questionIndex = 7;
				finalStory += "After given a brick by a random stranger, you decide to throw it at a random person. ";
				personalityCount.push(2);
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
				finalStory += "After given a brick by a random stranger, you decide to inscribe a poem into it. ";
				personalityCount.push(0);
			} else if(num == 2) {
				user.kindArt = "money-maker piece of art";
				itemsToInsert = [];
				questionIndex = 10;
				finalStory += "After given a brick by a random stranger, you decide to transform it into a piece of artwork that you can sell for money. ";
				personalityCount.push(1);
			} else if(num == 3) {
				user.kindArt = "any kind of art";
				itemsToInsert = [];
				questionIndex = 11;
				finalStory += "After given a brick by a random stranger, you decide to make a piece of art. What kind of art doesn't matter. ";
				personalityCount.push(2);
			} else {
				user.kindArt = userInput.value.toLowerCase();
				itemsToInsert = [userInput.value.toLowerCase(), userInput.value.toLowerCase()];
				questionIndex = 12;
				finalStory += "After given a brick by a random stranger, you decide to make a " + userInput.value + ". ";
			}
			break;
		case 3: //not done
			if(num == 1) {
				user.doNothingAnswer = "I have better things to do";
				itemsToInsert = [user.doNothingAnswer];
				questionIndex = 13;
				personalityCount.push(0);
				finalStory += "So, as the King of Utopolis, a peasant gave you a brick for saving the kingdom from an earthquake. Your response of \"I have better things to do\" insulted the peasant. ";
			} else if(num == 2) {
				user.doNothingAnswer = "I have work to do";
				itemsToInsert = [user.doNothingAnswer];
				questionIndex = 13;
				personalityCount.push(1);
				finalStory += "So, as the King of Utopolis, a peasant gave you a brick for saving the kingdom from an earthquake. Your response of \"I have work to do\" insulted the peasant. ";
			} else if(num == 3) {
				user.doNothingAnswer = "Why bother?";
				itemsToInsert = [user.doNothingAnswer];
				questionIndex = 13;
				personalityCount.push(2);
				finalStory += "So, as the King of Utopolis, a peasant gave you a brick for saving the kingdom from an earthquake. Your response of \"Why should I bother?\" insulted the peasant. ";
			} else {
				user.doNothingAnswer = userInput.value;
				itemsToInsert = [userInput.value];
				questionIndex = 13;
				finalStory += "So, as the King of Utopolis, a peasant gave you a brick for saving the kingdom from an earthquake. Your response of \"" + user.doNothingAnswer + "\" insulted the peasant. ";
			}
			break;
		case 4: //not done
			if(num == 1) {
				user.location = "city";
				itemsToInsert = [user.brickAction,"in the city"];
				questionIndex = 14;
				finalStory += "So you're sitting " + user.location + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble.";
			} else if(num == 2) {
				user.kindArt = "home";
				itemsToInsert = [user.brickAction,"at your house"];
				questionIndex = 14;
				finalStory += "So you're sitting " + user.location + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble.";
			} else if(num == 3) {
				user.kindArt = "somewhere";
				itemsToInsert = [user.brickAction,"somewhere"];
				questionIndex = 14;
				personalityCount.push(3);
				finalStory += "So you're sitting " + user.location + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble.";
			} else {
				user.kindArt = userInput.value.toLowerCase();
				itemsToInsert = [user.brickAction,userInput.value.toLowerCase()];
				questionIndex = 14;
				finalStory += "So you're sitting " + user.location + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble.";
			}
			break;
		case 5: //not done
			if(num == 1) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "admit";
				questionIndex = 15;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "blame";
				questionIndex = 16;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = ["Your teacher"];
				user.throwAction = "wait";
				questionIndex = 17;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = ["Your teacher", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 18;
				finalStory += "Upon getting hit, your teacher exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". ";
			}
			break;
		case 6: //not done
			if(num == 1) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "admit";
				questionIndex = 15;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "blame";
				questionIndex = 16;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = ["Your boss"];
				user.throwAction = "wait"
				questionIndex = 17;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = ["Your boss", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 18;
				finalStory += "Upon getting hit, your boss exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". ";
			}
			break;
		case 7:
			if(num == 1) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "admit";
				questionIndex = 15;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "blame";
				questionIndex = 16;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = ["The stranger"];
				user.throwAction = "wait"
				questionIndex = 17;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = ["The stranger", userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 18;
				finalStory += "Upon getting hit, the stranger exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". ";
			}
			break;
		case 8:
			if(num == 1) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "admit";
				questionIndex = 15;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to show off your audacity and admit to throwing the brick. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "blame";
				questionIndex = 16;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to conceal your guilt by blaming another person. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [user.throwAt];
				user.throwAction = "wait"
				questionIndex = 17;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to not bring attention to yourself and let someone else act first. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [user.throwAt, userInput.value.toLowerCase()];
				user.throwAction = userInput.value.toLowerCase();
				questionIndex = 18;
				finalStory += "Upon getting hit, " + user.throwAt + " exclaims, \"Who did this&#8253\" You decide to " + user.throwAction + ". ";
			}
			break;
		case 9:
			if(num == 1) {
				itemsToInsert = ["why does the American Dream matter?"];
				questionIndex = 19;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by saying, \"Why does the American Dream matter?\" ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = ["the American Dream does not exist"];
				questionIndex = 19;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by saying, \"The American Dream does not exist.\" ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 20;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by retorting, \"Can't you see?\" ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 19;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by saying, \"" + userInput.value + "\" ";
			}
			break;
		case 10:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 21;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to punch them. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 22;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You decide to ignore them and persevere unti someone does want to buy it. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 23;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to do nothing, as his opinion doesn't matter. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [];
				questionIndex = 24;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to " + userInput.value + ". ";
			}
			break;
		/*case 9:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 15;
				finalStory += "";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 16;
				finalStory += "";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 17;
				finalStory += "";
				personalityCount.push(2);
			} else {
				itemsToInsert = [];
				questionIndex = 18;
				finalStory += "";
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

/*General story outline:
Throw it.
Run away.
Try to make a new life.
Gets caught (decision catches up)
Must make a choice on how to react
Can save others by being ridiculed (become a PSA)


Art:
*/
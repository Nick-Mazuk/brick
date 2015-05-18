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
	["So you're talking about the play you just watched in the lobby, and the lead actor overhears your comment about art. They walk towards you to confront you. What do you do?", "Take pride in your beliefs and decide to argue", "\"Remember\" that you have work to finish", "Just stand still like nothing happened"],
	["So, while you're making %s, Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making %s?\" What do you respond?", "I want to express my emotions", "To settle a deal with another person", "I don't know"],
	["So you're the king of your dominion, Utopolis, and a peasant gave you a brick for saving the kingdom from an earthquake. After responding \"%s,\" the peasant looked insulted. What do you do?", "Show your dominance over him", "Explain to him that it doesn't matter what he thinks", "Apologize for your rudeness"],
	["So you're sitting %s %s and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. What do you do?", "Immediately run over to help", "Call for medical assistance", "Wait for someone else to do something"],
	["%s becomes enraged and throws the brick back. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s  becomes enraged and throws the brick at the other person. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged and throws the brick randomly. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["%s becomes enraged that you %s and throws the brick at you. Fearing a large fight, you decide to run away. Where do you go?", "Out of the city", "Back home", "Anywhere but here"],
	["The stranger responds, \"What do you mean, '%s'? All art obviously deals with the American Dream!\" What do you do?", "Give up arguing and continue to work", "Try to win the argument", "Move somewhere else peaceful"],
	["The stranger responds, \"How does <i>that</i> talk about the American Dream?\" How do you respond?", "It symbolizes the metaphorical death of the American Dream", "It shows the opportunity omnipresent in society", "It demonstrates the meaningless of the American Dream"],
	["Stunned, he hesitates a second only to punch you back after realizing what happened. How do you respond?", "Continue fighting until you win", "Apologize for your absurd reaction", "Run away to stay away from future trouble"],
	["Months go by, and the only customers you have said disparaging comments. With little chance of success, how do you choose to continue.", "Give up and move on", "Try to create something new with the brick", "Decide to restore world peace with the brick after all the negativity you've recieved"],
	["While you decide to %s, he persists on insulting you and claims he will spread the word of your inferior work. You decide to:", "\"Teach him a lesson\" on what good art is", "Create a new piece of art that he might like", "Let him leave"],
	["He leaves peacefully, but you hear a rumor spreading around town that your art is insulting. You need to stop the rumor to sell your work. What do you do?", "Blackmail him", "Hunt him down and kill him", "Reveal to the public the falsehood of the rumors"],
	["After arguing with the actor for a while, the actor finally challenges, \"How about this: if you create a piece of art out of this brick, I will conceed that all art is equal\" What do you do?", "Accept his challenge", "Deny the challenge", "Ponder the challenge"],
	["The actor catches you before you reach the door. Feeling that you have insulted his passion for drama, he wants you to admit that some art is better than others. What do you do?", "Admit it", "Dodge the bullet and explain that you need to leave now", "Argue that he is wrong"],
	["Because you act like nothing happened, he feels not only insulted but is angered by your apparent egocentrism and apathy. He feels like you do not care how your actions effect others. What do you say?", "I didn't mean to hurt your feelings, I was just expressing my opinion", "I <i>don't</i> care about you", "Sorry, I didn't mean what I said"],
	["However, your plan to %s fails as the actor still catches up to you. Feeling that you have insulted his passion for drama, he wants you to admit that some art is better than others. What do you do?", "Admit it", "Dodge the bullet and explain that you need to leave now", "Argue that he is wrong"],
	["He then asks how making %s will help you %s? What do you say?", "It won't", "Can't you see?", "I don't know, put it passes the time"],
	["\"Ok.\" Rosenstern says, \"but at least do something meaningful with your life.\" How do you respond?", "Ignore him", "Start thinking about what is meaningful", "Maybe do something meaningful later"],
	["The peasant becomes royally annoyed at your actions, King \"more-important-than-everyone-else.\" You now see that your reputation is at stake, and if you don't rectify the situation, it might cause a rebelion. What do you do?", "Let the rebelion happen and defeat the rebels with your large army", "Explain that you work to keep the kingdom united", "Apologize to him"],
	["The peasant is about to yell at you, but has the brains to realize that you won't care about anything he will say. Instead he stomps off. What do you do?", "Take no action", "Give him a sharp warning to not do anything stupid, like cause an earthquake", "Thank him for the brick"],
	["The peasant thanks your Majesty for being benevolent. He wonders, though, \"Why does the brick not matter?\" How do you respond?", "In the bigger picture, nothing matters", "Everyone must make decisions on what is important, and the brick is not one of those", "I shouldn't be tasked with building"],
	["Even though you %s, the peasant is so annoyed at your previous words that he ignores you and stomps off. What do you do?", "Take no action", "Give him a sharp warning to not do anything stupid", "Thank him for the brick in vain"],
	["You run over to help the injured child, but find that he is bleeding at a dangerous rate. You have no way of stopping the bleeding. What do you do?", "Cry while he dies", "Console him while he dies", "Run to try to find help"],
	["Even after several minutes, you cannot find medical assistance. What do you do?", "Continue searching", "Check on the child", "Give up"],
	["In midst of the chaos, no one else sees the child. What do you do?", "Nothing, leave the child to die", "Go check on the child yourself", "Go to try to convince someone else to help"],
	["What do you think the child's name is?", "Noah", "Liam", "Mason"],
	["Finally out of the city, what do you do?", "Make a new life for yourself", "Go to sleep", "Find some food"],
	["Finally home, what do you do?", "Make a new life for yourself", "Go to sleep", "Find some food"],
	["Finally away from the crime scene, what do you do?", "Make a new life for yourself", "Go to sleep", "Find some food"],
	["Finally at %s, what do you do?", "Make a new life for yourself", "Go to sleep", "Find some food"],
	["You give up, and eventually the stranger leaves, but you can't stop thinking about the American Dream. What do you do?", "Forget about it", "Incorperate it into your work", "Continue working"],
	["The stranger argues, \"The American Dream states that Americans have the possibility of becoming better off than they were before. Isn't making this poem making you better than you were before?\" How do you respond?", "That doesn't prove the American Dream exists", "It isn't making me better", "Show me proof of the American Dream"],
	["The stranger argues, \"The American Dream matters because it means you can become better off than you are right now. Wouldn't you want that hope?\" How do you respond?", "Then why does it need to be in the poem?", "You enjoy the life you live now", "I don't need hope"],
	["The stranger retorts, \"There is no need to argue with you. You just make things loathesome\" and leaves. What do you do?", "Continue your work", "Reflect on the situation", "Yell back at him that he should leave"],
	["Where do you decide to move to?", "Your house", "The local coffee shop", "A friends house"],
	["Annoyed at your \"absurd\" actions, the stranger leaves. Do you think your actions were absurd?", "Yes", "No", "Well, maybe"],
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
		answers.push([questionIndex, questionNumber, "D", userInput.value, itemsToInsert]);
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
	for(ij = 0; ij < answers.length; ij++) {
		showQuestion(answers[ij]);
	}
	console.log(user);
}

function showQuestion(array) {
	var output = "<div class='question'><h3>" + (array[1]) + ". ";
	output += parse2(questions[array[0]][0],array[4]) + "</h3>";
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
				user.throwAt = "your teacher";
				itemsToInsert = [];
				questionIndex = 5;
				finalStory += "After given a brick by a random stranger, you decide to bring it to school to throw at your teacher. ";
				personalityCount.push(0);
			} else if(num == 2) {
				user.throwAt = "your boss";
				itemsToInsert = [];
				questionIndex = 6;
				finalStory += "After given a brick by a random stranger, you decide to bring it to work to throw at your boss. ";
				personalityCount.push(1);
			} else if(num == 3) {
				user.throwAt = "the stranger";
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
				finalStory += "After given a brick by a random stranger, you decide to make a piece of art. But you can't decide on what type of art because you believe all art is the same. ";
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
				finalStory += "So you're sitting " + user.location + " " + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. ";
			} else if(num == 2) {
				user.location = "home";
				itemsToInsert = [user.brickAction,"at your house"];
				questionIndex = 14;
				finalStory += "So you're sitting " + user.location + " " + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. ";
			} else if(num == 3) {
				user.location = "somewhere";
				itemsToInsert = [user.brickAction,"somewhere"];
				questionIndex = 14;
				personalityCount.push(3);
				finalStory += "So you're sitting " + user.location + " " + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. ";
			} else {
				user.location = userInput.value.toLowerCase();
				itemsToInsert = [user.location,user.brickAction];
				questionIndex = 14;
				finalStory += "So you're sitting " + user.location + " " + user.brickAction + " and an earthquake strikes. You survive the earthquake, but see a small, injured child stuck under a pile of rubble. ";
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
				user.AmericanDream = "why does the American Dream matter";
			} else if(num == 2) {
				itemsToInsert = ["the American Dream does not exist"];
				questionIndex = 19;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by saying, \"The American Dream does not exist.\" ";
				personalityCount.push(1);
				user.AmericanDream = "the American Dream does not exist";
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 20;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by retorting, \"Can't you see?\" ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 19;
				finalStory += "While inscribing, someone decides to look over you shoulder to read it. They complain, \"What does this have to do with the American Dream&#8253;\" You respond by saying, \"" + userInput.value + "\" ";
				user.AmericanDream = userInput.value;
			}
			break;
		case 10:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 21;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to punch them. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = ["ignore him"];
				questionIndex = 22;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You decide to ignore them and persevere unti someone does want to buy it. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 23;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to do nothing, as his opinion doesn't matter. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 22;
				finalStory += "But when you're trying to sell your artwork, a potential buyer insults your work saying, \"No one will ever buy that!\" You then decide to " + userInput.value + ". ";
			}
			break;
		case 11:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 25;
				finalStory += "Some time later, you decide to watch a play. At the reception after the play, the lead actor overhears your stance that all art is the same, and heads in your direction. You decide to defend your stance and argue. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 26;
				finalStory += "Some time later, you decide to watch a play. At the reception after the play, the lead actor overhears your stance that all art is the same, and heads in your direction. You decide suddenly leave because you \"remembered\" work you had to do. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 27;
				finalStory += "Some time later, you decide to watch a play. At the reception after the play, the lead actor overhears your stance that all art is the same, and heads in your direction. You decide to stand still like nothing happened. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 28;
				finalStory += "Some time later, you decide to watch a play. At the reception after the play, the lead actor overhears your stance that all art is the same, and heads in your direction. You decide to " + userInput.value.toLowerCase() + ". ";
			}
			break;
		case 12:
			if(num == 1) {
				itemsToInsert = [user.kindArt, "express your emotions"];
				questionIndex = 29;
				finalStory += "So, while you're making " + user.kindArt + ", Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making " + user.kindArt + "?\". You say that it will help you express your emotions. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [user.kindArt, "to settle a deal with another person"];
				questionIndex = 29;
				finalStory += "So, while you're making " + user.kindArt + ", Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making " + user.kindArt + "?\". You say that it will help you settle a deal with another person. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 30;
				finalStory += "So, while you're making " + user.kindArt + ", Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making " + user.kindArt + "?\". You say that you don't know. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [user.kindArt, userInput.value];
				questionIndex = 29;
				finalStory += "So, while you're making " + user.kindArt + ", Rosenstern watches from behind and asks, \"If you are going to die, what is the point of making " + user.kindArt + "?\". You say that it will " + userInput.value + ". ";
			}
			break;
		case 13:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 31;
				finalStory += "You decide to show your dominance over the peasant in an effort to fix the situation. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [user.kindArt];
				questionIndex = 32;
				finalStory += "You decide to explain to the peasant that his thoughts don't matter. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 33;
				finalStory += "You decide to appologize for your rudeness in an effort to fix the situation. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 34;
				finalStory += "You decide to " + userInput.value + " in an effort to fix the situation. ";
			}
			break;
		case 14:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 31;
				finalStory += "You run over to help the injured child, but find that he is bleeding at a dangerous rate. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [user.kindArt];
				questionIndex = 32;
				finalStory += "After several minutes searching for medical assistance, you cannot find any. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 33;
				finalStory += "After several minutes, no one else is able to see the child. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 34;
				finalStory += "You decide to " + userInput.value + " in an effort to fix the situation. ";
			}
			break;
		case 16:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 39;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run out of the city. ";
				user.location = "out of the city";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 40;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run home. ";
				user.location = "home";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 41;
				user.location = "away";
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run away. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 42;
				user.location = userInput.value
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run " + userInput.value + ". ";
			}
			break;
		case 17:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 39;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run out of the city. ";
				user.location = "out of the city";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 40;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run home. ";
				user.location = "home";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 41;
				user.location = "away";
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run away. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 42;
				user.location = userInput.value
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run " + userInput.value + ". ";
			}
			break;
		case 18:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 39;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run out of the city. ";
				user.location = "out of the city";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				questionIndex = 40;
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run home. ";
				user.location = "home";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 41;
				user.location = "away";
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run away. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 42;
				user.location = userInput.value
				finalStory += user.throwAt + " becomes annoyed and throws the brick back. Fearing a large fight, you decide to run " + userInput.value + ". ";
			}
			break;
		case 19:
			if(num == 1) {
				itemsToInsert = [];
				questionIndex = 43;
				finalStory += "The stranger responds, \"What do you mean, '" + user.AmericanDream + "'? All art obviously deals with the American Dream!\" You give up the arguement and go back go work. ";
				personalityCount.push(0);
			} else if(num == 2) {
				itemsToInsert = [];
				if(user.AmericanDream == "the American Dream does not exist") {
					questionIndex = 44;
				} else if(user.AmericanDream == "why does the American Dream matter") {
					questionIndex = 45;
				} else {
					questionIndex = 46;
				}
				finalStory += "The stranger responds, \"What do you mean, '" + user.AmericanDream + "'? All art obviously deals with the American Dream!\" You try to win the arguement. ";
				personalityCount.push(1);
			} else if(num == 3) {
				itemsToInsert = [];
				questionIndex = 47;
				finalStory += "The stranger responds, \"What do you mean, '" + user.AmericanDream + "'? All art obviously deals with the American Dream!\" You move somewhere more peaceful to work. ";
				personalityCount.push(2);
			} else {
				itemsToInsert = [userInput.value];
				questionIndex = 48;
				finalStory += "The stranger responds, \"What do you mean, '" + user.AmericanDream + "'? All art obviously deals with the American Dream!\" You then " + userInput.value + ". ";
			}
			break;
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
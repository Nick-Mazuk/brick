var openingScreen;
var questionContainer;
window.addEventListener("DOMContentLoaded", function() {start();});

function start() {
	openingScreen = document.getElementById("openingScreen");
	questionContainer = document.getElementById("questionContainer");
	openingScreen.addEventListener("click",function() {clickScreen();});
}

function clickScreen() {
	openingScreen.style.display = "none";
	questionContainer.style.display = "inline-flex";
}

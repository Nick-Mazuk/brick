var openingScreen;
window.addEventListener("DOMContentLoaded", function() {start();});

function start() {
	openingScreen = document.getElementById("openingScreen");
	openingScreen.addEventListener("click",function() {clickScreen();});
}

function clickScreen() {
	openingScreen.style.display = "none";
}
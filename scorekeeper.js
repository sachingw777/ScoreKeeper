var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var rbutton =  document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numberInput = document.querySelector("input"); 
var numberDisplay = document.querySelector("#numberDisplay");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		console.log(p1score, winningScore);
		if(p1score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
		}
	p1Display.textContent = p1score;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if (p2score === winningScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2score
	}
});

rbutton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
numberInput.addEventListener("change", function(){
 	numberDisplay.textContent =  this.value;
 	winningScore = Number(this.value);
 	reset();
});



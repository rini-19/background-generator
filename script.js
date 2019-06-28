var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandom(){
	hex = "01233456789ABCDEF";
	c1 = '#';
	c2 = '#';
	for (var i=0; i<6; i++){
		c1+= hex[(Math.floor(Math.random() * 16))];
		c2+= hex[(Math.floor(Math.random() * 16))];
	}
	color1.value = c1;
	color2.value = c2;
	setGradient();
}

button.addEventListener("click", generateRandom);
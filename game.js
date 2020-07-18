
var colors = generaterandomcolor(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagesdisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybt=document.querySelector("#easybt");
var hardbt=document.querySelector("#hardbt");
easybt.addEventListener("click", function()
{
	hardbt.classList.remove("selected");
easybt.classList.add("selected");
colors = generaterandomcolor(3);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++)
 {
	if(colors[i])
	{
		squares[i].style.background = colors[i];
	}
	else
	{
		squares[i].style.background = "green";
	}
}

});

hardbt.addEventListener("click", function()
{
	hardbt.classList.add("selected");
easybt.classList.remove("selected");

colors = generaterandomcolor(6);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++)
 {
	if(colors[i])
	{
		squares[i].style.background = colors[i];
	}
	else
	{
		squares[i].style.background = "null";
	}
}


});




resetbutton.addEventListener("click", function()
 {
 	colors = generaterandomcolor(6);
 	 pickedcolor = pickcolor();
 	 colordisplay.textContent = pickedcolor;
 	for (var i = 0; i < squares.length; i++)
 	 {
 		squares[i].style.background =colors[i];
 	}
})

for(var i = 0; i < squares.length; i++){
squares[i].style.background = colors[i];
squares[i].addEventListener("click", function(){
	var clickedcolor = this.style.background;
	if(clickedcolor === pickedcolor)
	{
		messagesdisplay.textContent = "correct";
		resetbutton.textContent = "PLAY AGAIN";
		changecolor(clickedcolor);
		h1.style.background = pickedcolor;
		h1.style.background = "royalblue";
	}
		else
		{
			this.style.background = "green";
			messagesdisplay.textContent = "try again"
		}
	});

}
function changecolor(color)
{
	for (var i = 0; i < squares.length; i++)
	 {
	squares[i].style.background = color;
}
}
function pickcolor()
 {
var random=Math.floor(Math.random() * colors.length)
return colors[random];
	// body...
}

function generaterandomcolor(num)
 {
 	var arr = []
 	for (var i = 0; i < num; i++)
 	 {
 		arr.push(randomcolor())
 	}
 	return arr;
 }

 function randomcolor()
  {
  	var r=Math.floor(Math.random() * 256);
  	var b=Math.floor(Math.random() * 256);
  	var g=Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + b + ", " + g + ")";
 	// body...
 }
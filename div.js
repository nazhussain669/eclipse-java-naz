window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit1").addEventListener("click",ChangeWord);
	document.getElementById("btnsubmit2").addEventListener("click",ChangeColor);
}
function ChangeWord()
{
	myDiv = document.getElementById("myDiv");
	thatDiv = document.getElementById("changecolor");
	
	myDiv.textContent = "I am here";
	thatDiv.style.visibility = "hidden";
}
function ChangeColor()
{
	whichbutton = document.getElementById("changecolor");
	buttonDiv = document.querySelector("#changecolor #btnsubmit2");
	whichbutton.style.visibility = "visible";
	document.getElementById("lblRed").style.backgroundColor = "red";
	document.getElementById("lblBlue").style.color = "orange";
}
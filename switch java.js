window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",ShowResult);
}

function ShowResult()
{
	num = parseInt(document.getElementById("txtuserInput").value);
	let message = "";
	
	switch(num)
	{
		case 1:
			message = "You chose one";
			break;
		case 2:
			message = "You chose two";
			break;
		case 3:
			message = "You chose three";
			break;
		default:
			message = "invalid";
	}
	
	document.getElementById("lblResult").textContent = message;
	
}
/**
 * 
 */
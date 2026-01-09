window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",UseLocal);
}

function UseLocal()
{
	localStorage.clear();
	username = document.getElementById("txtusername").value;
	localStorage.setItem("user",username);
	password = document.getElementById("txtpassword").value;
	localStorage.setItem("pwrd",password);
	
	window.location.href = "mainscreen3.html";
}
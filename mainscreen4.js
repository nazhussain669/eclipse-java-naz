window.addEventListener("load",GetInfo);

function GetInfo()
{
	nameuser = localStorage.getItem("user");
	wordpass = localStorage.getItem("pwrd");
	userlogin = "Username: " + nameuser + " " + "Password: " + wordpass;
	
	document.getElementById("lbluserlogin").textContent = userlogin;
}

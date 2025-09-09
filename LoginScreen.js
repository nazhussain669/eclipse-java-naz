window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",logininfo);

}

function logininfo()
{
	username = document.getElementById("txtusername").value;
	passwd = document.getElementById("txtpassword").value;
	
	if (username == "" || passwd == "")
	{
		alert("Missing username and/or password!");
	}
	else
	{
		alert("Welcome " + username);
		document.write("Your username is " + username + " and your password is " + passwd);
	}
}
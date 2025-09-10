window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",gradeinfo);

}

function gradeinfo()
{
	geometry = document.getElementById("txtgeometry").value;
	geograde = document.getElementById("txtgeograde").value;
	
	history = document.getElementById("txthistory").value;
	hisgrade = document.getElementById("txthisgrade").value;
	
	chemistry = document.getElementById("txtchemistry").value;
	chemgrade = document.getElementById("txtchemgrade").value;
		
	seminar = document.getElementById("txtseminar").value;
	semgrade = document.getElementById("txtsemgrade").value;
			
	spanish = document.getElementById("txtspanish").value;
	spangrade = document.getElementById("txtspangrade").value;
	
	
	
	if (geograde == "" || hisgrade == "" || chemgrade == "" || semgrade == "" || spangrade == "")
	{
		alert("Missing grade!");
	}
	else
	{
		alert("Welcome " + username);
		document.write("Your username is " + username + " and your password is " + passwd);
	}
}
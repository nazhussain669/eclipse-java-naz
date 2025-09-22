window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",gradeinfo);
}

function gradeinfo()
{
	grade1 = document.getElementById("txtgrade1").value;
	grade2 = document.getElementById("txtgrade2").value;
	grade3 = document.getElementById("txtgrade3").value;
	grade4 = document.getElementById("txtgrade4").value;
	grade5 = document.getElementById("txtgrade5").value;
	
	PerformCalc();
}
	
function PerformCalc()
{
	sum = parseFloat (grade1) + parseFloat (grade2) + parseFloat (grade3) + parseFloat (grade4) + parseFloat (grade5);
	average = parseFloat (sum) / 5;
	
	let message = ""
	
	switch(true)
	{
		case (average >= 90):
			message = "Grade = (A) GPA = 4.0";
			break;
		case (average >= 80):
			message = "Grade = (B) GPA = 3.0";
			break;
		case (average >= 70):
			message = "Grade = (C) GPA = 2.0";
			break;
		case (average >= 60):
			message = "Grade = (D) GPA = 1.0";
			break;
		default:
			message = "Invalid";
	}
	
	document.write(message);
	//getElementById("lblaverage").textContent = (average);
	//document.getElementById("lblmessage").textContent = (message);
	
}
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
	
	switch(true)
	{
		case (average >= 90 && average <=100):
			document.getElementById("lblresults").textContent = "Grade = (A) GPA = 4.0 Average = " + average;
			break;
		case (average >= 80 && average <=89):
			document.getElementById("lblresults").textContent = "Grade = (B) GPA = 3.0 Average = " + average;
			break;
		case (average >= 70 && average <=79):
			document.getElementById("lblresults").textContent = "Grade = (C) GPA = 2.0 Average = " + average;
			break;
		case (average >= 65 && average <= 69):
			document.getElementById("lblresults").textContent = "Grade = (D) GPA = 1.0 Average = " + average;
			break;
		case (average >= 0 && average <= 64):
			document.getElementById("lblresults").textContent = "Grade = (F) GPA = 0 Average = " + average;
			break;
		default:
			document.getElementById("lblresults").textContent = "invalid";
			break;
	}
}/**
 * 
 */
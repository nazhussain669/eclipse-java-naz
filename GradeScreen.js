window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",gradeinfo);
}

function gradeinfo()
{
	class1 = document.getElementById("txtclass1").value;
	
	grade1 = document.getElementById("txtgrade1").value;
	
	class2 = document.getElementById("txtclass2").value;
	
	grade2 = document.getElementById("txtgrade2").value;
	
	class3 = document.getElementById("txtclass3").value;
	
	grade3 = document.getElementById("txtgrade3").value;
		
	class4 = document.getElementById("txtclass4").value;
	
	grade4 = document.getElementById("txtgrade4").value;
			
	class5 = document.getElementById("txtclass5").value;
	
	grade5 = document.getElementById("txtgrade5").value;
	
	
	if (class1 == "" || class2 == "" || class3 == "" || class4 == "" || class5 == "" || 
		grade1 == "" || grade2 == "" || grade3 == "" || grade4 == "" || grade5 == "")
	{
		alert("Missing course name/grade!");
	}
	else
	{
		PerformCalc();
	}
}
	
function PerformCalc()
{
	sum = parseFloat (grade1) + parseFloat (grade2) + parseFloat (grade3) + parseFloat (grade4) + parseFloat (grade5);
	average = parseFloat (sum) / 5;
	score = parseInt(average);
		
	let message = "";
			
	switch(score)
	{
		case (score >= 30 || score <= 100):
			message = "gpa";
			break;
		default:
			message = "invalid";
	}
			
	document.getElementById("lblResult").textContent = message;
}
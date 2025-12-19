window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click", CreateFile);
}

function CreateFile()
{
	fname = document.getElementById("txtfirstname").value.trim();
	lname = document.getElementById("txtlastname").value.trim();
	midname = document.getElementById("txtmidname").value.trim();
	gpa = document.getElementById("txtgpa").value.trim();
	grade = document.getElementById("txtgrade").value.trim();
	
	midname = document.getElementById("txtmidname").value.trim();

	// If no middle initial was entered, display "None"
	if (midname.length == 0)
	{
		midname = "None";
	}
	
	// Text content for the file
	content =
		"First Name: " + fname + "\n" +
		"Last Name: " + lname + "\n" +
		"Middle Initial: " + midname + "\n" +
		"GPA: " + gpa + "\n" +
		"Grade Level: " + grade;
	
	filename = "Student Information.txt";
	
	blob = new Blob([content], { type: "text/plain" });
	
	url = URL.createObjectURL(blob);
	
	a = document.createElement("a");
	a.href = url;
	a.download = filename;
	
	document.body.appendChild(a);
	a.click();
	document.body.remove(a);
	
	URL.revokeObjectURL(url);
}

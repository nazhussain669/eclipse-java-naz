window.addEventListener("load", CheckInput);

function CheckInput()
{
	fname = document.getElementById("txtfirstname").value.trim();
	lname = document.getElementById("txtlastname").value.trim();
	midname = document.getElementById("txtmidname").value.trim();
	gpa = document.getElementById("txtgpa").value.trim();
	grade = document.getElementById("txtgrade").value.trim();
	
	btn = document.getElementById("btnsubmit");
	
	// Check that every input has something
	if (fname.length > 0 &&
		lname.length > 0 &&
		gpa.length > 0 &&
		grade.length > 0)
	{
		btn.disabled = false;
	}
	else
	{
		btn.disabled = true;
	}
	
	// Run the check again whenever the user types
	document.getElementById("txtfirstname").addEventListener("input", CheckInput);
	document.getElementById("txtlastname").addEventListener("input", CheckInput);
	document.getElementById("txtmidname").addEventListener("input", CheckInput);
	document.getElementById("txtgpa").addEventListener("input", CheckInput);
	document.getElementById("txtgrade").addEventListener("input", CheckInput);
}
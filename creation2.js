window.addEventListener("load",addListener);

tray=[];

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",CreateFile);
}

function CreateFile()
{
	fname = document.getElementById("txtfirstname").value.trim();
	lname = document.getElementById("txtlastname").value.trim();
	midname = document.getElementById("txtmidname").value.trim();
	gpa = document.getElementById("txtgpa").value.trim();
	grade = document.getElementById("txtgrade").value.trim();
	
	tray.push
		({fname,lname,midname,gpa,grade});
	
	filename = "Student Information";
	
	filename = filename + ".txt";
	
	blob = new Blob([tray],{type: 'text/plain'});
	
	url = URL.createObjectURL(blob);
	
	a = document.createElement('a');
	
	a.href = url;
	
	a.download = filename;
	
	document.body.appendChild(a);
	
	a.click();
	
	document.body.remove(a);
	
	URL.revokeObjectURL(url);	
}
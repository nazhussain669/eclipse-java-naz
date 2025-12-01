window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("btnsubmit").addEventListener("click", UseLocal);
}
	
function UseLocal()
{
	localStorage.clear(); //clears storage
	
	// collects value of inputs
	fname = document.getElementById("txtfirstname").value;
	localStorage.setItem("firstname",fname);
	
	lname = document.getElementById("txtlastname").value;
	localStorage.setItem("lastname",lname);
	
	ident = document.getElementById("txtid").value;
	localStorage.setItem("id",ident);
	
	schooln = document.getElementById("txtschool").value;
	localStorage.setItem("school",schooln);
	
	couns = document.getElementById("txtcounselor").value;
	localStorage.setItem("counselor",couns);
	
	grdlvl = document.getElementById("txtgrade").value;
	localStorage.setItem("grade",grdlvl);
	
    // Automatically open 2nd html
    window.location = "local2.html";
}

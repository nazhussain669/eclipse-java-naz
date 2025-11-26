window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("btnsubmit").addEventListener("click", UseLocal);
}
	
function UseLocal()
{
	localStorage.clear();
	
	localStorage.firstname = document.getElementById("firstname").value;
    localStorage.lastname = document.getElementById("lastname").value;
    localStorage.id = document.getElementById("id").value;
    localStorage.school = document.getElementById("school").value;
    localStorage.counselor = document.getElementById("counselor").value;
    localStorage.grade = document.getElementById("grade").value;

    // Automatically open 2nd html
    window.location = "local2.html";
}
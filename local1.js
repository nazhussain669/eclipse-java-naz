window.addEventListener("load", start);

function start()
{
    document.getElementById("btnadd").addEventListener("click", addInfo);
    document.getElementById("btnenter").addEventListener("click", Enter);
	document.getElementById("btnclear").addEventListener("click", clearAll);
}

function addInfo()
{
	document.getElementById("txtfirstname").focus();
	
	let first = document.getElementById("txtfirstname").value;
	let last = document.getElementById("txtlastname").value;
	let ident = document.getElementById("txtid").value;
	let sch = document.getElementById("txtschool").value;
	let couns = document.getElementById("txtcounselor").value;
	let grd = document.getElementById("txtgrade").value;
	
	if (first == "" || last == "" || ident == "" || sch == "" || couns == "" || grd == "")
	{
		alert("Input all fields!");
		return; // stop function
	}
	
    // Get the count of how many rows already stored
    let count = localStorage.getItem("count");

    if (count == null)
        count = 0;
    else
        count = parseInt(count);

    // Store each value separately
    localStorage.setItem("firstname" + count, first);
    localStorage.setItem("lastname" + count, last);
    localStorage.setItem("id" + count, ident);
    localStorage.setItem("school" + count, sch);
    localStorage.setItem("counselor" + count, couns);
    localStorage.setItem("grade" + count, grd);

    // update count
    count++;
    localStorage.setItem("count", count);

    // clear inputs
    document.getElementById("txtfirstname").value = "";
    document.getElementById("txtlastname").value = "";
    document.getElementById("txtid").value = "";
    document.getElementById("txtschool").value = "";
    document.getElementById("txtcounselor").value = "";
    document.getElementById("txtgrade").value = "";
}

function Enter()
{
    window.location.href = "local2.html";
}

function clearAll()
{
    localStorage.clear(); // remove everything
    alert("All data has been cleared!");
}
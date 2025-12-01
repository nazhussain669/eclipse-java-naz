window.addEventListener("load", addListeners);

let storedData = []; // will store all entries

function addListeners() 
{
	document.getElementById("tableDiv").style.visibility = "hidden";
	
    document.getElementById("btnEnter").addEventListener("click", displayInfo);
    document.getElementById("btnAdd").addEventListener("click", EnterNew);
    document.getElementById("btnClear").addEventListener("click", clearEverything);
}

function displayInfo() 
{	
    // Get input values
    let fname = document.getElementById("txtfname").value;
	let lname = document.getElementById("txtlname").value;
    let age = document.getElementById("txtage").value;
    let grade = document.getElementById("txtgrade").value;
	
	// check if the user does not enter anything
	if (fname == "" || lname == "" || age == "" || grade == "") 
	{
		alert("Please enter all fields!");
	    return;  // Stop the function so it does not add a blank row
	}

    // Store entry in array
    storedData.push({ fname, lname, age, grade });

    // Show table
    document.getElementById("tableDiv").style.visibility = "visible";

    // Rebuild table using insertRow
    let tableBody = document.getElementById("tblbody");
    tableBody.innerHTML = ""; // clear table before rebuilding

    storedData.forEach(item => {
        let row = tableBody.insertRow();

        let cellFName = row.insertCell();
        cellFName.textContent = item.fname;
		
		let cellLName = row.insertCell();
		cellLName.textContent = item.lname;

        let cellAge = row.insertCell();
        cellAge.textContent = item.age;

        let cellGrade = row.insertCell();
        cellGrade.textContent = item.grade;
    });
}

function EnterNew() 
{
    // Hide table so user can enter a new set of info
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
    document.getElementById("txtfname").value = "";
	document.getElementById("txtlname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtgrade").value = "";

    // Focus the first input
    document.getElementById("txtfname").focus();
}

function clearEverything() 
{
    // Clear array
    storedData = [];

    // Clear table and hide it
    document.getElementById("tblbody").innerHTML = "";
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
    document.getElementById("txtfname").value = "";
	document.getElementById("txtlname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtgrade").value = "";

    document.getElementById("txtfname").focus();
}
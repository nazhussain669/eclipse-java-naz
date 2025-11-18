window.addEventListener("load", addListeners);

let storedData = []; // will store all entries

function addListeners() {
	
	document.getElementById("tableDiv").style.visibility = "hidden";
	
    document.getElementById("btnEnter").addEventListener("click", displayInfo);
    document.getElementById("btnAdd").addEventListener("click", startNewEntry);
    document.getElementById("btnClear").addEventListener("click", clearEverything);
}

function displayInfo() {
	
	
    // Get input values
    let name = document.getElementById("txtname").value;
    let age = document.getElementById("txtage").value;
    let grade = document.getElementById("txtgrade").value;
	
	// check if the user does not enter anything
	if (name == "" || age == "" || grade == "") 
	{
		alert("Please enter ALL fields (Name, Age, and Grade).");
	    return;  // Stop the function so it does not add a blank row
	}

    // Store entry in array
    storedData.push({ name, age, grade });

    // Show table
    document.getElementById("tableDiv").style.visibility = "visible";

    // Rebuild table using insertRow
    let tableBody = document.getElementById("tblbody");
    tableBody.innerHTML = ""; // clear table before rebuilding

    storedData.forEach(item => {
        let row = tableBody.insertRow();

        let cellName = row.insertCell();
        cellName.textContent = item.name;

        let cellAge = row.insertCell();
        cellAge.textContent = item.age;

        let cellGrade = row.insertCell();
        cellGrade.textContent = item.grade;
    });
}

function startNewEntry() {
    // Hide table so user can enter a new set of info
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtgrade").value = "";

    // Focus the first input
    document.getElementById("txtname").focus();
}

function clearEverything() {
    // Clear array
    storedData = [];

    // Clear table and hide it
    document.getElementById("tblbody").innerHTML = "";
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtgrade").value = "";

    document.getElementById("txtname").focus();
}
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
	let Sunday = document.getElementById("txtsunday").value;
    let Monday = document.getElementById("txtmonday").value;
	let Tuesday = document.getElementById("txttuesday").value;
	let Wednesday = document.getElementById("txtwednesday").value;
	let Thursday = document.getElementById("txtthursday").value;
	let Friday = document.getElementById("txtfriday").value;
	let Saturday = document.getElementById("txtsaturday").value;
	
	// check if the user does not enter anything
	//if (Sunday == "" || Monday == "" || Tuesday == "" || Wednesday == "" || Thursday == "" || Friday == "" || Saturday == "") 
	//{
		//alert("Field is blank!");
	    //return;  // Stop the function so it does not add a blank row
	//}

    // Store entry in array
    storedData.push({ Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday });

    // Show table
    document.getElementById("tableDiv").style.visibility = "visible";

    // Rebuild table using insertRow
    let tableBody = document.getElementById("tblbody");
    tableBody.innerHTML = ""; // clear table before rebuilding

    storedData.forEach(item => {
        let row = tableBody.insertRow();

        let cellSun = row.insertCell();
        cellSun.textContent = item.Sunday;

		let cellMon = row.insertCell();
		cellMon.textContent = item.Monday;
				
		let cellTues = row.insertCell();
		cellTues.textContent = item.Tuesday;
		
		let cellWed = row.insertCell();
		cellWed.textContent = item.Wednesday;
				
		let cellThur = row.insertCell();
		cellThur.textContent = item.Thursday;
		
		let cellFri = row.insertCell();
		cellFri.textContent = item.Friday;
				
		let cellSat = row.insertCell();
		cellSat.textContent = item.Saturday;
    });
}

function EnterNew() 
{
    // Hide table so user can enter a new set of info
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
	document.getElementById("txtsunday").value = "";
	document.getElementById("txtmonday").value = "";
	document.getElementById("txttuesday").value = "";
	document.getElementById("txtwednesday").value = "";
	document.getElementById("txtthursday").value = "";
	document.getElementById("txtfriday").value = "";
	document.getElementById("txtsaturday").value = "";

    // Focus the first input
    document.getElementById("txtsunday").focus();
}

function clearEverything() 
{
    // Clear array
    storedData = [];

    // Clear table and hide it
    document.getElementById("tblbody").innerHTML = "";
    document.getElementById("tableDiv").style.visibility = "hidden";

    // Clear inputs
	document.getElementById("txtsunday").value = "";
	document.getElementById("txtmonday").value = "";
	document.getElementById("txttuesday").value = "";
	document.getElementById("txtwednesday").value = "";
	document.getElementById("txtthursday").value = "";
	document.getElementById("txtfriday").value = "";
	document.getElementById("txtsaturday").value = "";

	// Focus the first input
	document.getElementById("txtsunday").focus();
}
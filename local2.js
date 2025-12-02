window.addEventListener("load", addRows);

function addRows()
{
    const tbl = document.getElementById("tblstudentinfo");

	// Retrieve the stored data from localStorage and convert it back to an array
    let data = JSON.parse(localStorage.getItem("studentinfo")); 
	//turns a JSON string back into a javascript object.

    // loop through all stored entries
    for (let i = 0; i < data.length; i++)
    {
        const row = tbl.insertRow(); // Create a new row at the end of the table

		// Create and fill each cell in the row with student info
        const fnCell = row.insertCell();
        fnCell.textContent = data[i].firstname;

        const lnCell = row.insertCell();
        lnCell.textContent = data[i].lastname;

        const idCell = row.insertCell();
        idCell.textContent = data[i].id;

        const schoolCell = row.insertCell();
        schoolCell.textContent = data[i].school;

        const counCell = row.insertCell();
        counCell.textContent = data[i].counselor;

        const gradeCell = row.insertCell();
        gradeCell.textContent = data[i].grade;
    }
}
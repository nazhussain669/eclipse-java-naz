window.addEventListener("load", addRow);

function addRow()
{
    const tblBody = document.getElementById('tblstudentinfo'); // collects the id of the table

    const row = tblBody.insertRow();

    const fnCell = row.insertCell();
    fnCell.textContent = localStorage.getItem("firstname"); //adds the user inputs in the respective rows

    const lnCell = row.insertCell();
    lnCell.textContent = localStorage.getItem("lastname");

    const idCell = row.insertCell();
    idCell.textContent = localStorage.getItem("id");

    const schoolCell = row.insertCell();
    schoolCell.textContent = localStorage.getItem("school");

    const counCell = row.insertCell();
    counCell.textContent = localStorage.getItem("counselor");

    const gradeCell = row.insertCell();
    gradeCell.textContent = localStorage.getItem("grade");
}

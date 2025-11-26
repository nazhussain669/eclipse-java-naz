window.addEventListener("load", addRow);

function addRow()
{
    const tblBody = document.getElementById('tblstudentinfo');

    const row = tblBody.insertRow();

    const fnCell = row.insertCell();
    fnCell.textContent = localStorage.firstname;

    const lnCell = row.insertCell();
    lnCell.textContent = localStorage.lastname;

    const idCell = row.insertCell();
    idCell.textContent = localStorage.id;

    const schoolCell = row.insertCell();
    schoolCell.textContent = localStorage.school;

    const counCell = row.insertCell();
    counCell.textContent = localStorage.counselor;

    const gradeCell = row.insertCell();
    gradeCell.textContent = localStorage.grade;
}
window.addEventListener("load", fillTable);

function fillTable()
{
    const tbody = document.getElementById("tblbodyinfo");

    let count = localStorage.getItem("count");

    if (count == null) //no value, signals that a variable exists but is currently empty and can hold a value
        return;

    count = parseInt(count);

    for (let i = 0; i < count; i++)
    {
        // create row
        const row = document.createElement("tr");

        // create each cell
        const fn = document.createElement("td");
        fn.textContent = localStorage.getItem("firstname" + i);
        row.appendChild(fn);

        const ln = document.createElement("td");
        ln.textContent = localStorage.getItem("lastname" + i);
        row.appendChild(ln);

        const id = document.createElement("td");
        id.textContent = localStorage.getItem("id" + i);
        row.appendChild(id);

        const school = document.createElement("td");
        school.textContent = localStorage.getItem("school" + i);
        row.appendChild(school);

        const coun = document.createElement("td");
        coun.textContent = localStorage.getItem("counselor" + i);
        row.appendChild(coun);

        const grade = document.createElement("td");
        grade.textContent = localStorage.getItem("grade" + i);
        row.appendChild(grade);

        // add row to table
        tbody.appendChild(row);
    }
}
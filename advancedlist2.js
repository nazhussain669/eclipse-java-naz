window.addEventListener("load", addListeners);

let tasks = []; // store tasks as objects {name, day}

function addListeners() {
    document.getElementById("btnAdd").addEventListener("click", addTask);
    document.getElementById("btnComplete").addEventListener("click", completeTask);
    document.getElementById("btnDelete").addEventListener("click", deleteTask);

    // Hide table initially
    document.getElementById("tableDiv").style.visibility = "hidden";
}

// Add task
function addTask() {
    let taskName = document.getElementById("txtTask").value;
    let taskDay = document.getElementById("daySelect").value;

    if (taskName == "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({ name: taskName, day: taskDay });

    updateDropdown();
    updateTable();

    // Clear input
    document.getElementById("txtTask").value = "";
    document.getElementById("txtTask").focus();
}

// Update dropdown
function updateDropdown() {
    let dropdown = document.getElementById("taskDropdown");
    dropdown.innerHTML = ""; // clear previous

    for (let i = 0; i < tasks.length; i++) {
        let option = document.createElement("option");
        option.value = i; // index in array
        option.textContent = tasks[i].name + " (" + tasks[i].day + ")";
        dropdown.appendChild(option);
    }
}

// Update table
function updateTable()
{
    // Show table
    document.getElementById("tableDiv").style.visibility = "visible";

    // Clear all table cells
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for (let i = 0; i < days.length; i++) 
	{
        document.getElementById("td" + days[i]).textContent = "";
    }

    // Add tasks to correct day
    for (let i = 0; i < tasks.length; i++) 
	{
       let dayCell = document.getElementById("td" + tasks[i].day);
       if (dayCell.textContent == "") 
		{
       		dayCell.textContent = tasks[i].name;
    	} 
		else 
		{
       		dayCell.textContent += ", " + tasks[i].name;
    	}
    }
}

// Complete selected task
function completeTask() 
{
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1)
	{
        alert("Please select a task to complete.");
        return;
    }

    let idx = dropdown.selectedIndex;
    alert("Task completed: " + tasks[idx].name);
}

// Delete selected task
function deleteTask()
{
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1)
	{
        alert("Please select a task to delete.");
        return;
    }

    let idx = dropdown.selectedIndex;
    tasks.splice(idx, 1); // remove from array
    updateDropdown();
    updateTable();
	alert("Task deleted: " + tasks[idx].name);
}

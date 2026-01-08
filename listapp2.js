window.addEventListener("load", addListeners);

let tasks = []; // Array to store all tasks as objects { name, day }

function addListeners()
{
    document.getElementById("btnAdd").addEventListener("click", addTask);
    document.getElementById("btnComplete").addEventListener("click", completeTask);
    document.getElementById("btnDelete").addEventListener("click", deleteTask);

    document.getElementById("tableDiv").style.visibility = "hidden"; // Hide the table until a task is added
}

// Add task
function addTask()
{
    let taskName = document.getElementById("txtTask").value;
    let taskDay = document.getElementById("daySelect").value;

    if (taskName == "") // Check if task input is empty
    {
        alert("Please enter a task.");
        return;
    }

    tasks.push({ name: taskName, day: taskDay }); // Store task as an object in the array

    updateDropdown();
    updateTable();

	// Clear input and place cursor back in textbox
    document.getElementById("txtTask").value = "";
    document.getElementById("txtTask").focus();
}

// Update dropdown
function updateDropdown()
{
    let dropdown = document.getElementById("taskDropdown");
    dropdown.innerHTML = ""; // Clear previous tasks from dropdown

    for (let i = 0; i < tasks.length; i++) // Loop through tasks array 
    {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = tasks[i].name + " (" + tasks[i].day + ")";
        dropdown.appendChild(option);
    }
}

// Update table
function updateTable()
{
    document.getElementById("tableDiv").style.visibility = "visible";

	// List of days to clear table cells
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	// Clear all table cells
    for (let i = 0; i < days.length; i++)
    {
        document.getElementById("td" + days[i]).textContent = "";
    }

	// Place tasks into correct day cell
    for (let i = 0; i < tasks.length; i++)
    {
        let cell = document.getElementById("td" + tasks[i].day);
        if (cell.textContent == "")
        {
            cell.textContent = tasks[i].name;
        }
        else
        {
            cell.textContent += ", " + tasks[i].name;
        }
    }
}

// Complete task
function completeTask()
{
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1) // Check if a task is selected
    {
        alert("Please select a task to complete.");
        return;
    }

    alert("Task completed: " + tasks[dropdown.selectedIndex].name);
}

// Delete task
function deleteTask()
{
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1)
    {
        alert("Please select a task to delete.");
        return;
    }

    let idx = dropdown.selectedIndex;
    let deleted = tasks[idx].name;

    tasks.splice(idx, 1); // Remove task from array
    updateDropdown();
    updateTable();

    alert("Task deleted: " + deleted);
}

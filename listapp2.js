
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
        let option = document.createElement("option"); //Make a new option in the dropdown for the task
        option.value = i; //Sets the value of the option to the index i of the task in the tasks array
        option.textContent = tasks[i].name + " (" + tasks[i].day + ")"; //Show the task name and day in the dropdown so the user knows what it is
        dropdown.appendChild(option); //Add the task to the dropdown so the user can select it
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
        document.getElementById("td" + days[i]).textContent = ""; //If days[i] is "Monday", it gets the element with id="tdMonday"
    }

	// Place tasks into correct day cell
    for (let i = 0; i < tasks.length; i++)
    {
        let cell = document.getElementById("td" + tasks[i].day); //Gets the day assigned to this task & finds the table cell for that day
        if (cell.textContent == "") //If nothing is in the cell yet, input the task name there
        {
            cell.textContent = tasks[i].name;
        }
        else
        {
            cell.textContent += ", " + tasks[i].name; //Add the new task after a comma, so multiple tasks show in the same cell
        }
    }
}

// Complete task
function completeTask()
{
	//dropdown.selectedIndex gives the position of the selected option in the dropdown.
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1) // If the user hasn’t picked a task, tell them to pick one
    {
        alert("Please select a task to complete.");
        return;
    }

    alert("Task completed: " + tasks[dropdown.selectedIndex].name); //Tell the user which task they completed
}

// Delete task
function deleteTask()
{
    let dropdown = document.getElementById("taskDropdown");
    if (dropdown.selectedIndex == -1) //-1 is a special value that means nothing is selected
    {
        alert("Please select a task to delete.");
        return;
    }

    let idx = dropdown.selectedIndex; //Store the selected index in idx
    let deleted = tasks[idx].name;

    tasks.splice(idx, 1); // splice(idx, 1) removes 1 item at position idx from the tasks array
    updateDropdown();
    updateTable();

    alert("Task deleted: " + deleted);
}

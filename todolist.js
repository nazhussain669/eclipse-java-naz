window.addEventListener("load", addListeners);

let tasks = []; // store all tasks

function addListeners() 
{
    document.getElementById("btnAdd").addEventListener("click", addTask);
    document.getElementById("btnComplete").addEventListener("click", completeTask);
    document.getElementById("btnDelete").addEventListener("click", deleteTask);
}

// Add task to the list
function addTask() 
{
    let taskInput = document.getElementById("txtTask").value;
    if (taskInput == "") 
		{
        alert("Please enter a task.");
        return;
    	}

    tasks.push(taskInput);
    updateTaskList();
    document.getElementById("txtTask").value = "";
    document.getElementById("txtTask").focus();
}

// Update the dropdown menu
function updateTaskList() 
{
    let select = document.getElementById("taskList");
    select.innerHTML = ""; // clear previous options

    for (let i = 0; i < tasks.length; i++) {
        let option = document.createElement("option");
        option.value = i; // use index as value
        option.textContent = tasks[i];
        select.appendChild(option);
    }
}

// Complete the selected task
function completeTask() 
{
    let select = document.getElementById("taskList");
    if (select.selectedIndex == -1) 
		{
        alert("Please select a task to complete.");
        return;
    	}

    let task = tasks[select.selectedIndex];
    alert(`Task completed: ${task}`);
}

// Delete the selected task
function deleteTask() 
{
    let select = document.getElementById("taskList");
    if (select.selectedIndex == -1) 
		{
        alert("Please select a task to delete.");
        return;
    	}

    tasks.splice(select.selectedIndex, 1); // remove from array
    updateTaskList();
}

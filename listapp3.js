window.addEventListener("load", addFileListener);

function addFileListener()
{
    document.getElementById("btnCreateFile").addEventListener("click", createFile);
}

function createFile()
{
    if (tasks.length == 0) // Check if there are any tasks to save
    {
        alert("No tasks to save.");
        return;
    }

    let content = "Weekly To-Do List\n\n"; // Text content for the file

    for (let i = 0; i < tasks.length; i++) // Add each task to the file
    {
        content += (i + 1) + ". " + tasks[i].name +
                   " - " + tasks[i].day + "\n";
    }

    let blob = new Blob([content], { type: "text/plain" });// Create a text file using Blob
    let url = URL.createObjectURL(blob); // Create a temporary URL for the file

    let a = document.createElement("a");
    a.href = url;
    a.download = "Weekly_Tasks.txt";

    document.body.appendChild(a); // Trigger the download
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

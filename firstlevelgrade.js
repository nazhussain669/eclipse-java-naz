window.addEventListener("load", addListener);

function addListener() 
{
    document.getElementById("drdchooselevel").addEventListener("change", changeGrade);
    hideLabel(); // Hide the message label when the page first loads
}

function hideLabel() // This function hides the label and clears its text
{
    const labelBox = document.getElementById("gradelabel"); // Get the label element
    labelBox.style.visibility = "hidden"; // Make it invisible
    labelBox.textContent = ""; // Clear any existing message
}

function changeGrade() 
{
    const selectedGrade = document.getElementById("drdchooselevel").value; // Get the selected option's value
    const labelBox = document.getElementById("gradelabel"); // Get the label box where the message will show

    if (selectedGrade) 
	{
        const message = document.getElementById(selectedGrade).textContent; // Find the hidden <div> that matches the selected grade and get its text
        labelBox.textContent = message; // Display that message inside the label
        labelBox.style.visibility = "visible"; // Make the label visible
    } 
	else 
	{
        hideLabel(); // Hide and clear the label again
    }
}
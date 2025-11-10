window.addEventListener("load", addListener);

function addListener() {
    document.getElementById("drdchooselevel").addEventListener("change", ChangeGrade);

    // Hide all messages when page loads
    document.getElementById("9th").style.visibility = "hidden";
    document.getElementById("10th").style.visibility = "hidden";
    document.getElementById("11th").style.visibility = "hidden";
    document.getElementById("12th").style.visibility = "hidden";
}

function ChangeGrade() 
{
    // Get selected grade (e.g., "9th", "10th", etc.)
    let selectedGrade = document.getElementById("drdchooselevel").value;

    // Hide all first
    document.getElementById("9th").style.visibility = "hidden";
    document.getElementById("10th").style.visibility = "hidden";
    document.getElementById("11th").style.visibility = "hidden";
    document.getElementById("12th").style.visibility = "hidden";

    // Show the selected one (same idea as your div.js)
    whichgrade = document.getElementById(selectedGrade);
    whichgrade.style.visibility = "visible";
}
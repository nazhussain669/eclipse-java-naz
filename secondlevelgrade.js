window.addEventListener("load", addListener);

function addListener() {
    document.getElementById("drdchooselevel").addEventListener("change", ChangeGrade);

    // Hide all messages initially
    hideAllGrades();
}

function hideAllGrades() {
    document.getElementById("9th").style.display = "none";
    document.getElementById("10th").style.display = "none";
    document.getElementById("11th").style.display = "none";
    document.getElementById("12th").style.display = "none";
}

function ChangeGrade() 
{
    let selectedGrade = document.getElementById("drdchooselevel").value;

    // Hide all grade messages
    hideAllGrades();

    // Show only the selected grade message
    document.getElementById(selectedGrade).style.display = "block";
}
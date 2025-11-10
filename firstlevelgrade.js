window.addEventListener("load", addListener);

function addListener() 
{
    document.getElementById("drdchooselevel").addEventListener("change", ChangeGrade);
	HideMsg();
}

function HideMsg() 
{
	// Hide all messages when page loads
	Div9 = document.getElementById("9th").style.visibility = "hidden";
	Div10 = document.getElementById("10th").style.visibility = "hidden";
	Div11 = document.getElementById("11th").style.visibility = "hidden";
	Div12 = document.getElementById("12th").style.visibility = "hidden";
}

function ChangeGrade() 
{
    // Get selected grade (e.g., "9th", "10th", etc.)
    let selectedGrade = document.getElementById("drdchooselevel").value;

    // Hide all first
    HideMsg();

    // Show the selected one
    whichgrade = document.getElementById(selectedGrade);
    whichgrade.style.visibility = "visible";
}

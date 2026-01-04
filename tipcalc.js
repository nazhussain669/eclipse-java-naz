window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("btncalculate").addEventListener("click", calculateTip);
}

function calculateTip()
{
    let totalInput = document.getElementById("txttotal");
    let tipInput = document.getElementById("txttip");
    let result = document.getElementById("result");

	// Convert user input values to numbers
    let total = parseFloat(totalInput.value);
    let tipPercent = parseFloat(tipInput.value);

    // check total price input
    if (isNaN(total) || total <= 0)
    {
        alert("Please enter a valid total price.");
        totalInput.focus();
        return;
    }

	// check tip percentage input
    if (isNaN(tipPercent) || tipPercent < 0)
    {
        alert("Please enter a valid tip percentage.");
        tipInput.focus();
        return;
    }

	// Calculate tip amount
    let tipAmount = total * (tipPercent / 100);
	// Calculate final total including tip
    let finalTotal = total + tipAmount;

	// Display the calculated tip and total on the page
    result.textContent =
        "Tip: $" + tipAmount.toFixed(2) +
        " | Total with Tip: $" + finalTotal.toFixed(2);
}
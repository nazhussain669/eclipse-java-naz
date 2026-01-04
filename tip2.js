window.addEventListener("load", addListeners);

function addListeners()
{
    document.getElementById("btncalculate").addEventListener("click", calculateTip);
    document.getElementById("btncreatefile").addEventListener("click", createFile);
}

let lastResult = ""; // store last calculation for file creation

function calculateTip()
{
    let totalInput = document.getElementById("txttotal");
    let tipInput = document.getElementById("txttip");
    let result = document.getElementById("result");
    let createBtn = document.getElementById("btncreatefile");

    let total = parseFloat(totalInput.value);
    let tipPercent = parseFloat(tipInput.value);

    if (isNaN(total) || total <= 0)
    {
        alert("Please enter a valid total price.");
        totalInput.focus();
        return;
    }

    if (isNaN(tipPercent) || tipPercent < 0)
    {
        alert("Please enter a valid tip percentage.");
        tipInput.focus();
        return;
    }

    let tipAmount = total * (tipPercent / 100);
    let finalTotal = total + tipAmount;

    // Display result
    result.textContent = "Tip: $" + tipAmount.toFixed(2) +
                         " | Total with Tip: $" + finalTotal.toFixed(2);

    // Store result for file creation
    lastResult = "Total Price: $" + total.toFixed(2) + "\n" +
                 "Tip Percentage: " + tipPercent.toFixed(2) + "%\n" +
                 "Tip Amount: $" + tipAmount.toFixed(2) + "\n" +
                 "Total with Tip: $" + finalTotal.toFixed(2);

    // Enable the Create File button
    createBtn.disabled = false;
}

function createFile()
{
    if (lastResult.length == 0)
    {
        alert("No calculation to save. Please calculate the tip first.");
        return;
    }

    let filename = "Tip_Calculation.txt";
    let blob = new Blob([lastResult], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}
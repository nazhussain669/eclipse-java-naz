window.addEventListener("load", addListener);

allitems = [];
cartlength = 0;

//Gets the id of the button that is clicked on to do a specific function
function addListener()
{
	document.getElementById("btnadditem").addEventListener("click",addItemToCart);
	document.getElementById("btnclearcart").addEventListener("click",ClearCart);
	document.getElementById("btncheckout").addEventListener("click",CheckOutCart);
}

function addItemToCart()
{
	qtyInput = document.getElementById("txtentword");
	itemDropdown = document.getElementById("drdchooseword");
	optionDropdown = document.getElementById("drdspecialoption");
	
	quantity = parseInt(qtyInput.value);
	itemValue = itemDropdown.value;
	optionValue = optionDropdown.value;
	
	//if the user enters no quantity, they will be alerted
	if (quantity <= 0)
	{
		alert("Please enter a valid quantity.");
		qtyInput.focus(); //places the cursor back to the input so user enters a valid quantity
		return;
	}
	
	let price = 0;
	let displayName = "";

	switch (itemValue)
	{
		case "makeupbrushes":
			price = 15.00;
			displayName = "Makeup Brushes";
			break;
		case "lipgloss":
			price = 8.00;
			displayName = "Lip Gloss";
			break;
		case "blush":
			price = 12.00;
			displayName = "Blush";
			break;
		case "perfumes":
			price = 25.00;
			displayName = "Perfumes";
			break;
		default:
			alert("Invalid item selected.");
			return;
	}
	
	
}

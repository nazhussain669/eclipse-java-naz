window.addEventListener("load", addListener);

cart = [];
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
	qtyInput = document.getElementById("txtentquant");
	itemDropdown = document.getElementById("drdwhichitem");
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

	//gets the value of whichever item the user chooses
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
	
	let total = price * quantity;

	// Apply special option
	switch (optionValue) 
	{
		case "member":
			total *= 0.9; // 10% discount
			break;
		case "giftwrap":
			total += 5.00; // gift wrap fee
			break;
		// no change for if user selects no special option
	}
	
	// Store item in cart
	cart.push
	({
	   name: displayName,
	   quantity: quantity,
	   price: price,
	   option: optionValue,
	   total: total
	});
	  
	// Clear quantity input 
	qtyInput.value = "";
	qtyInput.focus();
	
	updateCartDisplay();
}

function updateCartDisplay() 
{
  list = document.getElementById("cmbitemlist");
  list.innerHTML = ""; // clear previous cart

  let grandTotal = 0;

  if (cart.length == 0)
  {
	list.innerHTML = "<li>Your Cart is empty</li>"
	return;
  }
}
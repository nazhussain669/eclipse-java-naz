window.addEventListener("load", addListener);

let cart = [];
taxrate = 0.045; //4.5% tax

//Gets the id of the button that is clicked on to do a specific function
function addListener()
{
	document.getElementById("btnadditem").addEventListener("click",addItemToCart);
	document.getElementById("btnclearcart").addEventListener("click",ClearCart);
	document.getElementById("btncheckout").addEventListener("click",CheckOutCart);
	document.getElementById("btnremoveitem").addEventListener("click", removeLastItem);
}

// Adds a selected item with quantity and option to the cart
function addItemToCart()
{
	let qtyInput = document.getElementById("txthowmuch");
	let itemDropdown = document.getElementById("drdchooseitem");
	let optionDropdown = document.getElementById("drdspecialoption");
	
	let quantity = parseInt(qtyInput.value);
	let itemValue = itemDropdown.value;
	let optionValue = optionDropdown.value;
	
	//if the user enters no quantity, they will be alerted
	if (quantity <= 0)
	{
		alert("Please enter a valid quantity.");
		qtyInput.focus(); //places the cursor back to the input so user enters a valid quantity
		return;
	}
	
	let price = 0;
	let displayName = "";

	// Assign price and name based on selected item
	switch (itemValue)
	{
		case "brushes":
			price = 26.99;
			displayName = "Makeup Brushes (5pc)";
			break;
		case "lipgloss":
			price = 48.99;
			displayName = "Summer Friday Lip Gloss (4pc)";
			break;
		case "blush":
			price = 35.99;
			displayName = "Makeup Blush Palette";
			break;
		case "perfume":
			price = 57.99;
			displayName = "Sol de Janeiro Perfume (4 included)";
			break;
		default:
			alert("Invalid item selected.");
			return;
	}
	
	let total = price * quantity;

	// Apply discount or gift wrap if selected
	switch (optionValue) 
	{
		case "member":
			total *= 0.9; // 10% discount off
			break;
		case "giftwrap":
			total += 5.00; // $5 gift wrap fee
			break;
		// no change for if user selects none
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

// updates the cart display on screen
function updateCartDisplay() 
{
  let list = document.getElementById("cmbitemlist");
  list.innerHTML = ""; // clear previous cart

  let subtotal = 0;

  // if cart is empty
  if (cart.length == 0)
  {
	list.innerHTML = "<li>Your Cart is empty</li>"
	return;
  }
  
  // loop through cart items and adds them to the list
  for (i = 0; i < cart.length; i++)
  {
	let item = cart[i];
	subtotal += item.total; // += adds on the value to the same variable without creating a new one
			
	let li = document.createElement("li");
	li.textContent = item.name + " x" + item.quantity + " - $" + item.total.toFixed(2) + 
	" [" + Option(item.option) + "]"; // toFixed sets the price to decimal places
	list.appendChild(li);
  }
  
  // calculates tax and total
  let tax = subtotal * taxrate;
  let grandTotal = subtotal + tax;

  // display subtotal, tax and total
  let subtotalLi = document.createElement("li");
  subtotalLi.textContent = ("Subtotal: " + subtotal.toFixed(2));
  list.appendChild(subtotalLi);
  
  let taxLi = document.createElement("li");
  taxLi.textContent = "Tax (4.5%): $" + tax.toFixed(2);
  list.appendChild(taxLi);
  
  let totalLi = document.createElement("li");
  totalLi.textContent = "Total: $" + grandTotal.toFixed(2);
  list.appendChild(totalLi);
}

// return label text for special option
function Option(opt)
{
	switch(opt)
	{
		case "member": 
			return "Member Discount";
		case "giftwrap": 
			return "Gift Wrap";
		default: 
			return "No Option";
	}
}

// clears the cart and reset the cursor to input field
function ClearCart()
{
	cart = [];
	updateCartDisplay();
	document.getElementById("txthowmuch").value = "";
	document.getElementById("txthowmuch").focus();
}

// checkout and display receipt as an alert
function CheckOutCart()
{
	if (cart.length == 0)
	{
		alert("Cart is empty. Add items before checkout.");
		return;
	}
	
	let summary = " Receipt:\n";
	let subtotal = 0;
	
	// add each item to the summary
	for (let item of cart)
	{
		summary += (item.name + " x" + item.quantity + " - $ " + item.total.toFixed(2) + "\n");
		subtotal += item.total;
	}
	
	let tax = subtotal * taxrate;
	let grandTotal = subtotal + tax;
	
	// append totals
	summary += ("\nSubtotal: " + "$" + subtotal.toFixed(2));
	summary += ("\nTax: " + "$" + tax.toFixed(2));
	summary += ("\nTotal: " + "$" + grandTotal.toFixed(2));
	
	// show alert receipt
	alert(summary);
}

// remove the last item added to cart
function removeLastItem()
{
	if (cart.length == 0)
	{
		alert("Cart is already empty.");
		return;
	}
	
	cart.pop(); // remove last item
	updateCartDisplay();
}

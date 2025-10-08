window.addEventListener("load", addListener);

allitems = [];
cartlength = 0;

function addListener()
{
	document.getElementById("btnbrush").addEventListener("click",Brush);
	document.getElementById("btnlipgloss").addEventListener("click",LipGloss);
	document.getElementById("btnblush").addEventListener("click",Blush);
	document.getElementById("btnperfume").addEventListener("click",Perfume);
	document.getElementById("btnclearcart").addEventListener("click",ClearCart);
}

function ShowItems()
{
	itemList = document.getElementById("cmbitemlist");
	drplist = document.getElementById("drdchooseitem");
	
	itemList.innerHTML = "";
	drplist.innerHTML = "";
	
	cartlength = allitems.length;
	
	for(i=0; i<=cartlength-1; i++)
		{
			li = document.createElement("li");
			drp = document.createElement("option");
			
			li.textContent = allwords[i];
			drp.text = allwords[i]
			
			wordList.appendChild(li);
			drplist.appendChild(drp);
		}
}



window.addEventListener("load", addListeners);

let cart = [];

function addListeners() {
  document.getElementById("btnaddword").addEventListener("click", addItemToCart);
  document.getElementById("btnclearword").addEventListener("click", clearCart);
  document.getElementById("btncheckout").addEventListener("click", checkoutCart);
}

function addItemToCart() {
  const qtyInput = document.getElementById("txtentword");
  const itemDropdown = document.getElementById("drdchooseword");
  const optionDropdown = document.getElementById("drdspecialoption");

  const quantity = parseInt(qtyInput.value);
  const itemValue = itemDropdown.value;
  const optionValue = optionDropdown.value;

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    qtyInput.focus();
    return;
  }

  let price = 0;
  let displayName = "";

  switch (itemValue) {
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
  switch (optionValue) {
    case "member":
      total *= 0.9; // 10% discount
      break;
    case "giftwrap":
      total += 5.00; // flat gift wrap fee
      break;
    // no change for "none"
  }

  // Store item in cart
  cart.push({
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

function updateCartDisplay() {
  const list = document.getElementById("cmbwordlist");
  list.innerHTML = ""; // clear previous cart

  let grandTotal = 0;

  if (cart.length === 0) {
    list.innerHTML = "<li>🛒 Cart is empty</li>";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    grandTotal += item.total;

    const li = document.createElement("li");
    li.textContent = `${item.name} (x${item.quantity}) - $${item.total.toFixed(2)} [${formatOption(item.option)}]`;
    list.appendChild(li);
  }

  const totalLi = document.createElement("li");
  totalLi.style.fontWeight = "bold";
  totalLi.style.marginTop = "10px";
  totalLi.textContent = `TOTAL: $${grandTotal.toFixed(2)}`;
  list.appendChild(totalLi);
}

function formatOption(opt) {
  switch (opt) {
    case "member": return "Member Discount";
    case "giftwrap": return "Gift Wrap";
    default: return "No Option";
  }
}

function clearCart() {
  cart = [];
  updateCartDisplay();
  document.getElementById("txtentword").value = "";
  document.getElementById("txtentword").focus();
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Cart is empty. Add items before checkout.");
    return;
  }

  let summary = "🧾 Receipt:\n";
  let total = 0;

  for (let item of cart) {
    summary += `${item.name} x${item.quantity} - $${item.total.toFixed(2)} [${formatOption(item.option)}]\n`;
    total += item.total;
  }

  summary += `\nTOTAL: $${total.toFixed(2)}`;
  alert(summary);
}

window.addEventListener("load", addListener);

let cart = [];

function addListener() {
  document.getElementById("btnaddword").addEventListener("click", addItemToCart);
  document.getElementById("btnclearword").addEventListener("click", clearCart);
}

function addItemToCart() {
  let quantityInput = document.getElementById("txtentword");
  let itemSelect = document.getElementById("drdchooseword");

  let itemName = itemSelect.value;
  let quantity = parseInt(quantityInput.value);

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    quantityInput.focus();
    return;
  }

  let itemPrice = 0;
  switch (itemName) {
    case "apple":
      itemPrice = 1.0;
      break;
    case "bread":
      itemPrice = 2.5;
      break;
    case "milk":
      itemPrice = 3.0;
      break;
    default:
      alert("Invalid item selected.");
      return;
  }

  let total = itemPrice * quantity;

  // Apply discounts or rules
  if (quantity >= 5) {
    total *= 0.9; // 10% discount for 5 or more
  }

  cart.push({
    name: itemName,
    quantity: quantity,
    price: itemPrice,
    total: total
  });

  quantityInput.value = "";
  quantityInput.focus();
  showCart();
}

function showCart() {
  let list = document.getElementById("cmbwordlist");
  list.innerHTML = "<li>🛒 Your Cart</li>";

  let grandTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    grandTotal += item.total;

    let li = document.createElement("li");
    li.textContent = `${capitalize(item.name)} - Qty: ${item.quantity} - $${item.total.toFixed(2)}`;
    list.appendChild(li);
  }

  let totalLi = document.createElement("li");
  totalLi.style.fontWeight = "bold";
  totalLi.textContent = `Total: $${grandTotal.toFixed(2)}`;
  list.appendChild(totalLi);
}

function clearCart() {
  cart = [];
  showCart();
  document.getElementById("txtentword").value = "";
  document.getElementById("txtentword").focus();
}

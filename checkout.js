window.addEventListener("load", addListener);

allitems = [];
cartlength = 0;

function addListener()
{
	document.getElementById("btnadditem").addEventListener("click",addItemToCart);
	document.getElementById("btnclearcart").addEventListener("click",ClearCart);
	document.getElementById("btncheckout").addEventListener("click",CheckOutCart);
}


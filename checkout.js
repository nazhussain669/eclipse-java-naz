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

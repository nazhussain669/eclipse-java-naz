window.addEventListener("load",addListener);

allwords = [];
wordlength = 0;

function addListener()
{
	document.getElementById("btnaddword").addEventListener("click",AddWord);
	document.getElementById("btnclearword").addEventListener("click",ClearWord);
}

function ShowWords()
{
	wordList = document.getElementById("cmbwordlist");
	wordList.innerHTML = "";
	wordlength = allwords.length;
	
	for(i=0; i<wordlength-1; i++)
		{
			li = document.createElement("li");
			li.textContent = allwords[i];
			wordList.appendChild(li);
		}
}

function AddWord()
{
	entwordelement = document.getElementById("txtentword");
	entword = entwordelement.value;
	
	if(entword !=="")
		{
			allwords.push(entword);
			entwordelement.value = "";
			entwordelement.focus();
			ShowWords();
		}
		else{
			alert("Enter a word!");
			document.getElementById("txtentword").focus();
		}
}

function ClearWord()
{
	for(i=0; i<=wordlength-1; i++)
		{
			allwords.pop();
		}
		ShowWords();
		document.getElementById("txtentword").value = "";
		document.getElementById("txtentword").focus();
}
window.addEventListener("load",addListener)
function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",FillTable);
}

function FillTable()
{
	studname = document.getElementById("txtname").value;
	studage = document.getElementById("txtage").value;
	studgrade = document.getElementById("txtgrade").value;
	
	if (studname == "" || studage == "" || studgrade == "")
		{
			alert("All fields need to be filled in!");
		}
		else
		{
			const tblinputbody = document.querySelector("#tblstudentTable tbody");
			const tblrowinfo = document.createElement("tr");
			
			tblrowinfo.innerHTML = `
				<td>${studname}</td>
				<td>${studage}</td>
				<td>${studgrade}</td>
				`;
				
			tblinputbody.appendChild(tblrowinfo);
			
			document.getElementById("txtname").value = "";
			document.getElementById("txtage").value = "";
			document.getElementById("txtgrade").value = "";
			document.getElementById("txtname").focus();
		}
}
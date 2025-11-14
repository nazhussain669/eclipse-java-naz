window.addEventListener("load",addListener);

let dataArray = [];

function addListener()
{
	document.getElementById("btnAdd").addEventListener("click",AddInformation);
	document.getElementById("btnClear").addEventListener("click",ClearInformation);
}

function AddInformation()
{
	let firstname = document.getElementById("txtfname").value;
	let lastname = document.getElementById("txtlname").value;
	let age = document.getElementById("txtage").value;
	let city = document.getElementById("txtcity").value;
	let email = document.getElementById("txtemail").value;
	
	let allinfo = {firstname,lastname,age,city,email};
	dataArray.push(allinfo);
	StoreInformation();
	ClearInformation();
}

function StoreInformation()
{
	let datatable = document.getElementById("tbldatatable");
	
	datatable.innerHTML = `
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age</th>
				<th>City</th>
				<th>Email</th>
			</tr>`;
		
	for (let i=0; i<dataArray.length; i++)
	{
		let row = `
			<tr>
				<td>${dataArray[i].firstname}</td>
				<td>${dataArray[i].lastname}</td>
				<td>${dataArray[i].age}</td>
				<td>${dataArray[i].city}</td>
				<td>${dataArray[i].email}</td>
			</tr>`;
		datatable.innerHTML += row;
	}
}

function ClearInformation()
{
	document.getElementById("txtfname").value = "";
	document.getElementById("txtlname").value = "";
	document.getElementById("txtage").value = "";
	document.getElementById("txtcity").value = "";
	document.getElementById("txtemail").value = "";
	document.getElementById("txtfname").focus;
}
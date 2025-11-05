window.addEventListener("load", addListener);

function addListener()
{
	const tblBody = document.getElementById('tblstudentinfo');
	
	const data = [
		{ name: 'Hill', age: 30, city: 'New York'},
		{ name: 'Crest', age: 24, city: 'London'},
		{ name: 'High School', age: 35, city: 'Paris'}
	];
	
	data.forEach(rowData => {
		const row = tblBody.insertRow();
		
		const nameCell = row.insertCell();
		nameCell.textContent = rowData.name;
		
		const ageCell = row.insertCell();
		ageCell.textContent = rowData.age;
		
		const cityCell = row.insertCell();
		cityCell.textContent = rowData.city;
	});
}
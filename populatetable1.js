window.addEventListener("load", addListener);

function addListener()
{
	const tblBody = document.getElementById('tblstudentinfo');
	
	const students = [
		{ name: 'Hill', age: 30, city: 'New York'},
		{ name: 'Crest', age: 24, city: 'London'},
		{ name: 'High School', age: 35, city: 'Paris'},
		{ name: 'naz', age: 98, city: 'sydney'},
	];
	
	// select the element with the name tbody element
	const tbldata = document.querySelector("tblstudentinfo tbody");
	
	// loop through data and create table rows
	
	students.forEach(student => {
		const row = document.createElement("tr");
		
		Object.values(student).forEach(value =>
			{
				const cell = document.createElement("td");
				cell.textContent = value;
				row.appendChild(cell);
			});
			
			tblstudentinfo.appendChild(row);
		});
}
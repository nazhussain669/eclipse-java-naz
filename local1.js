window.addEventListener("load", start);

let storedData = []; // array to store all entries

function start()
{
    document.getElementById("btnadd").addEventListener("click", addInfo);
    document.getElementById("btnsubmit").addEventListener("click", Submit);
}

function addInfo()
{
    // creates an object for one student
    let info = 
	{
        firstname: document.getElementById("txtfirstname").value,
        lastname: document.getElementById("txtlastname").value,
        id: document.getElementById("txtid").value,
        school: document.getElementById("txtschool").value,
        counselor: document.getElementById("txtcounselor").value,
        grade: document.getElementById("txtgrade").value
    };

    // adds to array
    storedData.push(info);

    // clears inputs
    document.getElementById("txtfirstname").value = "";
    document.getElementById("txtlastname").value = "";
    document.getElementById("txtid").value = "";
    document.getElementById("txtschool").value = "";
    document.getElementById("txtcounselor").value = "";
    document.getElementById("txtgrade").value = "";
}

function Submit()
{
    // saves entire array
    localStorage.setItem("studentinfo", JSON.stringify(storedData));
	//turns a javascript object into a string. To send or store data into localStorage, it needs to be a string not as an object.

    // goes to table page
    window.location.href = "local2.html";
}
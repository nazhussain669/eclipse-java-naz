window.addEventListener("load", addListeners);

function addListeners() {
    document.getElementById("btnEnter").addEventListener("click", displayInfo);
    document.getElementById("btnClear").addEventListener("click", hideInfo);
}

function displayInfo() {
    let name = document.getElementById("txtname").value;
    let age = document.getElementById("txtage").value;
    let grade = document.getElementById("txtgrade").value;

    // show info inside the div labels
    document.getElementById("displayname").textContent = "Name: " + name;
    document.getElementById("displayage").textContent = "Age: " + age;
    document.getElementById("displaygrade").textContent = "Grade: " + grade;

    // show the info div
    document.getElementById("infobox").style.visibility = "visible";
}

function hideInfo() {
    // hide the info box
    document.getElementById("infobox").style.visibility = "hidden";

    // clear the textboxes
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtgrade").value = "";

    // put cursor back in first box
    document.getElementById("txtname").focus();
}
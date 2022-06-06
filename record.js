// fill in javascript code here

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let employeeID = Number(document.querySelector("#employeeID").value);
    let department = document.querySelector("#department").value;

    let exp = Number(document.querySelector("#exp").value);
    let email = document.querySelector("#email").value;
    let mbl = Number(document.querySelector("#mbl").value);
   


    // console.log(name, employeeID,department, exp, email, mbl);
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = employeeID;
    let td3 = document.createElement("td");
    td3.innerText = department;

    let td4 = document.createElement("td");
    td4.innerText = exp;

    let td5 = document.createElement("td");
    td5.innerText = email;
    let td6 = document.createElement("td");
    td6.innerText = mbl;
    let td7 = document.createElement("td");
    if (exp > 5) {
        td7.innerText = "Senior";
    }
    else if (exp > 2 && exp < 5) {
        td7.innerText = "Junior";

    }
    else if (exp <= 1) {
        td7.innerText = "Fresher";

    }








    let td8 = document.createElement("td");
    td8.innerText = "DELETE";
    td8.style.backgroundColor = "red";
    td8.style.cursor = "pointer";
    td8.style.padding = "10px";
    td8.style.borderRadius = "10px";
    td8.style.color = "white";
    td8.addEventListener("click", deleteRow)

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);






}
function deleteRow(event) {
    event.target.parentNode.remove();
}
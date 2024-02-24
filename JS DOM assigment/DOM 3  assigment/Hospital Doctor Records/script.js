// fill in javascript code here
// fill in javascript code here
let MyForm = document.querySelector("form");
let Name = document.getElementById("name");
let EmployeeID = document.getElementById("docID");
let Department = document.getElementById("dept");
let Exp = document.getElementById("exp");
let Email = document.getElementById("email");
let Mob = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let MainData = [];
MyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let Data = {};
  Data.name = Name.value;
  Data.employeeID = EmployeeID.value;
  Data.department = Department.value;
  Data.exp = Exp.value;
  Data.email = Email.value;
  Data.mob = Mob.value;
  MainData.push(Data);
  tbody.innerHTML = null;
  MainData.map((ele) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let role = document.createElement("td");
    let td7 = document.createElement("td");

    if (ele.exp > 5) {
      role.innerText = "Senior";
    } else if (ele.exp >= 2 && ele.exp <= 5) {
      role.innerText = "Junior";
    } else if (ele.exp <= 1) {
      role.innerText = "Trainee";
    }
    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mob;
    td7.innerText = "Delete";
    td7.style.cursor = "pointer";
    td7.style.backgroundColor = "red";
    td7.addEventListener("click", () => {
      row.innerText = "";
    });
    row.append(td1, td2, td3, td4, td5, td6, role, td7);
    tbody.append(row);
  });
});
alert();
console.log("bala");
function onFormSubmit(){
	var formData = readFormData();
	insertNewData = formData();


}

function readFormData(){
    var formData ={}
    formData = ["FullName"] = document.getElementById("fullname").value();
    formData = ["Emp ID"] = document.getElementById("empcode").value();
    formData = ["Salary"] = document.getElementById("salary").value();
    formData = ["City"] = document.getElementById("city").value();
    return formData;
}

function insertNewData(data){
	var table = document.getElementById("employeelist").getElementsByTagName("tbody")[0];
	var newRow = table.InsertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullname;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.empcode;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.salary;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.city;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a>Edit</a>
						<a>Delete</a>`;
}
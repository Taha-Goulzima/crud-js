let selectedRow = null;

function addRecord() {
    const form = document.getElementById('crudForm');
    const name = form.name.value;
    const age = form.age.value;

    if (name === "" || age === "") {
        alert("Please fill all fields");
        return;
    }

    if (selectedRow == null) {
        const table = document.getElementById("crudTable").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = age;
        newRow.insertCell(2).innerHTML = `<button onclick="editRecord(this)">Edit</button> 
                                          <button onclick="deleteRecord(this)">Delete</button>`;
    } else {
        selectedRow.cells[0].innerHTML = name;
        selectedRow.cells[1].innerHTML = age;
        selectedRow = null;
    }

    form.name.value = "";
    form.age.value = "";
}

function editRecord(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('age').value = selectedRow.cells[1].innerHTML;
}

function updateRecord() {
    const form = document.getElementById('crudForm');
    if (selectedRow != null) {
        selectedRow.cells[0].innerHTML = form.name.value;
        selectedRow.cells[1].innerHTML = form.age.value;
        selectedRow = null;
    }
    form.name.value = "";
    form.age.value = "";
}

function deleteRecord(td) {
    if (confirm('Are you sure to delete this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById("crudTable").deleteRow(row.rowIndex);
    }
}

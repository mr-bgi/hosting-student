

function getAll() {
    let row = '';
    let i = 1;
    fetch('http://localhost:8080/api/get', {
        method: 'GET'
    }).then(res => res.json())
        .then(json => {
            const tbody = document.querySelector('tbody');
            json.data.forEach(Element => {
                row += `
             <tr>
                <td class="lh-lg">${i++}</td>
                <td  class="lh-lg">${Element.name}</td>
            <td  class="lh-lg">${Element.email}</td>
            <td  class="lh-lg">${Element.address}</td>
            <td  class="lh-lg">${Element.phone}</td>
            <td >
               
                <button class="btn btn-warning" data-id="${Element.id}" onclick="editStu(this)" data-bs-toggle="modal" data-bs-target="#editStudentModal">
                <i class="bi bi-pencil text-white"></i>
                </button>
                <button class="btn btn-danger" data-id="${Element.id}" onclick="deleteStu(this)" data-bs-toggle="modal" data-bs-target="#deleteStudentModal">
                <i class="bi bi-trash"></i>
                </button>
            </td>
                </tr>
                    `;
            });
            document.querySelector('tbody').innerHTML = row;

        })
}
getAll();

document.getElementById('createFrm').addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let phone = document.querySelector('#phone').value;

    console.log(name);
    console.log(email);
    console.log(address);
    console.log(phone);

    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("address", address);
    params.append("phone", phone);
    fetch('http://localhost:8080/api/create', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString(),

    }).then(res => res.json())
        .then(json => {

            getAll()
            document.querySelector("[data-bs-dismiss='modal']").click();
            document.querySelector("form").reset();
            alert('successfully');
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to add student!");
        });


})

function editStu(button) {
    let id = button.dataset.id;

    let parentRow = button.parentElement.parentElement;
    let name = parentRow.children[1].innerText;
    let email = parentRow.children[2].innerText;
    let address = parentRow.children[3].innerText;
    let phone = parentRow.children[4].innerText;

    document.querySelector('#editId').value = id;
    document.querySelector('#editName').value = name;
    document.querySelector('#editEmail').value = email;
    document.querySelector('#editAddress').value = address;
    document.querySelector('#editPhone').value = phone;
}

function updateStudent() {
    let id = document.querySelector('#editId').value;
    let name = document.querySelector('#editName').value;
    let email = document.querySelector('#editEmail').value;
    let address = document.querySelector('#editAddress').value;
    let phone = document.querySelector('#editPhone').value;

    let params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('address', address);
    params.append('phone', phone);

    fetch(`http://localhost:8080/api/edit/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString(),
    })
        .then(res => res.json())
        .then(json => {
            getAll();
            document.querySelector("[data-bs-dismiss='modal']").click();
            document.querySelector("form").reset();
            alert("Student updated successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to update student!");
        });
}

document.querySelector('#editFrm').addEventListener('submit', (event) => {
    event.preventDefault();
    updateStudent();
})
function deleteStu(row) {
    let id = row.dataset.id;
    console.log(id);
    document.querySelector('#deleteId').value = id;
}
document.querySelector('#delete').addEventListener('click', () => {
   
    const id = document.querySelector('#deleteId').value;
    console.log(id);
    fetch(`http://localhost:8080/api/delete/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(json => {
            alert("Student Deleted successfully!");
            getAll();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to Delete student!");
        });
});

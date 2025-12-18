const data = [];

window.addEventListener("DOMContentLoaded", () => {
    const savedItems = JSON.parse(localStorage.getItem("invoices")) || [];
    savedItems.forEach(item => loadFromLocalStorage(item))
    
})


function handleAddItem() {
    console.log("add item clicked");

    const item = document.getElementById("item");
    const quantity = document.getElementById("quantity");
    const price = document.getElementById("price");
    const table = document.getElementById("table")


    if (quantity < 1 || price < 1) {
        alert("Quantity or Price should be greater than 0")
    }

    const tr = document.createElement("tr");
    tr.setAttribute("id", "tr")
    const td1 = document.createElement("td");
    td1.textContent = item.value;
    const td2 = document.createElement("td");
    td2.textContent = quantity.value;
    const td3 = document.createElement("td");
    td3.textContent = price.value;
    const total = document.createElement("td");
    total.textContent = quantity.value * price.value;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"


    editButton.classList.add("editbtn");
    deleteButton.classList.add("delbtn");

    const items = {
        id: crypto.randomUUID(),
        item: item.value,
        quantity: quantity.value,
        price: price.value,
        total: quantity.value * price.value
    }


    editButton.addEventListener("click", handleEdit(items.id));
    deleteButton.addEventListener("click", handleDelete(items.id))

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(total);
    tr.appendChild(editButton);
    tr.appendChild(deleteButton);

    table.appendChild(tr)




    console.log(items)

    data.push(items);
    console.log(data)


    localStorage.setItem("invoices", JSON.stringify(data))// saving in local storage

    item.value = "";
    price.value = "";
    quantity.value = "";
}

function handleEdit(id) {
    console.log("edit clicked",)
}

function handleDelete(id) {
    console.log("delete clicked",)
    const items=local
}

function loadFromLocalStorage(item) {
    data.push(item);

    const table = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.setAttribute("id", "tr")
    const td1 = document.createElement("td");
    td1.textContent = item.item;
    const td2 = document.createElement("td");
    td2.textContent = item.quantity;
    const td3 = document.createElement("td");
    td3.textContent = item.price;
    const total = document.createElement("td");
    total.textContent = item.quantity * item.price;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"


    editButton.classList.add("editbtn");
    deleteButton.classList.add("delbtn");

    editButton.addEventListener("click", handleEdit(item.id));
    deleteButton.addEventListener("click", handleDelete(item.id))

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(total);
    tr.appendChild(editButton);
    tr.appendChild(deleteButton);

    table.appendChild(tr)

}
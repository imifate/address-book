//Book Constructor
function Address(firstName, surname, email, phone) {
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//UI Constructor

function UI() { }


//add Book To List
UI.prototype.addAddressToList = function (address) {
    const list = document.getElementById('address-list');

    //create tr element 
    const row = document.createElement('tr');

    // insert cols
    row.innerHTML = `
    <td>${address.firstName}</td>
    <td>${address.surname}</td>
    <td>${address.email}</td>
    <td>${address.phone}</td>
    <td><a href ="#" class = "delete">X<a></td>
    `;

    list.appendChild(row);

}

//clear field 
UI.prototype.clearFields = function () {
    document.getElementById('firstName').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}


//Event Listeners

document.getElementById('address-form').addEventListener('submit', function (e) {
    // Get values from form
    const firstName = document.getElementById('firstName').value,
         surname = document.getElementById('surname').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('tel').value;
    
    // Instantiate Book    
    const book = new Address(firstName, surname, email, phone);

    // Instantiate UI
    const ui = new UI();

    //Add book to list
    ui.addAddressToList(Address);

    
    e.preventDefault();
});




// const addBook = document.getElementById('book-form');

// addBook.addEventListener('submit', getBook);

// function getBook(e) {

//     // Get values from form
//     const title = document.getElementById('title').value,
//           author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value;
    
//     // Instantiate Book    
//     const book = new Book(title, author, isbn);

//     // Instantiate UI
//     const ui = new UI();

//     //Add book to list
//     ui.addBookToList(Book);


//     e.preventDefault();
// }
const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function displayBooks() {
  const tableBody = document.querySelector("table tbody");

  tableBody.innerHTML = "";

  myLibrary.forEach((book) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.isRead ? "Yes" : "No";
    row.appendChild(readCell);

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    tableBody.appendChild(row);
  });
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

addBookToLibrary("Art of Zowei", "Zowei", "82", true);
addBookToLibrary("Library Companion", "Monseu", "16", true);
addBookToLibrary("Solution to Living", "Almeiser", "840", false);
addBookToLibrary("Fungal Properties", "DaVinki", "128", false);

displayBooks();

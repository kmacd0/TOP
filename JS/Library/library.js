const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  const tableBody = document.querySelector("table tbody");

  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
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

    // Add prototype function to change readStatus
    const readCell = document.createElement("td");
    readCell.textContent = book.isRead ? "Yes" : "No";
    readCell.style.cursor = "pointer";
    readCell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "gainsboro";
    });
    readCell.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
    readCell.addEventListener("click", function () {
      book.toggleReadStatus();
      console.log(
        `Book: ${book.title}, Read Status: ${book.isRead ? "Yes" : "No"}`
      );
      displayBooks();
    });
    row.appendChild(readCell);

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    // Delete
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

function dialogHandler() {
  const openDialogBtn = document.querySelector("#openDialogBtn");
  const closeDialogBtn = document.querySelector("#closeDialogBtn");
  const dialog = document.querySelector("#bookDialog");
  const bookForm = document.querySelector("#bookForm");

  openDialogBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });

  bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#isRead").checked;

    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    bookForm.reset();
    dialog.close();
  });
}

addBookToLibrary("Art of Zowei", "Zowei", "82", true);
addBookToLibrary("Library Companion", "Monseu", "16", true);
addBookToLibrary("Solution to Living", "Almeiser", "840", false);
addBookToLibrary("Fungal Properties", "DaVinki", "128", false);

displayBooks();
dialogHandler();

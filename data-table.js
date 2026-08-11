const bookInput = document.querySelector("#bookForm form");
const bookTable = document.querySelector("#tableSection table");

const initialBooks = [
  { book: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780618968633" },
  { book: "1984", author: "George Orwell", isbn: "9780451524935" },
  { book: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084" },
  { book: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565" }
];

function initTable() {
  bookTable.innerHTML = `
    <thead>
      <tr><th>Book</th><th>Author</th><th>ISBN</th></tr>
    </thead>
    <tbody></tbody>
  `;
  initialBooks.forEach(addRowFromData);
}

function addRowFromData({ book, author, isbn }) {
  const tbody = bookTable.querySelector('tbody');
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();

  const link = document.createElement('a');
  link.href = isbn ? `book-page.html?isbn=${encodeURIComponent(isbn)}` : 'book-page.html';
  link.textContent = book;
  link.addEventListener('click', (e) => {
    // allow normal navigation; this listener is here if you want to handle navigation via JS
  });

  cell1.appendChild(link);
  cell2.textContent = author;
  cell3.textContent = isbn;

}

bookInput.addEventListener("submit", addRow);

function addRow(event) {
  event.preventDefault();
  const bookName = document.querySelector("#bookInput").value;
  const authorName = document.querySelector("#authorInput").value;
  const isbnNo = document.querySelector("#isbnInput").value;
  addRowFromData({ book: bookName, author: authorName, isbn: isbnNo });
  resetForm();
}

function resetForm(){
    document.querySelector("#bookInput").value = '';
    document.querySelector("#authorInput").value = '';
    document.querySelector("#isbnInput").value = '';
    document.querySelector("#genreInput").value = '';
}

initTable();
const bookInput = document.querySelector("#bookForm form");
const bookTable = document.querySelector("#tableSection table");
const searchBar = document.querySelector('#searchBar');

const initialBooks = [
  { book: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780618968633" },
  { book: "1984", author: "George Orwell", isbn: "9780451524935" },
  { book: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084" },
  { book: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565" },
  { book: "Pride and Prejudice", author: "Jane Austen", isbn: "9781503290563" },
  { book: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "9780316769488" },
  { book: "Moby-Dick", author: "Herman Melville", isbn: "9780142437247" },
  { book: "The Alchemist", author: "Paulo Coelho", isbn: "9780061122415" },
  { book: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524" },
  { book: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "9780618640157" },
  { book: "Fahrenheit 451", author: "Ray Bradbury", isbn: "9781451673319" },
  { book: "The Chronicles of Narnia", author: "C.S. Lewis", isbn: "9780066238500" },
  { book: "The Kite Runner", author: "Khaled Hosseini", isbn: "9781594631931" },
  { book: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780143058144" }
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
  link.href = 'book-page.html';
  link.textContent = book;
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

  searchBar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const rows = bookTable.querySelectorAll('tbody tr');
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(term) ? '' : 'none';
    });
  });

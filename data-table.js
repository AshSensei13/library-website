const bookInput = document.querySelector("#bookForm form");
const bookTable = document.querySelector("#tableSection table");

bookInput.addEventListener("submit", addRow);

function addRow(event) {
  event.preventDefault();


  const bookName = document.querySelector("#bookInput").value;
  const authorName = document.querySelector("#authorInput").value;
  const isbnNo = document.querySelector("#isbnInput").value;
  const genreCat = document.querySelector("#genreInput").value;

  var table = document.getElementById("bookTable");

  var row = table.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = bookName;
  cell2.innerHTML = authorName;
  cell3.innerHTML = isbnNo;
  cell4.innerHTML = genreCat;
}
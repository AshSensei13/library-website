const logInput = document.querySelector("#bookLog form");
const logTable = document.querySelector("#logTableSection table");

logInput.addEventListener("submit", addRow2);

function addRow2(event) {
  event.preventDefault();

  const userName = document.querySelector("#customerName").value;
  const cardNo = document.querySelector("#cardNo").value;
  const issueDate = document.querySelector("#dateRel").value;

  var table = document.getElementById("logTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3)
  cell1.innerHTML = userName;
  cell2.innerHTML = cardNo;
  cell3.innerHTML = issueDate;
  cell4.innerHTML = "26/08/2026"
}

const btnAddRowElem = document.querySelector(".btn-add-row");
const tableElem = document.querySelector("table");
const inputTextElem = document.createElement("input");

btnAddRowElem.addEventListener("click", (e) => {
  addRow();
});
function addRow() {
  const newRow = tableElem.insertRow(-1);

  const dataCell = newRow.insertCell(0);
  dataCell.innerHTML = `<p id=p${newRow.rowIndex}>Data</p>`;
  const editCell = newRow.insertCell(1);
  editCell.innerHTML = `<button class='editBtn' data-btn-id=${newRow.rowIndex} >edit</button>`;
  //newCell.appendChild(newInner);

  addEditBtnEventListener();
}
function addEditBtnEventListener() {
  const editButtonsElem = document.querySelectorAll(".editBtn");

  editButtonsElem.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("data-btn-id");
      const targetPElem = document.querySelector(`#p${targetId}`);
      const textToEdit = targetPElem.textContent;

      targetPElem.style.display = "none";

      inputTextElem.value = textToEdit;
      targetPElem.parentElement.appendChild(inputTextElem);
    });
  });
}

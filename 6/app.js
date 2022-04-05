const formElem = document.querySelector("form");
const dropdownElem = document.querySelector("#dropdown");

formElem.addEventListener("submit", deleteItemFromDropdown);

function deleteItemFromDropdown(e) {
  e.preventDefault();
  
  dropdownElem.remove(dropdownElem.selectedIndex);
}

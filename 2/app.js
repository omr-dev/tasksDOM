const fnameInputElem = document.querySelector("#fname");
const lnameInputElem = document.querySelector("#lname");
const buttonElem = document.querySelector("button");
const fullNameElem = document.querySelector("p");

buttonElem.addEventListener("click", (e) => {
  e.preventDefault();
  showFullName(fnameInputElem.value, lnameInputElem.value);
});

function showFullName(fname, lname) {
  fullNameElem.innerText = `${fname} ${lname}`;
}

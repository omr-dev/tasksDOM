const inputElem = document.querySelector("#toClick");
const parElem = document.querySelector("p");
inputElem.addEventListener("click", () => {
  parElem.style.backgroundColor = "red";
});

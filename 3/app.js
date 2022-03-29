const inputElem = document.querySelector("#toClick");
const parElem = document.querySelector("p");
inputElem.addEventListener("focus", () => {
  parElem.style.backgroundColor = "red";
});

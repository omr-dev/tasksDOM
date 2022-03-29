const paragraphElem = document.querySelector("p");
const buttonElem = document.querySelector(".button");

buttonElem.addEventListener("click", changeParagraph);

function changeParagraph() {
  console.log("butona tiklandi");
  paragraphElem.style.fontFamily = "Arial, Helvetica, sans-serif";
  paragraphElem.style.fontSize = "30px";
  paragraphElem.style.color = "red";
}

const btnElem = document.querySelector(".btn-toggle");
btnElem.addEventListener("click", (e) => {
  const strongElems = document.querySelectorAll("strong");
  strongElems.forEach((strong) => {
    if (strong.style.backgroundColor == "yellow") {
      strong.style.backgroundColor = "white";
    } else {
      strong.style.backgroundColor = "yellow";
    }
  });
});

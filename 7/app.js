const buttonElem = document.querySelector("button");
const randImgElem = document.querySelector(".randImg");
buttonElem.addEventListener("click", (e) => {
  console.log(3);

  randImgElem.src = `./img/${getRandomImageSrc()}`;
});

const images = ["bird.jpg", "cat.jpg", "dog.jpg"];
function getRandomImageSrc() {
  return images[Math.floor(Math.random() * images.length)];
}

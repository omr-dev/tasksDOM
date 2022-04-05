const infoElem = document.querySelector(".description");
window.onresize = () => {
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  infoElem.innerText = `width: ${w} px; height: ${h} px`;
};

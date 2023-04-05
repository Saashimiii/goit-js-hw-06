const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector('body');
const whatColor = document.querySelector('.color');
console.log(whatColor);

btnChangeColor.addEventListener("click", changer)
function changer() {
  const currentСolor = getRandomHexColor()
  body.style.backgroundColor = currentСolor;
  whatColor.textContent = `${currentСolor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(body);
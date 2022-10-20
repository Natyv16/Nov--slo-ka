const send = document.getElementById("send");
const content = document.getElementById("content");
const userInput = document.getElementById("userInput");

const changeColor = (color) => {
    const userValue = userInput.value;
  content.style.backgroundColor = color;
}

send.onclick = () => {
    changeColor(userInput.value);
}

content.onmouseover = () => {
    changeColor(userInput.value);
}

window.onload = () => {
    changeColor ("pink")
}
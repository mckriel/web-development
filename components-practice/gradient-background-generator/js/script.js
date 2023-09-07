let css = document.querySelector("h3");
let color1 = document.getElementById('style1');
let color2 = document.getElementById('style2');
let body = document.getElementById("gradient");
let cssText = document.getElementById("csstext")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const randomNumber = () => Math.floor(Math.random() * hex.length);

const generateHex = () => {
    let hexColor = `#`;
    for (let i = 0; i < 6; i++) {
        let index = randomNumber();
        hexColor = hexColor + hex[index];
    }
    return hexColor
}

const randomColors = () => {
    color1.value = generateHex();
    color2.value = generateHex();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerText = body.style.background;
}

const setGradientText = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerText = body.style.background;
}

randomColors();
color1.addEventListener('input', setGradientText);
color2.addEventListener('input', setGradientText);

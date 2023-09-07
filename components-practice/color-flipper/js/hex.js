const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);

const randomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener(`click`, function() {
    let hexColor = `#`;
    for (let i = 0; i < 6; i++) {
        let index = randomNumber();
        hexColor = hexColor + hex[index];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

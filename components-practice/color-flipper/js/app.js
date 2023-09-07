const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);

const randomNumber = () => Math.floor(Math.random() * colors.length);

btn.addEventListener(`click`, function() {
    let colorIndex = randomNumber();
    document.body.style.backgroundColor = colors[colorIndex];
    color.textContent = colors[colorIndex];
});


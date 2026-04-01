const body = document.body
const colorCode = document.getElementById("color-code");
const colorButtons = document.querySelectorAll(".color-btn");
const randomBtn = document.getElementById("random-btn");
const resetBtn = document.getElementById("reset-btn");
colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const color = this.dataset.color;
        body.style.backgroundColor = color;
        colorCode.textContent = color;
    });
});
randomBtn.addEventListener("click", () => {
    const randomColor = "#" + randomBtn.dataset.color;
    body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
})
resetBtn.addEventListener("click", () => {
    body.style.backgroundColor ="#FFFFFF" ;
    colorCode.textContent = "#FFFFFF";
})
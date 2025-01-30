const startDiv = document.querySelector(".content");
const startBtn = document.getElementById("continue");
const loader = document.querySelector(".honeycomb");


startBtn.addEventListener("click", () => {
    loader.classList.remove("hidden");

    setTimeout(() => {
    loader.classList.add("hidden");
    startDiv.classList.add("hidden");
    }, 3000)
})
// Beginning Dev Goes here

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


// what we have for the API for now
async function checkWord(word) {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (response.status == 404) {
        alert("The word you entered is not found. Please check the spelling and try again.");
    } else {
        console.log(`Status Success: ${response.status} !`)
        let data = await response.json();
        console.log(data);
    }
}


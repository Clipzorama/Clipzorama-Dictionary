// Beginning Dev Goes here

const startDiv = document.querySelector(".content");
const startBtn = document.getElementById("continue");
const loader = document.querySelector(".honeycomb");


// Dictionary Content Selector References

let dictionaryDiv = document.querySelector(".dictionary-content");
let searchDiv = document.querySelector(".search");
let wordInput = document.getElementById("theWord")
let searchBtn = document.getElementById("word-search")

// Word Selector References

let infoDiv = document.querySelector(".info");
let wordTitle = document.querySelector(".word > h1");

// Info Selector References

let phonetic = document.querySelector(".phonetic");
let partOS = document.querySelector("pos-tag1");

let firstMeaningList = document.querySelector("meaningt1");





startBtn.addEventListener("click", () => {
    loader.classList.remove("hidden");

    setTimeout(() => {
    loader.classList.add("hidden");
    startDiv.classList.add("hidden");
    dictionaryDiv.classList.remove("hidden");
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
        console.log(data?.[0]?.meanings[0]?.partOfSpeech);

    }
}


checkWord("illiterate");


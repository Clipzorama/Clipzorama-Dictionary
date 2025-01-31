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
let partOS = document.querySelector(".pos-tag1");

let firstMeaningList = document.querySelector(".meaningt1");

let partOS2 = document.querySelector(".pos-tag2");
let defTag2 = document.querySelector(".def2");
let secondMeaningList = document.querySelector(".meaningt2");

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

        // Dom Manipulation
        wordTitle.textContent = data[0].word.charAt(0).toUpperCase() + data[0].word.slice(1);
        phonetic.textContent = data[0].phonetic;


        if (data[0].meanings.length === 1) {
            partOS.textContent = data[0].meanings[0].partOfSpeech;
            partOS2.classList.add("hidden");
            defTag2.classList.add("hidden");
            secondMeaningList.classList.add("hidden");

        } else if (data[0].meanings.length >= 2) {
            partOS.textContent = data[0].meanings[0].partOfSpeech;
            partOS2.textContent = data[0].meanings[1].partOfSpeech;

        }
        

    }
}

searchBtn.addEventListener("click", () => {
    checkWord(wordInput.value);
})


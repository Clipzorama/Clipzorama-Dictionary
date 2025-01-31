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



// Start Button Transition

startBtn.addEventListener("click", () => {
    loader.classList.remove("hidden");

    setTimeout(() => {
    loader.classList.add("hidden");
    startDiv.classList.add("hidden");
    dictionaryDiv.classList.remove("hidden");
    }, 3000)
})



function modify(info) {
    firstMeaningList.innerHTML = "";
    secondMeaningList.innerHTML = "";

    // Dom Manipulation

    infoDiv.classList.remove("hidden");
    wordTitle.textContent = info[0].word.charAt(0).toUpperCase() + info[0].word.slice(1);
    phonetic.textContent = info[0].phonetic;


    if (info[0].meanings.length === 1) {
        partOS.textContent = info[0].meanings[0].partOfSpeech;
        partOS2.classList.add("hidden");
        defTag2.classList.add("hidden");
        secondMeaningList.classList.add("hidden");
        info[0].meanings[0].definitions.slice(0, 2).forEach((element) => {
            const lister = document.createElement("li");
            lister.textContent = String(element.definition)
            firstMeaningList.appendChild(lister);
        });
        console.log(firstMeaningList); 



    } else if (info[0].meanings.length >= 2) {
        partOS.textContent = info[0].meanings[0].partOfSpeech;
        partOS2.textContent = info[0].meanings[1].partOfSpeech;

        info[0].meanings[0].definitions.slice(0, 1).forEach((element) => {
            const lister = document.createElement("li");
            lister.textContent = String(element.definition)
            firstMeaningList.appendChild(lister);
        });
        console.log(firstMeaningList); 
        secondMeaningList.classList.remove("hidden");
        partOS2.classList.remove("hidden");
        defTag2.classList.remove("hidden");
        info[0].meanings[1].definitions.slice(0, 1).forEach((element) => {
            const lister = document.createElement("li");
            lister.textContent = String(element.definition)
            secondMeaningList.appendChild(lister);
        });
        console.log(secondMeaningList); 

    }
}



// what we have for the API for now
async function checkWord(word) {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (response.status == 404) {
        alert("The word you entered is not found. Please check the spelling and try again.");
    } else {
        console.log(`Status Success: ${response.status} !`)
        let data = await response.json();
        console.log(data);
        modify(data)
    }
}


searchBtn.addEventListener("click", () => {
    checkWord(wordInput.value);
})


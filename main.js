// The window object- show in the console

console.log(window)

//the document object- show in the console

console.log(document)

//Change the color of the h1 tag

const mainH1 = document.getElementById('main-h1')
mainH1.style.color = 'rgb(82, 151, 94)'

//Change the text of the h1 tag

mainH1.innerText = 'Calculator'

//Change every other button background color using JS

const getBtnByClassName = document.getElementsByClassName('b')
console.log(getBtnByClassName, "got it by class")
for(let i = 0; i < getBtnByClassName.length; i++) {
    if(i % 2 === 0) {
        getBtnByClassName[i].style.backgroundColor = 'rgb(34, 33, 31)' //Notice the different spelling rules in JS vs. CSS
    } else {
        getBtnByClassName[i].style.backgroundColor = 'rgb(64, 65, 65)'
    }


}
// Write function that would show a question concerning the languages in the array

const languages = ['English', 'German', 'French', 'Spanish', 'Polish']

for(let i = 0; i < languages.length; i++) {
    
    console.log( 'Do you speak ' + languages[i] + '?')

}
// Show only odd numbers from the numbers array

const numbers = [1,2,3,502,10,303,1011]

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        console.log('The odd numbers are ' + numbers[i])
    }

}

//Show numbers higher than 5 form the numbers array

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 5) { 
        console.log('Numbers higher than 5 are ' + numbers[i])
    }
}

//STRINGS: toUpperCase/toLowerCase, check if the cities are the same, write a function.

const city1 = 'Warsaw'
const city2 = 'warsaw'
function areTheyTheSame(cityA, cityB) {
    if(cityA.toLowerCase() === cityB.toLowerCase()){
        console.log('Yes,the cities are the same')
    } else {
        console.log('Nope, these are not the same')
    }
        
}
const AreTheyTheSameOrNot = areTheyTheSame(city1, city2)


//STRINGS (search): check if  the article contains the word "is" , use the search function

const article = 'The rare amber alert is used to warn people of potential health and transport issues caused by the heat'

function isWord(word,text) {
    const isWordInText = text.search(word)
    if(isWordInText > -1){
        console.log('yup, we have it on position ', isWordInText)
    } else {
        console.log('Sorry, no such word')
    }
}
 
const isIs = isWord('is', article)

//STRING (includes): check if the word "alert" exists in the text.

function hasWord(wordX, textX) {
    const hasWordX = textX.includes(wordX)
    if(hasWordX === true) {
        console.log('yes, the word is in the text') 

        
    } else {
        console.log('Sorry, no such word')
    }
}
const hasWordAlert = hasWord('alert', article)

//STRING (Slice): Let's divide the article ino two equal parts using slice

function divideText(someText) {
   
    if(someText % 2 === 0) { 
        
        const partOne = someText.slice(0, someText.length / 2)
        const partTwo = someText.slice(someText.length / 2, someText.length)
        const bothParts = [partOne, partTwo]
        console.log(bothParts)
        return bothParts
        
    } else {
       const PartOneOdd = someText.slice(0, (someText.length + 1) / 2)
       const partTwoOdd = someText.slice((someText.length +1)/ 2, someText.length)
       const bothPartsOdd = [PartOneOdd, partTwoOdd]
       console.log(bothPartsOdd)
       return bothPartsOdd
    }
}

const showDividedText = divideText(article)

//STRING (split)/(join): Let's show in the onsole only x number of first words from the article.

function showFirstWords(textA, numberOfWordsToShow) {
    const xNumberOfWords = textA.split(' ', numberOfWordsToShow).join(' ')
    //const theBeginningOfArticle =
    console.log('Im showing only the beginning of the article: ',xNumberOfWords)
}

const show5FirstWords = showFirstWords(article, 5)

 
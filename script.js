"use strict";
// DOM VARS /////////////////
let textArea = document.getElementById("paragraph");
let pushButton = document.getElementById("myButton");
//pushButton.style.display = <'inline','block',etc>

// MAIN FUNCTIONS ////////////////
function hideButton(button){
    button.style.display = 'none';
}
function showButton(button){
    button.sytyle.display = 'inline';
}
function updatePar(newText = "Hello"){
    textArea.innerText += "  " + newText;
    console.log(newText);
}
function clearPar(){
    console.log(`Cleared "${textArea.innerText}" from the text area.`)
    textArea.innerText = "";
}

// PLURALSIGHT FUNCTIONS ////
function showCategories(productID, ...categories){
    updatePar(categories);
}

// VARIABLES ////////////////
let Chocolate = {
    good : "White Chocolate",
    okay : "Dark Chocolate",
    best : "Milk Chocolate"
}
let { good : whiteChoc, best : milkChoc, okay : darkChoc } = Chocolate;
let prices = [12,20,18];
let maxPrice = Math.max(...prices);
let myForOfString = "Hello World!";
// START ////////////////////
pushButton.addEventListener('click', function(){
    showCategories(123, 'search', 'advertising');
    updatePar(maxPrice);
    for (let letter of myForOfString){
        updatePar(letter);
    }
    console.log(0o10); // Octal number
    console.log(0b10); // Binary number
    clearPar();
    updatePar(`The best chocolate is ${milkChoc}, but ${whiteChoc} is also good.  And ${darkChoc} will do in a pinch.`);
});

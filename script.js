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
    textArea.innerText = "";
    console.log("Paragraph cleared");
}

// PLURALSIGHT FUNCTIONS ////
function showCategories(productID, ...categories){
    updatePar(categories);
}

// VARIABLES ////////////////
let prices = [12,20,18];
let maxPrice = Math.max(...prices);


// START ////////////////////
pushButton.addEventListener('click', function(){
    showCategories(123, 'search', 'advertising');
    updatePar(maxPrice);
});

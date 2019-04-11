import * as VARS from "./variables.js";
export function hideButton(button){
    button.style.display = 'none';
}
export function showButton(button){
    button.sytyle.display = 'inline';
}
export function updatePar(newText = "Error: No text received!", textArea = document.getElementById("paragraph")){
    textArea.innerText += "  " + newText;
    console.log(newText);
}
export function clearPar(textArea = document.getElementById("paragraph")){
    console.log(`Cleared "${textArea.innerText}" from the text area.`)
    textArea.innerText = "";
}
export function showCategories(productID, ...categories){
    updatePar(categories);
}
export function *process(){
    let nextId = yield;
    while(true){
        yield nextId++;
    }
}
export function promptReturn(string1, string2){
    let number = prompt(string1, string2);
    if (Number.parseInt(number) === 0){
        return number;
    }
    else if (number === null || number === "" || !(Number.parseInt(number) % number === 0)) {
        return NaN;
    }
    else {
        return number;
    }
}
export function doAsync(){
    let thisPromise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
        setTimeout(function(){
            reject();
        },1500);
    });
    return thisPromise;
}
export function asyncThen(value,reason) {
    doAsync().then(function(){
        console.log("Passed!" + value);
    },
    function(){
        console.log("Failed!" + reason);
    })
}
export function asyncRace(){
    Promise.race([VARS.promise1,VARS.promise2]).then(
        function () {updatePar("promise1 wins!");},
        function () {updatePar("promise2 wins!");}
    );
}
export function letsRace(number = 10){
    for (let i = 0; i < number; i++){
        asyncRace();
    }
}
export function fillBufferArray(array){
    for(let i = 0; i < array.length; i++){
        array[i] = VARS.myGenerator.next(0).value;
    }
}
export function generateNumber(maximum){
    let variable = Math.random();
    while (variable < maximum){
        variable /= Math.random();
        console.log(variable);
    }
    return Math.round(variable * 100) / 100;
}
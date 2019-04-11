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

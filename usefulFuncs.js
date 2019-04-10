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

// Pluralsight Functions
export function showCategories(productID, ...categories){
    updatePar(categories);
}
export function *process(){
    let nextId = 0;
    while(true){
        yield nextId++;
    }
}
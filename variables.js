let Chocolate = {
    good : "White Chocolate",
    okay : "Dark Chocolate",
    best : "Milk Chocolate"
}
export let { good : whiteChoc, best : milkChoc, okay : darkChoc } = Chocolate;
let prices = [12,20,18];
export let maxPrice = Math.max(...prices);
export let myForOfString = "Hello World!";

export let pushButton = document.getElementById("myButton");
import { Task, SoftwareProject } from "./classes.js";
import { process } from "./usefulFuncs.js";

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
export let myTask = new Task(900);
export let myProject = new SoftwareProject;
export const EVENT_SYMBOL = Symbol("test event");
export let targetVar1 = {var1 : 7};
export let targetVar2 = {var2 : 912};
export let target = {};
export let myGenerator = process();
export let numberPrompt;
export const genArray = [];
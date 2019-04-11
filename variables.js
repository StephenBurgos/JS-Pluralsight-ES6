import { Task, SoftwareProject } from "./classes.js";
import { process, doAsync } from "./usefulFuncs.js";

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
export let raceButton = document.getElementById("raceButton");
export let button3 = document.getElementById("button3");
export let button4 = document.getElementById("button4");
export let myTask = new Task(900);
export let myProject = new SoftwareProject;
export const EVENT_SYMBOL = Symbol("test event");
export let targetVar1 = {var1 : 7};
export let targetVar2 = {var2 : 912};
export let target = {};
export let myGenerator = process();
export let numberPrompt;
export const genArray = [];
export let myPromise = doAsync();
export let promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },Math.floor(Math.random() * 5000));
});
export let promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject();
    },Math.floor(Math.random() * 5000));
});
export let numberOfRaces = 1;
let buffer = new ArrayBuffer(64);
export let bufferArray = new Uint8ClampedArray(buffer);

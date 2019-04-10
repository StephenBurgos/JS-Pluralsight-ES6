"use strict";
// IMPORTS //////////////////
import { hideButton, showButton, updatePar, clearPar, showCategories } from "./usefulFuncs.js";
import * as VARS from './variables.js';

// MAIN /////////////////////
VARS.pushButton.addEventListener('click', function(){
    showCategories(123, 'search', 'advertising');
    updatePar(VARS.maxPrice);
    for (let letter of VARS.myForOfString){
        updatePar(letter);
    }
    console.log(0o10); // Octal number
    console.log(0b10); // Binary number
    clearPar();
    updatePar(`The best chocolate is ${VARS.milkChoc}, but ${VARS.whiteChoc} is also good.  And ${VARS.darkChoc} will do in a pinch.`);
    VARS.myTask.showId();
    VARS.myProject.saySomething();
    updatePar("VARS.EVENT_SYMBOL is of type: " + typeof VARS.EVENT_SYMBOL);
    Object.assign(VARS.target, VARS.targetVar1, VARS.targetVar2);
    updatePar(VARS.target.var1 + " " + VARS.target.var2);
    updatePar("\u{1f30a}\u{1f3c4}\u{1f40b}") // Wave, Surfer, Whale emojis
});

// Rapid ES6 > New Types and Object Extensions > Object Extensions
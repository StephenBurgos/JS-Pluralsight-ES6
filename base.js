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
});
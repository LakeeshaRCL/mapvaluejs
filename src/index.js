"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
function map(value, inputMin, inputMax, outputMin, outputMax) {
    let inputValueGap = inputMax - inputMin; // calculate input value range gap
    let outputValueGap = outputMax - outputMin; // calculate output value range gap
    let factor = outputValueGap / inputValueGap; // calculate the factor between output value range vs input value range
    let output = value * factor + outputMin; // calculate output
    // @ts-ignore
    return Math.round((output + Number.EPSILON) * 100) / 100; // return calculated output rounded to two decimal places
}
exports.map = map;

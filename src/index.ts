export function map(value:number, inputMin:number, inputMax:number, outputMin:number, outputMax:number):number {
    let inputValueGap : number = inputMax - inputMin; // calculate input value range gap
    let outputValueGap : number = outputMax - outputMin; // calculate output value range gap

    let factor : number = outputValueGap / inputValueGap; // calculate the factor between output value range vs input value range
    let output : number = value * factor + outputMin; // calculate output

    // @ts-ignore
    return Math.round((output + Number.EPSILON)*100)/100; // return calculated output rounded to two decimal places
}

const prompt = require("prompt-sync")()

let startingNumber = prompt(" Enter the starting numbe: ")
let multiplier = prompt(" Enter the multiplier: ")
let divider = prompt(" Enter the divisor: ")
let result1 = startingNumber * multiplier
let result2 = result1 / divider
let result3 = result2 % 7
let result4 = result3 + 10
let result5 = startingNumber * 3

console.log(`\n

    =====================  Number Wizard Challenge  =====================
    Steps 1: ${startingNumber * multiplier}
    =====================================================================
    Steps 2: ${result1 / divider}
    ===================================================================== 
    Steps 3: ${result2 % 7}
    =====================================================================
    Steps 4: ${result3 + 10}
    =====================================================================
    Steps 5: ${result4 - result5}
    =====================================================================
    
    `)
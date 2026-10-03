const prompt = require("prompt-sync")()

let age = Number(prompt(" How old are you? "))
let signature = prompt(" You have a subscription? ")

console.log(`
    ========================= VIP area =============================
    Requeriments:
    Age: ${age}
    Signature: ${signature}
    =================================================================
    Do You have access? ${age >= 18 && signature === "Y"}
    =================================================================
    `)
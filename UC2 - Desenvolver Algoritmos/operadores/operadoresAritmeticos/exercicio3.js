const prompt = require("prompt-sync")()

let headset = Number(prompt(" How much do the headprhones cost? "))
let installment = Number( prompt(" How many installments can I play in? "))

console.log(`Headset:${headset.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)

console.log(`Amount of each installment: ${(headset / installment).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)
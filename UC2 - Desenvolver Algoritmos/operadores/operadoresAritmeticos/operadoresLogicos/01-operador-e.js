// OPERADOR && - E 
// Usamos && quando TODAS as condições precisam ser veradeiras ao mesmo tempo.

const prompt = require("prompt-sync")()

// Para entrar em um evento, a pessoa precisa:
// 1) ter 18 anos ou mais
// E
// 2) possuir ingresso

let age = Number(prompt(" How old are you? "))
let tickets = prompt(" Do you have tickets? ")

 

if (age >= 18 && tickets === "Y") {
    console.log(" You can come in.")
} else {
    console.log(" You cannot enter.")
}


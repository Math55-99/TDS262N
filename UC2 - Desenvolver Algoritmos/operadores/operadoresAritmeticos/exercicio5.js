const prompt = require("prompt-sync")()

let initialCapital = Number(prompt(" How much I have? "))
let moneyEarned = Number(prompt(" How much did I earn? "))
let moneySpent = Number(prompt(" How much I spent? "))
let totalOfThePresent = (initialCapital + moneyEarned)

console.log(`\n======================================================================================
 I have: ${initialCapital.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
 I won: ${moneyEarned.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
 I spent: ${moneySpent.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
 =====================================================================================================
 Total after the gift: ${(initialCapital + moneyEarned).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
======================================================================================================
 Total after purchasing the game: ${(totalOfThePresent - moneySpent).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
 `)
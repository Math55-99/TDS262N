// OPERADOR ! -NÃO | NOT

// O operador ! significa NÃO. Ele INVERTE um valor lógico

// !true -> false
// !false -> true

// Imagine uma porta. Se aporta NÃO estiver trancada, podemos entrar.

const prompt = require("prompt-sync")()

let resposta = prompt(" A porta está trancada? (sim/nao): ")

// Transformamos a resposta em true ou false 
let portaTrancada = resposta === "sim"

console.log("\n Porta está trancada?")
console.log(portaTrancada)

/**
 * Agora usamos !
 * Se portaTrancada = false -> !portaTrancada
 */

let podeEntra = !portaTrancada

console.log("\n NÃO está trancada? ")
console.log(!portaTrancada)

console.log("\n Pode entrar?")
console.log(podeEntra)
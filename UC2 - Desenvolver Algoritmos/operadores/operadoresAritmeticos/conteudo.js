// OPERADORES ARITMÉTICOS

/**
 * Os opradores aritméticos servem para fazer contas: São eles 
 * soma -> +
 * subtração -> -
 * multiplicação -> /
 * resto da divisão -> %
 * 
 */

// importo prompt
const prompt = require("prompt-sync")()

// Pedindo os números para o usuário
let numero1 = Number(prompt(" Digite o primeiro número: "))
let numero2 = Number(prompt(" Digite o primeiro número: "))

// Realizando as operações
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let porcentagem = numero1 * numero2 / 100
let resto = numero1 % numero2

console.log(`A soma é ${soma}`)
console.log(`A subtração é ${subtracao}`)
console.log(`A multiplicação é ${multiplicacao}`)
console.log(`A divisão é ${divisao}`)
console.log(`A porcentagem é ${porcentagem}`)
console.log(`O resto da divisão é:  ${resto}`)

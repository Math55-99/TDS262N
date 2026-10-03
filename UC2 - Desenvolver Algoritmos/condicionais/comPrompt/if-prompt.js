const prompt = require("prompt-sync")()

let idade = Number(prompt(" Digite a sua idade: "))

//usando if

if (idade >= 18) {
    console.log(" Você é maior de idade! Seja responsável! ")
}
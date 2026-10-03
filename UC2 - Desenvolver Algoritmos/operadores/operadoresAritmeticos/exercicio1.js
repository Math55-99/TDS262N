// Gamer do Find 

const prompt = require("prompt-sync")()

let sexta = Number(prompt(" Quantas horas você jogou na sexta? "))
let sabado = Number(prompt(" Quantas horas você jogou no sábado? "))
let domingo = Number(prompt(" Quantas horas você jogou no domingo? "))

// somando os valores

let totalHoras = sexta + sabado + domingo

console.log( `\n 
    ===================== GAMER DO FIND ========================
    
    Você jogou ${totalHoras} horas no final de semana. Muito BAH
    
    ============================================================
    
    `)
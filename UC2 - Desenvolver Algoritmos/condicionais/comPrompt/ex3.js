const prompt = require("prompt-sync")()

let courage = Number(prompt(" Digite sua pontuação de coragem: "))
let intelligence = Number(prompt(" Digite sua pontuação de inteligência: "))
let loyalty = Number(prompt(" Digite sua pontuação de lealdade: "))

console.log("\n O chapéu Seletor está pensando...")

if(courage > 80 && courage > intelligence && courage > loyalty) {
    console.log(" Grifinória ")
} else if(intelligence > 80 && intelligence > courage && intelligence > loyalty) {
    console.log(" Corvinal ")
} else if(loyalty > 80 && loyalty > courage && loyalty > intelligence) {
    console.log(" Lufa-Lufa ")
} else {
    console.log(" Sonserina ")
}
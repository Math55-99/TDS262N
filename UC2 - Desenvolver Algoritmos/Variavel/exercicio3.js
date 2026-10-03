const ask = require(`readline-sync`)


let nave = ask.question(`Digite o nome da nave: `)
let crewMember = ask.question(`Digite o numero de tripulantes: `)
let destiny = ask.question(`Digite o seu destino: `)
let tripTime = ask.question(`Digite o tempo estimado: `)
let mission = ask.question(`Digite o status da missao: `)

console.log(`
    Name: ${nave}
    Membros: ${crewMember}
    Destino: ${destiny}
    Tempo de Viagem: ${tripTime}
    Status da missao: ${mission}
    `)
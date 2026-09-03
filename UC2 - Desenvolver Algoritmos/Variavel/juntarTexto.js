/*
-------------------------------------------------------
JUNTAR TEXTOS
-------------------------------------------------------
Às vezes queremos criar uma frse utilizando os valores das nossas variáveis.

Esse processo é chmado de CONCATENAÇÃO (JUNTAR).

Podemos usar 2 formas:
1. Com o sinal +
2. Com Template String `` e ${}

*/

// 1. Usando o +

let personagem = "Bob Esponja"
let idadeBob = 22
let frase = "Olá, meu nome é " + personagem + " e tenho " + idadeBob + " anos"

console.log(frase)

// 2. Template  String

let personagemAnime = "Luffy"
let vocacao = "pirata"

let frase2 = `Olá eu sou o ${personagemAnime} e sou um ${vocacao}`

console.log(frase2)
const prompt = require("prompt-sync")()

function verifyAge(age) {
    if(age >= 18) {
        return " You can come in "
    } else {
        return " Come back only when you're 18, Padawan "
    }
}

let age = prompt(" How old are you? ")

console.log(verifyAge(age))
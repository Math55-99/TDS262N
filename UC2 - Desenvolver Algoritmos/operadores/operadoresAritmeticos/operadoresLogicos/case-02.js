const prompt = require("prompt-sync")()

let age = Number(prompt(" How old are you? "))
let document = prompt(" The document is valid? Y/N ")


if(age >= 18 && document === "Y") {
    console.log(" You can buy the drink ")
} else {
    console.log(" You cant buy the drink ")
}


const ask = require(`readline-sync`)



let flavor = ask.question(`Enter the desired flavor: `)
let fly = true

let flavor1 = "4 cheeses"
let flavor2 = "pepperoni"
let flavor3 = "Chicken with Catupiry cheese"
let flavor4 = "Beef and cream"

let price1 = 45
let price2 = 65
let price3 = 55
let price4 = 76

console.log(`Pizza: ${flavor}`)

if (flavor === flavor1) {
    console.log(`R$ ${price1}`)
} else if (flavor === flavor2) {
    console.log(`R$ ${price2}`)
} else if (flavor === flavor3) {
    console.log(`R$ ${price3}`)
} else if (flavor === flavor4) {
    console.log(`R$ ${price4}`)
}

if ( flavor === flavor1 && flavor2) {
    console.log(`The pizza flies`)
} else if (flavor === flavor3 && flavor4) {
    console.log(`The pizza not flies`)
}
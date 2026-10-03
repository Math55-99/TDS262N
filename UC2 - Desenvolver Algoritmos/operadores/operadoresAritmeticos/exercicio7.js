const prompt = require("prompt-sync")()

let coin = Number(prompt(" How many coins do you have? "))
let mission = Number(prompt(" How many missions were assigned? "))
let coinsPermission = Number(prompt(" How many coins per mission? "))
let item = Number(prompt(" How much does the item cost? "))
let expenses = coin + (mission * coinsPermission)
let leftOver = expenses - item
let upgrade = Number(prompt(" How many upgrades? "))

console.log(`\n 

=========================in-game currency systems=============================                     
Coins received from the mission: ${coin + (mission * coinsPermission)}
==============================================================================
Amount spent on the item: ${expenses - item}
==============================================================================
Coins divided by upgrade: ${leftOver / upgrade}
==============================================================================

`)
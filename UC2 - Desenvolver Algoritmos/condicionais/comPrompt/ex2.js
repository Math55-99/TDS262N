const prompt = require("prompt-sync")()

function verifyPoint(point) {
    if (point >= 1000) {
        return " Legends the Games "
    } else if (point >= 500 && point <= 1000) {
        return " Player Pro "
    } else {
        return " Keep trying, Padawan "
    }
}

let point = Number(prompt(" How many points did you score? "))

console.log(verifyPoint(point))
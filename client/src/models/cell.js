const Ship = require("./ship")

const Cell = function (
    number
) {
    this.number = number
    this.shipPresent = false
    this.shotAt = false
}

Cell.prototype.addShip = function () {
    this.shipPresent = true
}

Cell.prototype.removeShip = function () {
    this.shipPresent = false
}
Cell.prototype.addShip = function () {
    this.shipPresent = true
}

Cell.prototype.addShot = function () {
    this.shotAt = true
}



module.exports = Cell
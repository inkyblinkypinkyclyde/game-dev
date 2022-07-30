const Grid = require('./grid.js')
const Fleet = require('./fleet.js')

const Player = function (
    name
) {
    this.name = name
    this.gridSize = null
    this.playerGrid = null
    this.playerFleet = null
}

const errorArray = [
    'You cannot pick a grid size that small, please choose a number between 3 and 10',
    'You cannot pick a grid size that large, please choose a number between 3 and 10'
]

Player.prototype.startGame = function (gridSize) {
    this.gridSize = gridSize
    if (gridSize < 3) { return errorArray[0] }
    if (gridSize > 10) { return errorArray[1] }
    this.playerFleet = new Fleet(`${this.name}'s fleet`)
    this.playerFleet.addShips(gridSize - 2)
    this.playerGrid = new Grid(`${this.name}'s waters`)
    this.playerGrid.addCells(gridSize * gridSize)
}

Player.prototype.placeShip = function (gridCellId, ship) {
    this.playerGrid.placeShip(gridCellId, ship, this.gridSize)
    this.playerFleet.deploy(ship, gridCellId, this.gridSize)
}

module.exports = Player
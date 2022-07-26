const Cell = require('./cell.js')
const Ship = require('./ship.js')

const Grid = function (
    name
) {
    this.name = name
    this.cells = []
}

Grid.prototype.addCells = function (numberToAdd) {
    for (let i = 0; i < numberToAdd; i++) {
        this.cells.push(
            cell = new Cell(i)
        )
    }
}

Grid.prototype.placeShip = function (cellId, ship, boardWidth) {
    ship.addLocation(cellId, boardWidth)
    ship.length.map((shipCell) => {
        this.cells.forEach((gridCell) => {
            if (shipCell.location === gridCell._cellId) {
                gridCell.value = 's'
            }
        })
    })
}

module.exports = Grid
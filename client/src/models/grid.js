const Cell = require('./cell.js')

const Grid = function (
    name
) {
    this.name = name
    this.cells = []
}

Grid.prototype.addCells = function (numberToAdd) {
    for (let i = 0; i < numberToAdd; i++) {
        const cell = new Cell(i)
        this.cells.push(
            cell
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

Grid.prototype.addShot = function (cellId) {
    this.cells.forEach((gridCell) => {
        if (gridCell._cellId === cellId) {
            gridCell.addShot()
        }
    })
}

module.exports = Grid
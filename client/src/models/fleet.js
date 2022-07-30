const Ship = require('./ship.js')

const Fleet = function (
    name
) {
    this.name = name
    this.deployed = []
    this.undeployed = []
}
const shipNameArray = [
    'Corvette',
    'Frigate',
    'Submarine',
    'Destroyer',
    'Cruiser',
    'Battleship',
    'Carrier',
    'Super Carrier'
]

Fleet.prototype.addShips = function (numberToAdd) {
    for (let i = 0; i < numberToAdd; i++) {
        const ship = new Ship(shipNameArray[i], i + 1)
        ship.addLength(i + 2)
        this.undeployed.push(ship)
    }
}

Fleet.prototype.findShipById = function (shipId) {
    let foundShip
    this.undeployed.map((ship, index) => {
        if (ship._shipId === shipId) {
            foundShip = ship
            this.undeployed.splice(index, 1)
        }
    })
    return foundShip
}

Fleet.prototype.addShipToDeployed = function (ship) {
    this.deployed.push(ship)
}
Fleet.prototype.addShipToUndployed = function (ship) {
    this.deployed.push(ship)
}
Fleet.prototype.removeShipFromDeployed = function (shipToBeRemoved) {
    this.deployed.map((shipInArray, index) => {
        if (shipInArray === shipToBeRemoved) {
            this.deployed.splice(index, 1)
        }
    })
}
Fleet.prototype.removeShipFromUndeployed = function (shipToBeRemoved) {
    this.undeployed.map((shipInArray, index) => {
        if (shipInArray === shipToBeRemoved) {
            this.undeployed.splice(index, 1)
        }
    })
}

Fleet.prototype.deploy = function (ship, gridId, boardWidth) {
    this.removeShipFromUndeployed(ship)
    ship.addLocation(gridId, boardWidth)
    this.addShipToDeployed(ship)
}

Fleet.prototype.addShot = function (gridId) {
    this.deployed.map((ship) => {
        ship.length.map((cell) => {
            if (cell.location === gridId) {
                cell.shotAt = true
            }
        })
    })
}



module.exports = Fleet
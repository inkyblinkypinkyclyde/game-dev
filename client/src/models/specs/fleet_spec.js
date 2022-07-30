const assert = require('assert')
const Ship = require('../ship.js')
const Fleet = require('../fleet.js');

describe('Fleet', function () {
    let fleet;

    beforeEach(function () {
        fleet = new Fleet('Player Fleet')
        ship1 = new Ship('Corvette', 1)
        ship2 = new Ship('Frigate', 2)
        ship3 = new Ship('Submarine', 3)
        ship4 = new Ship('Destroyer', 4)
        ship1.addLength(2)
        ship2.addLength(3)
        ship3.addLength(4)
        ship4.addLength(5)
    })
    it('Should have a name', function () {
        const expected = 'Player Fleet'
        assert.strictEqual(fleet.name, expected)
    })
    it('Should be able to add one ship to the undeployed array', function () {
        fleet.addShips(1)
        const expected = [
            ship1
        ]
        assert.deepStrictEqual(fleet.undeployed, expected)
    })
    it('Should be able to add  more than one ship to the undeployed array', function () {
        fleet.addShips(2)
        const expected = [
            ship1,
            ship2
        ]

        assert.deepStrictEqual(fleet.undeployed, expected)
    })

    it('should be able to find a ship in the undeployed array', function () {
        fleet.addShips(2)
        const expected = ship2
        assert.deepStrictEqual(fleet.findShipById(2), expected)

    })

    it('should be able to deploy a ship', function () {
        fleet.addShips(2)
        fleet.deploy(fleet.findShipById(2), 0, 4)
        const expected = [
            ship1
        ]
        assert.deepStrictEqual(fleet.undeployed, expected)
        assert.deepStrictEqual(fleet.deployed.length, 1)
    })

    it('should be able to register a shot on a ship in the fleet 1/5', function () {
        fleet.addShips(1)
        fleet.deploy(fleet.findShipById(1), 0, 4)
        fleet.addShot(0)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 2/5', function () {
        fleet.addShips(1)
        fleet.undeployed[0].rotate()
        fleet.deploy(fleet.findShipById(1), 0, 4)
        fleet.addShot(4)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[1].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 3/5', function () {
        fleet.addShips(2)
        fleet.deploy(fleet.findShipById(2), 4, 4)
        fleet.addShot(4)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 4/5', function () {
        fleet.addShips(4)
        fleet.deploy(fleet.findShipById(1), 0, 4)
        fleet.deploy(fleet.findShipById(2), 4, 4)
        fleet.deploy(fleet.findShipById(3), 8, 4)
        fleet.deploy(fleet.findShipById(4), 12, 4)
        fleet.addShot(9)
        const expected = true
        assert.strictEqual(fleet.deployed[2].length[1].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 5/5', function () {
        fleet.addShips(1)
        fleet.deploy(ship1, 0, 4)
        fleet.addShot(2)
        const expected = false
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
})

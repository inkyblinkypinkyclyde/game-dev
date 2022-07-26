const assert = require('assert')
const Ship = require('../ship.js')
const Fleet = require('../fleet.js');
const { isTypedArray } = require('util/types');

describe('Fleet', function () {
    let fleet;

    beforeEach(function () {
        fleet = new Fleet('Player Fleet')
        ship1 = new Ship('Corvette', 1)
        ship2 = new Ship('Frigate', 2)
        ship1.addLength(2)
        ship2.addLength(3)
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
        fleet.deploy(2, 0, 4)
        const expected_1 = [
            ship1
        ]
        const expected_2 = 1
        assert.deepStrictEqual(fleet.undeployed, expected_1)
        assert.deepStrictEqual(fleet.deployed.length, 1)
    })

    it('should be able to register a shot on a ship in the fleet 1/5', function () {
        fleet.addShips(1)
        fleet.deploy(1, 0, 2)
        fleet.addShot(0)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 2/5', function () {
        fleet.addShips(1)
        fleet.undeployed[0].rotate()
        fleet.deploy(1, 0, 2)
        fleet.addShot(2)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[1].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 3/5', function () {
        fleet.addShips(2)
        fleet.deploy(2, 4, 4)
        fleet.addShot(4)
        const expected = true
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 4/5', function () {
        fleet.addShips(3)
        fleet.deploy(1, 0, 4)
        fleet.deploy(2, 4, 4)
        fleet.deploy(3, 8, 4)
        fleet.addShot(9)
        const expected = true
        assert.strictEqual(fleet.deployed[2].length[1].shotAt, expected)
    })
    it('should be able to register a shot on a ship in the fleet 5/5', function () {
        fleet.addShips(1)
        fleet.deploy(1, 0, 4)
        fleet.addShot(2)
        const expected = false
        assert.strictEqual(fleet.deployed[0].length[0].shotAt, expected)
    })
})

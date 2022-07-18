const assert = require('assert')
const Cell = require('../cell.js');

describe('Cell', function () {
    let cell

    beforeEach(function () {
        cell = new Cell(0)
    })

    it('Should have a cellId', function () {
        const expected = 0
        assert.strictEqual(cell.number, expected)
    })

    it('Should have shotAt starting as false', function () {
        const expected = false
        assert.strictEqual(cell.shotAt, false)
    })

    it('Should have shipPresent starting as false', function () {
        const expected = false
        assert.strictEqual(cell.shipPresent, false)
    })

    it('Should be able to add a ship', function () {
        cell.addShip()
        const expected = true
        assert.strictEqual(cell.shipPresent, expected)
    })

    it('Should be able to remove a ship', function () {
        cell.addShip()
        cell.removeShip()
        const expected = false
        assert.strictEqual(cell.shipPresent, false)
    })

    it('Should be able to add a shot', function () {
        cell.addShot()
        const expected = true
        assert.strictEqual(cell.shotAt, expected)
    })
})
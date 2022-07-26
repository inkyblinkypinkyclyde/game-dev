const assert = require('assert')
const Cell = require('../cell.js');

describe('Cell', function () {
    let cell

    beforeEach(function () {
        cell = new Cell(0)
    })

    it('Should have a cellId', function () {
        const expected = 0
        assert.strictEqual(cell._cellId, expected)
    })

    it('Should have shotAt starting as false', function () {
        const expected = '_'
        assert.strictEqual(cell.value, expected)
    })

    it('Should be able to add a ship', function () {
        cell.addShip()
        const expected = 's'
        assert.strictEqual(cell.value, expected)
    })

    it('Should be able to remove a ship', function () {
        cell.addShip()
        cell.removeShip()
        const expected = '_'
        assert.strictEqual(cell.value, expected)
    })

    it('Should be able to add a shot and register hit', function () {
        cell.addShip()
        cell.addShot()
        const expected = 'h'
        assert.strictEqual(cell.value, expected)
    })
    it('Should be able to add a shot and register hit', function () {
        cell.addShot()
        const expected = 'm'
        assert.strictEqual(cell.value, expected)
    })
})
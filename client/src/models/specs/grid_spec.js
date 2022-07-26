const assert = require('assert');
const Grid = require('../grid.js')
const Cell = require('../cell.js')
const Ship = require('../ship.js')

describe('Grid', function () {
    let grid;

    beforeEach(function () {
        grid = new Grid('Player Grid')
        ship1 = new Ship('Frigate', 001)
        ship2 = new Ship('Frigate', 002)
        ship1.addLength(2)
        ship2.addLength(2)
    })

    it('Should have a name', function () {
        const expected = 'Player Grid'
        assert.strictEqual(grid.name, expected)
    })

    it('Should be able to add on cell to the grid', function () {
        grid.addCells(1)
        const expected = [
            new Cell(0)
        ]
        assert.deepStrictEqual(grid.cells, expected)
    })
    it('Should be able to add new cells and add a ship to that cell', function () {
        grid.addCells(1)
        grid.cells[0].addShip()
        const expected = 's'
        assert.strictEqual(grid.cells[0].value, expected)
    })
    it('Should be able to add new cells and register a shot as a miss', function () {
        grid.addCells(1)
        grid.cells[0].addShot()
        const expected = 'm'
        assert.strictEqual(grid.cells[0].value, expected)
    })
    it('Should be able to add new cells, add a ship to those cells and register a hit', function () {
        grid.addCells(1)
        grid.cells[0].addShip()
        grid.cells[0].addShot()
        const expected = 'h'
        assert.strictEqual(grid.cells[0].value, expected)
    })
    it('Should be able to add a ship horizontally in a number of cells 1/2', function () {
        grid.addCells(4)
        grid.placeShip(0, ship1, 2)
        const expected_0 = 's'
        const expected_1 = 's'
        const expected_2 = '_'
        const expected_3 = '_'
        assert.strictEqual(grid.cells[0].value, expected_0)
        assert.strictEqual(grid.cells[1].value, expected_1)
        assert.strictEqual(grid.cells[2].value, expected_2)
        assert.strictEqual(grid.cells[3].value, expected_3)
    })
    it('Should be able to add a ship horizontally in a number of cells 2/2', function () {
        grid.addCells(4)
        grid.placeShip(2, ship1, 2)
        const expected_0 = '_'
        const expected_1 = '_'
        const expected_2 = 's'
        const expected_3 = 's'
        assert.strictEqual(grid.cells[0].value, expected_0)
        assert.strictEqual(grid.cells[1].value, expected_1)
        assert.strictEqual(grid.cells[2].value, expected_2)
        assert.strictEqual(grid.cells[3].value, expected_3)
    })
    it('Should be able to add a ship vertically in a number of cells 1/2', function () {
        grid.addCells(4)
        ship1.rotate()
        grid.placeShip(0, ship1, 2)
        const expected_0 = 's'
        const expected_1 = '_'
        const expected_2 = 's'
        const expected_3 = '_'
        assert.strictEqual(grid.cells[0].value, expected_0)
        assert.strictEqual(grid.cells[1].value, expected_1)
        assert.strictEqual(grid.cells[2].value, expected_2)
        assert.strictEqual(grid.cells[3].value, expected_3)
    })
    it('Should be able to add a ship vertically in a number of cells 2/2', function () {
        grid.addCells(4)
        ship1.rotate()
        grid.placeShip(1, ship1, 2)
        const expected_0 = '_'
        const expected_1 = 's'
        const expected_2 = '_'
        const expected_3 = 's'
        assert.strictEqual(grid.cells[0].value, expected_0)
        assert.strictEqual(grid.cells[1].value, expected_1)
        assert.strictEqual(grid.cells[2].value, expected_2)
        assert.strictEqual(grid.cells[3].value, expected_3)
    })
    it('Should be able to add multiple ships to a grid', function () {
        grid.addCells(4)
        grid.placeShip(0, ship1, 2)
        grid.placeShip(2, ship2, 2)
        const expected_0 = 's'
        const expected_1 = 's'
        const expected_2 = 's'
        const expected_3 = 's'
        assert.strictEqual(grid.cells[0].value, expected_0)
        assert.strictEqual(grid.cells[1].value, expected_1)
        assert.strictEqual(grid.cells[2].value, expected_2)
        assert.strictEqual(grid.cells[3].value, expected_3)
    })
})
const assert = require('assert')
const Grid = require('../grid.js')
const Fleet = require('../fleet.js');


describe('Game', function () {
    let game;

    beforeEach(function () {
        playerOneFleet = new Fleet('Player One Fleet')
        playerTwoFleet = new Fleet('Player Two Fleet')
        playerOneFleet.addShips(8)
        playerTwoFleet.addShips(8)
        playerOneWaters = new Grid('Player One Waters')
        playerTwoWaters = new Grid('Player Two Waters')
        playerOneWaters.addCells(16)
        playerTwoWaters.addCells(16)
    })


    /// Player fleet tests ///
    it('Should have a Player one fleet named Player One Fleet', function () {
        const expected = 'Player One Fleet'
        assert.strictEqual(playerOneFleet.name, expected)
    })
    it('Should have a Player two fleet named Player Two Fleet', function () {
        const expected = 'Player Two Fleet'
        assert.strictEqual(playerTwoFleet.name, expected)
    })
    it('Should have a Player one waters named Player One Waters', function () {
        const expected = 'Player One Waters'
        assert.strictEqual(playerOneWaters.name, expected)
    })
    it('Should have a Player two waters named Player Two Waters', function () {
        const expected = 'Player Two Waters'
        assert.strictEqual(playerTwoWaters.name, expected)
    })
    it('Player one should have a fleet with eight ships', function () {
        const expected = 8
        assert.strictEqual(playerOneFleet.undeployed.length, expected)
    })
    it('Player two should have a fleet with eight ships', function () {
        const expected = 8
        assert.strictEqual(playerTwoFleet.undeployed.length, expected)
    })

    /// Grid tests ///
    it('Player one grid shouold have 16 cells', function () {
        const expected = 16
        assert.strictEqual(playerOneWaters.cells.length, expected)
    })
    it('Player two grid shouold have 16 cells', function () {
        const expected = 16
        assert.strictEqual(playerTwoWaters.cells.length, expected)
    })
    it('Player one grid cells should all start with a value of _', function () {
        const expected = '_'
        for (let i = 0; i < 16; i++) {
            assert.strictEqual(playerOneWaters.cells[i].value, expected)
        }
    })
    it('Player two grid cells should all start with a value of _', function () {
        const expected = '_'
        for (let i = 0; i < 16; i++) {
            assert.strictEqual(playerTwoWaters.cells[i].value, expected)
        }
    })
    it('Player one cells should have a _cellId of 0-15', function () {
        for (let i = 0; i < 16; i++) {
            const expected = i
            assert.strictEqual(playerOneWaters.cells[i]._cellId, expected)
        }
    })
    it('Player two cells should have a _cellId of 0-15', function () {
        for (let i = 0; i < 16; i++) {
            const expected = i
            assert.strictEqual(playerTwoWaters.cells[i]._cellId, expected)
        }
    })

    /// Gameplay Tests ///
    // xit('Should be able to place a ship from the fleet of player one in their own waters', function () {
    //     assert.strictEqual(playerOneFleet.undeployed.length, 8)
    //     playerOneFleet.deploy(1, 0, 8)
    //     assert.strictEqual(playerOneFleet.undeployed.length, 7)
    //     assert.strictEqual(playerOneFleet.deployed.length, 1)
    //     assert.strictEqual(playerOneFleet.deployed[0].length[0].location, 0)
    //     assert.strictEqual(playerOneFleet.deployed[0].length[1].location, 1)
    //     assert.strictEqual(playerOneWaters.cells[0].value, 's')
    //     assert.strictEqual(playerOneWaters.cells[1].value, 's')
    //     assert.strictEqual(playerOneWaters.cells[2].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[3].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[4].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[5].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[6].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[7].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[8].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[9].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[10].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[11].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[12].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[13].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[14].value, '_')
    //     assert.strictEqual(playerOneWaters.cells[15].value, '_')
    // })
})
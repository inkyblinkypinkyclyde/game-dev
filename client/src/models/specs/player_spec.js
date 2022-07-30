const assert = require('assert')
const Player = require('../player.js')

describe('Player', function () {
    let player;

    beforeEach(function () {
        playerOne = new Player('Alice')
        playerTwo = new Player('Bob')
    })

    it('Player should have names', function () {
        assert.strictEqual(playerOne.name, 'Alice')
        assert.strictEqual(playerTwo.name, 'Bob')
    })
    it('Each player should be able to start a game and choose grid sizes', function () {
        for (let i = 3; i < 11; i++) {
            playerOne.startGame(i)
            assert.strictEqual(playerOne.gridSize, i)
            assert.strictEqual(playerOne.playerGrid.cells.length, i * i)
            assert.strictEqual(playerOne.playerFleet.undeployed.length, i - 2)
        }
    })
    it('Players should be able to place ships', function () {
        playerOne.startGame(10)
        // console.log(playerOne.playerFleet.undeployed[0])
        console.log(playerOne.playerGrid)
        playerOne.playerGrid.addShot(0)
        console.log(playerOne.playerGrid)
        playerOne.placeShip(0, playerOne.playerFleet.undeployed[0])
        console.log(playerOne.playerGrid)
        playerOne.playerGrid.addShot(0)
        console.log(playerOne.playerGrid)
        // playerOne.placeShip(playerOne.playerFleet.undeployed[0], 0)
        // console.log(playerOne.playerFleet.undeployed)
        // console.log(playerOne.playerFleet.deployed)
    })
})
const assert = require('assert');
const Ship = require('../ship.js');

describe('Ship', function () {
    let ship;

    beforeEach(function () {
        ship = new Ship('Friendly Frigate', 0)
    })

    it('Should have a name', function () {
        const expected = 'Friendly Frigate'
        assert.strictEqual(ship.name, expected)
    })

    it('Should have an ID', function () {
        const expected = 0
        assert.strictEqual(ship._shipId, expected)
    })

    it('Should start as horizontal', function () {
        const expected = true
        assert.strictEqual(ship.horizontal, expected)
    })

    it('Should start as an empty list', function () {
        const expected = []
        assert.deepStrictEqual(ship.length, [])
    })

    it('should be able to add length - checking length - 1', function () {
        ship.addLength(1)
        const expected = 1
        assert.deepStrictEqual(ship.length.length, expected)
    })

    it('should be able to add length - checking length - 2', function () {
        ship.addLength(2)
        const expected = 2
        assert.deepStrictEqual(ship.length.length, expected)
    })

    it('should be able to add length - check contents - 1', function () {
        ship.addLength(1)
        const expected = {
            _cellId: 0,
            location: null,
            shotAt: false,
        }
        assert.deepStrictEqual(ship.length[0], expected)
    })

    it('should be able to add length - check contents - 2', function () {
        ship.addLength(2)
        const expected = {
            _cellId: 1,
            location: null,
            shotAt: false,
        }
        assert.deepStrictEqual(ship.length[1], expected)
    })
    it('should be able to rotate the ship horizontal to vertical', function () {
        ship.rotate()
        const expected = false
        assert.strictEqual(ship.horizontal, expected)
    })
    it('should be able to rotate the ship horizontal to vertical and back to horizontal', function () {
        ship.rotate()
        ship.rotate()
        const expected = true
        assert.strictEqual(ship.horizontal, expected)
    })
    it('should return true for placements in far left column of 4x4 - 1/3', function () {
        const answer = ship.placementLimits(0, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return true for placements in far left column of 4x4 - 2/3', function () {
        const answer = ship.placementLimits(4, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return true for placements in far left column of 4x4 - 3/3', function () {
        const answer = ship.placementLimits(8, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return true for placements in centre left column of 4x4 - 1/3', function () {
        const answer = ship.placementLimits(1, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return true for placements in centre left column of 4x4 - 2/3', function () {
        const answer = ship.placementLimits(5, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return true for placements in centre left column of 4x4 - 3/3', function () {
        const answer = ship.placementLimits(9, 4, 3)
        const expected = true
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in centre right column of 4x4 - 1/3', function () {
        const answer = ship.placementLimits(2, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in centre right column of 4x4 - 2/3', function () {
        const answer = ship.placementLimits(6, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in centre right column of 4x4 - 3/3', function () {
        const answer = ship.placementLimits(10, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in far right column of 4x4 - 1/3', function () {
        const answer = ship.placementLimits(3, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in far right column of 4x4 - 2/3', function () {
        const answer = ship.placementLimits(7, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })
    it('should return false for placements in far right column of 4x4 - 3/3', function () {
        const answer = ship.placementLimits(11, 4, 3)
        const expected = false
        assert.strictEqual(answer, expected)
    })

    it('should place a ship horizontally in any cell', function () {
        ship.addLength(2)
        ship.addLocation(0, 4)
        const expected = [
            {
                _cellId: 0,
                location: 0,
                shotAt: false,
            },
            {
                _cellId: 1,
                location: 1,
                shotAt: false,
            }
        ]
        assert.deepStrictEqual(ship.length, expected)
    })

    xit('should place a ship vertically in any cell', function () {
        ship.addLength(2)
        ship.rotate()
        ship.addLocation(0, 4)
        const expected = [
            {
                _cellId: 0,
                location: 0,
                shotAt: false,
            },
            {
                _cellId: 1,
                location: 4,
                shotAt: false,
            }
        ]
        assert.deepStrictEqual(ship.length, expected)
    })


})
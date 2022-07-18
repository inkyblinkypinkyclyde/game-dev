const Ship = function (
    name,
    _shipId,
) {
    this.name = name;
    this._shipId = _shipId;
    this.horizontal = true
    this.length = []
}

Ship.prototype.addLength = function (addLength) {
    for (let i = 0; i < addLength; i++) {
        this.length.push(
            {
                _cellId: i,
                location: null,
                shotAt: false,
            }
        )
    }
}

Ship.prototype.rotate = function () {
    if (this.horizontal) {
        this.horizontal = false
    } else {
        this.horizontal = true
    }
}

Ship.prototype.placementLimits = function (cellNumber, boardWidth, shipLength) {
    if ((cellNumber % boardWidth) + shipLength <= boardWidth) {
        return true
    } else {
        return false
    }
}

Ship.prototype.addLocation = function (cellNumber, boardWidth) {
    const shipLength = this.length.length
    this.length.map((cell, index) => {
        if (this.horizontal) {
            if (this.placementLimits(cellNumber, boardWidth, shipLength)) {
                cell.location = index
            }
        }
        // if (!this.horizontal){

        // }
    })
}

module.exports = Ship
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

Ship.prototype.placementLimitsHorizontal = function (cellNumber, boardWidth) {
    if ((cellNumber % boardWidth) + this.length.length <= boardWidth) {
        return true
    } else {
        return false
    }
}

Ship.prototype.placementLimitsVertical = function (cellNumber, boardWidth) {
    if ((((boardWidth * boardWidth) - 1) - ((this.length.length - 1) * boardWidth)) >= cellNumber) {
        return true
    } else {
        return false
    }
}

Ship.prototype.placeShipHorizontal = function (cellNumber) {
    this.length.forEach((cell, index) => {
        cell.location = cellNumber + index
    })
}

Ship.prototype.placeShipVertical = function (cellNumber, width) {
    this.length.forEach((cell, index) => {
        cell.location = cellNumber + (width * index)
    })
}

Ship.prototype.addLocation = function (cellNumber, boardWidth, shipLength) {
    if (this.horizontal) {
        if (this.placementLimitsHorizontal(cellNumber, boardWidth, shipLength)) {
            this.placeShipHorizontal(cellNumber)
        }
    } else {
        if (this.placementLimitsVertical(cellNumber, boardWidth, shipLength)) {
            this.placeShipVertical(cellNumber, boardWidth)
        }
    }
}


module.exports = Ship
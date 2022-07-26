const Cell = function (
    _cellId
) {
    this._cellId = _cellId
    this.value = '_'
}

Cell.prototype.addShip = function () {
    this.value = 's'
}

Cell.prototype.removeShip = function () {
    this.value = '_'
}

Cell.prototype.addShot = function () {
    if (this.value === '_') { this.value = 'm' }
    if (this.value === 's') { this.value = 'h' }
}



module.exports = Cell
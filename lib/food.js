var Food = function(board) {
    this.size = 20;
    this.x = Math.round(Math.random(board.width/this.size) * this.size);
    this.y = Math.round(Math.random(board.height/this.size) * this.size);
    this.fillFood(board);
};

Food.prototype.fillFood = function(board) {
    board.ctx.fillStyle = 'pink';
    board.ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
};

module.exports = Food;

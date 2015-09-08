var Snake = function(board) {
    this.colors = ['red', 'green', 'blue', 'indigo', 'violet'];
    this.bodyArray = [];
    this.size = 20;
    var length = 5;
    for(var i = length - 1; i >= 0; i--){
        this.bodyArray.push({ x: i, y: 10 });
    }
    this.fillSnake(board);
};

Snake.prototype.fillSnake = function(board) {
    for(var i = 0; i < this.bodyArray.length; i++) {
        var cell = this.bodyArray[i];
        this.fillCell(cell.x, cell.y, board);
    }
};

Snake.prototype.checkCollision = function(position) {
    for(var i = 0; i < this.bodyArray.length; i++) {
        if(this.bodyArray[i].x === position.x && this.bodyArray[i].y === position.y) {
            return true;
        }
    }
};

Snake.prototype.checkPosition = function(position, board) {
    if( position.x === -1 || position.x === board.width/this.size || position.y === -1 || position.y === board.height/this.size) {
        return true;
    } else {
        return false;
    }
};

Snake.prototype.fillCell = function(x, y, board) {
    board.ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
    board.ctx.fillRect(x * this.size, y * this.size, this.size, this.size);
};

Snake.prototype.getHead = function(){
    return {x: this.bodyArray[0].x,
            y: this.bodyArray[0].y
           };
};

Snake.prototype.newHead = function(cell){
    this.bodyArray.unshift(cell);
};

module.exports = Snake;

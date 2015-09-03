var $ = require('jquery');

var Board = function() {
    this.canvas = $("#canvas")[0];
    this.ctx = this.canvas.getContext("2d");
    this.width = $("#canvas").width();
    this.height = $("#canvas").height();
};

Board.prototype.fillCanvas = function() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.width, this.height);
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(0,0,this.width, this.height);
};

Board.prototype.updateLevel = function(level) {
    $('#level').text('Level ' + level);
};

Board.prototype.updateScore = function(score) {
    $('#score').text('Score: '+ score);
};

module.exports = Board;

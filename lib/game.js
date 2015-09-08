var Board = require('./board');
var $ = require('jquery');
var Food = require('./food');
var Snake = require('./snake');

var Game = function(){
    this.mode = 'normal';
    this.timeOut = undefined;
    this.board = new Board();
    this.board.fillCanvas();
    this.direction = "right";
    this.food = new Food(this.board);
    this.score = 0;
    this.level = 1;
    this.speed = 60;
    this.board.updateLevel(this.level);
    this.board.updateScore(this.score);
    this.snake = new Snake(this.board);
};

Game.prototype.play = function() {
    clearTimeout(this.timeOut);
    this.board.fillCanvas();
    this.food.fillFood(this.board);

    var currentHead = this.snake.getHead();

    var newPosition = this.getDirection(currentHead);

    this.checkIfGameOver(newPosition);

    var newCell = this.getCell(newPosition);

    this.snake.newHead(newCell);
    this.snake.fillSnake(this.board);

    this.timeOut = setTimeout(function(){game.play();}, this.speed);
};

Game.prototype.getDirection = function(position){
    if(this.direction === "right") {
        return {x: (position.x + 1), y: position.y};
    } else if(this.direction === "left") {
        return {x: (position.x - 1), y: position.y};
    } else if(this.direction === "up") {
        return {x: position.x, y: (position.y - 1)};
    } else if(this.direction === "down"){
        return {x: position.x, y: (position.y + 1)};
    }
};

Game.prototype.getCell = function(position){
    if(position.x === this.food.x && position.y === this.food.y && this.mode === 'warp'){
        this.updateScore();
        this.food = new Food(this.board);
        return {x: this.food.x, y: this.food.y};
    } else if(position.x === this.food.x && position.y === this.food.y){
        this.updateScore();
        this.food = new Food(this.board);
        return position;
    } else {
        this.snake.bodyArray.pop();
        return position;
    }
};

Game.prototype.updateScore = function() {
    this.score += 10;
    this.level ++;
    this.speed --;
    this.board.updateScore(this.score);
    this.board.updateLevel(this.level);
};

Game.prototype.checkIfGameOver = function(position){
    if (this.snake.checkCollision(position) || this.snake.checkPosition(position, this.board)){
       this.gameOverScreen();
    }
};

Game.prototype.gameOverScreen = function() {
    var $popUp = $('.overlay');
    $popUp.find('#popupText').text('Game Over!');
    $popUp.find('#scoreInfo').text('Score: ' + this.score + ' Level: ' + this.level);
    $popUp.removeClass('hidden');
    $popUp.find('#startButton').click(function(){
        $popUp.addClass('hidden');
        game = new Game();
    });
};

Game.prototype.startScreen = function(){
    var $popUp = $('.overlay');
    $popUp.find('#popupText').text('Click To Start Snake!');
    $popUp.toggleClass('hidden');
    $popUp.find('#startButton').click(function(){
        $popUp.toggleClass('hidden');
        game.play();
    });
};

$(document).keydown(function(event){
    if (event.which === 39 && game.direction !== "left"){
        event.preventDefault();
        game.direction = "right";
    }else if(event.which === 37 && game.direction !== "right"){
        event.preventDefault();
        game.direction = "left";
    }else if(event.which === 38 && game.direction !== "down"){
        event.preventDefault();
        game.direction = "up";
    }else if(event.which === 40 && game.direction !== "up"){
        event.preventDefault();
        game.direction = "down";
    }else if(event.which === 87) {
        event.preventDefault();
        if(game.mode === 'normal'){
            game.mode = 'warp';
        }else {
            game.mode = 'normal';
        }
    }
});

var game = new Game();
game.startScreen();

module.exports = Game;

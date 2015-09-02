var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width = $("#canvas").width();
var height = $("#canvas").height();

var colors = ['red', 'green', 'blue', 'indigo', 'violet'];
var cellWidth = 20;
var direction;
var gameTimeOut;
var food;
var score;
var mode;
var gameSpeed;

function Snake() {
    this.bodyArray = [];
    var length = 5;
    for(var i = length - 1; i >= 0; i--){
        this.bodyArray.push({ x: i, y: 10 });
    }
    fillSnake(this);
};

function Food() {
    this.x = Math.round(Math.random(width/cellWidth) * cellWidth);
    this.y = Math.round(Math.random(height/cellWidth) * cellWidth);
    fillFood(this);
};

function fillFood(food) {
    fillCell(food.x, food.y);
};

function fillSnake(snake) {
    for(var i = 0; i < snake.bodyArray.length; i++) {
        var cell = snake.bodyArray[i];
        fillCell(cell.x, cell.y);
    }
};

function moveSnake(snake) {
    clearTimeout(gameTimeOut);
    fillCanvas();
    fillFood(food);

    var newX = snake.bodyArray[0].x;
    var newY = snake.bodyArray[0].y;


    if(direction === "right") {
        newX ++;
    } else if(direction === "left") {
        newX --;
    } else if(direction === "up") {
        newY --;
    } else if(direction === "down"){
        newY ++;
    }

    var newCell = determineCell(snake, newX, newY);

    checkPosition(newX, newY);
    checkCollision(snake.bodyArray, newX, newY);

    snake.bodyArray.unshift(newCell);
    fillSnake(snake);

    gameTimeOut = setTimeout(function(){moveSnake(snake);}, gameSpeed);
};

function determineCell(snake, x, y){
    var cell = {x: x, y: y};
    if(cell.x == food.x && cell.y == food.y && mode == 'warp'){
        updateScore();
        food = new Food();
        return {x: food.x, y: food.y};
    } else if(cell.x == food.x && cell.y == food.y){
        updateScore();
        food = new Food();
        return cell;
    } else {
        snake.bodyArray.pop();
        return cell;
    }
}

function updateScore() {
    score += 10;
    gameSpeed --;
    updateScoreText();
};

function updateScoreText() {
    $('#score').text('Score: '+ score);
};

function checkPosition(x, y) {
    if( x == -1 || x == width/cellWidth || y == -1 || y == height/cellWidth) {
        resetGame();
    }
};

function checkCollision(array, x, y) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].x == x && array[i].y == y) {
            resetGame();
        }
    }
};

function resetGame(){
    clearTimeout(gameTimeOut);
    init();
};

function fillCell(x, y) {
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
};

function fillCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,width, height);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0,0,width, height);
}

$(document).keydown(function(event){
    if (event.which === 39 && direction !== "left"){
        direction = "right";
    }else if(event.which === 37 && direction !== "right"){
        direction = "left";
    }else if(event.which === 38 && direction !== "down"){
        direction = "up";
    }else if(event.which === 40 && direction !== "up"){
        direction = "down";
    }else if(event.which == 87) {
        if(mode == 'normal'){
            mode = 'warp';
        }else {
            mode = 'normal';
        }
    }
});


function init(){
    fillCanvas();
    direction = "right";
    food = new Food();
    mode = 'normal';
    score = 0;
    gameSpeed = 60;
    updateScoreText();
    var snake = new Snake();
    moveSnake(snake);
};

init();

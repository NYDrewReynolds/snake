var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width = $("#canvas").width();
var height = $("#canvas").height();

var colors = ['red', 'green', 'blue', 'indigo', 'violet'];
var cellWidth = 20;
var direction;
var gameTimeOut;

function Snake() {
    this.bodyArray = [];
    var length = 5;
    for(var i = length - 1; i >= 0; i--){
        this.bodyArray.push({ x: i, y: 10 });
    }
    fillSnake(this);
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

    var tail = snake.bodyArray.pop();
    tail.x = newX;
    tail.y = newY;

    checkPosition(newX, newY);

    snake.bodyArray.unshift(tail);
    fillSnake(snake);

    gameTimeOut = setTimeout(function(){moveSnake(snake);}, 50);
};

function checkPosition(x, y) {
    if( x == -1 || x == width/cellWidth || y == -1 || y == Math.round( height/cellWidth ) ) {
        clearTimeout(gameTimeOut);
        console.log('game over');
        init();
    }
};

function fillCell(x, y) {
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
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
    }
});


function init(){
    fillCanvas();
    direction = "right";
    var snake = new Snake();
    moveSnake(snake);
};

init();

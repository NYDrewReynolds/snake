var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width = $("#canvas").width();
var height = $("#canvas").height();

var colors = ['red', 'green', 'blue', 'indigo', 'violet'];
var snake_array = [];
var cellWidth = 20;
var direction;
var gameLoop;

function createSnake() {
    var length = 5;
    for(var i = length-1; i >= 0; i--){
        snake_array.push({ x: i, y: 10 });
    }
    fillSnake();
};

function fillSnake() {
    for(var i = 0; i < snake_array.length; i++) {
        var cell = snake_array[i];
        fillCell(cell.x, cell.y);
    }
};

function moveSnake() {
    fillCanvas();

    var newX = snake_array[0].x;
    var newY = snake_array[0].y;

    if(direction === "right") {
        newX ++;
    } else if(direction === "left") {
        newX --;
    } else if(direction === "up") {
        newY --;
    } else if(direction === "down"){
        newY ++;
    }

    var tail = snake_array.pop();
    tail.x = newX;
    tail.y = newY;

    checkPosition(newX, newY);

    snake_array.unshift(tail);
    fillSnake();
};

function checkPosition(x, y) {
    if( x == -1 || x == width/cellWidth || y == -1 || y == height/cellWidth ) {
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
    direction = "right";
    createSnake();
    if(typeof(gameLoop) !== "undefined"){
        window.clearInterval(gameLoop);
    };
    gameLoop = window.setInterval(moveSnake, 50);
};

init();

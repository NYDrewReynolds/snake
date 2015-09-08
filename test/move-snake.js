const chai = require('chai');
const assert = chai.assert;
var $ = require('jquery');
var Board = require('../lib/board.js');
var Snake = require('../lib/snake.js');

describe('Snake moves', function () {
  xit('to the right', function () {
    var board = new Board();
    var snake = new Snake(board);
    var x = snake.bodyArray[0].x;
    var y = snake.bodyArray[0].y;

    snake.moveSnake(snake);

    var newX = snake.bodyArray[0].x;
    var newY = snake.bodyArray[0].y;

    expect(newX).to.equal(x+1);
    expect(newY).to.equal(y);
  });

  xit('to the left', function () {
    var x = snake.bodyArray[0].x;
    var y = snake.bodyArray[0].y;

    direction = "left";
    moveSnake(snake);

    var newX = snake.bodyArray[0].x;
    var newY = snake.bodyArray[0].y;

    expect(newX).to.equal(x-1);
    expect(newY).to.equal(y);
  });

  xit('up', function () {
    var x = snake.bodyArray[0].x;
    var y = snake.bodyArray[0].y;

    direction = "up";
    moveSnake(snake);

    var newX = snake.bodyArray[0].x;
    var newY = snake.bodyArray[0].y;

    expect(newX).to.equal(x);
    expect(newY).to.equal(y-1);
  });

  xit('down', function () {
    var x = snake.bodyArray[0].x;
    var y = snake.bodyArray[0].y;

    direction = "down";
    moveSnake(snake);

    var newX = snake.bodyArray[0].x;
    var newY = snake.bodyArray[0].y;

    expect(newX).to.equal(x);
    expect(newY).to.equal(y+1);
  });
});

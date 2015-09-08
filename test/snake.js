const chai = require('chai');
const assert = chai.assert;
var $ = require('jquery');
var Board = require('../lib/board.js');
var Snake = require('../lib/snake.js');
var Game = require('../lib/game.js');

describe('Snake', function () {
  it('always starts in the same place', function () {
    var board = new Board();
    var snakeOne = new Snake(board);
    var snakeOneX = snakeOne.bodyArray[0].x;
    var snakeOneY = snakeOne.bodyArray[0].y;

    var snakeTwo = new Snake(board);
    var snakeTwoX = snakeTwo.bodyArray[0].x;
    var snakeTwoY = snakeTwo.bodyArray[0].y;
    assert.equal(snakeOneX, snakeTwoX)
    assert.equal(snakeOneY, snakeTwoY)
  });

  it('starts with a length of 5', function () {
    var board = new Board();
    var snake = new Snake(board);
    assert.equal(snake.bodyArray.length, 5)
  });

});

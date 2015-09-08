const chai = require('chai');
const assert = chai.assert;
var $ = require('jquery');
var Board = require('../lib/board.js');
var Food = require('../lib/food.js');

describe('Food', function () {
  it('can be created', function () {
    var board = new Board();
    var food = new Food(board);
    assert(food);
  });

  it('is in a random location', function () {
    var board = new Board();
    var foodOne = new Food(board);
    var foodTwo = new Food(board);
    assert.notEqual(foodOne.x, foodTwo.x)
    assert.notEqual(foodOne.y, foodTwo.y)
  });

});

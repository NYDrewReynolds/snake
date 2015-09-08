const chai = require('chai');
const assert = chai.assert;
var $ = require('jquery');
var Board = require('../lib/board.js');

describe('Creating new board', function () {

  it('has a set height', function () {
    var board = new Board();
    assert.equal(board.height, 460)
  });

  it('has a set width', function () {
    var board = new Board();
    assert.equal(board.width, 800)
  });

  it('has a black background', function () {
    var board = new Board();
    assert.equal(board.ctx.strokeStyle, '#000000')
  });
});

const chai = require('chai');
const assert = chai.assert;
var $ = require('jquery');
var Game = require('../lib/game.js');

describe('Game mode', function () {
  it("starts as 'normal'", function () {
    var game = new Game();
    assert.equal(game.mode, 'normal');
  });

  it("can be changed to 'warp'", function () {
    var game = new Game();
    assert.equal(game.mode, 'normal');
    game.mode = 'warp'
    assert.equal(game.mode, 'warp');
  });
});

const chai = require('chai');
const assert = chai.assert;
require('./move-snake.js');
require('./eat-food.js');
require('./game-mode.js');
require('./create-board.js');
require('./game-over.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

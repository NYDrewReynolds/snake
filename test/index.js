const chai = require('chai');
const assert = chai.assert;
require('./move-snake.js');
require('./eat-food.js');
require('./game-mode.js');
require('./create-board.js');
require('./game-over.js');
var $ = require('jquery');

$('#canvas').hide();
$('h1').hide();
$('h3').hide();

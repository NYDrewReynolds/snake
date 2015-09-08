const chai = require('chai');
const assert = chai.assert;
require('./snake.js');
require('./food.js');
require('./game-mode.js');
require('./create-board.js');
var $ = require('jquery');

$('#canvas').hide();
$('h1').hide();
$('h3').hide();

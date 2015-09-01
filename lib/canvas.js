var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();

function paintCanvas() {
	ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
	ctx.fillRect(0,0,w,h);
	ctx.strokeStyle = 'black';
	ctx.stokeRect(0,0,w,h);
}

var colors = ['red', 'green', 'blue', 'indigo', 'violet']

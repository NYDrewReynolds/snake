describe('Creating new board', function () {
  xit('has a set height', function () {
    expect(board.height).to.equal(460)
  });

  xit('has a set width', function () {
    expect(board.width).to.equal(800)
  });

  xit('has a black background', function () {
    // board.fillCanvas();
    expect(board.fillStyle).to.equal('black')
  });
});

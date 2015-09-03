describe('Eating food', function () {
  xit('makes snake longer', function () {
    expect(snake.bodyArray.length).to.equal(5)
    // new Food
    // snake.determineCell() to = food x,y
    expect(snake.bodyArray.length).to.equal(6)
  });

  xit('updates score', function () {
    expect(score).to.equal(0)
    // new Food
    // snake.determineCell() to = food x,y
    expect(score).to.equal(10)
  });

  xit('updates level', function () {
    expect(level).to.equal(1)
    // new Food
    // snake.determineCell() to = food x,y
    expect(level).to.equal(2)
  });
});

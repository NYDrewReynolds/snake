describe('Game mode', function () {
  xit("starts as 'normal'", function () {
    assert(true);
  });

  xit("can be changed to 'warp'", function () {
    expect(mode).to.equal('normal');
    // Press W
    expect(mode).to.equal('warp');
  });
});

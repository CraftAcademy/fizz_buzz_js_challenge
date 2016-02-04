describe("FizzBuzz - Unit tests", function() {
  var game;

  beforeEach(function() {
    game = new FizzBuzz( {number: 9, divisor: 3});
  });

  it("should have number value of 9", function() {
    expect(game.number).toEqual(9);
  });
  //place your specs here
});

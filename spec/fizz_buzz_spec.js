describe("FizzBuzz - Unit tests", function() {
  var slot;
  var game;

  beforeEach(function() {
    slot = new FizzBuzz();
    game = new Game({number: 6});
    game_2 = new Game({number: 10});
    game_3 = new Game({number: 30});
    game_4 = new Game({number: 26});
  });

  it("check if 9 is divisable by 3 ", function() {
    expect(slot._hasZeroReminder(9,3)).toEqual(true);
  });

  it("check if number is divisable by 3", function() {
    //slot._hasZeroReminder(game, 3);
    expect(game.divisibleByThree).toEqual(2);
  });

  it("check if number is divisable by 5", function() {
    slot._hasZeroReminder(game, 3);
    expect(game.divisibleByThree).toEqual(2);
  });

  it("check if number is divisable by 15", function() {
    slot._hasZeroReminder(game, 3);
    expect(game.divisibleByThree).toEqual(2);
  });
});

describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game({number: 6});
    game_2 = new Game({number: 10});
    game_3 = new Game({number: 30});
  });

  it("should have number as 6", function() {
    expect(game.number).toEqual(6);
  });

  it("should calculate fizz_buzz value", function() {
  game.cal_fizz_buzz();
  expect(game.fizz_buzz).toEqual('Fizz')
  });

  it("should calculate fizz_buzz value", function() {
  game_2.cal_fizz_buzz();
  expect(game_2.fizz_buzz).toEqual('Fizz')
  });

  it("should calculate fizz_buzz value", function() {
  game_3.cal_fizz_buzz();
  expect(game_3.fizz_buzz).toEqual('Fizz')
  });
});

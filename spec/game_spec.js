describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game({number: 6});
    game_2 = new Game({number: 10});
    game_3 = new Game({number: 30});
    game_4 = new Game({number: 26});
  });

  it("should have number as 6", function() {
    expect(game.number).toEqual(6);
  });

  it("should return fizz when number = 6 ", function() {
  game.cal_fizz_buzz();
  expect(game.fizz_buzz).toEqual('Fizz')
  });

  it("should return buzz when number = 10 ", function() {
  game_2.cal_fizz_buzz();
  expect(game_2.fizz_buzz).toEqual('Buzz')
  });

  it("should return fizz buzz when number = 30", function() {
  game_3.cal_fizz_buzz();
  expect(game_3.fizz_buzz).toEqual('FizzBuzz')
  });

  it("should return same number when number = 26", function() {
  game_3.cal_fizz_buzz();
  expect(game_4.fizz_buzz).toEqual(26)
  });
  
});

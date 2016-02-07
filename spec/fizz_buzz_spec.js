describe("FizzBuzz - Unit tests", function() {
  var game;

  beforeEach(function() {
    game = new FizzBuzz();
    divisable_check = (9,3)
    try_1 = (12)
    try_2 = (20)
    try_3 = (45)
    try_4 = (26)
  });

  it("check if 9 is divisable by 3 ", function() {
    expect(game._hasZeroReminder(10,2)).toEqual(true);
  });

  it("check if number is divisable by 3", function() {
    expect(game.divisibleByThree(try_1)).toEqual(true);
  });

  it("check if number is divisable by 5", function() {
    expect(game.divisibleByFive(try_2)).toEqual(true);
  });

  it("check if number is divisable by 15", function() {
    expect(game.divisibleByFifteen(try_3)).toEqual(true);
  });

  it("return fizz if number is divisable by 3", function() {
    expect(game.fizz_buzz(try_1)).toEqual("Fizz");
  });

  it("return buzz if number is divisable by 5", function() {
    expect(game.fizz_buzz(try_2)).toEqual("Buzz");
  });

  it("return fizzbuzz if number is divisable by 3 & 5 ", function() {
    expect(game.fizz_buzz(try_3)).toEqual("FizzBuzz");
  });

  it("return same number if number is not divisable by 3 or 5", function() {
    expect(game.fizz_buzz(try_4)).toEqual(26);
  });
});

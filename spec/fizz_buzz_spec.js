
describe("FizzBuzz - Unit tests", function() {
  var game;

  beforeEach(function() {
    game = new FizzBuzz();
    divisable_check = (9,3)
       test_1 = (15)
       test_2 = (20)
       test_3 = (45)
       test_4= (4)
     });


     it("check if 9 is divisable by 3 has zero reminder ", function() {
       expect(game._hasZeroReminder(9,3)).toEqual(true);
     });

     it("check if number is divisable by 3", function() {
       expect(game.divisibleByThree(6)).toEqual(true);
     });

     it("check if number is divisable by 5", function() {
       expect(game.divisibleByFive(20)).toEqual(true);
     });

     it("check if number is divisable by 15", function() {
       expect(game.divisibleByFifteen(30)).toEqual(true);
     });

     it("return fizz if number is divisable by 3", function() {
       expect(game.fizz_buzz(6)).toEqual("Fizz");
     });

     it("return buzz if number is divisable by 5", function() {
       expect(game.fizz_buzz(20)).toEqual("Buzz");
     });

     it("return fizzbuzz if number is divisable by 3 & 5 ", function() {
       expect(game.fizz_buzz(15)).toEqual("FizzBuzz");
     });
     it("return same number if number is not divisable by 3 or 5", function() {
       expect(game.fizz_buzz(test_4)).toEqual(4);
     });

   });

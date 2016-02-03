describe('FizzBuzz - Acceptance tests', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });
  //Add your specs here. We've added some it blocks for you to consider

  it("displays Fizz if entred value is divisible with 3", function() {
    //place your expectation here
  });

  it("displays Buzz if entred value is divisible with 5", function() {
    //place your expectation here
  });

  it("displays FizzBuzz if entred value is divisible with 15", function() {
    //place your expectation here
  });
});

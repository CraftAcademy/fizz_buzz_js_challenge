describe('FizzBuzz - Acceptance tests', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('Should give a fizz response', function() {
    beforeEach(function() {
      $('#Number').val('12');
      $('#calculate').trigger('click');
    });

    it("displays Fizz if input is divisible by 3", function() {
      expect($('#display_message').text()).toEqual('Yeah! You got a Fizz response!');
    });
  });


  describe('Should give a buzz response', function() {
    beforeEach(function() {
      $('#Number').val('25');
      $('#calculate').trigger('click');
    });

    it("displays Buzz if input is divisible by 5", function() {
      expect($('#display_message').text()).toBe('Yeah! You got a Buzz response!');
    });
  });

  describe('Should give a fizz_buzz response', function() {
    beforeEach(function() {
      $('#Number').val('15');
      $('#calculate').trigger('click');
    });

    it("displays FizzBuzz if input is divisible by 5 and 3", function() {
      expect($('#display_message').text()).toBe('Yeah! You got a FizzBuzz response!');
    });
  });

  describe('it should give the number', function() {
    beforeEach(function() {
      $('#Number').val('7');
      $('#calculate').trigger('click');
    });

    it("displays same number if input isn't  divisible by 3 or 5", function() {
      expect($('#display_message').text()).toBe('Yeah! You got a 7 response!');
    });
  });
});

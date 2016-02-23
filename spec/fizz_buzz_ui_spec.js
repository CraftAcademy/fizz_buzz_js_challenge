describe('FizzBuzz - Acceptance tests', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);

    describe('test_1', function() {
      beforeEach(function() {
        $('#input').val('12');
        $('#calculate').trigger('click');
      });

      it("displays Fizz if input is divisible by 3", function() {
        expect($('#display_message').text()).toEqual('Yeah! You got a Fizz response!');
      });
    });

    //
    // describe('test_2', function() {
    //   beforeEach(function() {
    //     $('#input').val('25');
    //     $('#calculate').trigger('click');
    //   });
    //
    //   it("displays Buzz if input is divisible by 5", function() {
    //     expect($('#display_message').text()).toBe('Yeah! You got a Buzz response!');
    //   });
    // });
    //
    // describe('test_3', function() {
    //   beforeEach(function() {
    //     $('#input').val('15');
    //     $('#calculate').trigger('click');
    //   });
    //
    //   it("displays FizzBuzz if input is divisible by 5 and 3", function() {
    //     expect($('#display_message').text()).toBe('Yeah! You got a FizzBuzz response!');
    //   });
    // });
    //
    // describe('test_4', function() {
    //   beforeEach(function() {
    //     $('#input').val('7');
    //     $('#calculate').trigger('click');
    //   });
    //
    //   it("displays same number if input isn't  divisible by 3 or 5", function() {
    //     expect($('#display_message').text()).toBe('Yeah! You got a 7 response!');
    //   });
    // });
  });
});

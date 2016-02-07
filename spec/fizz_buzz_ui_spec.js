describe('FizzBuzz - Acceptance tests', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);

  describe('try_1', function() {
      beforeEach(function() {
        $('#input').val('12');
        $('#calculate').trigger('click');
      });

      it("displays Fizz if input is divisible by 3", function() {
        expect($('#display_message').text()).toBe('you just got Fizz');
      });
    });


  describe('try_2', function() {
      beforeEach(function() {
        $('#input').val('25');
        $('#calculate').trigger('click');
      });

      it("displays Buzz if input is divisible by 3", function() {
        expect($('#display_message').text()).toBe('you just got Buzz');
      });
    });

  describe('try_3', function() {
      beforeEach(function() {
        $('#input').val('12');
        $('#calculate').trigger('click');
      });

      it("displays FizzBuzz if input is divisible by 3", function() {
        expect($('#display_message').text()).toBe('you just got FizzBuzz');
      });
    });

    describe('try_4', function() {
        beforeEach(function() {
          $('#input').val('26');
          $('#calculate').trigger('click');
        });

        it("displays same number if input is divisible by 3", function() {
          expect($('#display_message').text()).toBe('you just got 26');
        });
      });
  });
});

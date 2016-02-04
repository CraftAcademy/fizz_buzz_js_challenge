function Game(attr) {
  this.number = attr.number;
};

Game.prototype.cal_fizz_buzz = function() {
  calculator = new FizzBuzz();
  calculator.fizz_buzz(this);
};

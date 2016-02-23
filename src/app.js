$(document).ready(function() {
  $('#calculate').click(function() {
    var number = parseFloat($('#Number').val());
    var game = new FizzBuzz({
      number: number
    })
    element = $('#display_message');
    var output = game.fizz_buzz(number)
    change_class(output);
    element.html('Yeah! You got a ' + output + ' response!');
  });
});

function change_class(output) {
  switch (output) {
    case 'FizzBuzz':
      element.attr('class', '').addClass('alert alert-success');
      break;
    case 'Fizz':
      element.attr('class', '').addClass('alert alert-info');
      break;
    case 'Buzz':
      element.attr('class', '').addClass('alert alert-warning');
      break;
    default:
      element.attr('class', '').addClass('alert');

  }

}

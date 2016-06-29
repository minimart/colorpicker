$('document').ready(function(){
  $('.game').append('<div class=blue >blue</div>');
  $('.blue').css({
    'background-color': 'blue',
    'height': '250px',
    'width': '250px',
    'color': 'transparent',});
  $('.game').append('<div class=red >red</div>')
  $('.red').css({
    'background-color': 'red',
    'height': '250px',
    'width': '250px',
    'color': 'transparent',
    });
  $('.game').append('<div class=green >green</div>')
  $('.green').css({
    'background-color': 'green',
    'height': '250px',
    'width': '250px',
    'color': 'transparent',
    });
  $('.game').append('<div class=yellow >yellow</div>')
  $('.yellow').css({
    'background-color': 'yellow',
    'height': '250px',
    'width': '250px',
    'color': 'transparent',
    });
    $('.game').css('display', 'flex')
    var colorArray = ["red", "blue", "yellow", "green"];
    var randomIndex = Math.floor(Math.random() * colorArray.length);
    var randomColor = colorArray[randomIndex];

$('.prompt').append('<h2>Please pick the ' + randomColor + ' colored square.</h2>')
$('.game').on('click', function(){
    var picked = event.target.className;
  if (randomColor === picked){
    $('h3').text("Good job!");
  } else{
    $('h3').text("Try again.")
  };

})
 });

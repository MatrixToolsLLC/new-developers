$(function () {
  console.log('Scripts are loaded.');

  $('.blue-square').click(function() {
    alert('blue square was clicked');
    window.location = 'dog-world.html'
  });
  $('.red-square').click(function() {
    alert('red square was clicked');
    window.location = 'mario.html'
  });
  $('.green-square').click(function() {
    alert('green square was clicked');
    window.location = 'zelda.html'
  });
  $('.yellow-square').click(function() {
    alert('yellow square was clicked');
    window.location = 'reverse-flash.html'
  });
})
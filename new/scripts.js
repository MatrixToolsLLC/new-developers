$(function () {
  $('.blue-square').click(function() {
    alert('blue square was clicked');
    window.location = './dogs-vs-dragons/gameboard.html'
  });

  $('.red-square').click(function() {
    alert('red square was clicked');
    window.location = './mario/mario.html'
  });

  console.log('Scripts are loaded.');
})
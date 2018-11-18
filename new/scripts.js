$(function () {
  console.log('Scripts are loaded.');

  $('.blue-square').click(function() {
    alert('blue square was clicked');
    window.location = 'dog-world.html'
  });
})
$(function () {
  console.log('Gameboard Scripts are loaded.');
  $('.turn-blue').click(function(){
    $(this).css('background-color', 'blue')
  });
  $('.dancing').click(function(){
    $(this).animate({left:'250px'});
  });
});
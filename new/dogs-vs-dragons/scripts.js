$(function () {
  console.log('Gameboard Scripts are loaded.');
  $('.turn-blue').click(function(){
    $(this).css('background-color', 'blue')
  });
  $('.dancing').click(function(){
    var dance = $('.dancing');
    dance.animate({right: '250px'});
    dance.animate({bottom: '50px'});
    dance.animate({left: '250px'});
    dance.animate({top: '400px'});
    dance.animate({left: '700px'});
    $('.dancing').promise().done(function() {
      $('.dancing').hide();
      $('*').hide(500);
    });
  });
});
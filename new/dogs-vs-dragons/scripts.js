$(function () {
  console.log('Gameboard Scripts are loaded.');
})
$(document).ready(function(){
  $(".red").click(function(){
    $(this).css("background-color", "blue");
  });
});
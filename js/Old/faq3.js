$(document).ready(function(){
  $('.answer').hide();
  $('#main h2').click(function(){
     $(this).next('.answer').toggle();
  });
//  $('#main h2').click(function(){alert($(this).next('.answer').html())});
});

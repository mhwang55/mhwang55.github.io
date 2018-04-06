$(document).ready(function(){
  $('.answer').hide();
  $('#main h2').toggle(
  function(){
    $(this).next('.answer').fadeIn();
    $(this).addClass('close');
    },
    function(){
    $(this).next('.answer').fadeOut();
    $(this).removeClass('close');
    }
  );
});

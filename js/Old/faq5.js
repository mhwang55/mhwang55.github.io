$(document).ready(function(){
  $('.answer').hide();
  $('#main h2').click(
    function(){$(this).next('.answer').toggle(
      function(){
        $(this).next('.answer').fadeIn();
      },
      function(){
      $(this).next('.answer').fadeOut();
      }
   );
   $(this).toggleClass('close');
  });
});


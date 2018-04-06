$(document).ready(function(){
  $('.answer').hide();
  $('#main h4').click(
     function(){$(this).next('.answer').fadeToggle(
         500, "linear" 
     );
     $(this).toggleClass('close');
  });
});


$(document).ready(function(){
  $('.answer').hide();
  $('#main h2').click(function(){$(this).next('.answer').toggle(
//   function(){
//    $(this).next('.answer').fadeIn();
//    $(this).fadeIn();
//    var $heading=$(this).prev('h2') ;
//console.log($heading) ;
//    $($heading).addClass('close');
//    },
   function(){
//    $(this).next('.answer').fadeOut();
    $(this).fadeOut();
    var $heading=$(this).prev('h2') ;
console.log($heading) ;
//    $($heading).removeClass('close');
    }
   );
  });
});


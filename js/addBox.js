$(document).ready(function(){
  $("#tabs a").click(function(){
      $("#tabs a").removeClass("youarehere");
      $(this).toggleClass("youarehere");
//      return false;
  });
});

// This will execute whenever the window is resized
$(window).resize(function() {
  $(window).height(); // New height
  var w = $(window).width(); // New width
  if(w<630)
  {
    $('.statsExp').addClass('const');
  }
  else
  {
    $('.statsExp').removeClass('const');
  }
});

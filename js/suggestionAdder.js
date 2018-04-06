$(document).ready(function() {
  $( "#searchBox" ).autocomplete({
    source: "/cgi-bin/suggestions.pl",
    minLength: 2,
  });
}); 

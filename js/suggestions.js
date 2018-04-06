$(document).ready(function() {
//  $( "#searchBox" ).autocomplete({
  $( ".suggestionAdder" ).autocomplete({
    source: "/cgi-bin/suggestions.pl",
    minLength: 2,
  });
}); 

$(document).ready(function(){
  //creates query string
  $('#submitAnswer').submit(function(){
    var formData=$('#postAnswer').serialize();

    $.post('/cgi-bin/postAnswer.pl', formData, createAnswer).error(errorResponse);

    return false; //stop the link
  });
});

function createAnswer(data){
  var answer;
//  var data=$('textarea#blog').val();
  answer="<div id='aMain'>\n<div id='aBody'>\n<span>";
  answer+=data;
  answer+="</span>\n</div><!--end of id \"aBody\"-->\n</div><!--end of id \"aMain\"-->\n";
//  $('#answer').html(answer);
  if(data){
    $('#answer').append(answer);
  }
}

function errorResponse(){
  var errorMsg="";
  errorMsg+="Please try again later.";
  alert(errorMsg);
}

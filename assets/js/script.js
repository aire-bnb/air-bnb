var windowC = $(window);
var displayed = false;
windowC.on('scroll resize load', CheckIfInView);
windowC.on('load', Hide);
function Hide() {
  $('#navbar').hide();
}

function CheckIfInView() {
  var divHeight = $('#head').height();
  if(window.pageYOffset > divHeight && !displayed)
  {
    displayed = true;
    $('#navbar').show();
  }
  else if(window.pageYOffset < divHeight && displayed)
  {
    displayed = false;
    $('#navbar').hide();
  }
}

$(document).ready(function() {
  var par = $('.butt');
  $(par).hide();
  
  $('b.burger-nav').click(function(e) {
  	  //$(par).toggleClass('open');
      $(par).slideToggle(700);
      e.preventDefault();
  });
});

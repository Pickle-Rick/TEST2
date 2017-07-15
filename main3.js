function main() {
  $('b.burger-nav').on('click', function() {
    $('.butt').toggleClass('open');
    $('.butt').slideToggle(700);
  });
}
$(document).ready(main);

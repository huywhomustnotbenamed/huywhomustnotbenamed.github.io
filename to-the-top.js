$(document).ready(function(){
  $('.scrollToTop').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  $('.scrollToTop').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop : 0}, 300);
    return false;
  });
});
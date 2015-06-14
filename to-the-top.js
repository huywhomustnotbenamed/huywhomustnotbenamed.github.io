$(document).ready(function(){
  $('.scrollToTop').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  $('.scrollToTop').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 400);
    return false;
  });
  $('.contact').click(function(event){
    event.preventDefault();
    console.log("hi");
    $("html, body").animate({scrollTop: $(document).height()}, 400);
    return false;
  });
});
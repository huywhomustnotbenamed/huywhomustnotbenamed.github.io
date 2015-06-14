$(document).ready(function(){
   $("#toTop").css("display", "none");
   $(window).scroll(function(){
   if($(window).scrollTop() > 0){
   $("#toTop").fadeIn("slow");
   } else {
   console.log("is less");
   $("#toTop").fadeOut("slow");
  }
 });
});

 $("#toTop").click(function(){
 event.preventDefault();
 $("html, body").animate({
 scrollTop:0
 },"slow");
});
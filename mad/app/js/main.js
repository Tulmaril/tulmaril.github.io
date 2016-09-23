$(document).ready(function(){
	console.log('jquery load test');
});

$('.menu-toggle').click(function(){
	$('.header__menu-nav').slideToggle();
});

$(window).load(function() {
    setTimeout(function() {
        $(".helper").fadeToggle();
    }, 500);
});

$(".helper__close").click(function () {
      $(".helper").fadeOut("slow");
    });
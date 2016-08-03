$(document).ready(function(){
	console.log('jquery load test');
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function(){

  var owl = $("#owl-demo");
 
  owl.owlCarousel();

  $(".slider__prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".slider__next").click(function(){
    owl.trigger('owl.next');
  })
});

// toggle menu

$('#toggle').click(function(e){
    $(this).toggleClass('on');
  $('#menu').fadeToggle();
});

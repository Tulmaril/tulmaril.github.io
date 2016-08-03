$(document).ready(function(){
	console.log('jquery load test');
});


$('.toggle-mnu').click(function(){
	$('.burger').toggleClass("on");
	$('.menu').fadeToggle();
});

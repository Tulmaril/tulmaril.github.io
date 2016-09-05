$(document).ready(function(){
	console.log('jquery load test');
});

$(function(){
	$('#product__slider').Thumbelina({
		orientation:'vertical',         // Use vertical mode (default horizontal).
		$bwdBut:$('#product__slider .top'),     // Selector to top button.
		$fwdBut:$('#product__slider .bottom')   // Selector to bottom button.
	});
});

$('.product__information-more').click(function(){
	$('.product__information-ins').slideToggle();
});

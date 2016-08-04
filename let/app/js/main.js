$(document).ready(function(){
	console.log('jquery load test');
});

$(document).ready(function() { 
	$('.fancybox').fancybox({ 
		helpers: { 
			overlay: { 
				locked: false
			} 
		} 
	}); 
});

var animate = {
	'time': 500,
	'randMin': 1000,
	'randMax': 1200
};

(function($) {
	
	function rand(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}
	
	var defaults = {
		'randMin': 200,
		'randMax': 200,
		'time':	200
	};
	
	$(function() {
		
		var settings = $.extend(defaults, animate); 

		$('a.animate').click(function(e) {
			e.preventDefault();

			var obj = $(this);
			var time = settings.time;

			if(obj.hasClass('rand')) {

				time = rand(settings.randMin, settings.randMax);

			} else {

				var result = /time[0-1]+/.exec(obj.attr('class'));
				if(result)
					time = parseInt(new String(result).replace('time', ''));

			}

			$('html, body').animate({
				scrollTop: $(obj.attr('href')).offset().top
			}, 200);

		});
	
	});


})(jQuery);
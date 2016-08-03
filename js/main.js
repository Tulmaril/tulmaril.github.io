$(document).ready(function(){
	console.log('jquery load test');
});

/* 
 Setup and Paint your lazyline! 
 */ 
$(document).ready(function(){

					var $logo = $('#logo');

					/**
					 * Setup your Lazy Line element.
					 * see README file for more settings
					 */

		            $logo.lazylinepainter({
		                'svgData': svgData,
		                'strokeWidth': 2,
		                'strokeColor': '#fff',
                        'drawSequential': true,
                        'ease': 'easeOutSine'
		            });

                    setTimeout(function(){
                        $logo.lazylinepainter('paint');
                    }, 10)
				});
$(window).load(function(){
	setTimeout(function(){
		$("#testt1").fadeToggle();
	}, 4100);
});

$(window).load(function(){
	setTimeout(function(){
		$("#testt2").fadeToggle();
	}, 4300);
});

$(window).load(function(){
	setTimeout(function(){
		$("#testt3").fadeToggle();
	}, 4500);
});
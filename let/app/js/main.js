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

 
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

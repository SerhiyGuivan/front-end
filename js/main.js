(function($) {
	$(document).ready(function(){
		$("#map-wrap").on("shown.bs.collapse", function () {
			var currCenter = map.getCenter();
			google.maps.event.trigger(map, 'resize'); 
			map.setCenter(currCenter);
			
		    var id = $(this).attr('id');
			$('html, body').animate({scrollTop: $('#'+id).offset().top}, 800);
		});

		var jc1 = $('.bk-services-1 .jcarousel');
		if(jc1.length){
	        jc1
	            .jcarousel({
	                wrap: 'circular'
	            });
		}
		var jc2 = $('.bk-gallery-2 .jcarousel');
		if(jc2.length){
	        jc2.
	        	on('jcarousel:reload jcarousel:create', function () {
	                var carousel = $(this),
	                    width = carousel.innerWidth();

	                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	            })
	            .jcarousel({
	                wrap: 'circular'
	            });
		}
		var jcPrev = $('.jcarousel-control-prev');
		if(jcPrev.length){
	        $('.jcarousel-control-prev')
	            .jcarouselControl({
	                target: '-=1'
	            });
		};
		var jcNext = $('.jcarousel-control-next');
		if(jcNext.length){
	        $('.jcarousel-control-next')
	            .jcarouselControl({
	                target: '+=1'
	            });
		};

		var btnFile = $('.btn-file');
		if(btnFile.length){
			btnFile.find('input[type="file"]').on('change', function(){
				var fileName = $(this).val().split('\\').pop();
				btnFile.find('.btn-file-text').text(fileName);
				if($(this).val()== ''){
					btnFile.find('.btn-file-text').text('Прикрепить файл');
				}
			})
		}
	});
})(jQuery);
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
	});
})(jQuery);
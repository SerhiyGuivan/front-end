(function($) {
	$(document).ready(function(){
		$("#map-wrap").on("shown.bs.collapse", function () {
			var currCenter = map.getCenter();
			google.maps.event.trigger(map, 'resize'); 
			map.setCenter(currCenter);
			
		    var id = $(this).attr('id');
			$('html, body').animate({scrollTop: $('#'+id).offset().top}, 800);
		});

		var jcarousel = $('.bk-services-1 .jcarousel');
		if(jcarousel.length){
	        jcarousel
	            .jcarousel({
	                wrap: 'circular'
	            });
		}

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });
	});
})(jQuery);
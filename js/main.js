(function($) {
	var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

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
		var connectedCarousels = $('.connected-carousels');
		if(connectedCarousels.length){
			var carouselStage = $('.carousel-stage');
			var carouselNavigation = $('.carousel-navigation');
			carouselStage.
				on('jcarousel:reload jcarousel:create', function () {
	                var carousel = $(this),
	                    width = carousel.innerWidth();

	                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	            })
	            .jcarousel();

        	carouselNavigation.jcarousel();
	        carouselNavigation.jcarousel('items').each(function() {
	            var item = $(this);
	            var target = connector(item, carouselStage);
	            item
	                .on('jcarouselcontrol:active', function() {
	                    carouselNavigation.jcarousel('scrollIntoView', this);
	                    item.addClass('active');
	                })
	                .on('jcarouselcontrol:inactive', function() {
	                    item.removeClass('active');
	                })
	                .jcarouselControl({
	                    target: target,
	                    carousel: carouselStage
	                });
	        });
	        connectedCarousels.find('.color').on('click', function(){
	        	var dataColor = $(this).data('color');
	        	carouselStage.jcarousel('scroll', carouselStage.find('li[data-color='+ dataColor +']') );
	        })
		}
        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
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

		$(".dropdown-menu > li > a.trigger").on("click",function(e){
			var current=$(this).next();
			var grandparent=$(this).parent().parent();
			if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
				$(this).toggleClass('right-caret left-caret');
			grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
			grandparent.find(".sub-menu:visible").not(current).hide();
			current.toggle();
			e.stopPropagation();
		});
		$(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
			var root=$(this).closest('.dropdown');
			root.find('.left-caret').toggleClass('right-caret left-caret');
			root.find('.sub-menu:visible').hide();
		});
		var pageGalsingl = $('.page-gallery-single');
		if(pageGalsingl.length){
			pageGalsingl.on("keydown", function(e){
			    if(e.keyCode === 37) {
			        // up
			        $('.jcarousel').jcarousel('scroll', '-=1');
			    }
			    else if(e.keyCode === 39) {
			        // down
			        $('.jcarousel').jcarousel('scroll', '+=1');
			    }
			 });
		}
	});
	
})(jQuery);
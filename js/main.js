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
		// var connectedCarousels = $('.connected-carousels');
		// if(connectedCarousels.length){
		// 	var carouselStage = $('.carousel-stage');
		// 	var carouselNavigation = $('.carousel-navigation');
		// 	carouselStage.
		// 		on('jcarousel:reload jcarousel:create', function () {
	 //                var carousel = $(this),
	 //                    width = carousel.innerWidth();

	 //                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	 //            })
	 //            .jcarousel();

  //       	carouselNavigation.jcarousel();
	 //        carouselNavigation.jcarousel('items').each(function() {
	 //            var item = $(this);
	 //            var target = connector(item, carouselStage);
	 //            item
	 //                .on('jcarouselcontrol:active', function() {
	 //                    carouselNavigation.jcarousel('scrollIntoView', this);
	 //                    item.addClass('active');
	 //                })
	 //                .on('jcarouselcontrol:inactive', function() {
	 //                    item.removeClass('active');
	 //                })
	 //                .jcarouselControl({
	 //                    target: target,
	 //                    carousel: carouselStage
	 //                });
	 //        });
	 //        connectedCarousels.find('.color').on('click', function(){
	 //        	var dataColor = $(this).data('color');
	 //        	carouselStage.jcarousel('scroll', carouselStage.find('li[data-color='+ dataColor +']') );
	 //        })
		// }
		// var prevNavigation = $('.prev-navigation');
		// if(prevNavigation.length){
	 //        prevNavigation
	 //            .on('jcarouselcontrol:inactive', function() {
	 //                $(this).addClass('inactive');
	 //            })
	 //            .on('jcarouselcontrol:active', function() {
	 //                $(this).removeClass('inactive');
	 //            })
	 //            .jcarouselControl({
	 //                target: '-=1'
	 //            });
		// }
		// var nextNavigation = $('.next-navigation');
		// if(nextNavigation.length){
	 //        nextNavigation
	 //            .on('jcarouselcontrol:inactive', function() {
	 //                $(this).addClass('inactive');
	 //            })
	 //            .on('jcarouselcontrol:active', function() {
	 //                $(this).removeClass('inactive');
	 //            })
	 //            .jcarouselControl({
	 //                target: '+=1'
	 //            });
		// }

		if($('.slider-stage').length && $('.slider-nav').length){
			$('.slider-stage').slick({
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	arrows: false,
			  	fade: true,
			  	adaptiveHeight: true,
			  	asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
			  	slidesToShow: 4,
			  	slidesToScroll: 1,
			  	asNavFor: '.slider-stage',
			  	focusOnSelect: true
			});
		}

		if( $('.slick-front').length){
			$('.slick-front').slick({
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	arrows: false,
			  	fade: true,
			  	dots: true,
			  	adaptiveHeight: true,
			});
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				$('.slick-front').slick('setPosition');			
			});
		}



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

		var dataSubmenu = $('[data-submenu]'); 	
		if(dataSubmenu.length){
		 	//Dropdown fix
		  	$('.dropdown > a[tabindex]').on('keydown', function(event) {
		    // 13: Return
			    if (event.keyCode == 13) {
			      	$(this).dropdown('toggle');
			    }
		  	});
			// Предотвращаем закрытие при клике на неактивный элемент списка
			$('.dropdown-menu > .disabled, .dropdown-header').on('click.bs.dropdown.data-api', function(event) {
				event.stopPropagation();
			});
		  	dataSubmenu.submenupicker();
		}
	
	});
	
})(jQuery);
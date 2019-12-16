$(document).ready(function () {
	function afterReveal( ) {
		if ($('.about-item__num').hasClass('animated')) {
			$({ countNum: $('.about-item__num1').html() }).animate({ countNum: 2015 }, {
				duration: 2000,
				easing: 'linear',
				step: function () {
				$('.about-item__num1').html(Math.floor(this.countNum));
		},
		complete: function () {
				$('.about-item__num1').html(this.countNum);
		}
		});
			$({ countNum: $('.about-item__num2').html() }).animate({ countNum: 1828 }, {
				duration: 2000,
				easing: 'linear',
				step: function () {
				$('.about-item__num2').html(Math.floor(this.countNum));
		},
		complete: function () {
				$('.about-item__num2').html(this.countNum);
		}
		});
			$({ countNum: $('.about-item__num3').html() }).animate({ countNum: 3 }, {
				duration: 2000,
				easing: 'linear',
				step: function () {
				$('.about-item__num3').html(Math.floor(this.countNum));
		},
		complete: function () {
				$('.about-item__num3').html(this.countNum);
		}
		});
			};
		}
	
	new WOW({ callback: afterReveal }).init()

	svg4everybody({});

	Modernizr.on('webp', function(result) {
		if (result) {
			// supported
		} else {
			// not-supported
		}
	});

	$('.link-arrow--services').on('click', function(){
		$(this).siblings('.line-decoration').slideToggle(200)
		$(this).siblings('.line-decoration').toggleClass('active')
	})

// 	var menuButton = document.querySelector('.hamburger');
// 	var openMenu = function () {
// 		swiper.slidePrev();
// 	};

// 	var menuSlider= new Swiper('.swiper-wrapper.menu-slider', {
// 		slidesPerView: 'auto',
// 		initialSlide: 1,
// 		resistanceRatio: 0,
// 		slideToClickedSlide: true,
// 		on: {
// 			slideChangeTransitionStart: function () {
// 				var slider = this;
// 				if (slider.activeIndex === 0) {
// 					menuButton.classList.add('cross');
// 					// required because of slideToClickedSlide
// 					menuButton.removeEventListener('click', openMenu, true);
// 				} else {
// 					menuButton.classList.remove('cross');
// 				}
// 			}
// 			, slideChangeTransitionEnd: function () {
// 				var slider = this;
// 				if (slider.activeIndex === 1) {
// 					menuButton.addEventListener('click', openMenu, true);
// 				}
// 			},
// 		}
// });

// 	var bannerSlider= new Swiper('.swiper-container.slider-banner', {
// 		autoplay: true,
// 		speed: 400,
// 		grabCursor: true,
// 		navigation: {
// 			nextEl: '.swiper-button-next.banner-button-next',
// 			prevEl: '.swiper-button-prev.banner-button-prev',
// 		},
// });
	var gallery= new Swiper('.swiper-container.gallery', {
		autoplay: true,
		speed: 400,
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination.gallery-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			}
		}
});
	var reviews= new Swiper('.swiper-container.reviews', {
		grabCursor: true,
		slidesPerView: 3,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: '.swiper-button-next.reviews-next',
			prevEl: '.swiper-button-prev.reviews-prev',
		},
		pagination: {
			el: '.swiper-pagination.reviews-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			756: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			576: {
				slidesPerView: 1,
			}
		}
});

var header = $('.header-mobile'),
scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > $('.section-halls').offset().top && scrolled > scrollPrev || scrolled < 500) {
		header.removeClass('fixed');
		$('.go-top').addClass('fixed');
	} else {
		header.addClass('fixed');
	}
	if (scrolled < 500) {
		$('.go-top').removeClass('fixed');
	}
	scrollPrev = scrolled;
});

$(".go-top").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body, html').animate({
		scrollTop: top
	}, 350);
});

$('.label-container').children('.input-text').on('input', function (e) {
	$(this).parent('.label-container').addClass('valid')
});

$('.label-container').children('.input-text').focus(function(){
	$(this).siblings('.label-text').addClass('active')
})

$('.label-container').children('.input-text').blur(function(e){
	if (e.target.value == '') {
	$(this).siblings('.label-text').removeClass('active')
	$(this).parent('.label-container').removeClass('valid')
}
})

$('.hamburger').on('click', function(){
	$('.hamburger').toggleClass('is-active')
	$('.menu').toggleClass('is-active')
	$('.wrapper').toggleClass('is-active')
})

// $(".header").swipe({
// 	swipeStatus:function(event, phase, direction, distance, duration, fingers)
// 			{
// 					if (phase=="move" && direction =="right") {
// 							 $(".container").addClass("open-sidebar");
// 							 return false;
// 					}
// 					if (phase=="move" && direction =="left") {
// 							 $(".container").removeClass("open-sidebar");
// 							 return false;
// 					}
// 			}
// });

// if($(window).width() <= 600){
// 	// show menu on swipe to right
// 	$(document).on('swiperight', function(e) {
// 		console.log('asdas')
// 		e.preventDefault();
// 		$('.hamburger').removeClass('is-active')
// 		$('.menu').removeClass('is-active')
// 		$('.wrapper').removeClass('is-active')
// 	});
//    // hide menu on swipe to left
// 	$(document).on('swipeleft',function(e){
// 		console.log('ss')
// 		e.preventDefault();
// 		$('.hamburger').addClass('is-active')
// 	$('.menu').addClass('is-active')
// 	$('.wrapper').addClass('is-active')
// 	});
// }

})
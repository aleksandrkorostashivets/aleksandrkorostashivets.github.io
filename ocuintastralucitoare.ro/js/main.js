(function ($) {

	"use strict";


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			center: false,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	$(document).ready(function () {
		// Функция для обработки навигации по якорям
		$('a[href*="#"]').on('click', function (event) {
			event.preventDefault(); // Отменяем стандартное поведение ссылки

			var target = $(this).attr('href'); // Получаем href

			// Проверяем, если это относительная ссылка
			if (target.startsWith('./')) {
				// Переходим на новую страницу
				window.location.href = target;
			} else {
				// Если это якорь, прокручиваем к нему
				var $targetElement = $(target);
				if ($targetElement.length) {
					$('html, body').animate({
						scrollTop: $targetElement.offset().top
					}, 800, 'swing');
				}
			}
		});

		// Прокрутка к якорю при загрузке страницы
		var hash = window.location.hash; // Получаем якорь из URL
		if (hash) {
			var $targetElement = $(hash);
			if ($targetElement.length) {
				// Прокручиваем к целевому элементу, если он найден
				$('html, body').animate({
					scrollTop: $targetElement.offset().top
				}, 800, 'swing');
			}
		}
	});

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
	const cookieBanner = document.querySelector('.cookie-banner');
	const acceptBtn = document.querySelector('.cookie-banner__btn');

	setTimeout(() => {
		cookieBanner.classList.add('cookie-banner--visible');
	}, 500);

	acceptBtn.addEventListener('click', () => {
		cookieBanner.classList.remove('cookie-banner--visible');
		localStorage.setItem('cookieAccepted', 'true');
	});

	if (localStorage.getItem('cookieAccepted')) {
		cookieBanner.style.display = 'none';
	}
});
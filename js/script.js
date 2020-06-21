$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__burger.active, .menu__link').click(function (event) {
		$('.menu, .header__burger').removeClass('active');
		$('body').removeClass('lock');
	});

	$('#t1').click(function () {
		$('#v1, #t1').addClass("active").siblings(this).removeClass("active");
	});
	$('#t2').click(function () {
		$('#v2, #t2').addClass("active").siblings(this).removeClass("active");
	});
	$('#t3').click(function () {
		$('#v3, #t3').addClass("active").siblings(this).removeClass("active");
	});
	$('.review-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [

			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},


		]
	});
	$('.gallery-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		responsive: [

			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
		// adaptiveHeight: true,
		// centerMode: true,
		// centerPadding: '50px',
	});

	$('.hero-buttons__start, .price-item__btn, .contacts-info__btn').click(function (event) {
		$('.popup').addClass('active');
		$('body').addClass('lock');
	});
	$('.popup-form__btn-c').click(function (event) {
		$('.popup').removeClass('active');
		$('body').removeClass('lock');
	});


	$('body').append('<a href="#" id="go-top" title="Вверх"><img src="img/left-arrow.png" alt="go-top"></a>');

	$(function () {
		$.fn.scrollToTop = function () {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
			var scrollDiv = $(this);
			$(window).scroll(function () {
				if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			});
			$(this).click(function () {
				$("html, body").animate({ scrollTop: 0 }, "slow")
			})
		}
	});

	$(function () {
		$("#go-top").scrollToTop();
	});

});





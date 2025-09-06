$(function(){

	$(".fadein_top_anime").addClass("fadein_top");

	$(".blur_top").addClass("blur");

	function scrollAnimation(){
		let winScroll = $(window).scrollTop();
		let winHeight = $(window).height();

		let isMobile = window.matchMedia("(max-width: 520px)").matches;
		let scrollPos = winScroll + winHeight * (isMobile ? 1.8 : 1.2);

		$(".slide_left, .slide_right").each(function(){
			if(!$(this).hasClass("show") && $(this).offset().top <= scrollPos){
				$(this).addClass("show");
			}
		});

		$(".fadein_anime").each(function(){
			if(!$(this).hasClass("fadein") && $(this).offset().top <= scrollPos){
				$(this).addClass("fadein");
			}
		});

		$(".feature1_img, .feature2_img, .feature3_img, .img_sample").each(function(){
			if(!$(this).hasClass("blur") && $(this).offset().top <= scrollPos){
				$(this).addClass("blur");
			}
		});

		$(".menu").each(function(){
			if(!$(this).hasClass("bc_change") && $(this).offset().top <= scrollPos){
				$(this).addClass("bc_change");
			}
		});
	}

	$(window).on("scroll", scrollAnimation);

	scrollAnimation();

	$('html,body').animate({ scrollTop: 0 }, '1');
});
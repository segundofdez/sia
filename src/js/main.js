import $ from 'jquery'

$(function(){
	$('.test li').click(function() {
		$('.test li').removeClass('is-selected');
		$(this).addClass('is-selected');
		var classTest = $('.is-selected span').text();

		$('header > .sia a').removeClass();
		$('header > .sia a').addClass(classTest);

		$('.name').text("." + classTest);

		return false;
	});

	$('.example .sia').click(function(){
		$('.example .sia a').toggleClass('sia-nav sia-cross');

		return false;
	});
});

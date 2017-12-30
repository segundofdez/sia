import $ from 'jquery'

$(function(){
	$('.test li').click(function() {
		$('.test li').removeClass('is-selected');
		$(this).addClass('is-selected');
		var classTest = $('.is-selected span').text();

		$('header a').removeClass();
		$('header a').addClass(classTest);

		$('.name').text("." + classTest);

		event.preventDefault();
		event.stopPropagation();
	});
});

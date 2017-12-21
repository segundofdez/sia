import $ from 'jquery'

$(function(){
	$('.si').click(function(){
		$('.si a').removeClass('si-nav');
		$('.si a').toggleClass('si-close');
	});
});

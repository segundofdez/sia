import $ from 'jquery'

$(function(){
	var icons = ["nav","cross","top","right","bottom","left","plus","minus","toparrow","rightarrow","bottomarrow","leftarrow","circle","circleo"];

	var content = document.querySelectorAll('header div');

	Array.prototype.forEach.call(content, function (div) {
		div.addEventListener('click', function () {
			var index = div.dataset.index;
			var className = icons[index];
			var link = div.querySelector('a');

			var pieces = link.getAttribute('class').split('-');

			++index;

			if (icons[index] === undefined) {
				index = 0;
			}

			pieces[1] = icons[index];
			link.setAttribute('class', pieces.join('-'));
			div.dataset.index = index;
			document.querySelector('.name').innerHTML = '.' + pieces.join('-');
		});
	});

	$('.test li').click(function() {

		$('.test li').removeClass('is-selected');
		$(this).addClass('is-selected');
		var classTest = $('.is-selected span').text();

		$('header a').removeClass();
		$('header a').addClass(classTest);

		$('.name').text("." + classTest);
	});
});

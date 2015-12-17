(function($){
	$(function(){
		if(!$('body').hasClass('homepage')) {
			$('#slidecaption').addClass('none');
		}

		selectnav('main-menu', {
			label: 'Select an item',
			nested: true,
			indent: '─'
		});

		$('#menu-toggle').click(function(){
			var menu_height = $('#menu-wrap').height() + 50;
			if($(this).attr('class') == 'active') {
				$('#menu-wrap').stop(true, true).animate({top:0}, '5000', 'swing');
				$(this).removeClass('active');
			} else {
				$('#menu-wrap').stop(true, true).animate({top:-menu_height}, '5000', 'swing');
				$(this).addClass('active');
			}
		});

		$('#shutdown').click(function(){
			if($(this).attr('class') == 'active') {
				if($('body').hasClass('homepage')){
					$('.social-in-homepage').fadeIn();
				} else {
					$('.social-in-page').fadeIn();
				}
				$('#menu-wrap, #slidecaption, #wrap').fadeIn();
				$(this).removeClass('active');
			} else {
				if($('body').hasClass('homepage')){
					$('.social-in-homepage').fadeOut();
				} else {
					$('.social-in-page').fadeOut();
				}
				$('#menu-wrap, #slidecaption, #wrap').fadeOut();
				$(this).addClass('active');
			}
		});

		$('#tray-button').click(function(){
			if($(this).attr('class') == 'active') {
				$('#slidecaption').fadeIn();
				$(this).removeClass('active');
			} else {
				$('#slidecaption').fadeOut();
				$(this).addClass('active');
			}
		});

		$('#entries-toggle').click(function(){
			if($(this).attr('class') == 'active') {
				$('#entries-box').slideDown();
				$(this).removeClass('active');
			} else {
				$('#entries-box').slideUp();
				$(this).addClass('active');
			}
		});

	});
})(jQuery);
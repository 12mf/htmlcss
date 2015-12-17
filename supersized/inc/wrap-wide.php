<div id="wrap-wide"></div>

	<script type="text/javascript">
		jQuery(document).ready(function () {
			jQuery.supersized({

				// Functionality
				slide_interval          :   8000,		// Length between transitions
				transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed		:	1000,
				keyboard_nav            :   1,

				// Speed of transition

				// Components
				slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
				slides 					:  	[			// Slideshow Images
					{	
						image : './images/1.jpg', 
						title : '<div class="slider-caption"><h2>Helms Deep</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ante quam, sit amet mollis dolor rhoncus sit amet.</p></div>',
						thumb : './images/1.jpg',
						url : ''
					},{	
						image : './images/2.jpg',
						title : '<div class="slider-caption"><h2>Edoras</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ante quam, sit amet mollis dolor rhoncus sit amet.</p></div>',
						thumb : './images/2.jpg',
						url : ''
					}
				]

			});
		});
	</script>

	<div id="progress-back" class="load-item">
		<div id="progress-bar"></div>
	</div><!-- #progress-back -->
	<div id="thumb-tray" class="load-item">
		<div id="thumb-back"></div>
		<div id="thumb-forward"></div>
	</div><!-- #thumb-tray -->
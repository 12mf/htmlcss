<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Java script - Supersized</title>

<link rel="stylesheet" type="text/css" href="supersized.css">

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/supersized.3.2.7.min.js"></script>
<script type="text/javascript" src="js/fn.js"></script>
<script type="text/javascript" src="js/fn.init.js"></script>

</head>

<body>

	<div id="wrap-wide"></div>

	<div id="menu-wrap">
		<div class="menu">
			<a id="logo" title="Tacos, Tequila, Whiskey" href="#">
				<h1>Test</h1>
			</a><!-- #logo -->
			<div class="slidemenu">
				<ul>
	        		<li><a href="#">Home</a></li>
	        		<li><a href="#">Menu</a></li>
	        		<li><a href="#">About</a></li>
	        		<li><a href="#">What On</a></li>
	        		<li><a href="#">Google</a></li>
	        		<li><a href="#">Contact Us</a></li>
				</ul>
			</div><!-- .slidemenu -->
			<div class="menu-main-nav-container">
				<select class="selectnav">
					<option value="">Select an item</option>
					<option value="" selected="">Home</option>
					<option value="">Menu</option>
					<option value="">Hours / Location</option>
					<option value="">Photo Gallery</option>
					<option value="">Press</option>
					<option value="">Contact</option>
				</select><!-- .selctnav -->
			</div>
			<span id="menu-toggle">menu toggle</span>
	    </div><!-- .menu -->
	</div><!-- #menu-wrap -->

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
						title : '<div class="slider-caption"><h2>Tacos, Tequila, Whiskey</h2><p>Gringos &amp; Mariachis, a Mexican-style restaurant specializing in street tacos, tequila, mezcal and whiskies.</p></div>',
						thumb : './images/1.jpg',
						url : ''
					},{	
						image : './images/2.jpg',
						title : '<div class="slider-caption"><h2>Tacos1, Tequila, Whiskey</h2><p>Gringos &amp; Mariachis, a Mexican-style restaurant specializing in street tacos, tequila, mezcal and whiskies.</p></div>',
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
	<div id="slidecaption"></div><!-- #slidecaption -->

	<div id="footer">
		<div class="footer-wrap">
			<div class="footer-left">
				<a id="shutdown" href="javascript:;">Shutdow</a>
				<a id="tray-button" href="javascript:;">
					<img data-retina="true" id="tray-arrow" src="./images/slider/button-tray-up.png"/>
				</a>
				<p class="copyright">Copyright © 2015</p>
			</div><!-- .footer-left -->

			<div id="controls-wrap" class="load-item">
				<a id="nextslide" class="load-item" href="javascript:;"></a>
				<a id="play-button" href="javascript:;">
					<img data-retina="true" alt="" id="pauseplay" src="./images/slider/pause.png"/>
				</a>
				<a id="prevslide" class="load-item" href="javascript:;"></a>
			</div><!-- #controls-wrap -->

			<div class="clear"></div>
		</div><!-- .footer-wrap -->
	</div><!-- #footer -->

</body>
</html>
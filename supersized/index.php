<?php require_once('inc/header.php'); ?>

<body class="homepage">

	<div class="social-in-homepage social-bookmarks">
		<ul>
			<li class="twitter"><a href="javascript:;">twitter</a></li>
			<li class="facebook"><a href="javascript:;">facebook</a></li>
		</ul>
	</div>

	<div id="menu-wrap">
		<div class="menu">
			<a id="logo" title="Tacos, Tequila, Whiskey" href="#">
				<h1>Test</h1>
			</a><!-- #logo -->
			<div class="slidemenu">
				<ul>
					<li><a href="index.php">Home</a></li>
					<li><a href="#">Menu</a></li>
					<li><a href="about.php">About</a></li>
					<li><a href="#">What's On</a></li>
					<li><a href="blog.php">Blog</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
			</div><!-- .slidemenu -->
			<div class="menu-main-nav-container">
				<ul id="main-menu">
					<li><a href="index.php">Home</a></li>
					<li><a href="#">Menu</a></li>
					<li><a href="about.php">About</a></li>
					<li><a href="#">What On</a></li>
					<li><a href="blog.php">Blog</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
			</div>
			<span id="menu-toggle">menu toggle</span>
		</div><!-- .menu -->
	</div><!-- #menu-wrap -->

	<?php require_once('inc/wrap-wide.php'); ?><!-- include supersized slideshow -->

	<div id="slidecaption"></div><!-- #slidecaption -->

<?php require_once('inc/footer.php'); ?>
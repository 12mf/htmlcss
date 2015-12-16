function isRetina() {
	var query = '(-webkit-min-device-pixel-ratio: 1.5),\
		(min--moz-device-pixel-ratio: 1.5),\
		(-o-min-device-pixel-ratio: 3/2),\
		(min-device-pixel-ratio: 1.5),\
		(min-resolution: 144dpi),\
		(min-resolution: 1.5dppx)';

	if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(query).matches)) {
		return true;
	}
	return false;
}

(function(e) {
	theme = {
	    _init: function() {
	        if (api.options.slide_links) {
	            e(vars.slide_list).css("margin-left", -e(vars.slide_list).width() / 2)
	        }
	        if (api.options.autoplay) {
	            if (api.options.progress_bar) {
	                theme.progressBar()
	            }
	        } else {
	            if (e(vars.play_button).attr("src")) {
	                e(vars.play_button).attr("src", vars.image_path + "play.png")
	            }
	            if (api.options.progress_bar) {
	                e(vars.progress_bar).stop().animate({
	                    left: -e(window).width()
	                }, 0)
	            }
	        }
	        e(vars.thumb_tray).animate({
	            bottom: -e(vars.thumb_tray).height()
	        }, 0);
	        e(vars.tray_button).toggle(function() {
	            e(vars.thumb_tray).stop().animate({
	                bottom: 0,
	                avoidTransforms: true
	            }, 300);
	            if (e(vars.tray_arrow).attr("src")) {
	                e(vars.tray_arrow).attr("src", vars.image_path + "button-tray-down.png");
	                if (window.isRetina()) {
	                    e(vars.tray_arrow).attr("src", vars.image_path + "button-tray-down@2x.png");
	                    e(vars.tray_arrow).css({
	                        width: "32px",
	                        height: "32px"
	                    })
	                }
	            }
	            return false
	        }, function() {
	            e(vars.thumb_tray).stop().animate({
	                bottom: -e(vars.thumb_tray).height(),
	                avoidTransforms: true
	            }, 300);
	            if (e(vars.tray_arrow).attr("src")) {
	                e(vars.tray_arrow).attr("src", vars.image_path + "button-tray-up.png");
	                if (window.isRetina()) {
	                    e(vars.tray_arrow).attr("src", vars.image_path + "button-tray-up@2x.png");
	                    e(vars.tray_arrow).css({
	                        width: "32px",
	                        height: "32px"
	                    })
	                }
	            }
	            return false
	        });
	        e(vars.thumb_list).width(e("> li", vars.thumb_list).length * e("> li", vars.thumb_list).outerWidth(true));
	        if (e(vars.slide_total).length) {
	            e(vars.slide_total).html(api.options.slides.length)
	        }
	        if (api.options.thumb_links) {
	            if (e(vars.thumb_list).width() <= e(vars.thumb_tray).width()) {
	                e(vars.thumb_back + "," + vars.thumb_forward).fadeOut(0)
	            }
	            vars.thumb_interval = Math.floor(e(vars.thumb_tray).width() / e("> li", vars.thumb_list).outerWidth(true)) * e("> li", vars.thumb_list).outerWidth(true);
	            vars.thumb_page = 0;
	            e(vars.thumb_forward).click(function() {
	                if (vars.thumb_page - vars.thumb_interval <= -e(vars.thumb_list).width()) {
	                    vars.thumb_page = 0;
	                    e(vars.thumb_list).stop().animate({
	                        left: vars.thumb_page
	                    }, {
	                        duration: 500,
	                        easing: "easeOutExpo"
	                    })
	                } else {
	                    vars.thumb_page = vars.thumb_page - vars.thumb_interval;
	                    e(vars.thumb_list).stop().animate({
	                        left: vars.thumb_page
	                    }, {
	                        duration: 500,
	                        easing: "easeOutExpo"
	                    })
	                }
	            });
	            e(vars.thumb_back).click(function() {
	                if (vars.thumb_page + vars.thumb_interval > 0) {
	                    vars.thumb_page = Math.floor(e(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval;
	                    if (e(vars.thumb_list).width() <= -vars.thumb_page) {
	                        vars.thumb_page = vars.thumb_page + vars.thumb_interval
	                    }
	                    e(vars.thumb_list).stop().animate({
	                        left: vars.thumb_page
	                    }, {
	                        duration: 500,
	                        easing: "easeOutExpo"
	                    })
	                } else {
	                    vars.thumb_page = vars.thumb_page + vars.thumb_interval;
	                    e(vars.thumb_list).stop().animate({
	                        left: vars.thumb_page
	                    }, {
	                        duration: 500,
	                        easing: "easeOutExpo"
	                    })
	                }
	            })
	        }
	        e(vars.next_slide).click(function() {
	            api.nextSlide()
	        });
	        e(vars.prev_slide).click(function() {
	            api.prevSlide()
	        });
	        if (jQuery.support.opacity) {
	            e(vars.prev_slide + "," + vars.next_slide).mouseover(function() {
	                e(this).stop().animate({
	                    opacity: 1
	                }, 100)
	            }).mouseout(function() {
	                e(this).stop().animate({
	                    opacity: .6
	                }, 100)
	            })
	        }
	        if (api.options.thumbnail_navigation) {
	            e(vars.next_thumb).click(function() {
	                api.nextSlide()
	            });
	            e(vars.prev_thumb).click(function() {
	                api.prevSlide()
	            })
	        }
	        e(vars.play_button).click(function() {
	            api.playToggle()
	        });
	        if (api.options.mouse_scrub) {
	            e(vars.thumb_tray).mousemove(function(t) {
	                var n = e(vars.thumb_tray).width(),
	                    r = e(vars.thumb_list).width();
	                if (r > n) {
	                    var i = 1,
	                        s = t.pageX - i;
	                    if (s > 10 || s < -10) {
	                        i = t.pageX;
	                        newX = (n - r) * (t.pageX / n);
	                        s = parseInt(Math.abs(parseInt(e(vars.thumb_list).css("left")) - newX)).toFixed(0);
	                        e(vars.thumb_list).stop().animate({
	                            left: newX
	                        }, {
	                            duration: s * 3,
	                            easing: "easeOutExpo"
	                        })
	                    }
	                }
	            })
	        }
	        e(window).resize(function() {
	            if (api.options.progress_bar && !vars.in_animation) {
	                if (vars.slideshow_interval) {
	                    clearInterval(vars.slideshow_interval)
	                }
	                if (api.options.slides.length - 1 > 0) {
	                    clearInterval(vars.slideshow_interval)
	                }
	                e(vars.progress_bar).stop().animate({
	                    left: -e(window).width()
	                }, 0);
	                if (!vars.progressDelay && api.options.slideshow) {
	                    vars.progressDelay = setTimeout(function() {
	                        if (!vars.is_paused) {
	                            theme.progressBar();
	                            vars.slideshow_interval = setInterval(api.nextSlide, api.options.slide_interval)
	                        }
	                        vars.progressDelay = false
	                    }, 1e3)
	                }
	            }
	            if (api.options.thumb_links && vars.thumb_tray.length) {
	                vars.thumb_page = 0;
	                vars.thumb_interval = Math.floor(e(vars.thumb_tray).width() / e("> li", vars.thumb_list).outerWidth(true)) * e("> li", vars.thumb_list).outerWidth(true);
	                if (e(vars.thumb_list).width() > e(vars.thumb_tray).width()) {
	                    e(vars.thumb_back + "," + vars.thumb_forward).fadeIn("fast");
	                    e(vars.thumb_list).stop().animate({
	                        left: 0
	                    }, 200)
	                } else {
	                    e(vars.thumb_back + "," + vars.thumb_forward).fadeOut("fast")
	                }
	            }
	        })
	    },
	    goTo: function(t) {
	        if (api.options.progress_bar && !vars.is_paused) {
	            e(vars.progress_bar).stop().animate({
	                left: -e(window).width()
	            }, 0);
	            theme.progressBar()
	        }
	    },
	    playToggle: function(t) {
	        if (t == "play") {
	            if (e(vars.play_button).attr("src")) {
	                e(vars.play_button).attr("src", vars.image_path + "pause.png");
	                if (window.isRetina()) {
	                    e(vars.play_button).attr("src", vars.image_path + "pause@2x.png");
	                    e(vars.play_button).css({
	                        width: "19px",
	                        height: "18px"
	                    })
	                }
	            }
	            if (api.options.progress_bar && !vars.is_paused) {
	                theme.progressBar()
	            }
	        } else {
	            if (t == "pause") {
	                if (e(vars.play_button).attr("src")) {
	                    e(vars.play_button).attr("src", vars.image_path + "play.png");
	                    if (window.isRetina()) {
	                        e(vars.play_button).attr("src", vars.image_path + "play@2x.png");
	                        e(vars.play_button).css({
	                            width: "19px",
	                            height: "18px"
	                        })
	                    }
	                }
	                if (api.options.progress_bar && vars.is_paused) {
	                    e(vars.progress_bar).stop().animate({
	                        left: -e(window).width()
	                    }, 0)
	                }
	            }
	        }
	    },
		beforeAnimation: function(t) {
			if (api.options.progress_bar && !vars.is_paused) {
				e(vars.progress_bar).stop().animate({
					left: -e(window).width()
				}, 0)
			}
			if (e(vars.slide_caption).length) {
				api.getField("title") ? e(vars.slide_caption).html(api.getField("title")) : e(vars.slide_caption).html("")
			}
			if (vars.slide_current.length) {
				e(vars.slide_current).html(vars.current_slide + 1)
			}
			if (api.options.thumb_links) {
				e(".current-thumb").removeClass("current-thumb");
				e("li", vars.thumb_list).eq(vars.current_slide).addClass("current-thumb");
				if (e(vars.thumb_list).width() > e(vars.thumb_tray).width()) {
					if (t == "next") {
						if (vars.current_slide == 0) {
							vars.thumb_page = 0;
							e(vars.thumb_list).stop().animate({
								left: vars.thumb_page
							}, {
								duration: 500,
								easing: "easeOutExpo"
							})
						} else {
							if (e(".current-thumb").offset().left - e(vars.thumb_tray).offset().left >= vars.thumb_interval) {
								vars.thumb_page = vars.thumb_page - vars.thumb_interval;
								e(vars.thumb_list).stop().animate({
									left: vars.thumb_page
								}, {
									duration: 500,
									easing: "easeOutExpo"
								})
							}
						}
					} else {
						if (t == "prev") {
							if (vars.current_slide == api.options.slides.length - 1) {
								vars.thumb_page = Math.floor(e(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval;
								if (e(vars.thumb_list).width() <= -vars.thumb_page) {
									vars.thumb_page = vars.thumb_page + vars.thumb_interval
								}
								e(vars.thumb_list).stop().animate({
									left: vars.thumb_page
								}, {
									duration: 500,
									easing: "easeOutExpo"
								})
							} else {
								if (e(".current-thumb").offset().left - e(vars.thumb_tray).offset().left < 0) {
									if (vars.thumb_page + vars.thumb_interval > 0) {
										return false
									}
									vars.thumb_page = vars.thumb_page + vars.thumb_interval;
									e(vars.thumb_list).stop().animate({
										left: vars.thumb_page
									}, {
										duration: 500,
										easing: "easeOutExpo"
									})
								}
							}
						}
					}
				}
			}
		},
		afterAnimation: function() {
			if (api.options.progress_bar && !vars.is_paused) {
				theme.progressBar()
			}
		},
		progressBar: function() {
			e(vars.progress_bar).stop().animate({
				left: -e(window).width()
			}, 0).animate({
				left: 0
			}, api.options.slide_interval)
		}
	};
	e.supersized.themeVars = {
		progress_delay: false,
		thumb_page: false,
		thumb_interval: false,
		image_path: "images/slider/",
		play_button: "#pauseplay",
		next_slide: "#nextslide",
		prev_slide: "#prevslide",
		next_thumb: "#nextthumb",
		prev_thumb: "#prevthumb",
		slide_caption: "#slidecaption",
		slide_current: ".slidenumber",
		slide_total: ".totalslides",
		slide_list: "#slide-list",
		thumb_tray: "#thumb-tray",
		thumb_list: "#thumb-list",
		thumb_forward: "#thumb-forward",
		thumb_back: "#thumb-back",
		tray_arrow: "#tray-arrow",
		tray_button: "#tray-button",
		progress_bar: "#progress-bar"
	};
	e.supersized.themeOptions = {
		progress_bar: 1,
		mouse_scrub: 0
	}
})(jQuery)
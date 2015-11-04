include('js/hoverSprite.js');
include('js/switcher.js');
include('js/superfish.js');
include('js/slider.js');
include('js/sprites.js');
include('js/jcarousellite_1.0.1.min.js');
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
}
//--------global-------------
var isSplash = true;
var MSIE = ($.browser.msie) && ($.browser.version <= 8);
$(document).ready(function() {
	if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }					   
	
	$('ul#menu').superfish({
		delay:       800,
	  	animation:   {opacity:'show'},
	  	speed:       200,
		autoArrows:  false,
		dropShadows: false,
		onInit: function(){
			$("#menu > li > a").each(function(index){
				var conText = $(this).find('.mText1').text();
				$(this).find('.extraHolder').append("<span class='mTextOver'>"+conText+"</span>")	
			})
		}
	});
})

$(window).load(function() {	
	var navItems = $('.menu > ul >li');
    var _delay;
	
	$('.more').sprites({method:'gStretch',hover:true});
	$('.followHolder > ul > li > a').hoverSprite({onLoadWebSite: true});
	$("._list2 > li > a").hoverSprite({onLoadWebSite: true});
	$(".scrButn > a").hoverSprite({onLoadWebSite: true});
	
	$("#jcarousel_1").jCarouselLite({
        btnNext: ".nextBtn",
        btnPrev: ".prevBtn",
        speed: 800,
        visible: 3
    });
	//$('#jcarousel_1 li .pic').fancybox({'titlePosition': 'inside', 'overlayColor':'#000'});
	
	$('.menu > ul >li').eq(0).css({'display':'none'});  
	var content=$('#content'),
		nav=$('.menu');
   	
	$('#content').tabs({
		preFu:function(_){
			_.li.css({left:"1700px"})
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({left:"1700px"}).stop().delay(200).animate({left:"0px"},800,'easeInOutCubic');

                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}

                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
            }
			if(_.prev){
			     _.prev.stop().animate({left:"-1700px"},800,'easeInOutCubic');
             }
		}
	})

    function splashMode(){
        isSplash = true;
        navItems.each( function(index){
            _delay = index*50;
                 navItems.eq(index).find('.imgHolder').stop().delay(_delay).animate({height:"258px"}, 700, 'easeInOutCubic');
            } );
    }
    
    function contentMode(){  
        isSplash = false;
         navItems.each( function(index){
            	_delay = index*50;
                navItems.eq(index).find('.imgHolder').stop().delay(_delay).animate({height:"0px"}, 700, 'easeInOutCubic');
            } );
    }
	
	nav.navs({
		useHash:true,
		hoverIn:function(li){
		// if (!li.hasClass('active')){

			$(".mText1", li).stop().animate({'bottom':'82px'}, 400, 'easeOutExpo');
			$(".mTextOver", li).stop().animate({'bottom':'-2px'},600,'easeOutBack');
			if(!MSIE){
				 $(".mOver", li).stop().animate({'background-position-x': '0', 'background-position-y': '100%'},400,'easeOutExpo');
			}else{
				$(".mOver", li).css({'background-position-x': '0', 'background-position-y': '100%'},400,'easeOutExpo');
			}
		},
		hoverOut:function(li){
			//if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
				$(".mText1", li).stop().animate({'bottom':'0px'}, 600, 'easeOutBack');
				$(".mTextOver", li).stop().animate({'bottom':'-82px'},400,'easeOutExpo');
			  
				if(!MSIE){
					$(".mOver", li).stop().animate({'background-position-x': '0', 'background-position-y': '0'},400,'easeOutExpo');
				}else{
					$(".mOver", li).css({'background-position-x': '0', 'background-position-y': '0'},400,'easeOutExpo');
				}
			//} 
		} 
	})
	
	.navs(function(n){			
		$('#content').tabs(n);
	})
	
	$('.page_spinner').fadeOut();
	$('body').css({overflow:'auto', 'min-height':'900px'})
})
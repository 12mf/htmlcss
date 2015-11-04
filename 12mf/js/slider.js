$(window).load(function(){
	var sliders = $("#scrollSets>div"),
		slidNumberNew=0,
		slidNumberOld=0,
		slidAll= $("#scrollSets>div").length,
		autoPlayState = true,
		anomationStop=false,
		MSIE = ($.browser.msie) && ($.browser.version <= 8);
		
	$(window).bind("hashchange", changeSiteHash);
	changeSiteHash()	
	init()
	function init(){
		sliders.css({"position":"absolute"});
		if(!MSIE){
			sliders.not(sliders.eq(slidNumberNew)).animate({"top":'300px', 'left':'0px'}, 0)
		}else{
		//	sliders.not(sliders.eq(slidNumberNew)).fadeOut(0);
			sliders.not(sliders.eq(slidNumberNew)).css({'top':'300px'});
		}
        
		anomationStop=true;

        
        sliders.each(
            function(index){
            var _length = $(this).find('._list > li').length;            
             $('#setNav').append('<li><a href="#scrollSets"></a></li>');
            }
        ) 
          $('#setNav > li').eq(0).addClass('activeSet');
	}
	function changeSiteHash(){
		if(window.location.hash !="#!/home") {
			autoPlayState=false;
		}
	}

    ////////////////////////////
    $('#setNav > li').eq(0).find('a').css({'background-position-x': '0', 'background-position-y': '100%'},400,'easeOutExpo');
    
    $('#setNav > li > a').hover(
        function(){
            if(slidNumberNew !== $(this).parent().index()){
                if(!MSIE){
                    $(this).stop().animate({'background-position-x': '0', 'background-position-y': '100%'},400,'easeOutExpo');
                    }else{
                        $(this).stop().css({'background-position-x': '0', 'background-position-y': '100%'},400,'easeOutExpo');  
                    }
            
            }
        },
        function(){
            if(slidNumberNew !== $(this).parent().index()){
                 if(!MSIE){
                    $(this).stop().animate({'background-position-x': '0', 'background-position-y': '0%'},400,'easeOutExpo');
                    }else{
                        $(this).stop().css({'background-position-x': '0', 'background-position-y': '0%'},400,'easeOutExpo');  
                    }
            }
        }
    )
    ////
   $('#setNav > li > a').click(
    function(){
        if((anomationStop) && (slidNumberNew !== $(this).parent().index())){
        var curIndex = 0; 
        curIndex = $(this).parent().index("#setNav > li");
      
        slidNumberOld = slidNumberNew;
        slidNumberNew = curIndex;
 
        if(!MSIE){
            $('#setNav > li >a').eq(slidNumberOld).stop().animate({'background-position-x': '0', 'background-position-y': '0%'},400,'easeOutExpo');
                    }else{
                         $('#setNav > li >a').eq(slidNumberOld).css({'background-position-x': '0', 'background-position-y': '0%'},400,'easeOutExpo'); 
                    }

            changeImage();
        }
        
    }
)  
    ////////////////////////////
    
	function changeImage(){
		anomationStop=false;
		if(!MSIE){
			sliders.eq(slidNumberOld).css({"background":"none"}).animate({"top":'-300px'}, 400, 'easeInCubic');
		}else{
			//sliders.eq(slidNumberOld).fadeOut(500);
			sliders.eq(slidNumberOld).css({'top':'-300px'});
		}

		if(!MSIE){
			sliders.eq(slidNumberNew).css({"background":"none",'top':'300px'}).animate({"top":'0px'}, 600, function(){anomationStop=true;})
		}else{
		//	sliders.eq(slidNumberNew).fadeTo(500,1, function(){anomationStop=true;});
            sliders.eq(slidNumberNew).css({'top':'0px'});
            anomationStop=true;
		}
 
	}
	
})
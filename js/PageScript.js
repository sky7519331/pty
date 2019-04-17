$(document).ready(function () {
	
	//頛匧�亙��鐤�㙈摮睃�硋�𦯀辣���遆�彍
	createFullpage();	

	//�攟撟訫祝摨�
	var screenwidth = $(window).width();
	var first_screenwidth = $(window).width();
	
	//alert(screenwidth);
	
	//�攟撟閖�睃漲
	var screenheight = $(window).height();
	var first_screenheight = $(window).height();
	
	//�ế�𪃾�糓�炏�箄���閗�萘蔭���
	var ismobile = false;
	
	//銝���见�贝�匧�交��菜葫�糓�鍂獢䔶�𠰴�贝�萘蔭��𡝗糓銵��閗�萘蔭
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
	{	
		//alert("�蹱糓銵��閗�萘蔭");
		ismobile = true;
		
		if(screenwidth <= 1024)
		{
			$.fn.fullpage.destroy('all');
		}
		else
		{
			createFullpage();	
			effect();
		}	
	}
	else
	{
    	//alert("�蹱糓獢䔶�𠰴�贝�萘蔭");
		ismobile = false;
		
		if(screenwidth <= 1024)
		{
			$.fn.fullpage.destroy('all');
		}
		else
		{
			createFullpage();	
			effect();
		}
		
	}
	
	
	
	//�ế�𪃾蝚砌�甈∟�匧�交����攟撟訫祝摨行糓�炏撠𤩺䲰1024px
	var decide = false;
	
	if(first_screenwidth <= 1024)
	{
		decide = true;
	}
	else
	{
		decide = false;
	}
	
	
	//�ế�𪃾鋆萘蔭�箇凒��烐�𡝗帖���
	var landscape = false;
	
	$(window).on("orientationchange",function(event) {
    	
		if(window.orientation == 0) //鋆萘蔭�箇凒���
  		{
    		//alert("�凒���");
			console.log("�凒���");
			landscape = false;
  		}
  		else
  		{
    		//alert("��㕑府�糓璈怠��");
			console.log("璈怠��");
			landscape = true;
  		}
		
	});
	
	//�朖���ế�𪃾�攟撟閧�撖砍漲
	$(window).resize(function() {
		
		screenwidth = $(window).width();
		
		screenheight = $(window).height();
		
		console.log('�攟撟訫祝摨佗��'+screenwidth+'�攟撟閖�睃漲:'+screenheight);
		
		//�銁獢䔶�𠰴�贝�萘蔭�讛汗
		if(ismobile == false)
		{
			//�訜�攟撟訫祝摨西���嘥�贝�匧�交���撖砍漲銝滚�峕�
			if(screenwidth != first_screenwidth)
			{
				//銝滨�㗇䲰璈怠�烐�
				if(landscape == false)
				{
					decidescreen();
				}
			}
		}
		else
		{
			//��𧢲��踎
			if(first_screenwidth <= 1024 && first_screenheight <= 1024)
			{
				return;
			}
			else
			{
				if(landscape == false)
				{
					$.fn.fullpage.destroy('all');
					return;
				}
				else
				{
					createFullpage();
					effect();
					return;
				}
			}
		}
		
		//憒���靝���见�贝�匧�交����攟撟訫祝摨血之�䲰1024px��
		if(decide == false)
		{
			decidescreen();
		}
		
		
	});
	
	

	function decidescreen()
	{
		if(ismobile == false)
		{
			//�攟撟訫祝摨血�𤩺䲰1024px��嚗�⏛�膄憟𦯀辣���遆�彍
			if(screenwidth <= 1024 )
			{
				$.fn.fullpage.destroy('all');
			}
			else
			{
				//憭扳䲰1024px����齿鰵�鐤�㙈�遆�彍
				createFullpage();
				effect();
			}
		}	
	}


	
	
	var currentSlide = 0;
    var loaded = false;
	
	//摮睃�硋�𦯀辣���遆�彍
	function createFullpage()
	{
	
	$('.fullpage').fullpage({
		
        navigation: false,
        navigationTooltips: ['First section', 'Second section'],
        loopHorizontal: false,
		controlArrowColor: 'rgba(0,0,0,0)',
		verticalCentered: false,
		scrollingSpeed: 1000,
		
        afterLoad: function (anchorLink, index)
		{
            loaded = true;
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex, direction)
		{
            
			currentSlide = slideIndex;
            loaded = true;
			
			//銝餉�埝𠽌�娍�譍��钅��𢒰��嚗��𨀣迫韏啗楝
			if(slideIndex>=0)
			{
				$('.leader').removeClass('ani_right');
				$('.leader').removeClass('ani_left');
			}
			
			if(slideIndex>0)
			{
				//�訜�𧞄�𢒰銝阡�墧偌撟喟洵銝�����嚗屸�𣈯�厰枤�𥿢up��蠘��
				$.fn.fullpage.setKeyboardScrolling(false, 'up');
				$('.dialog').css('opacity','1');
			}
			else
			{
				//�訜�𧞄�𢒰�箸偌撟喟洵銝�����嚗屸�见�罸枤�𥿢up��蠘��
				$.fn.fullpage.setKeyboardScrolling(true, 'up');
				$('.dialog').css('opacity','1');
			}
			
			//��閗ㄐ瘥誩�钅��𢒰��撠滩店獢�
			switch(slideIndex)
			{
				case 1:
				$('.dialog').addClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 2:
				$('.dialog').addClass('dialog03');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 3:
				$('.dialog').addClass('dialog04');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 4:
				$('.dialog').addClass('dialog05');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 5:
				$('.dialog').addClass('dialog06');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 6:
				$('.dialog').addClass('dialog07');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog08');
				break;
				
				case 7:
				$('.dialog').addClass('dialog08');
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				break;
				
				default:
				$('.dialog').removeClass('dialog02');
				$('.dialog').removeClass('dialog03');
				$('.dialog').removeClass('dialog04');
				$('.dialog').removeClass('dialog05');
				$('.dialog').removeClass('dialog06');
				$('.dialog').removeClass('dialog07');
				$('.dialog').removeClass('dialog08');
				break;
			}
			
			console.log(slideIndex);
			
			//皛穃�訫�瘞游像蝚砌�屸�
			if(slideIndex===1)
			{
				if(screenwidth >= 769)
				{
					//暺烐踎�䌊��訫枂�𣶹
					$('.slide_02 > .main_obj').addClass('fadeInDown');
					$('.slide_02 > .main_obj').css('opacity','1');
				}
			}
			
			//皛穃�訫�瘞游像蝚砌�厰�
			if(slideIndex===2)
			{
			
				//撠滩店獢��𦻖蝥�枂�𣶹
				$('.sb01').addClass('fadeIn');
				$('.sb01').css('opacity','1');
				
				setTimeout(function(){
					$('.sb02').addClass('fadeIn');
					$('.sb02').css('opacity','1');
				},500);
				
				setTimeout(function(){
					$('.sb03').addClass('fadeIn');
					$('.sb03').css('opacity','1');
				},1000);
				
				setTimeout(function(){
					$('.sb04').addClass('fadeIn');
					$('.sb04').css('opacity','1');
				},1500);
				
				setTimeout(function(){
					$('.sb05').addClass('fadeIn');
					$('.sb05').css('opacity','1');
				},2000);
				
				setTimeout(function(){
					$('.sb06').addClass('fadeIn');
					$('.sb06').css('opacity','1');
				},2500);					
			}
			
			//皛穃�訫�瘞游像蝚砌�娪�
			if(slideIndex===4)
			{
				$('.car').css('opacity','1');
				$('.car').animate({marginLeft:'50vw'}, 1000);
			}
			else{
				$('.car').css('opacity','0');
				$('.car').css('margin-left','100vw');
			}
			
			//皛穃�訫�瘞游像蝚砌���
			if(slideIndex===6)
			{
				$('.bus').css('opacity','1');
				$('.bus').animate({marginLeft:'50vw'}, 1000);
			}
			else
			{
				$('.bus').css('opacity','0');
				$('.bus').css('margin-left','100vw');
			}
			
        },
        onLeave: function(index, nextIndex, direction) 
		{
           
		    loaded = false;
			
			var slideheight = $('.slide').height();
			var leadertop = slideheight * 0.6;
            
			//皛穃�蝚砌��惜��嚗䔶蜓閫鍦�硺�𢠃𢒰��劐�衤�嚗䔶蒂�枂�𣶹撠滩店獢�
			if (nextIndex == 2) {
				
				$('.leader').css('opacity','1');
				
				$('.leader').animate({top:'58%'}, 1000,function(){
					$('.dialog').css('opacity','1');
					$('.dialog').addClass('fadeIn');	
				});
				
				$('footer').css('display','block');
				
			}
			else
			{
				$('.dialog').css('opacity','0');
				$('.leader').css('opacity','0');
				$('.leader').css('top','-312px');
				
				$('footer').css('display','none');
			}
			
			//皛穃�蝚砌��惜
			if (nextIndex == 2) {
			
				$('.main').on("mousewheel",function(e)
				{
                    if(loaded)
					{
                        loaded = false;
                        var delta = e.originalEvent.deltaY;
                        console.log(delta);
                        
                        if(delta>0)//down
						{ 
                            if(currentSlide===7)//if last slide
							{
								$('.dialog').css('opacity','0');
								$('.leader').addClass('ani_left');
								
								$.fn.fullpage.moveSlideLeft();
                                e.preventDefault();
                                e.stopPropagation();
                            }
							else
							{
								$('.dialog').css('opacity','0');
								$('.leader').addClass('ani_right');
                                
								$.fn.fullpage.moveSlideRight();
                                e.preventDefault();
                                e.stopPropagation();
							}
                        }
						else //up
						{
                            if(currentSlide===0)//if first slide
							{
                                $('.main').off("mousewheel");
                            }
							else
							{
								$('.dialog').css('opacity','0');
								$('.leader').addClass('ani_left');
								
                                $.fn.fullpage.moveSlideLeft();
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                    }
					else//slide still loading, don't scroll
					{ 
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }
			
        },
		onSlideLeave: function(index, nextIndex, slideIndex, direction)
		{
			
			if(direction=='right')
			{
				$('.slide > .city').animate({left:"+=1%"},400);
				$('.slide > .obj').animate({left:"+=1%"},400);
				
				$('.dialog').css('opacity','0');
				$('.leader').addClass('ani_right');
			}
			if(direction=='left')
			{
				$('.slide > .city').animate({left:"-=1%"},400);
				$('.slide > .obj').animate({left:"-=1%"},400);
				
				$('.dialog').css('opacity','0');
				$('.leader').addClass('ani_left');
			}
			
		}
		
    });
	
	
	}


	//擐㚚���𣇉���瘛∪�亦鸌���
	function effect()
	{
		$('.title_img').addClass('fadeInDown');	
	}




	//�詨鱓撅閖��
	$('.menu_btn').click(function(){
		$('.menu').animate({left:"0"}, 500);	
	});
	
	//�詨鱓�𤣰蝮�
	$('.main').click(function(){
		$('.menu').animate({left:"-400px"}, 500);
	});
	$('.mainbox').click(function(){
		$('.menu').animate({left:"-280px"}, 500);
	});

	

	$('.click').addClass('bounce');
	
	$('.click').click(function(){
		
		if(screenwidth < 769)
		{
			 $('html,body').animate({scrollTop:$('.slide_01').offset().top}, 800); 
		}
		else
		{
			$.fn.fullpage.moveTo(2, 0);
		}
	});
	
	//甈⊿�詨鱓
	$('.p1').click(function(){
		$('.p2_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').css('display','none');
		$('.p1_slide').slideToggle();
  	});
	
	$('.p2').click(function(){
		$('.p1_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').css('display','none');
		$('.p2_slide').slideToggle();
  	});
	
	$('.p3').click(function(){
		$('.p1_slide').css('display','none');
		$('.p2_slide').css('display','none');
		$('.p4_slide').css('display','none');
		$('.p3_slide').slideToggle();
  	});
	
	$('.p4').click(function(){
		$('.p1_slide').css('display','none');
		$('.p2_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').slideToggle();
  	});
	
	//tab focus
	$('.menu_p').focus(function() {
    	$('.menu').css('left','0');
	});
	
	
	$('.p1').focus(function() {
    	$('.p2_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').css('display','none');
		//$('.p1_slide').slideToggle();
	});
	
	$('.p2').focus(function() {
    	$('.p1_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').css('display','none');
		//$('.p2_slide').slideToggle();
	});
	
	$('.p3').focus(function() {
    	$('.p1_slide').css('display','none');
		$('.p2_slide').css('display','none');
		$('.p4_slide').css('display','none');
		//$('.p3_slide').slideToggle();
	});
	
	$('.p4').focus(function() {
    	$('.p1_slide').css('display','none');
		$('.p2_slide').css('display','none');
		$('.p3_slide').css('display','none');
		//$('.p4_slide').slideToggle();
	});
	
	$('.p5').focus(function() {
    	$('.p1_slide').css('display','none');
		$('.p2_slide').css('display','none');
		$('.p3_slide').css('display','none');
		$('.p4_slide').css('display','none');
	});
	
	//蝚砌����� Button Tab forcus
	$('.slide_01 .main_obj .btn01').focus(function() {
		$('.menu').css('left','-400px');	
	});
	
	//蝚砌�屸��� Button Tab forcus
	$('.slide_02 .btn01').focus(function() {
		$('.slide_02 > .main_obj').css('opacity','1');
	});
	
	//蝚砌�厰��� Button Tab forcus
	$('.sb02').focus(function() {
		$('.sb01').css('opacity','1');
		$('.sb02').css('opacity','1');
		$('.sb03').css('opacity','1');
		$('.sb04').css('opacity','1');
		$('.sb05').css('opacity','1');
		$('.sb06').css('opacity','1');
	});
	
	//iframe 大小調整
	
});
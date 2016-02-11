$(function(){
    //头部
	$('.hidden1-show1').hover(function(){
		$(this).find('.hidden1').show();
	},function(){
		$(this).find('.hidden1').hide();
	});
    //图片向左微移
	$('.yidong').hover(function(){
		$(this).animate({'marginLeft':'-10px'},200);
	},function(){
		$(this).animate({'marginLeft':'0px'},200);
	});

    //banner鼠标经过该出现的块出现
    var lunboBg = ['#E9E9E9','#DADADC','#67C5AA','#E8E8E8','#B90AF9','#5E7FF2'];
    var bg = ['#FFCFE9','#FFF701','#005DA2','#FFC5D7','#3577FF','#FFA800','#F32F53','#A014F9','#FE7E00','#FFCFDB','#FC4563','#A30005','#3B83F2','#30C4FF','#DD2821'];
    $('.shop-show').each(function(i){
    	$(this).data('index',i);
    });
	$('.shop-show').hover(function(){
        clearInterval(timerId);
		$(this).find('.hidden3').show();
		var i = $(this).data('index');
	 	$( $('.hidden2')[i] ).css({position:'absolute',left:'0px',top:'0px'});
		$( $('.hidden2')[i] ).show();
		$('.fushu-fs').hide();
		$( $('.fushu')[i] ).css({position:'relative',left:'0px',top:'0px'});
		$( $('.fushu')[i] ).show();
        $('#bannerBg').css({background:bg[i]});
	},function(){
		$(this).find('.hidden3').hide();
		var i = $(this).data('index');
		$( $('.hidden2')[i] ).hide();
		$( $('.fushu')[i] ).hide();
		$('.fushu-fs').show();
        $('#bannerBg').css({background:lunboBg[index-1]});
        clearInterval(timerId);
		timerId = setInterval(lunbo,1000);
	});

	// banner图轮播
    var index = 0;
    var lunbo = function(){
        $('#bannerBg').css({background:lunboBg[index]});
    	$('.lunbo').hide();
	    var el = $('.lunbo')[index];
	    $(el).show();

	    $('.circle-item').removeClass('gray');
	    $( $('.circle-item')[index] ).addClass('gray');

	    index++;
	    if( index == $('.lunbo').length ){
	    	index=0;
	    }
    };
    $('.circle-item').each(function(i){
    	$(this).data('index',i);
    });
    $('.circle-item').hover(function(){
    	clearInterval(timerId);
    	$('.circle-item').removeClass('gray');
	    $(this).addClass('gray');
	    var i = $(this).data('index');
	    $('.lunbo').hide();
	    $( $('.lunbo')[i] ).show();
        $('#bannerBg').css({background:lunboBg[i]});
	    index = i;
    },function(){
    	clearInterval(timerId);
    	timerId = setInterval(lunbo,1000);
    });
    var timerId = setInterval(lunbo,1000);

	//点击到相应的楼层
    var Arr = [];
    $('.same').each(function(i){
        Arr.push(i);
    });
    var jishu = 0;
    $(window).scroll(function(){
        $('.same').each(function(i){
            if(i<11){
                if( $( $('.same')[i] ).offset().top-420 < $(window).scrollTop() && $($('.same')[i+1]).offset().top-420 > $(window).scrollTop() ){
                    $('.itemss').show();
                    $('.cover').hide();
                    $( $('.itemss')[i] ).hide();
                    $( $('.cover')[i] ).show(); 
                }
            }else{
                if( $( $('.same')[11] ).offset().top-420 < $(window).scrollTop() ){
                    $('.itemss').show();
                    $('.cover').hide();
                    $( $('.itemss')[11] ).hide();
                    $( $('.cover')[11] ).show(); 
                }
                if( $(window).scrollTop() > $( $('.same')[11] ).offset().top-100){
                    $( $('.cover')[11] ).hide();
                    $( $('.itemss')[11] ).show();
                }
            } 
        });
    });
    $('.show_hidden').each(function(i){
        $(this).data('index',i);
    });
    $('.show_hidden').hover(function(){

        $(this).find('.itemss').hide();
        $(this).find('.cover').show();
        var index = $(this).data('index');
        $(this).find('.cover').click(function(){
            var newTop = $( $('.same')[index] ).offset().top - 100;
            $({top:$(window).scrollTop()}).animate({top:newTop},{
                duration:800,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            })
         });
    },function(){
        $(this).find('.itemss').show();
        $(this).find('.cover').hide();
    });


    // 滚动条下拉到一定高度，header出现
    $(window).scroll(function(){
        if( $(window).scrollTop() < 1000){
            $('#scoll-header').hide();
            $('.left-zuo').hide();
        }
        else{
            $('#scoll-header').show();
            $('.left-zuo').show();
        }
    });

    //右边侧栏
    $('.item-item').hover(function(){
        $(this).css({background:'#c40000'});
    },function(){
        $(this).css({background:'#000'});
    });
    $('.item-item-show1').each(function(i){
        $(this).data('index',i);
    });
    $('.item-item-show1').hover(function(){
        $('.item-item-show2').stop();
        var i =  $(this).data('index');
        $( $('.item-item-show2')[i] ).show(0,function(){
           $(this).animate({right:35},600); 
        });
    },function(){
        $('.item-item-show2').stop();
        var i =  $(this).data('index');
        $( $('.item-item-show2')[i] ).css({right:55}).hide(); 
    });

    //点击返回顶部
    $(window).scroll(function(){
        if( $(window).scrollTop() > 670 ){
            $('#comeback').show();
            $('#comeback').click(function(){
                $({top:$(window).scrollTop()}).animate({top:0},{
                    duration:700,
                    step:function(){
                        $(window).scrollTop(this.top);
                    }
                });
                return false;
            }); 
        }
       else{
           $('#comeback').hide(); 
        }
    });
    
    //购物车
    $('#shop-car').hover(function(){
        $(this).find('.item-item-unique').css({backgroundImage:'url(./images/lyy21.png)'});
        $(this).css({background:'#c40000'});
    },function(){
        $(this).find('.item-item-unique').css({backgroundImage:'url(./images/lyy2.png)'});
        $(this).css({background:'#000'});
    });

    //选项卡
    $('.da').hover(function(){
        $(this).find('.icon-taoxin').show();
    },function(){
        $(this).find('.icon-taoxin').hide();
    });
    $('.dp li').each(function(i){
        $(this).data('index',i);
    });
    var count = 0;
    $('.dp li').click(function(){
        $( $('.dp li')[count] ).removeClass('select');
        $(this).addClass('select');

        $( $('.diantu')[count] ).removeClass('yi');
        count = $(this).data('index');
        $( $('.diantu')[count] ).addClass('yi');
        return false;
    });

    $('.huan').click(function(){
        var num,arr=[],arrImg = [],dic={};
        $('.yi').find('img').each(function(){
            arrImg.push( $(this).attr('src') );
        });
        $('.yi').find('img').each(function(){
            num = Math.floor( Math.random()*24 );
            while( dic[num] ){
                num = Math.floor( Math.random()*24 );
            }
            dic[num] = true;
            $(this).attr({src:arrImg[num]});
        })
        return false;
    });



    //楼层轮播(1层)
    var next = 1,current = 0,timerOne;
    var oneLunbo = function(){
        $( $('.floor1')[current] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor1')[next] ).animate({left:0},1000);
        current = next;
        next++;
        if( next == 3 ){
            next = 0;
        }
    }
    timerOne = setInterval(oneLunbo,2000);
    $('.floorB1').hover(function(){
        clearInterval(timerOne);
    },function(){
        clearInterval(timerOne);
        timerOne = setInterval(oneLunbo,2000);
    });
    $('#floor1Bl').click(function(){
        $( $('.floor1')[current] ).animate({left:191},1000);
        if( next == 2){
            next = -1;
        }
        $( $('.floor1')[next+1] ).css({left:-199}).animate({left:0},1000);
        current = next+1;
        next = next+2;
        if( next == 3 ){
            next = 0;
        }
        return false; 
    });
    $('#floor1Br').click(function(){
        oneLunbo();
        return false;
    });

    //楼层轮播(2层)
    var next2 = 1,current2 = 0,timerTwo;
    var twoLunbo = function(){
        $( $('.floor2')[current2] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor2')[next2] ).animate({left:0},1000);
        current2 = next2;
        next2++;
        if( next2 == 3 ){
            next2 = 0;
        }
    }
    timerTwo = setInterval(twoLunbo,2000);
    $('.floorB2').hover(function(){
        clearInterval(timerTwo);
    },function(){
        clearInterval(timerTwo);
        timerTwo = setInterval(twoLunbo,2000);
    });
    $('#floor2Bl').click(function(){
        $( $('.floor2')[current2] ).animate({left:191},1000);
        if( next2 == 2){
            next2 = -1;
        }
        $( $('.floor2')[next2+1] ).css({left:-199}).animate({left:0},1000);
        current2 = next2+1;
        next2 = next2+2;
        if( next2 == 3 ){
            next2 = 0;
        }
        return false;
    });
    $('#floor2Br').click(function(){
        twoLunbo();
        return false;
    });

    //楼层轮播(3层)
    var next3 = 1,current3 = 0,timerThree;
    var threeLunbo = function(){
        $( $('.floor3')[current3] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor3')[next3] ).animate({left:0},1000);
        current3 = next3;
        next3++;
        if( next3 == 3 ){
            next3 = 0;
        }
    }
    timerThree = setInterval(threeLunbo,2000);
    $('.floorB3').hover(function(){
        clearInterval(timerThree);
    },function(){
        clearInterval(timerThree);
        timerThree = setInterval(threeLunbo,2000);
    });
    $('#floor3Bl').click(function(){
        $( $('.floor3')[current3] ).animate({left:191},1000);
        if( next3 == 2){
            next3 = -1;
        }
        $( $('.floor3')[next3+1] ).css({left:-199}).animate({left:0},1000);
        current3 = next3+1;
        next3 = next3+2;
        if( next3 == 3 ){
            next3 = 0;
        }
        return false;
    });
    $('#floor3Br').click(function(){
        threeLunbo();
        return false;
    });

    //楼层轮播(4层)
    var next4 = 1,current4 = 0,timetFour;
    var fourLunbo = function(){
        $( $('.floor4')[current4] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor4')[next4] ).animate({left:0},1000);
        current4 = next4;
        next4++;
        if( next4 == 3 ){
            next4 = 0;
        }
    }
    timetFour = setInterval(fourLunbo,2000);
    $('.floorB4').hover(function(){
        clearInterval(timetFour);
    },function(){
        clearInterval(timetFour);
        timetFour = setInterval(fourLunbo,2000);
    });
    $('#floor4Bl').click(function(){
        $( $('.floor4')[current4] ).animate({left:191},1000);
        if( next4 == 2){
            next4 = -1;
        }
        $( $('.floor4')[next4+1] ).css({left:-199}).animate({left:0},1000);
        current4 = next4+1;
        next4 = next4+2;
        if( next4 == 3 ){
            next4 = 0;
        }
        return false;
    });
    $('#floor4Br').click(function(){
        fourLunbo();
        return false;
    });


    //楼层轮播(5层)
    var next5 = 1,current5 = 0,timerFive;
    var fiveLunbo = function(){
        $( $('.floor5')[current5] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor5')[next5] ).animate({left:0},1000);
        current5 = next5;
        next5++;
        if( next5 == 3 ){
            next5 = 0;
        }
    }
    timerFive = setInterval(fiveLunbo,2000);
    $('.floorB5').hover(function(){
        clearInterval(timerFive);
    },function(){
        clearInterval(timerFive);
        timerFive = setInterval(fiveLunbo,2000);
    });
    $('#floor5Bl').click(function(){
        $( $('.floor5')[current5] ).animate({left:191},1000);
        if( next5 == 2){
            next5 = -1;
        }
        $( $('.floor5')[next5+1] ).css({left:-199}).animate({left:0},1000);
        current5 = next5+1;
        next5 = next5+2;
        if( next5 == 3 ){
            next5 = 0;
        }
        return false;
    });
    $('#floor5Br').click(function(){
        fiveLunbo();
        return false;
    });


    //楼层轮播(8层)
    var next8 = 1,current8 = 0,timerEight;
    var eightLunbo = function(){
        $( $('.floor8')[current8] ).animate({left:-191},1000,function(){
            $(this).css({left:191});
        })
        $( $('.floor8')[next8] ).animate({left:0},1000);
        current8 = next8;
        next8++;
        if( next8 == 3 ){
            next8 = 0;
        }
    }
    timerEight = setInterval(eightLunbo,2000);
    $('.floorB8').hover(function(){
        clearInterval(timerEight);
    },function(){
        clearInterval(timerEight);
        timerEight = setInterval(eightLunbo,2000);
    });
    $('#floor8Bl').click(function(){
        $( $('.floor8')[current8] ).animate({left:191},1000);
        if( next8 == 2){
            next8 = -1;
        }
        $( $('.floor8')[next8+1] ).css({left:-199}).animate({left:0},1000);
        current8 = next8+1;
        next8 = next8+2;
        if( next8 == 3 ){
            next8 = 0;
        }
        return false;
    });
    $('#floor8Br').click(function(){
        eightLunbo();
        return false;
    });
});
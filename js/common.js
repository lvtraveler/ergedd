require.config({
    baseUrl:'./js',
    paths:{
//      "jquery":['http://libs.baidu.com/jquery/1.9.1/jquery','jquery.min'],
        "jquery":"jquery.min",
        "bootstrap":"bootstrap.min",
        "scrollUp":"jquery.scrollUp.min",
        "openapp":"openApp",
    },
    shim:{
        'bootstrap':{
            deps:['jquery'],
            exports:'bootstrap'
        },
        'scrollUp':{
            deps:['jquery'],
            exports:'scrollUp'
        }
    }
});

require(['jquery','openapp','scrollUp'],function($,openapp){
    //首页顶部 热门大分类导航
    navTop_Tab($(".container-navPC nav ul li a"));
    function navTop_Tab(class_v){
        console.log(10);
        var menu=class_v
        menu.each(function(){
            $(this).click(function(){
                menu.removeClass("active");
                $(this).addClass("active");
            });
        });
    }
	//头部菜单导航栏点击切换
    navList_Tab($(".container-nav ul li a"));
    function navList_Tab(class_v){
        var menu=class_v
        menu.each(function(){
            $(this).click(function(){
                menu.removeClass("active");
                $(this).addClass("active");
            });
        });
    }
    //分页点击切换
    navPagination_Tab($(".pagination li>a"));
    function navPagination_Tab(class_v){
        var menu=class_v
        menu.each(function(){
            $(this).click(function(){
                menu.removeClass("active");
                $(this).addClass("active");
            });
        });
    }
    //菜单列表点击切换
    navMenu_Tab($(".container-navMenu .navItem"));
    function navMenu_Tab(class_v){
        var menu=class_v
        menu.each(function(){
            $(this).click(function(){
                menu.removeClass("active");
                $(this).addClass("active");
            });
        });
    }
    $('.maskDownload').click(function(){
        console.log('aaa');
        ++click_count;
        $('.maskDownload').hide();
        $('.yindao').hide();
    });
    $('.maskDownload').on("touchstart",function(){
        ++click_count;
        $('.maskDownload').hide();
        $('.yindao').hide();
    });
    //点击遮罩处收起歌单列表
    $('.container-mask').click(function(){
        ++click_count;
        $('.container-navMenu').hide();
		$('#videoPlayer').show();
    });
    $('.container-mask').on("touchstart",function(){
        ++click_count;
        $('.container-navMenu').hide();
        $('.container-mask').hide();
        $('#videoPlayer').show();
    });
    
    //显示与隐藏歌单列表
    var click_count=0;
    $('.navIcon-mobile').click(function(){
        ++click_count;
        if(click_count%2==0){
            $('.container-mask').hide();
            $('.container-navMenu').hide();
            $('.container-nav').css("position","relative");
            $('#videoPlayer').show();
            $('.navItem').removeClass("animated");
        }
        else{
            $('.container-mask').show();
            $('.navItem').addClass("animated");
            $('.container-navMenu').show();
            $('.container-nav').css("position","relative");
            //暂停视频播放
			$('.v_ico_pasued').show();
			$('#videoPlayer').hide();
			}
    });
    //下载app按钮
    $('.nowDownloadImg').click(function(){
	openapp.allOpenApp('https://itunes.apple.com/cn/app/er-ge-dian-dian-jing-xuan/id1006637877?mt=8','http://a.app.qq.com/o/simple.jsp?pkgname=com.mampod.ergedd');
    });
    //header部分，下载APP按钮    
    $(".nowDownloadImg").bind('touchstart', function(){
        $(".nowDownloadImg").attr('src','img/lijixiazai1.png');
    });
    $(".nowDownloadImg").bind('touchend', function(){
        $(".nowDownloadImg").attr('src','img/lijixiazai.png');
    });

    $(".nowDownloadImg").bind('mouseover', function(){
        $(".nowDownloadImg").attr('src','img/lijixiazai1.png');
    });

    $(".nowDownloadImg").bind('mouseout', function(){
        $(".nowDownloadImg").attr('src','img/lijixiazai.png');
    });
    //回到顶部按钮，下拉上拉时淡出淡入显示backtop1.png
    $.scrollUp({
        animation: 'fade',
        scrollImg: {
            active: true,
            type: 'background',
            src: 'images/backtop1.png'
        }
    });
    //监听滚动事件，移动版导航栏固定在顶部
	window.onscroll=function(){
	    var container_nav_y=$(".container-nav").offset().top;
	    var scroll_y = $(document).scrollTop(); //获取滚动条到顶部的高度
	    if (scroll_y >= 42) {
	        var isnavMenu_show=$('.container-navMenu').is(":hidden");
	        if(isnavMenu_show){
	            $('.container-nav').css("position","fixed").css("top","0");
	            $('.container-nav>.col-xs-12').css("border-top","none");
	            $('.topHr').css("margin-bottom","0px");
	            $('.pop-main').css('z-index',"10000");
	        }else{
	            $('.container-nav').css("display","none");
	            $('.container-mask').css("top","0");
	           
	        }
	    }
	    else if(scroll_y<90){
	        $('.container-nav').css("display","block");
	        $('.container-nav').css("position","relative");
	        $('.topHr').css("margin-bottom","10px");
	        $('.container-nav>.col-xs-12').css("border-top","solid #F2F2F2 1px");
	        $('.container-mask').css("top","50px");
	         $('.pop-main').css('z-index',"11000");
	    }
	}
    //获取播放数，大于99显示99K+
    $('.SongPlayCount').each(function(){
        var SongPlayCount=$(this).text();
        if(SongPlayCount>1000){
                if(SongPlayCount>99999){
                    // $(this).text('99k+');
                    $(this).text(parseInt(SongPlayCount/1000)+'k+');
                    if($(window).width()<768){
                        $(this).siblings('.glyphicon-play-circle').css('float','left');
                    }

                }else{
                    $(this).text(parseInt(SongPlayCount/1000)+'k+');
                }
            }
            var len=$(this).text().length;
                if(len>4){
                    $(this).parent('.SongPlay').css('padding-left',0);
            } 
        });
    //获取视频截图大小,已16:9的比例呈现图片
    $('.thumbnail img').each(function(){
        bili=9/15;
        $(this).height($(this).width()*bili);
    });
});

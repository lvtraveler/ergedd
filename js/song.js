require.config({
	baseUrl:'./js',
	paths: {
		'jquery': 'jquery.min',
		'openapp':'openApp',
		"scrollUp":"jquery.scrollUp.min",
		'common':'common'
	}
});

require(['jquery','openapp','scrollUp','common'],function($){
	//显示与隐藏歌单列表
			
				showVedio();
				setCenter();
				$('.container-mask').hide();
				var click_count=0;
				var my_video=document.getElementById('videoPlayer'); 
				$('.navIcon-mobile').click(function(){
					++click_count;
					if(click_count%2==0){
					    $('.container-mask').hide();
					    $('.container-navMenu').hide();
					    $('.container-nav').css("position","relative");
					    $('#videoPlayer').show();
					}
					else{
					    $('.container-mask').show();
					    $('.navItem').addClass("animated flipInX");
					    $('.container-navMenu').show();
					    $('.container-nav').css("position","relative");
					    //暂停视频播放
						my_video.pause();
						$('.v_ico_pasued').show();
						$('#videoPlayer').hide();
					}
				});
				//点击中间的播放图片，执行播放
				$('.v_ico_pasued').click(function(){
					    my_video.play();
				});
				my_video.onplay=function(){
						$('.v_ico_pasued').hide();
				}
				my_video.onpause=function(){
						$('.v_ico_pasued').show();
				}
	function showVedio(){
		if(isIDevice){
					//检查IOS下是否安装该APP并打开
					window.location="babyvideo://";
					//超时则表示没有安装该APP
					var clickedAt = +new Date;
					setTimeout(function(){
						if(+new Date - clickedAt < 3000){
							$('.SongMask').show();
							$('.pop-main').show();
						}
					},2000);
				}
				else if(isAndroid){
					//检查Android下是否安装该APP并打开
//					window.location="tomyapp://jp.app/openwith";
					var clickedAt = +new Date;
					setTimeout(function(){
						if(+new Date - clickedAt < 2000){
//							$('.alertContainer').show();
//							$('.SongMask').show();
//							$('video').attr("controls","");
						}
					},500);
				}
	};
	//居中弹出层
	function setCenter(){
		var b_width=document.body.clientWidth;
		var b_height=window.screen.height;
		var pop_width=$('.pop-main').width();
		var pop_height=$('.pop-main').height();
		var pop_left=(b_width-pop_width)/2;
		var pop_top=(b_height)/4;
		$('.pop-main').css("left",pop_left);
		$('.pop-main').css("top",pop_top);
	}
//	setCenter();
	//监听窗口分辨率的变化
	window.onresize=function(){
		setCenter();
		setCenter();
	}
	
	//获取正在播放的视频名称并  添加到<title>中
	var titleName=$('.songName').text();
	$('.songName-title').text(titleName+"- 儿歌点点-全球儿歌视频大全");
	//点击弹出层的叉叉图标隐藏弹出层和遮罩层
	$('.icon-remove').click(function(){
		$('.pop-main').hide();
		$('.SongMask').hide();
	});
	$('.icon-remove').on("touchstart",function(){
		$('.pop-main').hide();
		$('.SongMask').hide();
	});
	return {
		showVedio: showVedio,
		setCenter: setCenter
	};
	
});

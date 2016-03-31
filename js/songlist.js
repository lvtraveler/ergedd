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
	//获取该页面类目名称，添加到title
    var subName=$('.SongListSongsNavLeftFour>label').text();
    $('.songlist-title').text(subName+"-"+"-儿歌点点-全球儿歌视频大全");
});
//判断设备
var isIDevicePhone = (/iphone|ipod/gi).test(navigator.platform);
var isIDeviceIpad = !isIDevicePhone && (/ipad/gi).test(navigator.platform);
var isIDevice = isIDevicePhone || isIDeviceIpad;
var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod');
var isAndroid = !isIDevice && (/android/gi).test(navigator.userAgent);
var isIEMobile = !isIDevice && !isAndroid && (/IEMobile/gi).test(navigator.userAgent);
//判断网页是否是在微信浏览器中打开
function is_wechat(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
//定义模块openApp
define(function(){
var allOpenApp=function(iosUrl,androidUrl){
    if(is_wechat()&&isios){
        var yindao="<div class='maskDownload'></div><div class='yindao'><div class='content'><div class='mainContent'>";
        yindao=yindao+"<h2 class='margin8'>链接打不开？</h2><h3 class='margin8'>请点击右上角</h3><h3 class='margin8'>选择</h3>";
        yindao=yindao+"<span class='fontColor1'>“在浏览器上打开”</span></h3></div>";
        yindao=yindao+"<div class='yindaoline'></div></div></div>";
        $('body').append(yindao);
        return;
    }else if(is_wechat&&isAndroid) {
        window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.mampod.ergedd';
    }else if(isiOS){
//  	window.location="babyvideo://";
        // window.location = iosUrl;
        // var yindao="<div class='maskDownload'></div><div class='yindao'><div class='content'><div class='mainContent'>";
        // yindao=yindao+"<h2 class='margin8'>链接打不开？</h2><h3 class='margin8'>请点击右上角</h3><h3 class='margin8'>选择";
        // yindao=yindao+"<span class='fontColor1'>“在浏览器上打开”</span></h3></div>";
        // yindao=yindao+"<div class='yindaoline'></div></div></div>";
        // $('body').append(yindao);
        $('.maskDownload').show();
        $('.yindao').show();
    }else if(isAndroid){
        window.location = androidUrl;
    }    
    // else{
    // 	//在PC上弹出二维码模态框
    // 	var html="<div class='modal fade in' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' style='display:block;' aria-hidden='false'><div class='modal-backdrop fade in' style='height:431px;'></div><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-body'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'></span></button><div class='container-fluid'><div class='row'><div class='col-md-12 col-sm-12 col-xs-12'><br><br><br></div></div><div class='row'><div class='col-md-6 col-sm-6 col-xs-6'><p class='text-left ModalPLeft'>直接下载</p></div><div class='col-md-6 col-sm-6 col-xs-6'><p class='text-left ModalPRight'>&nbsp;&nbsp;扫描二维码下载</p></div></div><div class='row myModalContent'><div class='col-md-6 col-sm-6 col-xs-12'><p class='text-center ModalImagePLeft'><a href='http://android.myapp.com/myapp/detail.htm?apkName=com.mampod.ergedd' target='_blank'><img width='150px' onmouseover='this.src='/img/androiddown2.png'' onmouseout='this.src='/img/androiddown.png'' src='/img/androiddown.png'></a></p><p class='text-center'><a href='https://itunes.apple.com/cn/app/er-ge-dian-dian-jing-xuan/id1006637877?mt=8' target='_blank'><img width='150px' onmouseover='this.src='/images/iosdown2.png'' onmouseout='this.src='/images/iosdown.png'' src='/images/iosdown.png'></div><div class='row myModalContent'><div class='col-md-6 col-sm-6 col-xs-12'><p class='text-center'><img width='150px' src='/img/qrcode.png'></p></div></div><div class='row'><div class='col-md-12 col-sm-12 col-xs-12'><br><br><br></div></div></div></div></div></div></div>";
    // 	//插入html模态框
    // 	$('body').append(html);

    // }
};
	return {
		allOpenApp: allOpenApp
	};			
});

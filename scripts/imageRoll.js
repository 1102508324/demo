// JavaScript Document
/*轮播大篇幅图片*/
$(function(){
	var $imgrolls=$("#mgImageroll div a");
	var index=0;
	var adTimer=null;
	var len=$imgrolls.length;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
		}).eq(0).mouseover();
		
	$("#mgImageroll").hover(function(){
		if(adTimer){
		clearInterval(adTimer);
		}
		},function(){
			adTimer=setInterval(function(){
				showImg(index);
				index++;
				if(index==len){
					index=0;
					};
				},3000);
			}).trigger("mouseleave");
	
		
	})
	function showImg(index){
		var $rollobj=$("#mgImageroll");
		var $rolllist=$rollobj.find("div a");
		var newhref=$rolllist.eq(index).attr("href");
		$("#JS_imgWrap").attr("href",newhref)
		.find("img").eq(index).stop(true,true).fadeIn()
		.siblings().fadeOut();
	$rolllist.removeClass("chos").eq(index).addClass("chos");	
	}

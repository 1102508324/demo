// JavaScript Document
$(function(){
	var $music_imgrolls=$("#music-roll-image-ul li");
	var index=0;
	var Timer=null;
	var len=$music_imgrolls.length;
	$music_imgrolls.mouseover(function(){
		index=$music_imgrolls.index(this);
		musicImg(index);
		}).eq(index).mouseover();
	/*自动轮播*/
	$("#music-img").hover(function(){
		clearInterval(Timer);
		},function(){
			Timer=setInterval(function(){
			musicImg(index);
			index++;
			if(index==len){
				index=0;
					};
				},3000);
			}).trigger("mouseleave");
	});
function musicImg(index){
	var $rollobj=$("#music-roll-image");
	var $music_rolllist=$rollobj.find("div ul li");
	$("#music-img").find("img").eq(index).stop(true,true).fadeIn()
	.siblings().fadeOut();
	$music_rolllist.removeClass("current").eq(index).addClass("current");
	}

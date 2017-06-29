// JavaScript Document
$(function(){
	var page=1;//初始化当前版面为1
	var i=5;
	$(".change").click(function(){
		var $parent=$(this).parents("#happy-boy2017");
		var $v_show=$parent.find("#happy-boy2017-ul");
		var $v_content=$parent.find("#v_content");
		var v_width=$v_content.width();//获取视屏展示区外围div的宽度
		var len=$v_show.find("li").length;
		var page_count=Math.ceil(len/i); /*//版面数*/
		if(!$v_show.is(":animated")){
		if(page==page_count){
			$v_show.animate({left:'0px'},"slow");
			page=1;
			}else{
				$v_show.animate({left:'-='+v_width},"slow");
				page++;
				}
		}
	})
		/*上一页*/
	$(".prev").click(function(){
		var $parent=$(this).parents("#happy-boy2017");
		var $v_show=$parent.find("#happy-boy2017-ul");
		var $v_content=$parent.find("#v_content");
		var v_width=$v_content.width();//获取视屏展示区外围div的宽度
		var len=$v_show.find("li").length;
		var page_count=Math.ceil(len/i); /*//版面数*/
		if(!$v_show.is(":animated")){
			if(page==1){
				$v_show.animate({left:'-='+v_width*(page_count-1)},"slow");
				page=4;
				}else{
					$v_show.animate({left:'+='+v_width});
				     page--;
					}
			}
			})
	})


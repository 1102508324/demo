// JavaScript Document
$(function(){
	var $menu_change=$("#tab_menu li");
	var index=0;
	var tab_time=null;
	var len=$menu_change.length;
	$menu_change.click(function(){
		index=$menu_change.index(this);
		fadeDiv(index);
		
		}).eq(0).click();
		/*定时*/
	$("#tab").hover(function(){
		clearInterval(tab_time);
		},function(){
			tab_time=setInterval(function(){
				fadeDiv(index);
				index++;
				if(index==len){
					index=0;
					}
				},3000);
			}).trigger("mouseleave");
		
		
		/*结束*/
	})
function fadeDiv(index){
	var mg_show=$("#tab_box");
	$(".tab_show").eq(index).stop(true,true).show()
	.siblings().hide();
	$("#tab_menu li").removeClass("now").eq(index).addClass("now");
	}
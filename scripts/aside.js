// JavaScript Document
$(document).ready(function(){
	var index=0;
	$(".level1 > a").click(function(){
		$(this) 
		.next().show()                
		.parent().siblings().children("a")       
		.next().hide();              
		index=$(".level1 > a").index(this);
		$(".level1 > a").removeClass("cur").eq(index).addClass("cur");
		return false;
	});
	$(".level1 > a").eq(0).click();
	
});
$(function(){
	$(".level1 > a").eq(5).css("border","1px 1px 0");
	})
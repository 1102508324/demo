// JavaScript Document
$(function(){
	var index=0;
	$(".asi .level1").mouseover(function(){
		index=$(".asi .level1").index(this);
		maoShow(index);
		})
	$(".asi .level2 li").click(function(){
		index=$(".asi .level2 li").index(this);
		maoShow(index);
		})
	})
<!---->
function maoShow(index){
	$(".fff .regi").eq(index).stop(true,true).show()
	.siblings().hide();
	}
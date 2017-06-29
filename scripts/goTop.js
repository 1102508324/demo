// JavaScript Document
$(function(){
	$("#goTop").hover(function(){
		$(".anima").css("position","relative").show();
		},function(){
			$(".anima").css("position","absolute").hide();
			})
	})
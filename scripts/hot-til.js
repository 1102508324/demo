// JavaScript Document
$(function(){
	var x=10;
	var y=20;
	$("a.tooltip").mouseover(function(e){
			this.myTitle=this.title;   
	        this.title="";
			var imgTitle=this.myTitle?"<br>"+this.myTitle:"";
	var tooltip="<div id='tooltip'><img src='"+this.href+"' alt='预览图'>"+imgTitle+"</div>";
			$("body").append(tooltip);
			$("#tooltip").offset({"top":e.pageY,"left":e.pageX}).show("fast");
			}).mouseout(function(){
				this.title=this.myTitle;
				$("#tooltip").remove();
				}).mousemove(function(e){
					$("#tooltip").offset({
						"top":e.pageY+y,
						"left":e.pageX+x
						})
					})
	})
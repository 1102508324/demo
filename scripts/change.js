// JavaScript Document
$(function(){
	var page=0;
	var page_count=$(".posi2 img.che1").length-1;
		$(".hh h3").click(function(){
		if(page==page_count){
            $(".posi2 img.che1").eq(page).show()
		    .siblings().hide();		
			page=0;
		}else{
		    $(".posi2 img.che1").eq(page).show()
		    .siblings().hide();
		    page++;
			}
		})
	})
	
$(function(){
	var page=0;
	var page_count=$(".posi2 img.che2").length-1;
		$(".hh h3").click(function(){
		if(page==page_count){
            $(".posi2 img.che2").eq(page).show()
		    .siblings().hide();		
			page=0;
		}else{
		    $(".posi2 img.che2").eq(page).show()
		    .siblings().hide();
		    page++;
			}
		})
	})
	
$(function(){
	var page=0;
	var page_count=$(".posi2 img.che3").length-1;
		$(".hh h3").click(function(){
		if(page==page_count){
            $(".posi2 img.che3").eq(page).show()
		    .siblings().hide();		
			page=0;
		}else{
		    $(".posi2 img.che3").eq(page).show()
		    .siblings().hide();
		    page++;
			}
		})
	})
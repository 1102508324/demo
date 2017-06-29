// JavaScript Document
$(function(){
$('form :input').focus(function(){
	$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
		})
})
/*validate*/
$(function(){
	$("#commentForm").validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			password1: {
				required: true,
				maxlength: 1
			},
			email: {
				required: true,
				email: true
			},
			tel: {
				required: true,
				minlength: 11
			}
		},
		
		messages: {
			username: {
				required: '请输入姓名',
				minlength: '请至少输入两个字符'
			},
			password: {
				required: '请输入密码',
				minlength: '请至少输入六位字'
			},
			password1: {
				required: '请输入性别',
				maxlength: '请输入正确性别'
			},
			email: {
				required: '请输入电子邮箱',
				email: '请检查电子邮箱的格式'
			},
			tel: {
				required: '请输入正确手机号',
				minlength: '请输入11位数字'
			}
		},	
		
		errorElement: "em",				//用来创建错误提示信息标签
		success: function(label) {			//验证成功后的执行的回调函数
			//label指向上面那个错误提示信息标签em
			label.text(" ")				//清空错误提示消息
				.addClass("success");	//加上自定义的success类
		}


	  });


	})
<!---->

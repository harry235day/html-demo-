$(document).ready(function() {
	var timeoutId ;
	$(".main>a").click(function(event) {
		/* Act on the event */
		var ulNode = $(this).next("ul");
		// 原生css中的
		// if(ulNode.css("display")=="none"){
		// 	ulNode.css("display","block");
		// }else{
		// 	ulNode.css("display","none");
		// }
		
		//jquery中的显示隐藏方法	
		// ulNode.toggle(500);
		ulNode.slideToggle(500)
	});

	$(".hmain").hover(function(event) {
		/* Act on the event */
		
		var ulNode = $(this).children("ul");
		//jquery中的显示隐藏方法	
		ulNode.slideDown();
		
	},function(){
		var ulNode = $(this).children("ul");
		//jquery中的显示隐藏方法	
		ulNode.slideUp();
	});
	

});
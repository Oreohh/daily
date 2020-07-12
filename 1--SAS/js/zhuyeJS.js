$(function(){
	$('.sub>a').click(
		function(e){
			e.preventDefault();
			var li=$(this).parents('li');
			var dt_s=$('#sidebar.sub');
			var dl_s=$('#sidebar.sub>dl');
			var dl=$(this).siblings('dl');
			if(li.hasClass('open')){
				dl.slideUp();
				li.removeClass('open')
			}else{
				dl_s.slideUp();
				dl.slideDown();
				dt_s.removeClass('open')
				li.addClass('open')
			}
		}
	)
})

$(function(){
	$(".box").find("a").click(function(e){
		
		$(".box a").removeClass("end");
		
		$(this).addClass("end");
	})
})




$(document).ready(function(){
	
	//왼쪽메뉴(웹표준,웹접근성향상)
	$("#left li> a").on("mouseenter click" , function(){
		 $("#left li> nav").stop().slideUp();
		 $(this).next().stop().slideDown();
	});
	
	//메뉴영역에서 마우스 멀어질 때
	$("#left> nav").mouseleave(function(){
		$("#left li> nav").stop().slideUp();
		
		//왼쪽메뉴 마지막<a>가 포커스를 잃을 때
		$(".last").blur(function(){
			$("left li > nav").stop().slideUp();
			
		});
		
		//페이드 슬라이드 (자동으로 계속 반복된다.)
		const fade = setInterval(fading , 2800);
		let i = 3;
		function fading (){
			i--;
			if(i == 0 ) {
				
		}else{
			$("#slide a").eq(1)
		}
		
		}
		
		

});
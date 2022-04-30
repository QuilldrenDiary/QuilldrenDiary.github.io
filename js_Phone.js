/* 　　 */
/* 手機 */
/* 　　 */

function change_scene_phone(){
	$(".flip-card-inner").css("transform","rotateY(0deg)");
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "0"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "0"); 
	$(".flip-card").css("z-index","1");
	$(".flip-card").eq(1).css("z-index","2");
	$("#cover").css("z-index","5");
	
	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "0"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "1"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "0"); 
	
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(-6 * var(--unit)),calc(37 * var(--unit)))"); 
	$('#book').removeClass("icon"); 
	$('#book').css("z-index", "7"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "rotate(0)");
	$('#book2').css("width", "calc(109 * var(--unit))"); 
	$('#book2').css("height", "calc(133.83 * var(--unit))");  

	$('.flip-card').css("transition", "0.5s"); 
	$('.flip-card').css("padding-top", "calc(4 * var(--unit))"); 
	$('.flip-card').css("padding-left", "calc(14 * var(--unit))"); 
	$('.flip-card').css("width", "calc(91 * var(--unit))"); 
	$('.flip-card').css("height", "calc(120 * var(--unit))"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-phone.png')"); 
	$('#quilldren').addClass("icon"); 
	$('#quilldren').css("width", "calc(24 * var(--unit))"); 
	$('#quilldren').css("height", "calc(32.88 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(5 * var(--unit)),calc(5 * var(--unit)))"); 
	$('#quilldren').click(change_scene_phone);
	
	$('#pad').css("transition", "0.5s"); 
	$('#pad').css("transform", "translate(calc(30 * var(--unit)),calc(5 * var(--unit)))"); 
	$('#pad2').css("transition", "0.5s"); 
	$('#pad2').css("background-image", "url('img/Pad-phone.png')"); 
	$('#pad2').css("transform", "rotate(0deg)"); 
	$('#pad2').css("width", "calc(24 * var(--unit))"); 
	$('#pad2').css("height", "calc(32.88 * var(--unit))"); 
	
	$('#twitter').css("transition", "0.5s"); 
	$('#twitter').css("transform", "translate(calc(55 * var(--unit)),calc(5 * var(--unit)))"); 
	$('#twitter2').css("transition", "0.5s"); 
	$('#twitter2').css("background-image", "url('img/Twitter-phone.png')"); 
	$('#twitter2').css("transform", "rotate(0deg)"); 
	$('#twitter2').css("width", "calc(24 * var(--unit))"); 
	$('#twitter2').css("height", "calc(32.88 * var(--unit))"); 
	
	$('#pen').css("transition", "0.5s"); 
	$('#pen').css("transform", "translate(calc(77 * var(--unit)),calc(5 * var(--unit)))"); 
	$('#pen2').css("transition", "0.5s"); 
	$('#pen2').css("background-image", "url('img/Pen-phone.png')"); 
	$('#pen2').css("transform", "rotate(0deg)"); 
	$('#pen2').css("width", "calc(24 * var(--unit))"); 
	$('#pen2').css("height", "calc(32.88 * var(--unit))"); 
	$('#book').unbind("click");
	

	setTimeout(
		function() {
			$('#pen').css("transition", "0s"); 
			$('#pen2').css("transition", "0s"); 
			$('#book').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$('.flip-card').css("transition", "0s"); 
			$('#quilldren').css("transition", "0s"); 
			$('#twitter').css("transition", "0s"); 
			$('#twitter2').css("transition", "0s"); 
			$('#pad').css("transition", "0s"); 
			$('#pad2').css("transition", "0s"); 
			
			$('#cup').remove();
			$('#ink').remove();
			$('#book').click(first_page_phone);
	}, 500);
	
};

function first_page_phone(){
	i=1;
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "1"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "1"); 
	$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
	
	setTimeout(
		function() {
			$('#earringsL').css("transition", "0s"); 
			$('#earringsR').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$(".flip-card-back").eq(0).css("z-index","3");
			$('#book').unbind("click");
	}, 250);
}

function next_phone(){
	$('#earringsR').attr('onclick', '');
	if(i == 0){
		$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
		$(".flip-card").eq(1).css("z-index","3");
		$('#earringsL').css("transition", "0.5s"); 
		$('#earringsL').css("opacity", "1"); 
		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s");
				$('#book').css("transition", "0s"); 
				i = i + 1;
				$('#earringsR').attr('onclick', 'next()');
		}, 250);
	}else if(i < $(".flip-card-inner").length -1){

		$(".flip-card-inner").eq(i).css("transform","rotateY(-180deg)");
	
		$(".flip-card").eq(i).css("z-index","4");
		$(".flip-card").eq(i+1).css("z-index","3");
		
		setTimeout(
			function() {
				$(".flip-card").eq(i-1).css("z-index","2");
				$(".flip-card").eq(i).css("z-index","3");
				i = i + 1;
				$('#earringsR').attr('onclick', 'next()');
		}, 250);
	}else if(i == $(".flip-card-inner").length -1){
		$(".flip-card-inner").eq(i).css("transform","rotateY(-180deg)");
	
		$(".flip-card").eq(i).css("z-index","4");
		$(".flip-card").eq(i+1).css("z-index","3");
		$('#earringsR').css("transition", "0.5s"); 
		$("#earringsR").css("opacity","0");
		$('#book2').css("transition", "0.5s"); 
		$("#book2").css("transform","translateX(calc(87 * var(--unit)))");

		setTimeout(
			function() {
				$(".flip-card").eq(i-1).css("z-index","2");
				$(".flip-card").eq(i).css("z-index","3");
				i = i + 1;
				$('#earringsR').attr('onclick', 'next()');
		}, 500);
	}else{

		setTimeout(
			function() {
				$('#earringsR').attr('onclick', 'next()');
		}, 250);
	}

}

function previous_phone(){
	$('#earringsL').attr('onclick', '');
	if(i == $(".flip-card-inner").length){
		$('#earringsR').css("transition", "0.5s"); 
		$("#earringsR").css("opacity","1");
		$("#book2").css("transform","translateX(calc(0 * var(--unit)))");

		setTimeout(
			function() {
				$('#earringsL').attr('onclick', 'previous()');
				$('#earringsR').css("transition", "0s"); 
		}, 300);
	}
	if(i > 1){
		$(".flip-card-inner").eq(i-1).css("transform","rotateY(0deg)");
		$(".flip-card").eq(i-2).css("z-index","3");
		$(".flip-card").eq(i-1).css("z-index","4");

		setTimeout(
			function() {
				$(".flip-card").eq(i).css("z-index","2");
				$(".flip-card").eq(i-1).css("z-index","3");
				i = i - 1;
				$('#earringsL').attr('onclick', 'previous()');
		}, 250);
	}else if(i == 1){
		$(".flip-card-inner").eq(0).css("transform","rotateY(0deg)");
		$(".flip-card").eq(0).css("z-index","4");
		$('#earringsL').css("transition", "0.5s"); 
		$('#earringsL').css("opacity", "0"); 
		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s");
				$(".flip-card").eq(i+1).css("z-index","2");
				i = i - 1;
				$('#earringsL').attr('onclick', 'previous()');
		}, 250);
	}else{

		setTimeout(
			function() {
				$('#earringsL').attr('onclick', 'previous()');
		}, 250);
	}

}
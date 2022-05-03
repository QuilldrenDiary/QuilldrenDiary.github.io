
function setOffset(){
	if ($(window).width()>=1080){
		$(":root").css("--offsetX", "calc((100vw - ( (16 / 9) * 100vh)) / 2)");
		$(":root").css("--offsetY", "0");
		$(":root").css("--unit", "(16 / 9) * 1vh");
	}else if($(window).width()>=480 && $(window).width()<1080){
		$(":root").css("--offsetY", "calc((100vh - ( (9 / 16) * 100vw)) / 2)");
		$(":root").css("--offsetX", "0");
		$(":root").css("--unit", "1vw");
	}else{
		$(":root").css("--offsetY", "calc((100vh - ( (844 / 390) * 100vw)) / 2)");
		$(":root").css("--offsetX", "0");
		$(":root").css("--unit", "1vw");
	}
}

/* 　　 */
/* 電腦 */
/* 　　 */

function initialize_PC(){
	
	$(".flip-card-inner").css("transform","rotateY(0deg)");
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "0"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "0"); 
	$(".flip-card").css("z-index","1");
	$(".flip-card").eq(1).css("z-index","2");
	$("#cover").css("z-index","5");
	$('#cup').css("display","block");
	$('#toast').css("display","block");
	$('#ink').css("display","block");
	$('#book-bg').remove();
	$('#quilldren').unbind("click");

	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "1"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "1"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "1"); 
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(13.7 * var(--unit)),calc(4 * var(--unit)))"); 
	$('#book').addClass("icon"); 
	$('#book').css("z-index", "5"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "rotate(-4.81deg)");
	$('#book2').css("background-image", "url('img/book.png')");   
	$('#book').click(change_scene_PC);
	
	$('#pen').css("transition", "0.5s"); 
	$('#pen').css("transform", "translate(calc(0.75 * var(--unit)),calc(14 * var(--unit)))"); 
	$('#pen2').css("transition", "0.5s"); 
	$('#pen2').css("transform", "rotate(24.03deg)"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-2.gif')"); 
	$('#quilldren').removeClass("icon"); 
	$('#quilldren').css("height", "calc(22 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(45 * var(--unit)),calc(1 * var(--unit)))"); 
	$('#book').click(change_scene_PC);
	
	$('#twitter').css("transition", "0.5s"); 
	$('#twitter').css("transform", "translate(calc(0 * var(--unit)),calc(39 * var(--unit)))"); 
	$('#twitter2').css("transition", "0.5s"); 
	$('#twitter2').css("transform", "rotate(-13deg)"); 
	
	$('#pad').css("transition", "0.5s"); 
	$('#pad').css("transform", "translate(calc(50 * var(--unit)),calc(24 * var(--unit)))"); 
	$('#pad2').css("transition", "0.5s"); 
	$('#pad2').css("transform", "rotate(8deg)");

	setTimeout(
		function() {
			$('#pen').css("transition", "0s"); 
			$('#pen2').css("transition", "0s"); 
			$('#book').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$('#quilldren').css("transition", "0s"); 
			$('#twitter').css("transition", "0s"); 
			$('#twitter2').css("transition", "0s"); 
			$('#pad').css("transition", "0s"); 
			$('#pad2').css("transition", "0s");
	}, 200);
}

function change_scene_PC(){

	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "0"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "0"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "0"); 
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(29 * var(--unit)),calc(-1.5 * var(--unit))) scale(110%)"); 
	$('#book').removeClass("icon"); 
	$('#book').css("z-index", "1"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "translate(0px,calc(1.5 * var(--unit))) rotate(0)"); 
	$('#book').append('<div id="book-bg"></div>'); 
	
	$('#pen').css("transition", "0.5s"); 
	$('#pen').css("transform", "translate(calc(90 * var(--unit)),calc(36 * var(--unit))) scale(60%)"); 
	$('#pen2').css("transition", "0.5s"); 
	$('#pen2').css("transform", "rotate(-20deg)"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-page.png')"); 
	$('#quilldren').css("height", "calc(32.26 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(72 * var(--unit)),calc(36 * var(--unit))) scale(35%)"); 
	
	$('#twitter').css("transition", "0.5s"); 
	$('#twitter').css("transform", "translate(calc(61 * var(--unit)),calc(45 * var(--unit))) scale(53%)"); 
	$('#twitter2').css("transition", "0.5s"); 
	$('#twitter2').css("transform", "rotate(8deg)"); 
	
	$('#pad').css("transition", "0.5s"); 
	$('#pad').css("transform", "translate(calc(41 * var(--unit)),calc(41 * var(--unit))) scale(33%)"); 
	$('#pad2').css("transition", "0.5s"); 
	$('#pad2').css("transform", "rotate(5deg)"); 
	$('#book').unbind("click");
	
	
	setTimeout(
		function() {
			$('#pen').css("transition", "0s"); 
			$('#pen2').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$('#quilldren').css("transition", "0s"); 
			$('#twitter').css("transition", "0s"); 
			$('#twitter2').css("transition", "0s"); 
			$('#pad').css("transition", "0s"); 
			$('#pad2').css("transition", "0s"); 
			$('#book2').css("background-image", "none"); 
			$('#book-bg').css("opacity", "1"); 
			$('#book-bg').css("transform", "rotate(0)"); 
			

			$('#cup').css("display","none");
			$('#toast').css("display","none");
			$('#ink').css("display","none");
			$('#book').click(first_page_PC);
	}, 200);
	
};

function first_page_PC(){
	i=1;
	$('#earringsL').css("opacity", "1"); 
	$('#earringsR').css("opacity", "1"); 
	
	$('#book').css("transform", "translate(calc(44.6 * var(--unit)),calc(-1.5 * var(--unit))) scale(110%)"); 
	$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
	
	$('#quilldren').addClass("icon"); 
	$('#quilldren').click(initialize_PC);
	setTimeout(
		function() {
			$('#earringsL').css("transition", "0s"); 
			$('#earringsR').css("transition", "0s"); 
			$(".flip-card").eq(1).css("z-index","2");
			$('#book').unbind("click");
	}, 250);
}

function next_PC(){
	$('#earringsR').attr('onclick', '');
	if(i ==(($(".flip-card").length-1)/2)){
		$('#book-bg').css("background-image","url('img/book-bgL.png')")
	}

	if(i == 0){
		$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
		$(".flip-card").eq(1).css("z-index","3");
		$('#earringsL').css("transition", "0.5s"); 
		$('#earringsL').css("opacity", "1"); 
		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s");
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

function previous_PC(){
	$('#earringsL').attr('onclick', '');

	if((i-1) ==(($(".flip-card").length-1)/2)){
		$('#book-bg').css("background-image","url('img/book-bgR.png')")
	}

	if(i == $(".flip-card-inner").length){
		$('#earringsR').css("transition", "0.5s"); 
		$("#earringsR").css("opacity","1");

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

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
	$('#earringsL').css("opacity", "0"); 
	$('#earringsR').css("opacity", "0"); 
	$(".flip-card").css("z-index","1");
	$(".flip-card").eq(1).css("z-index","2");
	$("#cover").css("z-index","5");
	$('#cup').css("display","block");
	$('#toast').css("display","block");
	$('#ink').css("display","block");
	$('#book-bg').remove();
	$('#quilldren').unbind("click");
	$('#earringsL').unbind("click");
	$('#earringsR').unbind("click");
	$('.yellow').remove();

	$('#cup').css("opacity", "1"); 
	$('#toast').css("opacity", "1"); 
	$('#ink').css("opacity", "1"); 
	
	$('#book').css("transform", "translate(calc(13.7 * var(--unit)),calc(4 * var(--unit)))"); 
	$('#book').addClass("icon"); 
	$('#book').css("z-index", "5"); 
	$('#book2').css("transform", "rotate(-4.81deg)");
	$('#book2').css("background-image", "url('img/book.webp')");   
	$('#book').click(change_scene_PC);
	
	$('#pen').css("transform", "translate(calc(-2.6 * var(--unit)),calc(13.5 * var(--unit)))"); 
	$('#pen2').css("transform", "rotate(24.03deg)"); 
	
	$('#quilldren').css("background-image", "url('img/Quildren-2.gif')"); 
	$('#quilldren').removeClass("icon"); 
	$('#quilldren').css("height", "calc(22 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(45 * var(--unit)),calc(1 * var(--unit)))"); 
	$('#book').unbind("click");
	$('#book').click(change_scene_PC);
	
	$('#twitter').css("transform", "translate(calc(0 * var(--unit)),calc(39 * var(--unit)))"); 
	$('#twitter2').css("transform", "rotate(-13deg)"); 
	
	$('#pad').css("transform", "translate(calc(50 * var(--unit)),calc(24 * var(--unit)))"); 
	$('#pad2').css("transform", "rotate(8deg)");

	setTimeout(
		function() {
	}, 200);
}

function change_scene_PC(){

	$('#book2').append('<div class="yellow"></div>');
	
	$('#book').removeClass("icon"); 
	$('#cup').css("opacity", "0"); 
	$('#toast').css("opacity", "0"); 
	$('#ink').css("opacity", "0"); 
	
	$('#book').css("transform", "translate(calc(29 * var(--unit)),calc(-1.5 * var(--unit))) scale(110%)"); 
	$('#book').css("z-index", "1"); 
	$('#book2').css("transform", "translate(0px,calc(1.5 * var(--unit))) rotate(0)"); 
	$('#book').append('<div id="book-bg"></div>'); 
	
	$('#pen').css("transform", "translate(calc(87.2 * var(--unit)),calc(36.3 * var(--unit))) scale(60%)"); 
	$('#pen2').css("transform", "rotate(-20deg)"); 
	
	$('#quilldren').css("background-image", "url('img/Quildren-page.webp')"); 
	$('#quilldren').css("height", "calc(32.26 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(72 * var(--unit)),calc(36 * var(--unit))) scale(35%)"); 
	
	$('#twitter').css("transform", "translate(calc(61 * var(--unit)),calc(45 * var(--unit))) scale(53%)");  
	$('#twitter2').css("transform", "rotate(8deg)"); 
	
	$('#pad').css("transform", "translate(calc(41 * var(--unit)),calc(41 * var(--unit))) scale(33%)"); 
	$('#pad2').css("transform", "rotate(5deg)"); 
	$('#book').unbind("click");
	
	
	setTimeout(
		function() {
			$('#quilldren').addClass("icon"); 
			$('#quilldren').click(initialize_PC);
			$('#book2').css("background-image", "none"); 
			$('#book-bg').css("opacity", "1");
			
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
	$('#earringsL').click(previous_PC);
	$('#earringsR').click(next_PC);
	$('.yellow').remove();
	
	$('#book').css("transform", "translate(calc(44.6 * var(--unit)),calc(-1.5 * var(--unit))) scale(110%)"); 
	$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
	
	setTimeout(
		function() {
			$(".flip-card").eq(1).css("z-index","2");
			$('#book').unbind("click");
	}, 250);
}

function next_PC(){
	$('#earringsR').unbind("click");
	if(i ==parseInt(($(".flip-card").length-1)/2)){
		$('#book-bg').css("background-image","url('img/book-bgL.webp')")
	}

	if(i == 0){
		$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
		$(".flip-card").eq(1).css("z-index","3");
		$('#earringsL').css("opacity", "1"); 
		setTimeout(
			function() {
				i = i + 1;
				$('#earringsR').click(next_PC);
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
				$('#earringsR').click(next_PC);
		}, 250);
	}else if(i == $(".flip-card-inner").length -1){
		$(".flip-card-inner").eq(i).css("transform","rotateY(-180deg)");
	
		$(".flip-card").eq(i).css("z-index","4");
		$(".flip-card").eq(i+1).css("z-index","3");
		$("#earringsR").css("opacity","0");

		setTimeout(
			function() {
				$(".flip-card").eq(i-1).css("z-index","2");
				$(".flip-card").eq(i).css("z-index","3");
				i = i + 1;
				$('#earringsR').click(next_PC);
		}, 500);
	}
}

function previous_PC(){
	$('#earringsL').unbind("click");

	if((i-1) ==parseInt(($(".flip-card").length-1)/2)){
		$('#book-bg').css("background-image","url('img/book-bgR.webp')")
	}

	if(i == $(".flip-card-inner").length){
		$("#earringsR").css("opacity","1");
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
				$('#earringsL').click(previous_PC);
		}, 250);
	}else if(i == 1){
		$(".flip-card-inner").eq(0).css("transform","rotateY(0deg)");
		$(".flip-card").eq(0).css("z-index","4");
		$('#earringsL').css("opacity", "0"); 
		setTimeout(
			function() {
				$(".flip-card").eq(i+1).css("z-index","2");
				i = i - 1;
				$('#earringsL').click(previous_PC);
		}, 250);
	}
}
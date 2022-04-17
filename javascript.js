function changeScenePC(){
	
	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "0"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "0"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "0"); 
	
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(33 * var(--unit)),0px) scale(105%)"); 
	$('#book').removeClass("icon"); 
	$('#book').css("z-index", "1"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "translate(0px,calc(1.5 * var(--unit))) rotate(0)"); 
	
	$('#pen').css("transition", "0.5s"); 
	$('#pen').css("transform", "translate(calc(72 * var(--unit)),calc(38 * var(--unit))) scale(60%)"); 
	$('#pen2').css("transition", "0.5s"); 
	$('#pen2').css("transform", "rotate(20deg)"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-page.png')"); 
	$('#quilldren').addClass("icon"); 
	$('#quilldren').css("height", "calc(32.26 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(22 * var(--unit)),calc(36 * var(--unit))) scale(35%)"); 
	
	$('#twitter').css("transition", "0.5s"); 
	$('#twitter').css("transform", "translate(calc(52 * var(--unit)),calc(45 * var(--unit))) scale(53%)"); 
	$('#twitter2').css("transition", "0.5s"); 
	$('#twitter2').css("transform", "rotate(-11deg)"); 
	
	$('#pad').css("transition", "0.5s"); 
	$('#pad').css("transform", "translate(calc(30 * var(--unit)),calc(40 * var(--unit))) scale(33%)"); 
	$('#pad2').css("transition", "0.5s"); 
	$('#pad2').css("transform", "rotate(7deg)"); 
	

	
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
			
			$('#cup').remove();
			$('#toast').remove();
			$('#ink').remove();
			$('#book').click(first_page_PC);
	}, 500);
	
};
function changeSceneMobile(){
	
	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "0"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "1"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "0"); 
	
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(-6 * var(--unit)),calc(37 * var(--unit)))"); 
	$('#book').removeClass("icon"); 
	$('#book').css("z-index", "1"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "rotate(0)");
	$('#book2').css("width", "calc(109 * var(--unit))"); 
	$('#book2').css("height", "calc(133.83 * var(--unit))");  
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-phone.png')"); 
	$('#quilldren').addClass("icon"); 
	$('#quilldren').css("width", "calc(24 * var(--unit))"); 
	$('#quilldren').css("height", "calc(32.88 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(5 * var(--unit)),calc(5 * var(--unit)))"); 
	
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
			
			$('#cup').remove();
			$('#ink').remove();
			$('#book').click(first_page_phone);
	}, 500);
	
};
function first_page_PC(){
	
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "1"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "1"); 
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(46.7 * var(--unit)),0px) scale(105%)"); 
	
	setTimeout(
		function() {
			$('#earringsL').css("transition", "0s"); 
			$('#earringsR').css("transition", "0s"); 
	}, 500);
}

function first_page_phone(){
	
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "1"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "1"); 
	
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("background-image", "url('img/page-even.png')"); 
	$('#book2').css("transform", "scale(94%)");
	
	setTimeout(
		function() {
			$('#earringsL').css("transition", "0s"); 
			$('#earringsR').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
	}, 500);
}
/* 　　 */
/* 手機 */
/* 　　 */

function initialize_phone(){
	touchable=0;
	i=0;

	$(".flip-card-inner").css("transform","rotateY(0deg)");
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "0"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "0"); 
	$(".flip-card").css("z-index","1");
	$(".flip-card").eq(1).css("z-index","2");
	$("#cover").css("z-index","5");
	$('#cup').css("display","block");
	$('#ink').css("display","block");
	$('#resources').css("display","none");
	$('#credits').css("display","none");
	$('#book-bg').remove();
	$('#quilldren').unbind("click");
	$('#earringsL').unbind("click");
	$('#earringsR').unbind("click");

	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "1"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "1"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "0"); 

	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(0 * var(--unit)),calc(35 * var(--unit)))"); 
	$('#book').css("z-index", "5"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "rotate(-4.81deg)");
	$('#book2').css("width", "calc(95.5 * var(--unit))"); 
	$('#book2').css("height", "calc(117.25 * var(--unit))");  
	$('#book2').css("background-image", "url('img/book.png')");  
	$('#book').unbind("click");

	$('.flip-card').css("transition", "0.5s"); 
	$('.flip-card').css("padding-top", "calc(3.4 * var(--unit))"); 
	$('.flip-card').css("padding-left", "calc(12.7 * var(--unit))"); 
	$('.flip-card').css("width", "calc(83 * var(--unit))"); 
	$('.flip-card').css("height", "calc(112.5 * var(--unit))"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-2.gif')"); 
	$('#quilldren').css("width", "calc(65 * var(--unit))"); 
	$('#quilldren').css("height", "calc(65 * var(--unit))"); 
	$('#quilldren').css("transform", "translate(calc(55 * var(--unit)),calc(100 * var(--unit)))"); 

	$('#pad').css("transition", "0.5s"); 
	$('#pad').css("transform", "translate(calc(29 * var(--unit)),calc(-1 * var(--unit)))"); 
	$('#pad2').css("transition", "0.5s"); 
	$('#pad2').css("background-image", "url('img/Pad.png')"); 
	$('#pad2').css("transform", "rotate(11deg)"); 
	$('#pad2').css("width", "calc(72 * var(--unit))"); 
	$('#pad2').css("height", "calc(57.08 * var(--unit))"); 
	
	$('#twitter').css("transition", "0.5s"); 
	$('#twitter').css("transform", "translate(calc(-12 * var(--unit)),calc(155 * var(--unit)))"); 
	$('#twitter2').css("transition", "0.5s"); 
	$('#twitter2').css("background-image", "url('img/Twitter.png')"); 
	$('#twitter2').css("transform", "rotate(-13deg)"); 
	$('#twitter2').css("width", "calc(52 * var(--unit))"); 
	$('#twitter2').css("height", "calc(44.3 * var(--unit))"); 
	
	$('#pen').css("transition", "0.5s"); 
	$('#pen').css("transform", "translate(calc(29 * var(--unit)),calc(155 * var(--unit)))"); 
	$('#pen2').css("transition", "0.5s"); 
	$('#pen2').css("background-image", "url('img/Pen.png')"); 
	$('#pen2').css("transform", "rotate(26deg)"); 
	$('#pen2').css("width", "calc(14.6 * var(--unit))"); 
	$('#pen2').css("height", "calc(82.2 * var(--unit))"); 

	setTimeout(
		function() {
			$('#pen').css("transition", "0s"); 
			$('#pen2').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$('.flip-card').css("transition", "0s"); 
			$('#quilldren').css("transition", "0s"); 
			$('#twitter').css("transition", "0s"); 
			$('#twitter2').css("transition", "0s"); 
			$('#pad').css("transition", "0s"); 
			$('#pad2').css("transition", "0s"); 
			
			$('#book').click(change_scene_phone);
	}, 500);
}

function change_scene_phone(){
	touchable=1;
	
	$('#cup').css("transition", "0.5s"); 
	$('#cup').css("opacity", "0"); 
	$('#ink').css("transition", "0.5s"); 
	$('#ink').css("opacity", "0"); 
	$('#toast').css("transition", "0.5s"); 
	$('#toast').css("opacity", "1"); 
	
	$('#book').css("transition", "0.5s"); 
	$('#book').css("transform", "translate(calc(-6 * var(--unit)),calc(35 * var(--unit)))"); 
	$('#book').css("z-index", "7"); 
	$('#book2').css("transition", "0.5s"); 
	$('#book2').css("transform", "rotate(0)");
	$('#book2').css("width", "calc(109 * var(--unit))"); 
	$('#book2').css("height", "calc(133.83 * var(--unit))");  
	$('#book').append('<div id="book-bg"></div>'); 

	$('.flip-card').css("transition", "0.5s"); 
	$('.flip-card').css("padding-top", "calc(4 * var(--unit))"); 
	$('.flip-card').css("padding-left", "calc(14 * var(--unit))"); 
	$('.flip-card').css("width", "calc(95 * var(--unit))"); 
	$('.flip-card').css("height", "calc(128 * var(--unit))"); 
	
	$('#quilldren').css("transition", "0.5s"); 
	$('#quilldren').css("background-image", "url('img/Quildren-phone.png')"); 
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
	$('#book').unbind("click");
	

	setTimeout(
		function() {
			$('#pen').css("transition", "0s"); 
			$('#pen2').css("transition", "0s"); 
			$('#book2').css("transition", "0s"); 
			$('.flip-card').css("transition", "0s"); 
			$('#quilldren').css("transition", "0s"); 
			$('#quilldren').click(initialize_phone);
			$('#twitter').css("transition", "0s"); 
			$('#twitter2').css("transition", "0s"); 
			$('#pad').css("transition", "0s"); 
			$('#pad2').css("transition", "0s"); 
			$('#book-bg').css("opacity", "1"); 
			
			$('#resources').css("display","block");
			$('#credits').css("display","block");
			$('#cup').css("display","none");
			$('#ink').css("display","none");
			$('#book').click(first_page_phone);
	}, 500);
	
};

function first_page_phone(){
	i=1;
	$('#earringsL').css("transition", "0.5s"); 
	$('#earringsL').css("opacity", "1"); 
	$('#earringsR').css("transition", "0.5s"); 
	$('#earringsR').css("opacity", "1"); 
	$('#earringsL').click(previous_phone);
	$('#earringsR').click(next_phone);

	$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
	$(".flip-card").eq(1).css("z-index","4");
	$('#book').unbind("click");
	
	setTimeout(
		function() {
			$('#earringsL').css("transition", "0s"); 
			$('#earringsR').css("transition", "0s"); 
			$(".flip-card-back").eq(0).css("z-index","3");
	}, 250);
}

function next_phone(){
	$('#earringsR').unbind("click");
	if(i == 0){
		$(".flip-card-inner").eq(0).css("transform","rotateY(-180deg)");
		$(".flip-card").eq(1).css("z-index","3");
		$('#earringsL').css("transition", "0.5s"); 
		$('#earringsL').css("opacity", "1"); 
		$('#earringsR').css("transition", "0.5s"); 
		$('#earringsR').css("opacity", "1"); 
		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s");
				$('#earringsR').css("transition", "0s");
				i = i + 1;
				$('#earringsR').click(next_phone);
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
				$('#earringsR').click(next_phone);
		}, 250);
	}else if(i == $(".flip-card-inner").length -1){
		$(".flip-card-inner").eq(i).css("transform","rotateY(-180deg)");
	
		$(".flip-card").eq(i).css("z-index","4");
		$(".flip-card").eq(i+1).css("z-index","3");
		$('#earringsR').css("transition", "0.5s"); 
		$("#earringsR").css("opacity","0");
		$('#book2').css("transition", "0.5s"); 
		$("#book2").css("transform","translateX(calc(87 * var(--unit)))");
		$('#book2').css("background-image", "none");
		$('#book-bg').css("transition", "0.5s"); 
		$('#book-bg').css("left", "calc(6.5 * var(--unit))"); 
		$("#earringsR").css("opacity","0");

		setTimeout(
			function() {
				$(".flip-card").eq(i-1).css("z-index","2");
				$(".flip-card").eq(i).css("z-index","3");
				i = i + 1;
				$('#earringsR').click(next_phone);
		}, 500);
	}else{

		setTimeout(
			function() {
				$('#earringsR').click(next_phone);
		}, 250);
	}

}

function previous_phone(){
	$('#earringsL').unbind("click");
	if(i == $(".flip-card-inner").length){
		$('#earringsL').css("transition", "0.5s"); 
		$("#earringsL").css("opacity","1");
		$('#earringsR').css("transition", "0.5s"); 
		$("#earringsR").css("opacity","1");
		$("#book2").css("transform","translateX(calc(0 * var(--unit)))");
		$('#book-bg').css("left", "calc(-82 * var(--unit))"); 
		$('#book-bg').css("transition", "0.3s"); 

		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s"); 
				$('#earringsR').css("transition", "0s"); 
				$('#book2').css("background-image", "url('img/book.png')"); 
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
				$('#earringsL').click(previous_phone);
		}, 250);
	}else if(i == 1){
		$(".flip-card-inner").eq(0).css("transform","rotateY(0deg)");
		$(".flip-card").eq(0).css("z-index","4");
		$('#earringsL').css("transition", "0.5s"); 
		$('#earringsL').css("opacity", "0"); 
		setTimeout(
			function() {
				$('#earringsL').css("transition", "0s");
				$(".flip-card").eq(i).css("z-index","3");
				$(".flip-card").eq(i+1).css("z-index","2");
				i = i - 1;
				$('#earringsL').click(previous_phone);
		}, 250);
	}else{

		setTimeout(
			function() {
				$('#earringsL').click(previous_phone);
		}, 250);
	}

}
//////////////////////////////////////////////////////////////////////
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) && touchable==1 ) {/*most significant*/
        if ( xDiff > 0 ) {
            next_phone();
        } else {
            previous_phone();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

/* 禁止點兩下放大 */
$(function(){
	document.addEventListener('touchstart', function(event) {
	if (event.touches.length > 1) {
			event.preventDefault()
	}
	});
	document.addEventListener('gesturestart', function(event) {
		event.preventDefault()
	});
})
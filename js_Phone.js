function initialize_phone() {
    touchable = 0, i = 0, $(".flip-card-inner").css("transform", "rotateY(0deg)"), $("#earringsL").css("opacity", "0"), 
    $("#earringsR").css("opacity", "0"), $(".flip-card").css("z-index", "1"), $(".flip-card").eq(1).css("z-index", "2"), 
    $("#cover").css("z-index", "5"), $("#cup").css("display", "block"), $("#ink").css("display", "block"), 
    $("#resources").css("display", "none"), $("#credits").css("display", "none"), $("#book-bg").remove(), 
    $("#quilldren").unbind("click"), $("#earringsL").unbind("click"), $("#earringsR").unbind("click"), 
    $("#cup").css("opacity", "1"), $("#ink").css("opacity", "1"), $("#toast").css("opacity", "0"), 
    $("#book").css("transform", "translate(calc(0 * var(--unit)),calc(35 * var(--unit)))"), 
    $("#book").css("z-index", "5"), $("#book2").css("transform", "rotate(-4.81deg)"), 
    $("#book2").css("width", "calc(95.5 * var(--unit))"), $("#book2").css("height", "calc(117.25 * var(--unit))"), 
    $("#book2").css("background-image", "url('img/book.webp')"), $("#book").unbind("click"), 
    $(".flip-card").css("padding-top", "calc(3.4 * var(--unit))"), $(".flip-card").css("padding-left", "calc(12.7 * var(--unit))"), 
    $(".flip-card").css("width", "calc(83 * var(--unit))"), $(".flip-card").css("height", "calc(112.5 * var(--unit))"), 
    $("#quilldren").css("background-image", "url('img/Quildren-2.gif')"), $("#quilldren").css("width", "calc(65 * var(--unit))"), 
    $("#quilldren").css("height", "calc(65 * var(--unit))"), $("#quilldren").css("transform", "translate(calc(55 * var(--unit)),calc(100 * var(--unit)))"), 
    $("#pad").css("transform", "translate(calc(29 * var(--unit)),calc(-1 * var(--unit)))"), 
    $("#pad2").css("background-image", "url('img/Pad.webp')"), $("#pad2").css("transform", "rotate(11deg)"), 
    $("#pad2").css("width", "calc(72 * var(--unit))"), $("#pad2").css("height", "calc(57.08 * var(--unit))"), 
    $("#twitter").css("transform", "translate(calc(-12 * var(--unit)),calc(155 * var(--unit)))"), 
    $("#twitter2").css("background-image", "url('img/Twitter.webp')"), $("#twitter2").css("transform", "rotate(-13deg)"), 
    $("#twitter2").css("width", "calc(52 * var(--unit))"), $("#twitter2").css("height", "calc(44.3 * var(--unit))"), 
    $("#pen").css("transform", "translate(calc(29 * var(--unit)),calc(155 * var(--unit)))"), 
    $("#pen2").css("background-image", "url('img/Pen.webp')"), $("#pen2").css("transform", "rotate(26deg)"), 
    $("#pen2").css("width", "calc(23 * var(--unit))"), $("#pen2").css("height", "calc(82.2 * var(--unit))"), 
    $("#page_cover").css("background-image", "url('img/page-cover.webp')"), 
    setTimeout(function() {
        $("#book").click(change_scene_phone);
    }, 500);
}

function change_scene_phone() {
    touchable = 1, $("#cup").css("opacity", "0"), $("#ink").css("opacity", "0"), $("#toast").css("opacity", "1"), 
    $("#book").css("transform", "translate(calc(-6 * var(--unit)),calc(35 * var(--unit)))"), 
    $("#book").css("z-index", "7"), $("#book2").css("transform", "rotate(0)"), $("#book2").css("width", "calc(109 * var(--unit))"), 
    $("#book2").css("height", "calc(133.83 * var(--unit))"), $("#book").append('<div id="book-bg"></div>'), 
    $(".flip-card").css("padding-top", "calc(4 * var(--unit))"), $(".flip-card").css("padding-left", "calc(14 * var(--unit))"), 
    $(".flip-card").css("width", "calc(95 * var(--unit))"), $(".flip-card").css("height", "calc(128 * var(--unit))"), 
    $("#quilldren").css("background-image", "url('img/Quildren-phone.webp')"), $("#quilldren").css("width", "calc(24 * var(--unit))"), 
    $("#quilldren").css("height", "calc(32.88 * var(--unit))"), $("#quilldren").css("transform", "translate(calc(5 * var(--unit)),calc(5 * var(--unit)))"), 
    $("#pad").css("transform", "translate(calc(30 * var(--unit)),calc(5 * var(--unit)))"), 
    $("#pad2").css("background-image", "url('img/Pad-phone.webp')"), $("#pad2").css("transform", "rotate(0deg)"), 
    $("#pad2").css("width", "calc(24 * var(--unit))"), $("#pad2").css("height", "calc(32.88 * var(--unit))"), 
    $("#twitter").css("transform", "translate(calc(55 * var(--unit)),calc(5 * var(--unit)))"), 
    $("#twitter2").css("background-image", "url('img/Twitter-phone.webp')"), $("#twitter2").css("transform", "rotate(0deg)"), 
    $("#twitter2").css("width", "calc(24 * var(--unit))"), $("#twitter2").css("height", "calc(32.88 * var(--unit))"), 
    $("#pen").css("transform", "translate(calc(77 * var(--unit)),calc(5 * var(--unit)))"), 
    $("#pen2").css("background-image", "url('img/Pen-phone.webp')"), $("#pen2").css("transform", "rotate(0deg)"), 
    $("#pen2").css("width", "calc(24 * var(--unit))"), $("#pen2").css("height", "calc(32.88 * var(--unit))"), 
    $("#book").unbind("click"), 
    $("#page_cover").css("background-image", "url('img/Cover.webp')"), 
    setTimeout(function() {
        $("#quilldren").click(initialize_phone), $("#book-bg").css("opacity", "1"), $("#cup").css("display", "none"), 
        $("#resources").css("display", "block"), $("#credits").css("display", "block"), 
        $("#ink").css("display", "none"), $("#book").click(first_page_phone);
    }, 500);
}

function first_page_phone() {
    /* 跳到第一頁，取消隱藏第二頁 */
	$(".flip-card").eq(2).css("display", "block");

    i = 1, $("#earringsL").css("opacity", "1"), $("#earringsR").css("opacity", "1"), 
    $("#earringsL").click(previous_phone), $("#earringsR").click(next_phone), $(".flip-card-inner").eq(0).css("transform", "rotateY(-180deg)"), 
    $(".flip-card").eq(1).css("z-index", "4"), $("#book").unbind("click"), setTimeout(function() {
        $(".flip-card-back").eq(0).css("z-index", "3");
    }, 250);
}

function next_phone() {
    if(i == 0){
		/* 跳到第一頁，取消隱藏第二頁 */
		$(".flip-card").eq(2).css("display", "block");
    }else if(i < $(".flip-card-inner").length -1){
		/* 跳到第i+1頁，取消隱藏第i+2頁，隱藏第i-1頁 (不隱藏0,1) */
		if (i < $(".flip-card-inner").length - 2) {
			$(".flip-card").eq(i+2).css("display", "block");
		}
		if (i-1 > 1) {
			$(".flip-card").eq(i-1).css("display", "none");
		}
    }else if(i == $(".flip-card-inner").length -1){
		if (i-1 > 1) {
			$(".flip-card").eq(i-1).css("display", "none");
		}
    }

    $("#earringsR").unbind("click"), 0 == i ? ($(".flip-card-inner").eq(0).css("transform", "rotateY(-180deg)"), 
    $(".flip-card").eq(1).css("z-index", "3"), $("#earringsL").css("opacity", "1"), 
    $("#earringsR").css("opacity", "1"), setTimeout(function() {
        i += 1, $("#earringsR").click(next_phone);
    }, 250)) : i < $(".flip-card-inner").length - 1 ? ($(".flip-card-inner").eq(i).css("transform", "rotateY(-180deg)"), 
    $(".flip-card").eq(i).css("z-index", "4"), $(".flip-card").eq(i + 1).css("z-index", "3"), 
    setTimeout(function() {
        $(".flip-card").eq(i - 1).css("z-index", "2"), $(".flip-card").eq(i).css("z-index", "3"), 
        i += 1, $("#earringsR").click(next_phone);
    }, 250)) : i == $(".flip-card-inner").length - 1 ? ($(".flip-card-inner").eq(i).css("transform", "rotateY(-180deg)"), 
    $(".flip-card").eq(i).css("z-index", "4"), $(".flip-card").eq(i + 1).css("z-index", "3"), 
    $("#earringsR").css("opacity", "0"), $("#book2").css("transform", "translateX(calc(87 * var(--unit)))"), 
    $("#book2").css("background-image", "none"), $("#book-bg").css("transition", "transform 0.5,left 0.5s"), 
    $("#book-bg").css("left", "calc(6.5 * var(--unit))"), $("#earringsR").css("opacity", "0"), 
    setTimeout(function() {
        $(".flip-card").eq(i - 1).css("z-index", "2"), $(".flip-card").eq(i).css("z-index", "3"), 
        i += 1, $("#earringsR").click(next_phone);
    }, 500)) : setTimeout(function() {
        $("#earringsR").click(next_phone);
    }, 250);
}

function previous_phone() {
    if(i == $(".flip-card-inner").length){
		if (i-2 > 1) {
			$(".flip-card").eq(i-2).css("display", "block");
		}
    }

    if(i > 1){
		$(".flip-card").eq(i+1).css("display", "none");
		if (i-2 > 1) {
			$(".flip-card").eq(i-2).css("display", "block");
		}
    }else if(i == 1){
		$(".flip-card").eq(2).css("display", "none");
    }

    $("#earringsL").unbind("click"), i == $(".flip-card-inner").length && ($("#earringsL").css("opacity", "1"), 
    $("#earringsR").css("opacity", "1"), $("#book2").css("transform", "translateX(calc(0 * var(--unit)))"), 
    $("#book-bg").css("transition", "transform 0.5,left 0.3s"), $("#book-bg").css("left", "calc(-82 * var(--unit))"), 
    setTimeout(function() {
        $("#book2").css("background-image", "url('img/book.webp')");
    }, 300)), i > 1 ? ($(".flip-card-inner").eq(i - 1).css("transform", "rotateY(0deg)"), 
    $(".flip-card").eq(i - 2).css("z-index", "3"), $(".flip-card").eq(i - 1).css("z-index", "4"), 
    setTimeout(function() {
        $(".flip-card").eq(i).css("z-index", "2"), $(".flip-card").eq(i - 1).css("z-index", "3"), 
        i -= 1, $("#earringsL").click(previous_phone);
    }, 250)) : 1 == i ? ($(".flip-card-inner").eq(0).css("transform", "rotateY(0deg)"), 
    $(".flip-card").eq(0).css("z-index", "4"), $("#earringsL").css("opacity", "0"), 
    setTimeout(function() {
        $(".flip-card").eq(i).css("z-index", "3"), $(".flip-card").eq(i + 1).css("z-index", "2"), 
        i -= 1, $("#earringsL").click(previous_phone);
    }, 250)) : setTimeout(function() {
        $("#earringsL").click(previous_phone);
    }, 250);
}
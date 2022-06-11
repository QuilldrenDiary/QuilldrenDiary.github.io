function create_page(page_num){
    if ($(window).width() > 480) {
        page_num=parseInt(page_num/2)+3;
    }else{
        page_num=page_num+3;
    }
    var j;
    for(j=0;j<page_num;j++){
        $('#book2').append('<div class="flip-card" ></div>');
    }
    $('.flip-card').append('<div class="flip-card-inner" ></div>');
    $('.flip-card-inner').append('<div class="flip-card-front page"></div><div class="flip-card-back page" ></div>');
    $('.flip-card').eq(0).attr('id','cover');
    $('.flip-card-front').eq(0).attr('id','page_cover');
    $('.flip-card-front').eq(0).append('<div id="credits" class="stickers"></div>');
    $('.flip-card-front').eq(0).append('<div id="resources" class="stickers"></div>');
    $('.flip-card-back').eq(0).attr('id','page_first');
	$('.flip-card-front').eq($('.flip-card-front').length-1).attr('id','page_last');
	$('.flip-card-back').eq($('.flip-card-back').length-1).attr('id','page_back_cover');

	/* 手機版把兩頁後先隱藏 */
	if ($(window).width() <= 480) {
		$('.flip-card').slice(2).css('display', 'none');
	}
}

function insert_page_type1L(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2,CoverNum){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }
	
	var PIC1, PIC2, PIC3, TEXT1, TEXT2, TEXT3;
	var text1_id = text1, text2_id = text2, text3_id = text3;
    var text1_author = text1+"_author", text2_author = text2+"_author", text3_author = text3+"_author";
	
	if(CoverNum != 1)
	{
		PIC1 = `<div id="L_type1_id_${i}_1" class="grid_block_photo_type1 pic1_L_type1 bg_pic_4_3">
					<img src="./photo/travel/${pic1}" class="grid_pic_4_3_type1"></img>
					<img src="./img/IQD-reflective-02-40_4x3.webp" class="mask_pic_4_3"></img>
				</div>
				<div class="grid_name_type1 name1_L_type1">${name1}</div>`;
	}
	else
	{
		PIC1 = '<div class="pic1_L_type1"><img src="'+pic1+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 2)
	{
		PIC2 = `<div id="L_type1_id_${i}_2" class="grid_block_photo_type1 pic2_L_type1 bg_pic_1_1">
					<img src="./photo/dailylife/${pic2}" class="grid_pic_1_1_type1"></img>
				</div>
				<div class="grid_name_type1 name2_L_type1">${name2}</div>`;
	}
	else
	{
		PIC2 = '<div class="pic2_L_type1"><img src="'+pic2+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 3)
	{
		PIC3 = `<div id="L_type1_id_${i}_3" class="grid_block_photo_type1 pic3_L_type1 bg_pic_1_1">
					<img src="./photo/dailylife/${pic3}" class="grid_pic_1_1_type1"></img>
				</div>
				<div class="grid_name_type1 name3_L_type1">${name3}</div>`;
	}
	else
	{
		PIC3 = '<div class="pic3_L_type1"><img src="'+pic3+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 4)
	{
		TEXT1 = `<div lang="en" class="grid_block_article_type1 text1_L_type1 bg_short">
					<div id="${text1_author}" class="grid_author_short_type1"></div>
					<div id="${text1_id}" class="grid_text_short_type1"></div>
				</div>
				<img id="L_type1_stc_${i}_4" src="./photo/sticker/${stc1}" class="grid_stc_pic_type1 stc1_L_type1"></img>`;
	}
	else
	{
		TEXT1 = '<div class="text1_L_type1"><img src="'+text1+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 5)
	{
		TEXT2 = `<div lang="en" class="grid_block_article_type1 text2_L_type1 bg_long">
					<div id="${text2_id}" class="grid_text_long_type1"></div>
					<div id="${text2_author}" class="grid_author_long_type1"></div>
				</div>`;
	}
	else
	{
		TEXT2 = '<div class="text2_L_type1"><img src="'+text2+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 6)
	{
		TEXT3 = `<div lang="en" class="grid_block_article_type1 text3_L_type1 bg_short">
					<div id=${text3_author} class="grid_author_short_type1"></div>
					<div id=${text3_id} class="grid_text_short_type1"></div>
				</div>
				<img id="L_type1_stc_${i}_6" src="./photo/sticker/${stc2}" class="grid_stc_pic_type1 stc2_L_type1"></img>`;
	}
	else
	{
		TEXT3 = '<div class="text3_L_type1"><img src="'+text3+'" class="cover_stc"></img></div>';
	}

    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookL_type1">'
				+ PIC1 + PIC2 + PIC3 + TEXT1 + TEXT2 + TEXT3 +
            '</div>\
        </div>\
    ');

	if(CoverNum != 1) popup_photo(`./photo/travel/${pic1}`, `#L_type1_id_${i}_1`);
	if(CoverNum != 2) popup_photo(`./photo/dailylife/${pic2}`, `#L_type1_id_${i}_2`);
	if(CoverNum != 3) popup_photo(`./photo/dailylife/${pic3}`, `#L_type1_id_${i}_3`);
	if(CoverNum != 4){
		text1 = "./article/long/"+text1;
		requirejs([text1], function(text1) {
			console.log("text1", text1);
			document.getElementById(text1_id).innerHTML = text1.Text();
			document.getElementById(text1_author).innerHTML = text1.Author;
		});
		popup_article(text1, `#L_type1_stc_${i}_4`);
	}
	if(CoverNum != 5){
		text2 = "./article/short/"+text2;
		requirejs([text2], function(text2) {
			document.getElementById(text2_id).innerHTML = text2.Text();
			document.getElementById(text2_author).innerHTML = text2.Author;
		});
	}
	if(CoverNum != 6){
		text3 = "./article/long/"+text3;
		requirejs([text3], function(text3) {
			document.getElementById(text3_id).innerHTML = text3.Text();
			document.getElementById(text3_author).innerHTML = text3.Author;
		});
		popup_article(text3, `#L_type1_stc_${i}_6`);
	}
}
function insert_page_type1R(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2,CoverNum){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

	var PIC1, PIC2, PIC3, TEXT1, TEXT2, TEXT3;
	var text1_id = text1, text2_id = text2, text3_id = text3;
    var text1_author = text1+"_author", text2_author = text2+"_author", text3_author = text3+"_author";
	
	if(CoverNum != 1)
	{
		PIC1 = `<div id="R_type1_id_${i}_1" class="grid_block_photo_type1 pic1_R_type1 bg_pic_1_1">
                    <img src="./photo/dailylife/${pic1}" class="grid_pic_1_1_type1"></img>
                </div>
				<div class="grid_name_type1 name1_R_type1">${name1}</div>`;
	}
	else
	{
		PIC1 = '<div class="pic1_R_type1"><img src="'+pic1+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 2)
	{
		PIC2 = `<div id="R_type1_id_${i}_2" class="grid_block_photo_type1 pic2_R_type1 bg_pic_1_1">
                    <img src="./photo/dailylife/${pic2}" class="grid_pic_1_1_type1"></img>
                </div>
				<div class="grid_name_type1 name2_R_type1">${name2}</div>`;
	}
	else
	{
		PIC2 = '<div class="pic2_R_type1"><img src="'+pic2+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 3)
	{
		PIC3 = `<div id="R_type1_id_${i}_3" class="grid_block_photo_type1 pic3_R_type1 bg_pic_4_3">
                    <img src="./photo/travel/${pic3}" class="grid_pic_4_3_type1"></img>
                    <img src="./img/IQD-reflective-02-50_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type1 name3_R_type1">${name3}</div>`;
	}
	else
	{
		PIC3 = '<div class="pic3_R_type1"><img src="'+pic3+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 4)
	{
		TEXT1 = `<div lang="en" class="grid_block_article_type1 text1_R_type1 bg_long">
                    <div id="${text1_id}" class="grid_text_long_type1"></div>
                    <div id="${text1_author}" class="grid_author_long_type1"></div>
                </div>`;
	}
	else
	{
		TEXT1 = '<div class="text1_R_type1"><img src="'+text1+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 5)
	{
		TEXT2 = `<div lang="en" class="grid_block_article_type1 text2_R_type1 bg_short">
                    <div id="${text2_author}" class="grid_author_short_type1"></div>
                    <div id="${text2_id}" class="grid_text_short_type1"></div>
                </div>
				<img id="R_type1_stc_${i}_5" src="./photo/sticker/${stc1}" class="grid_stc_pic_type1 stc1_R_type1"></img>`;
	}
	else
	{
		TEXT2 = '<div class="text2_R_type1"><img src="'+text2+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 6)
	{
		TEXT3 = `<div lang="en" class="grid_block_article_type1 text3_R_type1 bg_short">
                    <div id="${text3_author}" class="grid_author_short_type1"></div>
                    <div id="${text3_id}" class="grid_text_short_type1"></div>
                </div>
                <img id="R_type1_stc_${i}_6" src="./photo/sticker/${stc2}" class="grid_stc_pic_type1 stc2_R_type1"></img>`;
	}
	else
	{
		TEXT3 = '<div class="text3_R_type1"><img src="'+text3+'" class="cover_stc"></img></div>';
	}
	
    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookR_type1">'
				+ PIC1 + PIC2 + PIC3 + TEXT1 + TEXT2 + TEXT3 +
            '</div>\
        </div>\
    ');

	if(CoverNum != 1) popup_photo(`./photo/dailylife/${pic1}`, `#R_type1_id_${i}_1`);
	if(CoverNum != 2) popup_photo(`./photo/dailylife/${pic2}`, `#R_type1_id_${i}_2`);
	if(CoverNum != 3) popup_photo(`./photo/travel/${pic3}`, `#R_type1_id_${i}_3`);
	if(CoverNum != 4){
		text1 = "./article/short/"+text1;
		requirejs([text1], function(text1) {
			console.log("text1", text1);
			document.getElementById(text1_id).innerHTML = text1.Text();
			document.getElementById(text1_author).innerHTML = text1.Author;
		});
	}
	if(CoverNum != 5){
		text2 = "./article/long/"+text2;
		requirejs([text2], function(text2) {
			document.getElementById(text2_id).innerHTML = text2.Text();
			document.getElementById(text2_author).innerHTML = text2.Author;
		});
		popup_article(text2, `#R_type1_stc_${i}_5`);
	}
	if(CoverNum != 6){
		text3 = "./article/long/"+text3;
		requirejs([text3], function(text3) {
			document.getElementById(text3_id).innerHTML = text3.Text();
			document.getElementById(text3_author).innerHTML = text3.Author;
		});
		popup_article(text3, `#R_type1_stc_${i}_6`);
	}
}
function insert_page_type2L(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5,CoverNum){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

	var PIC1, PIC2, PIC3, PIC4, PIC5;
	
	if(CoverNum != 1)
	{
		PIC1 = `<div id="L_type2_id_${i}_1" class="grid_block_type2 pic1_L_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic1}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-40_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name1_L_type2">${name1}</div>`;
	}
	else
	{
		PIC1 = '<div class="pic1_L_type2"><img src="'+pic1+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 2)
	{
		PIC2 = `<div id="L_type2_id_${i}_2" class="grid_block_type2 pic2_L_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic2}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-50_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name2_L_type2">${name2}</div>`;
	}
	else
	{
		PIC2 = '<div class="pic2_L_type2"><img src="'+pic2+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 3)
	{
		PIC3 = `<div id="L_type2_id_${i}_3" class="grid_block_type2 pic3_L_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic3}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-60_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name3_L_type2">${name3}</div>`;
	}
	else
	{
		PIC3 = '<div class="pic3_L_type2"><img src="'+pic3+'" class="cover_stc"></img></div>';
	}
	
	if(CoverNum != 4)
	{
		PIC4 = `<div id="L_type2_id_${i}_4" class="grid_block_type2 pic4_L_type2 bg_pic_1_1">
                    <img src="./photo/travel/${pic4}" class="grid_pic_1_1_type2"></img>
                    <img src="./img/IQD-reflective-02-40_1x1.webp" class="mask_pic_1_1"></img>
                </div>
				<div class="grid_name_type2 name4_L_type2">${name4}</div>`;
	}
	else
	{
		PIC4 = '<div class="pic4_L_type2"><img src="'+pic4+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 5)
	{
		PIC5 = `<div id="L_type2_id_${i}_5" class="grid_block_type2 pic5_L_type2 bg_pic_1_1">
                    <img src="./photo/travel/${pic5}" class="grid_pic_1_1_type2"></img>
                    <img src="./img/IQD-reflective-02-50_1x1.webp" class="mask_pic_1_1"></img>
                </div>
				<div class="grid_name_type2 name5_L_type2">${name5}</div>`;
	}
	else
	{
		PIC5 = '<div class="pic5_L_type2"><img src="'+pic5+'" class="cover_stc"></img></div>';
	}

    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookL_type2">'
				+ PIC1 + PIC2 + PIC3 +  PIC4 +  PIC5 + 
            '</div>\
        </div>\
    ');

    if(CoverNum != 1) popup_photo(`./photo/travel/${pic1}`, `#L_type2_id_${i}_1`);
    if(CoverNum != 2) popup_photo(`./photo/travel/${pic2}`, `#L_type2_id_${i}_2`);
    if(CoverNum != 3) popup_photo(`./photo/travel/${pic3}`, `#L_type2_id_${i}_3`);
	if(CoverNum != 4) popup_photo(`./photo/travel/${pic4}`, `#L_type2_id_${i}_4`);
    if(CoverNum != 5) popup_photo(`./photo/travel/${pic5}`, `#L_type2_id_${i}_5`);
}
function insert_page_type2R(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5,CoverNum){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

	var PIC1, PIC2, PIC3, PIC4, PIC5;

	if(CoverNum != 1)
	{
		PIC1 = `<div id="R_type2_id_${i}_1" class="grid_block_type2 pic1_R_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic1}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-40_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name1_R_type2">${name1}</div>`;
	}
	else
	{
		PIC1 = '<div class="pic1_R_type2"><img src="'+pic1+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 2)
	{
		PIC2 = `<div id="R_type2_id_${i}_2" class="grid_block_type2 pic2_R_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic2}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-50_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name2_R_type2">${name2}</div>`;
	}
	else
	{
		PIC2 = '<div class="pic2_R_type2"><img src="'+pic2+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 3)
	{
		PIC3 = `<div id="R_type2_id_${i}_3" class="grid_block_type2 pic3_R_type2 bg_pic_4_3">
                    <img src="./photo/travel/${pic3}" class="grid_pic_4_3_type2"></img>
                    <img src="./img/IQD-reflective-02-60_4x3.webp" class="mask_pic_4_3"></img>
                </div>
				<div class="grid_name_type2 name3_R_type2">${name3}</div>`;
	}
	else
	{
		PIC3 = '<div class="pic3_R_type2"><img src="'+pic3+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 4)
	{
		PIC4 = `<div id="R_type2_id_${i}_4" class="grid_block_type2 pic4_R_type2 bg_pic_1_1">
                    <img src="./photo/travel/${pic4}" class="grid_pic_1_1_type2"></img>
                    <img src="./img/IQD-reflective-02-50_1x1.webp" class="mask_pic_1_1"></img>
                </div>
				<div class="grid_name_type2 name4_R_type2">${name4}</div>`;
	}
	else
	{
		PIC4 = '<div class="pic4_R_type2"><img src="'+pic4+'" class="cover_stc"></img></div>';
	}

	if(CoverNum != 5)
	{
		PIC5 = `<div id="R_type2_id_${i}_5" class="grid_block_type2 pic5_R_type2 bg_pic_1_1">
                    <img src="./photo/travel/${pic5}" class="grid_pic_1_1_type2"></img>
					<img src="./img/IQD-reflective-02-40_1x1.webp" class="mask_pic_1_1"></img>
                </div>
				<div class="grid_name_type2 name5_R_type2">${name5}</div>`;
	}
	else
	{
		PIC5 = '<div class="pic5_R_type2"><img src="'+pic5+'" class="cover_stc"></img></div>';
	}

    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookR_type2">'
				+ PIC1 + PIC2 + PIC3 +  PIC4 +  PIC5 +
            '</div>\
        </div>\
    ');

	if(CoverNum != 1) popup_photo(`./photo/travel/${pic1}`, `#R_type2_id_${i}_1`);
    if(CoverNum != 2) popup_photo(`./photo/travel/${pic2}`, `#R_type2_id_${i}_2`);
    if(CoverNum != 3) popup_photo(`./photo/travel/${pic3}`, `#R_type2_id_${i}_3`);
    if(CoverNum != 4) popup_photo(`./photo/travel/${pic4}`, `#R_type2_id_${i}_4`);
    if(CoverNum != 5) popup_photo(`./photo/travel/${pic5}`, `#R_type2_id_${i}_5`);
}
function insert_last_page(i){
    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

    $('.page').eq(i).append('<div id="end_paper"></div>')

}
function create_page(i){
    if ($(window).width() > 480) {
        i=i+1;
    }else{
        i=i+3;
    }
    var j;
    for(j=0;j<i;j++){
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
}

function insert_page_type1L(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

	var text1_id = text1, text2_id = text2, text3_id = text3;
    requirejs([text1], function(text1) {
        document.getElementById(text1_id).innerHTML = text1.Text();
    });
    requirejs([text2], function(text2) {
        document.getElementById(text2_id).innerHTML = text2.Text();
    });
    requirejs([text3], function(text3) {
        document.getElementById(text3_id).innerHTML = text3.Text();
    });
    
    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookL_type1">\
                <div class="grid_block_type1 pic1_L_type1">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type1"></img>\
                </div>\
                <div class="grid_block_type1 pic2_L_type1">\
                    <img src="'+pic2+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div class="grid_block_type1 pic3_L_type1">\
                    <img src="'+pic3+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div class="grid_name_type1 name1_L_type1">'+name1+'</div>\
                <div class="grid_name_type1 name2_L_type1">'+name2+'</div>\
                <div class="grid_name_type1 name3_L_type1">'+name3+'</div>\
                <div class="grid_block_type1 text1_L_type1">\
                    <div id="'+text1_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <div class="grid_block_type1 text2_L_type1">\
                    <div id="'+text2_id+'" class="grid_text_long_type1"></div>\
                </div>\
                <div class="grid_block_type1 text3_L_type1">\
                    <div id="'+text3_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <img src="'+stc1+'" class="grid_stc_pic_type1 stc1_L_type1"></img>\
                <img src="'+stc2+'" class="grid_stc_pic_type1 stc2_L_type1"></img>\
            </div>\
        </div>\
    ');

}
function insert_page_type1R(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

	var text1_id = text1, text2_id = text2, text3_id = text3;
    requirejs([text1], function(text1) {
        document.getElementById(text1_id).innerHTML = text1.Text();
    });
    requirejs([text2], function(text2) {
        document.getElementById(text2_id).innerHTML = text2.Text();
    });
    requirejs([text3], function(text3) {
        document.getElementById(text3_id).innerHTML = text3.Text();
    });
    
    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookR_type1">\
                <div class="grid_block_type1 pic1_R_type1">\
                    <img src="'+pic1+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div class="grid_block_type1 pic2_R_type1">\
                    <img src="'+pic2+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div class="grid_block_type1 pic3_R_type1">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type1"></img>\
                </div>\
                <div class="grid_name_type1 name1_R_type1">'+name1+'</div>\
                <div class="grid_name_type1 name2_R_type1">'+name2+'</div>\
                <div class="grid_name_type1 name3_R_type1">'+name3+'</div>\
                <div class="grid_block_type1 text1_R_type1">\
                    <div id="'+text1_id+'" class="grid_text_long_type1"></div>\
                </div>\
                <div class="grid_block_type1 text2_R_type1">\
                    <div id="'+text2_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <div class="grid_block_type1 text3_R_type1">\
                    <div id="'+text3_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <img src="'+stc1+'" class="grid_stc_pic_type1 stc1_R_type1"></img>\
                <img src="'+stc2+'" class="grid_stc_pic_type1 stc2_R_type1"></img>\
            </div>\
        </div>\
    ');

}
function insert_page_type2L(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookL_type2">\
                <div class="grid_block_type2 pic1_L_type2">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic2_L_type2">\
                    <img src="'+pic2+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic3_L_type2">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic4_L_type2">\
                    <img src="'+pic4+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic5_L_type2">\
                    <img src="'+pic5+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div class="grid_name_type2 name1_L_type2">'+name1+'</div>\
                <div class="grid_name_type2 name2_L_type2">'+name2+'</div>\
                <div class="grid_name_type2 name3_L_type2">'+name3+'</div>\
                <div class="grid_name_type2 name4_L_type2">'+name4+'</div>\
                <div class="grid_name_type2 name5_L_type2">'+name5+'</div>\
            </div>\
        </div>\
    ');

}
function insert_page_type2R(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5){

    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

    $('.page').eq(i).append('\
        <div class="grid">\
            <div class="container_bookR_type2">\
                <div class="grid_block_type2 pic1_R_type2">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic2_R_type2">\
                    <img src="'+pic2+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic3_R_type2">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic4_R_type2">\
                    <img src="'+pic4+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div class="grid_block_type2 pic5_R_type2">\
                    <img src="'+pic5+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div class="grid_name_type2 name1_R_type2">'+name1+'</div>\
                <div class="grid_name_type2 name2_R_type2">'+name2+'</div>\
                <div class="grid_name_type2 name3_R_type2">'+name3+'</div>\
                <div class="grid_name_type2 name4_R_type2">'+name4+'</div>\
                <div class="grid_name_type2 name5_R_type2">'+name5+'</div>\
            </div>\
        </div>\
    ')

}
function insert_last_page(i){
    if ($(window).width() > 480) {
        i=i+2;
    }else{
        i=i*2+2;
    }

    $('.page').eq(i).append('<div id="end_paper"></div>')

}
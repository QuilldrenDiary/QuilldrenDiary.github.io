function create_page(i){
    var j;
    for(j=0;j<i;j++){
        $('#book2').append('<div class="flip-card" ></div>');
    }
    $('.flip-card').append('<div class="flip-card-inner" ></div>');
    $('.flip-card-inner').append('<div class="flip-card-front page"></div><div class="flip-card-back page" ></div>');
    $('.flip-card').eq(0).attr('id','cover');
    $('.flip-card-front').eq(0).attr('id','page_cover');
    $('.flip-card-back').eq($('.flip-card-back').length-1).attr('id','page_back_cover');
}

function insert_page_type1L(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2){

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
        <div id="book_L_type1" class="grid">\
            <div class="container_bookL_type1">\
                <div id="pic1_L_type1" class="grid_block_type1">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type1"></img>\
                </div>\
                <div id="pic2_L_type1" class="grid_block_type1">\
                    <img src="'+pic2+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div id="pic3_L_type1" class="grid_block_type1">\
                    <img src="'+pic3+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div id="name1_L_type1" class="grid_name_type1">'+name1+'</div>\
                <div id="name2_L_type1" class="grid_name_type1">'+name2+'</div>\
                <div id="name3_L_type1" class="grid_name_type1">'+name3+'</div>\
                <div id="text1_L_type1" class="grid_block_type1">\
                    <div id="'+text1_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <div id="text2_L_type1" class="grid_block_type1">\
                    <div id="'+text2_id+'" class="grid_text_long_type1"></div>\
                </div>\
                <div id="text3_L_type1" class="grid_block_type1">\
                    <div id="'+text3_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <img id="stc1_L_type1" src="'+stc1+'" class="grid_stc_pic_type1"></img>\
                <img id="stc2_L_type1" src="'+stc2+'" class="grid_stc_pic_type1"></img>\
            </div>\
        </div>\
    ');

}
function insert_page_type1R(i,pic1,pic2,pic3,name1,name2,name3,text1,text2,text3,stc1,stc2){

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
        <div id="book_R_type1" class="grid">\
            <div class="container_bookR_type1">\
                <div id="pic1_R_type1" class="grid_block_type1">\
                    <img src="'+pic1+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div id="pic2_R_type1" class="grid_block_type1">\
                    <img src="'+pic2+'" class="grid_pic_1_1_type1"></img>\
                </div>\
                <div id="pic3_R_type1" class="grid_block_type1">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type1"></img>\
                </div>\
                <div id="name1_R_type1" class="grid_name_type1">'+name1+'</div>\
                <div id="name2_R_type1" class="grid_name_type1">'+name2+'</div>\
                <div id="name3_R_type1" class="grid_name_type1">'+name3+'</div>\
                <div id="text1_R_type1" class="grid_block_type1">\
                    <div id="'+text1_id+'" class="grid_text_long_type1"></div>\
                </div>\
                <div id="text2_R_type1" class="grid_block_type1">\
                    <div id="'+text2_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <div id="text3_R_type1" class="grid_block_type1">\
                    <div id="'+text3_id+'" class="grid_text_short_type1"></div>\
                </div>\
                <img id="stc1_R_type1" src="'+stc1+'" class="grid_stc_pic_type1"></img>\
                <img id="stc2_R_type1" src="'+stc2+'" class="grid_stc_pic_type1"></img>\
            </div>\
        </div>\
    ');

}
function insert_page_type2L(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5){

    $('.page').eq(i).append('\
        <div id="book_L_type2" class="grid">\
            <div class="container_bookL_type2">\
                <div id="pic1_L_type2" class="grid_block_type2">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic2_L_type2" class="grid_block_type2">\
                    <img src="'+pic2+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic3_L_type2" class="grid_block_type2">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic4_L_type2" class="grid_block_type2">\
                    <img src="'+pic4+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div id="pic5_L_type2" class="grid_block_type2">\
                    <img src="'+pic5+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div id="name1_L_type2" class="grid_name_type2">'+name1+'</div>\
                <div id="name2_L_type2" class="grid_name_type2">'+name2+'</div>\
                <div id="name3_L_type2" class="grid_name_type2">'+name3+'</div>\
                <div id="name4_L_type2" class="grid_name_type2">'+name4+'</div>\
                <div id="name5_L_type2" class="grid_name_type2">'+name5+'</div>\
            </div>\
        </div>\
    ');

}
function insert_page_type2R(i,pic1,pic2,pic3,pic4,pic5,name1,name2,name3,name4,name5){

    $('.page').eq(i).append('\
        <div id="book_R_type2" class="grid">\
            <div class="container_bookR_type2">\
                <div id="pic1_R_type2" class="grid_block_type2">\
                    <img src="'+pic1+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic2_R_type2" class="grid_block_type2">\
                    <img src="'+pic2+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic3_R_type2" class="grid_block_type2">\
                    <img src="'+pic3+'" class="grid_pic_4_3_type2"></img>\
                </div>\
                <div id="pic4_R_type2" class="grid_block_type2">\
                    <img src="'+pic4+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div id="pic5_R_type2" class="grid_block_type2">\
                    <img src="'+pic5+'" class="grid_pic_1_1_type2"></img>\
                </div>\
                <div id="name1_R_type2" class="grid_name_type2">'+name1+'</div>\
                <div id="name2_R_type2" class="grid_name_type2">'+name2+'</div>\
                <div id="name3_R_type2" class="grid_name_type2">'+name3+'</div>\
                <div id="name4_R_type2" class="grid_name_type2">'+name4+'</div>\
                <div id="name5_R_type2" class="grid_name_type2">'+name5+'</div>\
            </div>\
        </div>\
    ')

}

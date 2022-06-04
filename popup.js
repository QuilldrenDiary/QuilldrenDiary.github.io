function popup_credits() {
    $('#credits').on('click', function(event) {
        event.stopPropagation();
    });

    $('#credits').magnificPopup({
        items: {
            src: `<div class="credits-bg">
                    <div class="credits-container">
                        <img src="./img/credits-popup.webp" class="credits-inside"/>
                    </div>
                </div>`,
            type: 'inline'
        },
        closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="top: -35px; right: -10px"><img src="./img/pushpin-close.webp" style="width: 35px; height:auto; pointer-events:none;"></button>',
    });
}

function popup_resource() {
    $('#resources').on('click', function(event) {
        event.stopPropagation();
    });

    $('#resources').magnificPopup({
        items: {
            src: `<div class="credits-bg">
                    <div class="credits-container">
                        <img src="./img/resource-popup.webp" class="resource-inside"/>
                    </div>
                </div>`,
            type: 'inline'
        },
        closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="top: -35px; right: -10px"><img src="./img/pushpin-close.webp" style="width: 35px; height:auto; pointer-events:none;"></button>',
    });
}

function popup_article(text, stc){
    requirejs([text], function(text) {
        if(text.Len == 1){
            $(stc).magnificPopup({
                items: {
                        src: `<div class="popup-article-long-bg">
                            <div lang="en" class="popup-article-text">${text.Text()}</div>
                            <div lang="en" class="popup-article-author">${text.Author}</div>
                        </div>`,
                    type: 'inline'
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="top: -40px; right: -20px;"><img src="./img/Blose.webp" style="width: 35px; height:auto; pointer-events:none;"></button>',
            });
        }
        else{
            $(stc).magnificPopup({
                items: {
                        src: `<div class="popup-article-medium-bg">
                            <div lang="en" class="popup-article-text">${text.Text()}</div>
                            <div lang="en" class="popup-article-author">${text.Author}</div>
                        </div>`,
                    type: 'inline'
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="top: -40px; right: -20px"><img src="./img/Blose.webp" style="width: 35px; height:auto; pointer-events:none;"></button>',
            });
        }
    });
}

function popup_photo(photo, photo_region){
    $(photo_region).magnificPopup({
        items: {
            src: photo.substring(0, photo.lastIndexOf('.')-4) + photo.substring(photo.lastIndexOf('.'))
          },
        type: 'image',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><img src="./img/Blose.webp" style="width: 35px; height:auto; pointer-events:none;"></button>'
    });
}
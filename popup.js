function popup_credits() {
    $('#credits').on('click', function(event) {
        event.stopPropagation();
    });

    $('#credits').magnificPopup({
        items: {
            src: `<div class="credits-bg">
                    <div class="credits-container">
                        <img src="./img/credits-popup.png" class="credits-inside"/>
                    </div>
                </div>`,
            type: 'inline'
        },
        closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="top: -35px; right: -10px"><img src="./img/pushpin-close.png" style="width: 35px; height:auto; pointer-events:none;"></button>',
    });
}
    var galleryThumbs = new Swiper('.slider-product', {
        slidesPerView: 2,
        loop: true,
        freeMode: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

    var galleryTop = new Swiper('.slider-big', {
        loop: true,
    loopedSlides: 3, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});


/*

$(document).ready(function(){

$.fn.equivalent = function (){

    var $blocks = $(this),
            maxH    = $blocks.eq(0).height();
$blocks.each(function(){
10
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
});

 $blocks.height(maxH);
    }



    $('.nav').equivalent();

});

*/

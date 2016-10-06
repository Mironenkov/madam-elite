/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
    //Sliders
    $('.me-reviews-slider').lightSlider({
        item: 1,
        controls: false,
        pager: true,
        slideMargin: 0,
        speed: 1000,
        galleryMargin: 40
    });
    $('.me-teacher-slider').lightSlider({
        item: 1,
        vertical: true,
        verticalHeight: 240,
        controls: false,
        pager: true,
        slideMargin: 0,
        speed: 800
    });
    $('.me-why-slider').lightSlider({
        item: 1,
        controls: false,
        pager: true,
        slideMargin: 0,
        speed: 1000,
        galleryMargin: 60
    });
    $('.me-products_item-slider').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        galleryMargin: 0,
        thumbMargin: 3
    });


    ////Tabs
    $('.me-form_classes-content--individual').hide();
    $('.me-form_classe-tabs--group').addClass("me-form_classe-tabs--active");
    $('.me-form_classe-tabs--group').click(function(){
        $('.me-form_classe-tabs--individual').removeClass("me-form_classe-tabs--active");
        $(this).addClass("me-form_classe-tabs--active");
        $('.me-form_classes-content--individual').hide();
        $('.me-form_classes-content--group').show("fast");
        return false;
    });
    $('.me-form_classe-tabs--individual').click(function(){
        $('.me-form_classe-tabs--group').removeClass("me-form_classe-tabs--active");
        $(this).addClass("me-form_classe-tabs--active");
        $('.me-form_classes-content--group').hide();
        $('.me-form_classes-content--individual').show("fast");
        return false;
    });

    //Parallax
    $(window).scroll(function(){
        var st = $(this).scrollTop();

        $('.me-about_description img').css({
            "transform" : "translate(0%, " + st /20 + "%"
        });
        $('.me-bg_image_first img').css({
            "transform" : "translate(0%, -" + st /20 + "%"
        });
        $('.me-bg_image_second img').css({
            "transform" : "translate(0%, " + st /20 + "%"
        });

        if ( st > 100 ) {
            $(".me-numbers-title--first").css("opacity","1");
            $(".me-numbers-number--first").css("opacity","1").animateNumber({ number: 300 }, 1000).removeClass('me-numbers-number--first');
        }
        if ( st > 450 ) {
            $(".me-numbers-title--second").css("opacity","1");
            $(".me-numbers-number--second").css("opacity","1").animateNumber({ number: 12 }, 1000).removeClass('me-numbers-number--second');
        }
        if ( st > 800 ) {
            $(".me-numbers-title--third").css("opacity","1");
            $(".me-numbers-number--third").css("opacity","1").animateNumber({ number: 100 }, 1000).removeClass('me-numbers-number--third');
        }
    });
})();
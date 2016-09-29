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


})();
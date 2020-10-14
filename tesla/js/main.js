$(function() {
    /*--------------------------------------
                HEADER SLIDER
        --------------------------------------*/
    $('.slider').slick({
        autoplay: 3000,
        infinite: true,
        arrows: false,
        fade: true,
        dots: true,
    });

    /*--------------------------------------
                 WOW.JS
         --------------------------------------*/
    new WOW().init();

    /*--------------------------------------
             COUNTER
    --------------------------------------*/
    var check = 1;
    var target = $('.statistic-container');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;

    $(window).scroll(function() {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem && check) {
            $('.single-count').each(function() {
                $(this).prop('Counter', -1).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            check = 0;
        }
    });

    $('.btn-menu').on('click', function() {
        $('.menu').addClass('active')
    });

    $('.close-btn').on('click', function() {
        $('.menu').removeClass('active')
    });

    // открыть по кнопке
    $('.js-button-campaign').click(function() {

        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-campaign').click(function() {
        $('.js-overlay-campaign').fadeOut();

    });

    // закрыть по клику вне окна
    $(document).mouseup(function(e) {
        var popup = $('.js-popup-campaign');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay-campaign').fadeOut();

        }
    });

});
$(function() {
    //HEADER-SLIDER
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider arrows slider-arrows__right"  src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
    //slider-serf
    $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider arrows slider-arrows__right"  src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [{
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    });
    //slider-map
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true,
    });
    //slider travel
    $('.travel__slider').slick({
        fade: true,
        infinite: true,
        prevArrow: '<img class="slider arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider arrows slider-arrows__right"  src="img/arrows-right.svg" alt=""></img>',

    });
    //slider sleep and shop
    $('.holder__slider, .shop__slider').slick({
        fade: true,
        infinite: true,
        prevArrow: '<img class="slider arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider arrows slider-arrows__right"  src="img/arrows-right.svg" alt=""></img>',

    });

    //sleep counter
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);

    // SURF ROW
    $('.surfboard-box__circle').on('click', function() {
        $(this).toggleClass('active');
    });

    //menu
    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    });

    //wow.js
    new WOW().init();


});
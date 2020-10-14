$(function() {
    //REWIEWS SLIDER
    $('.rewiews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<img class="slider arrows slider-arrows__left" src="./img/arrow-left.png" alt=""></img>',
        nextArrow: '<img class="slider arrows slider-arrows__right"  src="./img/arrow-right.png" alt=""></img>',
    });

    //BURGER MENU
    $(function() {
        $('.btn-menu').on('click', function() {
            $('.menu').addClass('active')
        });

        $('.menu__links-item').on('click', function() {
            $(this).closest('.menu')
                .removeClass('active');
        });
        $('.btn-close').on('click', function() {
            $('.menu').removeClass('active')
        });
    });

    //PHONE MASK
    $(document).ready(function() {
        $('#phone').mask('+7 (999) 99-99-999');
    });
    $(document).ready(function() {
        $('#popupPhone').mask('+7 (999) 99-99-999');
    });



    //MAIN POP-UP
    // open
    $('.js-button-campaign').click(function() {
        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });
    // close popup
    $('.js-close-campaign').click(function() {
        $('.js-overlay-campaign').fadeOut();

    });
    // close popup windows out
    $(document).mouseup(function(e) {
        var popup = $('.js-popup-campaign');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay-campaign').fadeOut();
        }
    });
    $('.send').click(function() {
        $('.popup-form').removeClass();
        $('.popup-final').addClass();
    });
    $('.close').click(function() {
        $('.overlay').fadeOut();

    });

    //START SALE FORM 
    $(document).ready(function() {
        $('#sale-contact__form').submit(function() {
            if (document.form.salePhone.value == '') {
                valid = false;
                return valid;
            }
            $.ajax({
                type: "POST",
                url: "",
                data: $(this).serialize()
            }).done(function() {

                $('.overlay-sale').fadeIn();

                $(this).find('input').val('');
                $('#sale-contact__form').trigger('reset');
            });
            return false;
        });
    });
    $('.close-popup').click(function() {
        $('.overlay-sale').fadeOut();
    });
    $(document).mouseup(function(e) {
        var popup = $('.popup-sale');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.overlay-sale').fadeOut();
        }
    });
    $(document).ready(function() {
        $('#salePhone').mask('+7 (999) 99-99-999');
    });

    //START REPAIRS FORM
    $(document).ready(function() {
        $('#repairs-contact__form').submit(function() {
            if (document.form.repairsPhone.value == '' || document.form.repairsText.value == '') {
                valid = false;
                return valid;
            }
            $.ajax({
                type: "POST",
                url: "",
                data: $(this).serialize()
            }).done(function() {

                $('.overlay-repairs').fadeIn();

                $(this).find('input').val('');
                $('#repairs-contact__form').trigger('reset');
            });
            return false;
        });
    });
    $('.close-popup__repairs').click(function() {
        $('.overlay-repairs').fadeOut();
    });
    $(document).mouseup(function(e) {
        var popup = $('.popup-repairs');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.overlay-repairs').fadeOut();
        }
    });
    $(document).ready(function() {
        $('#repairsPhone').mask('+7 (999) 99-99-999');
    });
    //END REPAIRS FORM


    //START FOOTER FORM
    $(document).ready(function() {
        $('#footer-contact__form').submit(function() {
            if (document.form.footerPhone.value == '' || document.form.footerName.value == '' || document.form.footerComment.value == '') {
                valid = false;
                return valid;
            }
            $.ajax({
                type: "POST",
                url: "",
                data: $(this).serialize()
            }).done(function() {
                $('.overlay-footer').fadeIn();
                $(this).find('input').val('');
                $('#footer-contact__form').trigger('reset');
            });
            return false;
        });
    });
    $('.close-popup').click(function() {
        $('.overlay-footer').fadeOut();
    });
    $(document).mouseup(function(e) {
        var popup = $('.popup-repairs');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.overlay-footer').fadeOut();
        }
    });
    $(document).ready(function() {
        $('#footerPhone').mask('+7 (999) 99-99-999');
    });



});
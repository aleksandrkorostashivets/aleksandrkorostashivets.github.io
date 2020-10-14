/*--------------------START SECTION QUESTION----------------------*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
/*--------------------END SECTION QUESTION----------------------*/


/*--------------------START REWIEWS SLIDER----------------------*/
$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="prev">&#8592;</div>',
    nextArrow: '<div class="next">&#8594;</div>',
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },

    ]
});

/*--------------------END REWIEWS SLIDER----------------------*/



/*--------------------START MOBILE MENU----------------------*/

$(".btn-menu").on("click", function() {
    $('.header-navigation__menu').toggleClass("show");
});
$('.navigation-list__item').on('click', function() {
    $(this).closest('.header-navigation__menu')
        .removeClass('show');
});
/*--------------------END MOBILE MENU----------------------*/


/*--------------------START TABLE ELEMENTS----------------------*/
function readMore() {
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const btn = document.getElementById("btn");
    if (dots.style.display === "none") {
        dots.style.display = "block";
        btn.innerHTML = "Увидеть все возможные поломки";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "contents";
    }
}
/*--------------------END TABLE ELEMENTS----------------------*/



/*-------------------- START VALIDATION----------------------*/
function falidator(item) {
    check = true;
    $(item).find('input').each(function() {
        if ($(this).hasClass('required') && $(this).val() == '') {
            check = false;
        } else {}
    });
    if (check) {
        return true;
    } else {
        return false;
    }
}
/*-------------------- END VALIDATION----------------------*/



/*------------------- START HEADER POPUP FORM ------------------------*/
/*------------open popup----------*/
$('.header-btn').on('click', function() {
    $('.header-popup').fadeIn();
});

/*------------popup----------*/
$("#header-popup__form").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
        type: "POST",
        url: "",
        data: $("#header-popup__form").serialize(),
        success: function(html) {}
    });
    $('.header-popup__content').fadeOut();
    $('.header-popup__thanks').fadeIn();
    $('#header-popup__form').trigger("reset");
    return false;
});


/*------------close popup----------*/
$('.header-popup__close').on('click', function() {
    $('.header-popup').fadeOut();
})
$(document).mouseup(function(e) {
    var popup = $('.header-popup__content');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.header-popup').fadeOut();
    }
});

/*------------phone mask----------*/
$("#headerPhone").mask("+7 (999) 99-99-999");
/*------------------- END HEADER POPUP FORM     ------------------------*/




/*------------------- START HEADER CONTACT FORM ------------------------*/
$("#header-form").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
        type: "POST",
        url: "",
        data: $("#header-form").serialize(),
        success: function(html) {}
    });
    $('.header-popup_thanks').fadeIn();
    $('#header-form').trigger("reset");
    return false;
});


/*------------close popup----------*/
$('.header-popup__close').on('click', function() {
    $('.header-popup_thanks').fadeOut();
});
$('.header-popup__btn-thanks').on('click', function() {
    $('.header-popup_thanks').fadeOut();
});
$(document).mouseup(function(e) {
    var popup = $('.header-form__popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.header-popup_thanks').fadeOut();
    }
});

/*------------phone mask----------*/
$("#clientPhone").mask("+7 (999) 99-99-999");
/*------------------- END HEADER CONTACT FORM     ------------------------*/


/*------------------- START CONTACT FORM ------------------------*/
$("#form-contact").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
        type: "POST",
        url: "",
        data: $("#form-contact").serialize(),
        success: function(html) {}
    });
    $('.contact-form__popup').fadeIn();
    $('#form-contact').trigger("reset");
    return false;
});


/*------------close popup----------*/
$('.form-popup__close').on('click', function() {
    $('.contact-form__popup').fadeOut();
});
$('.form-popup__btn-thanks').on('click', function() {
    $('.contact-form__popup').fadeOut();
});
$(document).mouseup(function(e) {
    var popup = $('.form__popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.contact-form__popup').fadeOut();
    }
});

/*------------phone mask----------*/
$("#phone").mask("+7 (999) 99-99-999");
/*------------------- END CONTACT FORM     ------------------------*/


/*------------------- START REWIEWS FORM ------------------------*/
/*------------open popup----------*/
$('#rewiews-btn').on('click', function() {
    $('.rewsiews-popup').fadeIn();
});

/*------------popup----------*/
$("#rewiews__form").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
        type: "POST",
        url: "",
        data: $("#rewiews__form").serialize(),
        success: function(html) {}
    });
    $('.rewiews-popup__content').fadeOut();
    $('.rewiews-popup__thanks').fadeIn();
    $('#rewiews__form').trigger("reset");
    return false;
});


/*------------close popup----------*/
$('.rewiews-popup__close').on('click', function() {
    $('.rewsiews-popup').fadeOut();
})
$(document).mouseup(function(e) {
    var popup = $('.rewiews-popup__content');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.rewsiews-popup').fadeOut();
    }
});

/*------------phone mask----------*/
$("#rewiewsPhone").mask("+7 (999) 99-99-999");
/*------------------- END REWIEWS FORM     ------------------------*/


/*------------------- START FOOTER CONTACT FORM ------------------------*/
/*------------open popup----------*/
$('.footer-contact__btn').on('click', function() {
    $('.footer-popup').fadeIn();
});

/*------------popup----------*/
$("#footer-popup__form").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
        type: "POST",
        url: "",
        data: $("#footer-popup__form").serialize(),
        success: function(html) {}
    });
    $('.footer-popup__content').fadeOut();
    $('.footer-popup__thanks').fadeIn();
    $('#footer-popup__form').trigger("reset");
    return false;
});


/*------------close popup----------*/
$('.footer-popup__close').on('click', function() {
    $('.footer-popup').fadeOut();
})
$(document).mouseup(function(e) {
    var popup = $('.footer-popup__content');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.footer-popup').fadeOut();
    }
});

/*------------phone mask----------*/
$("#footerPhone").mask("+7 (999) 99-99-999");
/*------------------- END FOOTER CONTACT FORM     ------------------------*/
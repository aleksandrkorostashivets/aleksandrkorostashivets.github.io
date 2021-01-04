/*START SLICK SLIDER*/
$('.hero-slider').slick({
  infinite: false,
  arrows: true,
  prevArrow: '<button class="btn-reset slider-arrow slider-arrow--prev"><svg><use xlink:href="img/sprite.svg#arrow-prev"></use></svg></button>',
  nextArrow: '<button class="btn-reset slider-arrow slider-arrow--next"><svg><use xlink:href="img/sprite.svg#arrow-next"></use></svg></button>',
  asNavFor: '.slider-dotshead',
});

$('.slider-dotshead').slick({
  infinite: false,
  arrows: false,
  asNavFor: '.hero-slider',
  dots: true,
  fade: true,
  appendDots: $('.news__dots'),
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'news__dots-list',
});
/*END SLICK SLIDER */


/*START BURGER MENU*/
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');

header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
}

header__list.onclick = function () {
  header__list.classList.remove('active');
  back.classList.toggle('lock');
}
/*END BURGER MENU*/

$('.ship-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  arrows: false,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 1
    }
  }]
});
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");
/* harmony import */ var _components_cokkie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cokkie.js */ "./src/js/components/cokkie.js");
/* harmony import */ var _components_fixed_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fixed-header.js */ "./src/js/components/fixed-header.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/preloader.js */ "./src/js/components/preloader.js");
/* harmony import */ var _components_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/counter.js */ "./src/js/components/counter.js");
/* harmony import */ var _components_audience_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/audience.js */ "./src/js/components/audience.js");
/* harmony import */ var _components_calendar_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calendar-slider.js */ "./src/js/components/calendar-slider.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal.js */ "./src/js/components/modal.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_website_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website-map.js */ "./src/js/components/website-map.js");
/* harmony import */ var _components_audience_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/audience-map.js */ "./src/js/components/audience-map.js");
/* harmony import */ var _components_current_year_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/current-year.js */ "./src/js/components/current-year.js");
/* harmony import */ var _components_footer_accrodion_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer-accrodion.js */ "./src/js/components/footer-accrodion.js");
// import './components/active-link.js';



// import './components/contact-form.js';
// import './components/disable-scroll.js';
// import './components/enable-scroll.js';
// import './components/countdown.js';



// import './components/map.js';







// import './components/audio.js';


/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion__header');
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('is-active');
    accordionItems.forEach(i => i.classList.remove('is-active'));
    if (!isActive) {
      item.classList.add('is-active');
    }
  });
});

/***/ }),

/***/ "./src/js/components/audience-map.js":
/*!*******************************************!*\
  !*** ./src/js/components/audience-map.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
am5.ready(function () {
  var root = am5.Root.new("audienceMap");
  root.setThemes([am5themes_Animated.new(root)]);
  var map = root.container.children.push(am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelX: "none",
    wheelY: "none",
    projection: am5map.geoNaturalEarth1()
  }));
  var polygonSeries = map.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_continentsLow,
    exclude: ["antarctica"],
    fill: am5.color(0xbbbbbb)
  }));
  var pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));
  var colorSet = am5.ColorSet.new(root, {
    step: 2
  });
  pointSeries.bullets.push(function (root, series, dataItem) {
    var value = dataItem.dataContext.value;
    var container = am5.Container.new(root, {});
    var color = colorSet.next();
    var radius = 20; // Фіксований радіус для всіх кружків

    // Кружок із тултіпом
    var circle = container.children.push(am5.Circle.new(root, {
      radius: radius,
      fill: color,
      dy: -radius * 2,
      tooltipText: "{title}",
      cursorOverStyle: "pointer"
    }));
    container.children.push(am5.Line.new(root, {
      stroke: color,
      height: -40,
      strokeGradient: am5.LinearGradient.new(root, {
        stops: [{
          opacity: 1
        }, {
          opacity: 1
        }, {
          opacity: 0
        }]
      })
    }));
    container.children.push(am5.Label.new(root, {
      text: String(value),
      fill: am5.color(0xffffff),
      fontWeight: "400",
      fontSize: 14,
      centerX: am5.p50,
      centerY: am5.p50,
      dy: -radius * 2
    }));
    return am5.Bullet.new(root, {
      sprite: container
    });
  });
  var data = [{
    title: "Canada / Mexico / Caribbean",
    latitude: 55.0,
    longitude: -110.0,
    value: 1924
  }, {
    title: "Pacific / West Coast",
    latitude: 37.0,
    longitude: -120.0,
    value: 4233
  }, {
    title: "Gulf Coast",
    latitude: 30.0,
    longitude: -90.0,
    value: 10784
  }, {
    title: "South / Central America",
    latitude: -10.0,
    longitude: -60.0,
    value: 456
  }, {
    title: "Lakes / Inland",
    latitude: 54.0,
    longitude: -84.0,
    value: 5523
  }, {
    title: "East Coast",
    latitude: 38.0,
    longitude: -65.0,
    value: 8180
  }, {
    title: "Europe",
    latitude: 50.896104,
    longitude: 19.160156,
    value: 6808
  }, {
    title: "Africa / Middle East",
    latitude: 11.081385,
    longitude: 21.621094,
    value: 1081
  }, {
    title: "Asia / Pacific / Oceania",
    latitude: 20.0,
    longitude: 100.0,
    value: 3042
  }];
  data.forEach(function (d) {
    pointSeries.data.push({
      geometry: {
        type: "Point",
        coordinates: [d.longitude, d.latitude]
      },
      title: d.title,
      value: d.value
    });
  });
});

/***/ }),

/***/ "./src/js/components/audience.js":
/*!***************************************!*\
  !*** ./src/js/components/audience.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const ctx = document.getElementById('audienceChart').getContext('2d');
const data = {
  labels: ['Social networks', 'Websites (avg sessions/month)', 'Magazine', 'E-news recipients', 'Mobile apps'],
  datasets: [{
    label: 'Audience',
    data: [366662, 452579, 42031, 71219, 78083],
    backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'],
    borderWidth: 1,
    hoverOffset: 10
  }]
};
function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}
const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = formatNumber(context.raw);
          return `${context.label}: ${value}`;
        }
      }
    },
    legend: {
      position: 'top',
      labels: {
        boxWidth: 20,
        padding: 15,
        font: {
          family: 'Montserrat',
          size: 16,
          style: 'italic',
          weight: 'normal'
        },
        color: '#333',
        generateLabels: function (chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const value = formatNumber(data.datasets[0].data[i]);
              return {
                text: `${label} – ${value}`,
                fillStyle: data.datasets[0].backgroundColor[i],
                strokeStyle: data.datasets[0].backgroundColor[i],
                lineWidth: 1,
                hidden: false,
                index: i
              };
            });
          }
          return [];
        }
      }
    },
    datalabels: {
      color: '#fff',
      font: {
        family: 'Montserrat',
        weight: '600',
        size: 16
      },
      formatter: function (value) {
        return formatNumber(value);
      },
      display: function () {
        return window.innerWidth > 768;
      },
      anchor: 'center',
      align: 'center',
      clamp: true
    }
  },
  animation: {
    animateScale: true,
    animateRotate: true
  },
  layout: {
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
};
const chart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options,
  plugins: [ChartDataLabels]
});
window.addEventListener('resize', () => {
  chart.update();
});

/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  const navItems = nav?.querySelectorAll('a');
  const body = document.body;
  const dropdownToggles = document.querySelectorAll('[data-toggle]');
  const dropdownItems = document.querySelectorAll('.header__item--has-submenu');
  burger?.addEventListener('click', event => {
    event.preventDefault();
    burger.blur();
    body.classList.toggle('dis-scroll');
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
  });
  navItems?.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('dis-scroll');
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--visible');
    });
  });
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const parent = toggle.closest('.header__item--has-submenu');
      const isOpen = parent.classList.contains('is-open');
      dropdownItems.forEach(item => item.classList.remove('is-open'));
      if (!isOpen) {
        parent.classList.add('is-open');
      }
    });
  });
  document.querySelectorAll('.header__submenu').forEach(menu => {
    menu.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
  document.addEventListener('click', () => {
    dropdownItems.forEach(item => item.classList.remove('is-open'));
  });
});

/***/ }),

/***/ "./src/js/components/calendar-slider.js":
/*!**********************************************!*\
  !*** ./src/js/components/calendar-slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener('change', checker);
    checker();
  };
  const someFunc = instance => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };
  resizableSwiper('(max-width: 1000px)', '.calendar__slider', {
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      600: {
        slidesPerView: 2
      }
    }
  }, someFunc);
});

/***/ }),

/***/ "./src/js/components/cokkie.js":
/*!*************************************!*\
  !*** ./src/js/components/cokkie.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
  var e = document.querySelector(".cookies-infobar"),
    n = document.querySelector("#cookies-infobar-close"),
    t = document.querySelector("#false");
  if (o()) {
    i();
    return;
  }
  function i() {
    e.className = e.classList.value + " cookies-infobar_accepted";
  }
  function o() {
    return "1" === r();
  }
  function r() {
    for (var e = "cookieInfoHidden=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
      for (var i = n[t]; " " == i.charAt(0);) i = i.substring(1);
      if (0 === i.indexOf(e)) return i.substring(e.length, i.length);
    }
    return "";
  }
  function c(e) {
    var n = new Date(),
      t = n.getTime() + 864e5 * e,
      i = new Date(n.setTime(t));
    i = i.toUTCString(), document.cookie = "cookieInfoHidden=1; expires=" + i + "; path=/";
  }
  n.addEventListener("click", function (e) {
    e.preventDefault(), i(), c(7);
  }), t.addEventListener("click", function (e) {
    e.preventDefault(), i(), c(7);
  });
})();

/***/ }),

/***/ "./src/js/components/counter.js":
/*!**************************************!*\
  !*** ./src/js/components/counter.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function formatNumberWithCommaSpace(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
function animateCountersInElement(selector) {
  const block = document.querySelector(selector);
  const counters = block.querySelectorAll(".number");
  counters.forEach(counter => {
    const value = parseInt(counter.getAttribute("data-value"), 10);
    const duration = 6000;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.floor(value * (progress / duration));
      counter.textContent = formatNumberWithCommaSpace(Math.min(increment, value));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = formatNumberWithCommaSpace(value);
      }
    }
    requestAnimationFrame(step);
  });
}
let aboutAnimated = false;
let socialAnimated = false;
let websiteAnimated = false;
window.addEventListener("scroll", function () {
  if (!aboutAnimated && isInViewport(document.querySelector(".about__list"))) {
    aboutAnimated = true;
    animateCountersInElement(".about__list");
  }
  if (!socialAnimated && isInViewport(document.querySelector(".social-reach__list"))) {
    socialAnimated = true;
    animateCountersInElement(".social-reach__list");
  }
  if (!websiteAnimated && isInViewport(document.querySelector(".website__list"))) {
    websiteAnimated = true;
    animateCountersInElement(".website__list");
  }
});

/***/ }),

/***/ "./src/js/components/current-year.js":
/*!*******************************************!*\
  !*** ./src/js/components/current-year.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.getElementById("current-year").textContent = new Date().getFullYear();

/***/ }),

/***/ "./src/js/components/fixed-header.js":
/*!*******************************************!*\
  !*** ./src/js/components/fixed-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  let ticking = false;
  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 150) {
      if (!header.classList.contains('header--fixed')) {
        header.classList.add('header--fixed');
      }
      if (currentScrollY > lastScrollY + 10) {
        header.classList.add('header--hidden');
      } else if (currentScrollY < lastScrollY - 10) {
        header.classList.remove('header--hidden');
      }
    } else {
      header.classList.remove('header--fixed', 'header--hidden');
    }
    lastScrollY = currentScrollY;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
});

/***/ }),

/***/ "./src/js/components/footer-accrodion.js":
/*!***********************************************!*\
  !*** ./src/js/components/footer-accrodion.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const accordionItems = document.querySelectorAll('.footer__accordion');
accordionItems.forEach(item => {
  const btn = item.querySelector('.footer__accordion-btn');
  btn.addEventListener('click', () => {
    if (window.innerWidth >= 1000) return;
    const isActive = item.classList.contains('is-active');
    accordionItems.forEach(i => i.classList.remove('is-active'));
    if (!isActive) {
      item.classList.add('is-active');
    }
  });
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const pageBody = document.querySelector('.page__body');
let scrollY = 0;
function openModal(modal) {
  scrollY = window.scrollY || window.pageYOffset;
  pageBody.style.setProperty('--scroll-y', `-${scrollY}px`);
  pageBody.classList.add('modal-open');
  modal.classList.add('active');
}
function closeModal(modal) {
  modal.classList.remove('active');
  pageBody.classList.remove('modal-open');
  pageBody.style.removeProperty('--scroll-y');

  // Зупинити відео якщо є
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  setTimeout(() => {
    window.scrollTo(0, scrollY);
  }, 0);
}

// Відкриття модалки по кнопці
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const modalId = btn.getAttribute('data-open-modal');
    const modal = document.getElementById(modalId);
    if (modal) openModal(modal);
  });
});

// Закриття модалок по кнопці "х" і оверлею
document.querySelectorAll('.modal').forEach(modal => {
  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }
  if (overlay) {
    overlay.addEventListener('click', () => closeModal(modal));
  }
  // Щоб клік по контенту не закривав модалку
  const content = modal.querySelector('.modal__content');
  if (content) {
    content.addEventListener('click', e => e.stopPropagation());
  }
});

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.getElementById('loader-wrapper').style.display = 'flex';
    document.querySelector('.site-container').classList.add('site-container--hidden');
  } else {
    document.getElementById('loader-wrapper').style.display = 'none';
    document.querySelector('.site-container').classList.remove('site-container--hidden');
  }
};

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.querySelectorAll('.tab-component').forEach(tabComponent => {
  const buttons = tabComponent.querySelectorAll('.tab-component__btn');
  const contents = tabComponent.querySelectorAll('.tab-component__content');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      tabComponent.querySelector(`.tab-component__content[data-content="${tab}"]`).classList.add('active');
    });
  });
});

/***/ }),

/***/ "./src/js/components/website-map.js":
/*!******************************************!*\
  !*** ./src/js/components/website-map.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
am5.ready(function () {
  var data = [{
    id: "NA",
    name: "North America",
    value: 42,
    latitude: 54.5260,
    longitude: -105.2551
  }, {
    id: "SA",
    name: "South America",
    value: 3,
    latitude: -8.7832,
    longitude: -55.4915
  }, {
    id: "AF",
    name: "Africa",
    value: 2,
    latitude: 1.6508,
    longitude: 17.6791
  }, {
    id: "AS",
    name: "Asia",
    value: 20,
    latitude: 34.0479,
    longitude: 100.6197
  }, {
    id: "OC",
    name: "Oceania",
    value: 2,
    latitude: -22.7359,
    longitude: 140.0188
  }, {
    id: "EU",
    name: "Europe",
    value: 32,
    latitude: 54.5260,
    longitude: 15.2551
  }];
  var root = am5.Root.new("websiteMap");
  root.setThemes([am5themes_Animated.new(root)]);
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelX: "none",
    wheelY: "none"
  }));
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));
  var bubbleSeries = chart.series.push(am5map.MapPointSeries.new(root, {
    valueField: "value",
    longitudeField: "longitude",
    latitudeField: "latitude"
  }));
  var circleTemplate = am5.Template.new({});
  bubbleSeries.bullets.push(function (root, series, dataItem) {
    var container = am5.Container.new(root, {});
    var circle = container.children.push(am5.Circle.new(root, {
      radius: 20,
      fillOpacity: 0.9,
      fill: am5.color(0xdc3545),
      cursorOverStyle: "pointer",
      tooltipText: `{name}: [bold]{value}%[/]`
    }, circleTemplate));
    var countryLabel = container.children.push(am5.Label.new(root, {
      text: "{name}",
      paddingTop: 20,
      populateText: true,
      fontWeight: "bold",
      fontSize: 16,
      centerX: am5.p50
    }));
    circle.on("radius", function (radius) {
      countryLabel.set("x", radius);
    });
    return am5.Bullet.new(root, {
      sprite: container,
      dynamic: true
    });
  });
  bubbleSeries.bullets.push(function (root, series, dataItem) {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        text: "{value.formatNumber('#.')}%",
        fill: am5.color(0xffffff),
        populateText: true,
        centerX: am5.p50,
        centerY: am5.p50,
        textAlign: "center"
      }),
      dynamic: true
    });
  });

  // bubbleSeries.set("heatRules", [
  //   {
  //     target: circleTemplate,
  //     dataField: "value",
  //     min: 10,
  //     max: 50,
  //     minValue: 0,
  //     maxValue: 100,
  //     key: "radius"
  //   }
  // ]);

  bubbleSeries.data.setAll(data);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
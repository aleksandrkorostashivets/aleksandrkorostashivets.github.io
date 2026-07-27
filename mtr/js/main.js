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
  /* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
  /* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
  /* harmony import */ var _components_website_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website-map.js */ "./src/js/components/website-map.js");
  /* harmony import */ var _components_current_year_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/current-year.js */ "./src/js/components/current-year.js");
  /* harmony import */ var _components_footer_accrodion_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer-accrodion.js */ "./src/js/components/footer-accrodion.js");
  /* harmony import */ var _components_rates_form_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rates-form.js */ "./src/js/components/rates-form.js");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./src/js/components/accordion.js":
  /*!****************************************!*\
    !*** ./src/js/components/accordion.js ***!
    \****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length) {
    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion__item');
      if (!items.length) return;
      items.forEach(item => {
        const header = item.querySelector('.accordion__header');
        if (!header) return;
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('is-active');
          items.forEach(i => i.classList.remove('is-active'));
          if (!isActive) item.classList.add('is-active');
        });
      });
    });
  }
  
  /***/ }),
  
  /***/ "./src/js/components/audience.js":
  /*!***************************************!*\
    !*** ./src/js/components/audience.js ***!
    \***************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  const canvas = document.getElementById('audienceChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const data = {
      labels: ['Magazine/E-Magazine Subscribers', 'eNewsletter', 'Social', 'Website Users/month', 'Mobile App'],
      datasets: [{
        label: 'Audience',
        data: [52846, 21008, 57741, 56108, 6568],
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#66cff5'],
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
          formatter: function (value, context) {
            const dataset = context.dataset.data;
            const total = dataset.reduce((a, b) => a + b, 0);
            const percent = (value / total * 100).toFixed(1);
            return `${percent}%`;
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
  }
  
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
    const body = document.body;
    if (!burger || !nav) return;
    const navItems = nav.querySelectorAll('a');
    burger.addEventListener('click', event => {
      event.preventDefault();
      burger.blur();
      body.classList.toggle('dis-scroll');
      burger.classList.toggle('burger--active');
      nav.classList.toggle('nav--visible');
    });
    navItems.forEach(el => {
      el.addEventListener('click', () => {
        body.classList.remove('dis-scroll');
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--visible');
      });
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
      const slider = document.querySelector(swiperClass);
      if (!slider) return;
      let swiper;
      breakpoint = window.matchMedia(breakpoint);
      const enableSwiper = (className, settings) => {
        swiper = new Swiper(className, settings);
        if (callback) callback(swiper);
      };
      const checker = () => {
        if (breakpoint.matches) {
          enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper) swiper.destroy(true, true);
        }
      };
      breakpoint.addEventListener('change', checker);
      checker();
    };
    const someFunc = instance => {
      instance?.on('slideChange', () => {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
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
    const bar = document.querySelector(".cookies-infobar");
    const btnClose = document.querySelector("#cookies-infobar-close");
    const btnFalse = document.querySelector("#false");
    if (!bar || !btnClose || !btnFalse) return;
    if (isAccepted()) {
      hideBar();
      return;
    }
    function hideBar() {
      bar.className = bar.classList.value + " cookies-infobar_accepted";
    }
    function isAccepted() {
      return getCookie() === "1";
    }
    function getCookie() {
      const name = "cookieInfoHidden=";
      const cookies = document.cookie.split(";");
      for (let c of cookies) {
        while (c.charAt(0) === " ") c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length);
      }
      return "";
    }
    function setCookie(days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 864e5);
      document.cookie = "cookieInfoHidden=1; expires=" + date.toUTCString() + "; path=/";
    }
    btnClose.addEventListener("click", e => {
      e.preventDefault();
      hideBar();
      setCookie(7);
    });
    btnFalse.addEventListener("click", e => {
      e.preventDefault();
      hideBar();
      setCookie(7);
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
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  function animateCountersInElement(selector) {
    const block = document.querySelector(selector);
    if (!block) return;
    const counters = block.querySelectorAll(".number");
    if (!counters.length) return;
    counters.forEach(counter => {
      const value = parseInt(counter.getAttribute("data-value"), 10);
      if (isNaN(value)) return;
      const duration = 4000;
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
  let audienceAnimated = false;
  let tvAnimated = false;
  let whyUsAnimated = false;
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
    if (!audienceAnimated && isInViewport(document.querySelector(".audience__list"))) {
      audienceAnimated = true;
      animateCountersInElement(".audience__list");
    }
    if (!tvAnimated && isInViewport(document.querySelector(".tv__list"))) {
      tvAnimated = true;
      animateCountersInElement(".tv__list");
    }
    if (!whyUsAnimated && isInViewport(document.querySelector(".why-us__list"))) {
      whyUsAnimated = true;
      animateCountersInElement(".why-us__list");
    }
  });
  
  /***/ }),
  
  /***/ "./src/js/components/current-year.js":
  /*!*******************************************!*\
    !*** ./src/js/components/current-year.js ***!
    \*******************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  /***/ }),
  
  /***/ "./src/js/components/fixed-header.js":
  /*!*******************************************!*\
    !*** ./src/js/components/fixed-header.js ***!
    \*******************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) return;
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
  if (accordionItems.length) {
    accordionItems.forEach(item => {
      const btn = item.querySelector('.footer__accordion-btn');
      if (!btn) return;
      btn.addEventListener('click', () => {
        if (window.innerWidth >= 1000) return;
        const isActive = item.classList.contains('is-active');
        accordionItems.forEach(i => i.classList.remove('is-active'));
        if (!isActive) {
          item.classList.add('is-active');
        }
      });
    });
  }
  
  /***/ }),
  
  /***/ "./src/js/components/preloader.js":
  /*!****************************************!*\
    !*** ./src/js/components/preloader.js ***!
    \****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  document.onreadystatechange = function () {
    const loader = document.getElementById('loader-wrapper');
    const site = document.querySelector('.site-container');
    if (!loader || !site) return;
    if (document.readyState !== "complete") {
      loader.style.display = 'flex';
      site.classList.add('site-container--hidden');
    } else {
      loader.style.display = 'none';
      site.classList.remove('site-container--hidden');
    }
  };
  
  /***/ }),
  
  /***/ "./src/js/components/rates-form.js":
  /*!*****************************************!*\
    !*** ./src/js/components/rates-form.js ***!
    \*****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  document.addEventListener("DOMContentLoaded", () => {
    const modalsBtn = document.querySelectorAll('.open-modal'); 
    const formPopup = document.getElementById('formPopup');
    const thanksPopup = document.getElementById('thanksPopup');
    const rateForm = document.getElementById('rateForm');
  
    if (modalsBtn.length && formPopup) {
      modalsBtn.forEach(btn => {
        btn.addEventListener('click', () => {
          formPopup.classList.add('active');
        });
      });
    }
  
    [formPopup, thanksPopup].forEach(popup => {
      if (popup) {
        popup.addEventListener('click', e => {
          if (e.target === popup) {
            popup.classList.remove('active');
            if (rateForm) rateForm.reset();
          }
        });
      }
    });
  
    // Надсилання форми
    // if (rateForm && formPopup && thanksPopup) {
    //   rateForm.addEventListener('submit', function (e) {
    //     e.preventDefault();
  
    //     const formData = new FormData(rateForm);
  
    //     fetch("send.php", {
    //       method: "POST",
    //       body: formData
    //     })
    //       .then(response => response.text())
    //       .then(result => {
    //         console.log("Server response:", result);
  
    //         formPopup.classList.remove('active');
    //         thanksPopup.classList.add('active');
    //         rateForm.reset();
    //       })
    //       .catch(error => {
    //         console.error("Error:", error);
    //       });
    //   });
    // }
  
    // Завантаження PDF після кліку на кнопку в "thanksPopup"
    // const getRatesBtn = document.getElementById('getRatesBtn');
    // if (getRatesBtn && thanksPopup) {
    //   getRatesBtn.addEventListener('click', () => {
    //     window.location.href = "./pdf/2026-OE-full.pdf";
    //     thanksPopup.classList.remove('active');
    //   });
    // }
  });
  
  /***/ }),
  
  /***/ "./src/js/components/tabs.js":
  /*!***********************************!*\
    !*** ./src/js/components/tabs.js ***!
    \***********************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  const tabComponents = document.querySelectorAll('.tab-component');
  if (tabComponents.length) {
    tabComponents.forEach(tabComponent => {
      const buttons = tabComponent.querySelectorAll('.tab-component__btn');
      const contents = tabComponent.querySelectorAll('.tab-component__content');
      if (!buttons.length || !contents.length) return;
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const tab = button.getAttribute('data-tab');
          buttons.forEach(btn => btn.classList.remove('active'));
          contents.forEach(content => content.classList.remove('active'));
          button.classList.add('active');
          const contentToShow = tabComponent.querySelector(`.tab-component__content[data-content="${tab}"]`);
          if (contentToShow) contentToShow.classList.add('active');
        });
      });
    });
  }
  
  /***/ }),
  
  /***/ "./src/js/components/website-map.js":
  /*!******************************************!*\
    !*** ./src/js/components/website-map.js ***!
    \******************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  am5.ready(function () {
    const mapElement = document.getElementById("websiteMap");
    if (!mapElement) return;
    var data = [{
      id: "NA",
      name: "North America",
      percent: 57,
      latitude: 40,
      longitude: -100,
      color: am5.color(0x0d6efd)
    }, {
      id: "EU",
      name: "Europe",
      percent: 22,
      latitude: 54,
      longitude: 15,
      color: am5.color(0x0d2e62)
    }, {
      id: "AP",
      name: "Asia Pacific",
      percent: 16,
      latitude: 25,
      longitude: 105,
      color: am5.color(0x343a40)
    }, {
      id: "ME",
      name: "Africa / Middle East",
      percent: 4,
      latitude: 28,
      longitude: 45,
      color: am5.color(0xdc3545)
    }, {
      id: "LA",
      name: "South America",
      percent: 1,
      latitude: -10,
      longitude: -60,
      color: am5.color(0x198754)
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
      longitudeField: "longitude",
      latitudeField: "latitude"
    }));
    bubbleSeries.bullets.push(function (root, series, dataItem) {
      var container = am5.Container.new(root, {});
      var circle = container.children.push(am5.Circle.new(root, {
        radius: 30,
        fillOpacity: 0.9,
        fill: dataItem.dataContext.color,
        tooltipText: `{name}: [bold]{percent}%[/]`,
        cursorOverStyle: "pointer"
      }));
      circle.set("tooltip", am5.Tooltip.new(root, {}));
      circle.get("tooltip").label.setAll({
        fontSize: 16,
        fontWeight: "bold"
      });
      return am5.Bullet.new(root, {
        sprite: container,
        dynamic: true
      });
    });
    bubbleSeries.bullets.push(function (root, series, dataItem) {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{percent}%",
          fill: am5.color(0xffffff),
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: 16,
          fontWeight: "bold"
        }),
        dynamic: true
      });
    });
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
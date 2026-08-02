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
  /* harmony import */ var _components_rates_form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rates-form.js */ "./src/js/components/rates-form.js");
  /* harmony import */ var _components_footer_accrodion_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer-accrodion.js */ "./src/js/components/footer-accrodion.js");














        /***/
}),

  /***/ "./src/js/components/accordion.js":
  /*!****************************************!*\
    !*** ./src/js/components/accordion.js ***!
    \****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        document.querySelectorAll('.mr-accordion').forEach(accordion => {
          if (!accordion) return;
          const items = accordion.querySelectorAll('.mr-accordion__item');
          if (!items.length) return;
          items.forEach(item => {
            const header = item.querySelector('.mr-accordion__header');
            if (!header) return;
            header.addEventListener('click', () => {
              const isActive = item.classList.contains('is-active');
              items.forEach(i => i.classList.remove('is-active'));
              if (!isActive) {
                item.classList.add('is-active');
              }
            });
          });
        });

        /***/
}),

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
            labels: ['Magazine Circulation', 'E-Magazine Circulation', 'E-News Recipients', 'Website Sessions'],
            datasets: [{
              label: 'Audience',
              data: [42564, 82130, 70985, 1781819],
              backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2'],
              borderWidth: 1,
              hoverOffset: 10
            }]
          };
          function formatNumber(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                    size: 14,
                    style: 'italic',
                    weight: 'normal'
                  },
                  color: '#333',
                  generateLabels: function (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                      const dataset = data.datasets[0];
                      return data.labels.map((label, i) => {
                        const value = dataset.data[i] !== undefined ? formatNumber(dataset.data[i]) : '0';
                        return {
                          text: `${label} – ${value}`,
                          fillStyle: dataset.backgroundColor[i] || '#ccc',
                          strokeStyle: dataset.backgroundColor[i] || '#ccc',
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
                  size: 14
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

        /***/
}),

  /***/ "./src/js/components/burger.js":
  /*!*************************************!*\
    !*** ./src/js/components/burger.js ***!
    \*************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        document.addEventListener("DOMContentLoaded", () => {
          const burger = document.querySelector('[data-burger]');
          const nav = document.querySelector('[data-nav]');
          if (!burger || !nav) return;
          const navItems = nav.querySelectorAll('a');
          const body = document.body;
          burger.addEventListener('click', event => {
            event.preventDefault();
            burger.blur();
            body.classList.toggle('dis-scroll');
            burger.classList.toggle('burger--active');
            nav.classList.toggle('nav--visible');
          });
          if (navItems.length) {
            navItems.forEach(el => {
              el.addEventListener('click', () => {
                body.classList.remove('dis-scroll');
                burger.classList.remove('burger--active');
                nav.classList.remove('nav--visible');
              });
            });
          }
        });

        /***/
}),

  /***/ "./src/js/components/calendar-slider.js":
  /*!**********************************************!*\
    !*** ./src/js/components/calendar-slider.js ***!
    \**********************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        window.addEventListener('DOMContentLoaded', () => {
          const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
            const sliderElement = document.querySelector(swiperClass);
            if (!sliderElement) return;
            let swiper;
            breakpoint = window.matchMedia(breakpoint);
            const enableSwiper = function (className, settings) {
              swiper = new Swiper(className, settings);
              if (callback) callback(swiper);
            };
            const checker = function () {
              if (breakpoint.matches) {
                enableSwiper(swiperClass, swiperSettings);
              } else {
                if (swiper !== undefined) swiper.destroy(true, true);
              }
            };
            breakpoint.addEventListener('change', checker);
            checker();
          };
          const someFunc = instance => {
            if (instance) {
              instance.on('slideChange', function () {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
              });
            }
          };
          resizableSwiper('(max-width: 1000px)', '.mr-calendar__slider', {
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

        /***/
}),

  /***/ "./src/js/components/cokkie.js":
  /*!*************************************!*\
    !*** ./src/js/components/cokkie.js ***!
    \*************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        (() => {
          const infobar = document.querySelector(".cookies-infobar");
          const closeBtn = document.querySelector("#cookies-infobar-close");
          const falseBtn = document.querySelector("#false");
          if (!infobar || !closeBtn || !falseBtn) return;
          if (isAccepted()) {
            accept();
            return;
          }
          function accept() {
            infobar.className = infobar.classList.value + " cookies-infobar_accepted";
          }
          function isAccepted() {
            return getCookie() === "1";
          }
          function getCookie() {
            const name = "cookieInfoHidden=";
            const decodedCookies = document.cookie.split(";");
            for (let i = 0; i < decodedCookies.length; i++) {
              let c = decodedCookies[i].trim();
              if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return "";
          }
          function setCookie(days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = "cookieInfoHidden=1; expires=" + date.toUTCString() + "; path=/";
          }
          closeBtn.addEventListener("click", e => {
            e.preventDefault();
            accept();
            setCookie(7);
          });
          falseBtn.addEventListener("click", e => {
            e.preventDefault();
            accept();
            setCookie(7);
          });
        })();

        /***/
}),

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
          const counters = block.querySelectorAll(".mr-number");
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
        let audienceAnimated = false;
        let podcastAnimated = false;
        let tvAnimated = false;
        let whyUsAnimated = false;
        window.addEventListener("scroll", function () {
          if (!aboutAnimated && isInViewport(document.querySelector(".mr-about__list"))) {
            aboutAnimated = true;
            animateCountersInElement(".mr-about__list");
          }
          if (!socialAnimated && isInViewport(document.querySelector(".mr-social-reach__list"))) {
            socialAnimated = true;
            animateCountersInElement(".mr-social-reach__list");
          }
          if (!websiteAnimated && isInViewport(document.querySelector(".mr-website__list"))) {
            websiteAnimated = true;
            animateCountersInElement(".mr-website__list");
          }
          if (!audienceAnimated && isInViewport(document.querySelector(".mr-audience__list"))) {
            audienceAnimated = true;
            animateCountersInElement(".mr-audience__list");
          }
          if (!podcastAnimated && isInViewport(document.querySelector(".mr-podcast__list"))) {
            podcastAnimated = true;
            animateCountersInElement(".mr-podcast__list");
          }
          if (!tvAnimated && isInViewport(document.querySelector(".mr-tv__list"))) {
            tvAnimated = true;
            animateCountersInElement(".mr-tv__list");
          }
          if (!whyUsAnimated && isInViewport(document.querySelector(".mr-why-us__list"))) {
            whyUsAnimated = true;
            animateCountersInElement(".mr-why-us__list");
          }
        });

        /***/
}),

  /***/ "./src/js/components/current-year.js":
  /*!*******************************************!*\
    !*** ./src/js/components/current-year.js ***!
    \*******************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        const currentYearEl = document.getElementById("current-year");
        if (currentYearEl) {
          currentYearEl.textContent = new Date().getFullYear();
        }

        /***/
}),

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

        /***/
}),

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

        /***/
}),

  /***/ "./src/js/components/preloader.js":
  /*!****************************************!*\
    !*** ./src/js/components/preloader.js ***!
    \****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        document.onreadystatechange = function () {
          const loader = document.getElementById('loader-wrapper');
          const siteContainer = document.querySelector('.site-container');
          if (!loader || !siteContainer) return;
          if (document.readyState !== "complete") {
            loader.style.display = 'flex';
            siteContainer.classList.add('site-container--hidden');
          } else {
            loader.style.display = 'none';
            siteContainer.classList.remove('site-container--hidden');
          }
        };

        /***/
}),

  /***/ "./src/js/components/rates-form.js":
  /*!*****************************************!*\
    !*** ./src/js/components/rates-form.js ***!
    \*****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        document.addEventListener("DOMContentLoaded", () => {
          // ================== COOKIE HELPERS ==================
          function setCookie(name, value, days) {
            let cookieStr = name + "=" + value + "; path=/";
            if (days) {
              const date = new Date();
              date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
              cookieStr += "; expires=" + date.toUTCString();
            }
            document.cookie = cookieStr;
            console.log("[COOKIE SET]", cookieStr);
          }
        
          function getCookie(name) {
            const cname = name + "=";
            const decodedCookies = document.cookie.split(";");
            for (let i = 0; i < decodedCookies.length; i++) {
              let c = decodedCookies[i].trim();
              if (c.indexOf(cname) === 0) {
                const val = c.substring(cname.length, c.length);
                console.log("[COOKIE FOUND]", name, "=", val);
                return val;
              }
            }
            console.log("[COOKIE NOT FOUND]", name);
            return "";
          }
        
          // ================== COOKIE INFOBAR ==================
          const infobar = document.querySelector(".cookies-infobar");
          const closeBtn = document.querySelector("#cookies-infobar-close");
          const falseBtn = document.querySelector("#false");
        
          if (infobar && closeBtn && falseBtn) {
            if (getCookie("cookieInfoHidden") === "1") {
              infobar.classList.add("cookies-infobar_accepted");
            }
        
            function acceptInfobar() {
              infobar.classList.add("cookies-infobar_accepted");
              setCookie("cookieInfoHidden", "1", 7);
            }
        
            closeBtn.addEventListener("click", e => {
              e.preventDefault();
              acceptInfobar();
            });
        
            falseBtn.addEventListener("click", e => {
              e.preventDefault();
              acceptInfobar();
            });
          }
        
          // ================== RATES FORM HANDLING ==================
          const modalsBtn = document.querySelectorAll(".open-modal");
          const formPopup = document.getElementById("formPopup");
          const rateForm = document.getElementById("rateForm");
          const COOKIE_NAME = "contactInfoSubmitted";
          let lastClickedBtn = null;
        
          // Detect Proposal page
          const isProposalPage = window.location.href.includes("proposal"); 
          // or use body class: document.body.classList.contains("proposal-page")
        
          // Handle clicks on [Get Rates] buttons
          if (modalsBtn.length) {
            modalsBtn.forEach(btn => {
              btn.addEventListener("click", (e) => {
                e.preventDefault();
                lastClickedBtn = btn;
                const pdfUrl = btn.getAttribute("data-pdf");
        
                // Do not show form on Proposal page
                if (isProposalPage) {
                  console.log("[INFO] Proposal page detected, form not shown");
                  return;
                }
        
                // If cookie exists → redirect directly to PDF
                if (getCookie(COOKIE_NAME) === "1") {
                  console.log("[INFO] Cookie exists, opening PDF:", pdfUrl);
                  window.location.href = pdfUrl;
                } else {
                  console.log("[INFO] Cookie not set, showing form");
                  if (formPopup) formPopup.classList.add("active");
                }
              });
            });
          }
        
          // Close popup when clicking outside content
          if (formPopup) {
            formPopup.addEventListener("click", e => {
              if (e.target === formPopup) {
                formPopup.classList.remove("active");
                if (rateForm) rateForm.reset();
              }
            });
          }
        
          // Handle Formspree form submission
          if (rateForm && formPopup) {
            rateForm.addEventListener("submit", async function (e) {
              e.preventDefault(); // stop page reload
              console.log("[FORM] Submit intercepted");
        
              try {
                const formData = new FormData(rateForm);
                const response = await fetch(rateForm.action, {
                  method: "POST",
                  body: formData,
                  headers: { "Accept": "application/json" }
                });
        
                if (response.ok) {
                  console.log("[FORM] Submitted successfully");
        
                  // Set cookie for 30 days
                  setCookie(COOKIE_NAME, "1", 30);
        
                  // Close form and reset
                  formPopup.classList.remove("active");
                  rateForm.reset();
        
                  // Redirect to PDF immediately
                  if (lastClickedBtn) {
                    const pdfUrl = lastClickedBtn.getAttribute("data-pdf");
                    console.log("[INFO] Redirecting to PDF:", pdfUrl);
                    window.location.href = pdfUrl;
                  }
                } else {
                  console.error("[FORM ERROR]", await response.text());
                }
              } catch (err) {
                console.error("[FORM SUBMIT ERROR]", err);
              }
            });
          }
        });      

  /***/ }),

  /***/ "./src/js/components/tabs.js":
  /*!***********************************!*\
    !*** ./src/js/components/tabs.js ***!
    \***********************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  document.querySelectorAll('.mr-tab-component').forEach(tabComponent => {
    if (!tabComponent) return;
    const buttons = tabComponent.querySelectorAll('.mr-tab-component__btn');
    const contents = tabComponent.querySelectorAll('.mr-tab-component__content');
    if (!buttons.length || !contents.length) return;
    buttons.forEach(button => {
      if (!button) return;
      button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        if (!tab) return;
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        const activeContent = tabComponent.querySelector(`.mr-tab-component__content[data-content="${tab}"]`);
        if (activeContent) activeContent.classList.add('active');
      });
    });
  });

  /***/
}),

  /***/ "./src/js/components/website-map.js":
  /*!******************************************!*\
    !*** ./src/js/components/website-map.js ***!
    \******************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  am5.ready(function () {
    const mapEl = document.getElementById("websiteMap");
    if (!mapEl) return;
    var data = [{
      id: "NA",
      name: "North America",
      value: 24238,
      latitude: 40,
      longitude: -100,
      color: am5.color(0x0d6efd)
    }, {
      id: "SA",
      name: "South America",
      value: 431,
      latitude: -15,
      longitude: -60,
      color: am5.color(0x198754)
    }, {
      id: "EU",
      name: "Europe",
      value: 11699,
      latitude: 54,
      longitude: 15,
      color: am5.color(0x0d2e62)
    }, {
      id: "AS",
      name: "Asia",
      value: 3682,
      latitude: 30,
      longitude: 120,
      color: am5.color(0x343a40)
    }, {
      id: "OC",
      name: "Oceania",
      value: 1493,
      latitude: -25,
      longitude: 133,
      color: am5.color(0xffc107)
    }, {
      id: "AF",
      name: "Africa",
      value: 514,
      latitude: 1,
      longitude: 17,
      color: am5.color(0xdc3545)
    }];
    var totalValue = data.reduce((sum, item) => sum + item.value, 0);
    data.forEach(item => {
      item.percent = (item.value / totalValue * 100).toFixed(1);
    });
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
    bubbleSeries.bullets.push(function (root, series, dataItem) {
      var container = am5.Container.new(root, {});
      var circle = container.children.push(am5.Circle.new(root, {
        radius: 35,
        fillOpacity: 0.9,
        fill: dataItem.dataContext.color,
        tooltipText: `{name}: [bold]{percent} %[/]`,
        cursorOverStyle: "pointer"
      }));
      circle.set("tooltip", am5.Tooltip.new(root, {}));
      circle.get("tooltip").label.setAll({
        fontSize: 20,
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
          textAlign: "center"
        }),
        dynamic: true
      });
    });
    bubbleSeries.data.setAll(data);
  });

  /***/
})

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
    /******/
}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
    /******/
};
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/
}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
  /******/
})();
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

  /******/ }) ()
  ;
//# sourceMappingURL=main.js.map
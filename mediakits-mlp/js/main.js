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
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_current_year_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/current-year.js */ "./src/js/components/current-year.js");
/* harmony import */ var _components_footer_accrodion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer-accrodion.js */ "./src/js/components/footer-accrodion.js");





// import './components/audience.js';
// import './components/map.js';
// import './components/calendar-slider.js';
// import './components/modal.js';

// import './components/tabs.js';
// import './components/website-map.js';
// import './components/audience-map.js';

// import './components/audio.js';


/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.querySelectorAll('.accordion').forEach(accordion => {
  const items = accordion.querySelectorAll('.accordion__item');
  items.forEach(item => {
    const header = item.querySelector('.accordion__header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');
      items.forEach(i => i.classList.remove('is-active'));
      if (!isActive) {
        item.classList.add('is-active');
      }
    });
  });
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
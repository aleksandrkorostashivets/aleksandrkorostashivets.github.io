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
/* harmony import */ var _components_fixed_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fixed-header.js */ "./src/js/components/fixed-header.js");
/* harmony import */ var _components_cokkie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cokkie.js */ "./src/js/components/cokkie.js");
/* harmony import */ var _components_disable_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/disable-scroll.js */ "./src/js/components/disable-scroll.js");
/* harmony import */ var _components_enable_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enable-scroll.js */ "./src/js/components/enable-scroll.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/preloader.js */ "./src/js/components/preloader.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/slider.js */ "./src/js/components/slider.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_modal_form_vavidation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal-form-vavidation.js */ "./src/js/components/modal-form-vavidation.js");
/* harmony import */ var _components_contact_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact-form.js */ "./src/js/components/contact-form.js");
/* harmony import */ var _components_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/replace.js */ "./src/js/components/replace.js");













/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 200,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom'
  });
});

/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Burger Menu
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.querySelector('.page__body');
burger?.addEventListener('click', () => {
  body.classList.toggle('dis-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});
navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('dis-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
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

/***/ "./src/js/components/contact-form.js":
/*!*******************************************!*\
  !*** ./src/js/components/contact-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        showThankYouPopup();
        document.getElementById("contactForm").reset();
      } else {
        console.error("Request failed. Status: " + xhr.status + ", Response: " + xhr.responseText);
      }
    }
  };
  xhr.onerror = function () {
    console.error("Network error occurred during XHR request.");
  };
  var formData = new FormData(document.getElementById("contactForm"));
  xhr.send(new URLSearchParams(formData).toString());
});
function showThankYouPopup() {
  var overlay = document.getElementById("overlay");
  var thankYouPopup = document.getElementById("thankYouPopup");
  overlay.style.display = "block";
  thankYouPopup.style.display = "block";
}
function closePopup() {
  var overlay = document.getElementById("overlay");
  var thankYouPopup = document.getElementById("thankYouPopup");
  overlay.style.display = "none";
  thankYouPopup.style.display = "none";
}
function validateForm() {
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var isValid = true;
  nameInput.classList.remove("invalid-input");
  phoneInput.classList.remove("invalid-input");
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("invalid-input");
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  }
  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("invalid-input");
    document.getElementById("phoneError").innerHTML = "Phone is required";
    isValid = false;
  }
  return isValid;
}
document.getElementById("closeButton").addEventListener("click", closePopup);

/***/ }),

/***/ "./src/js/components/disable-scroll.js":
/*!*********************************************!*\
  !*** ./src/js/components/disable-scroll.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll.js */ "./src/js/functions/disable-scroll.js");
// Реализация остановки скролла (не забудьте вызвать функцию)

(0,_functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();

/***/ }),

/***/ "./src/js/components/enable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/components/enable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/enable-scroll.js */ "./src/js/functions/enable-scroll.js");

(0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.enableScroll)();

/***/ }),

/***/ "./src/js/components/fixed-header.js":
/*!*******************************************!*\
  !*** ./src/js/components/fixed-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Скролл вниз
    header.classList.add('header--hidden');
  } else {
    // Скролл вверх
    header.classList.remove('header--hidden');
  }
  lastScrollY = window.scrollY;
});
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (event) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      const headerHeight = header.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/***/ }),

/***/ "./src/js/components/modal-form-vavidation.js":
/*!****************************************************!*\
  !*** ./src/js/components/modal-form-vavidation.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
let scrollPosition = 0;
document.querySelectorAll(".openPopupBtn").forEach(button => {
  button.addEventListener("click", function () {
    scrollPosition = window.scrollY;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add("dis-scroll");
    document.getElementById("popup").classList.add("show");
    document.querySelector(".popup-content").classList.add("show");
  });
});
document.querySelector(".close").addEventListener("click", function () {
  closePopup();
});
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popup")) {
    closePopup();
  }
});
function closePopup() {
  document.querySelector(".popup-content").classList.remove("show");
  document.getElementById("popup").classList.remove("show");
  document.body.classList.add("disable-scroll");
  setTimeout(function () {
    document.body.classList.remove("dis-scroll");
    document.body.classList.remove("disable-scroll");
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    document.getElementById("modalForm").reset();
    document.getElementById("thankYouMessage").classList.add("hidden");
    document.getElementById("modalForm").style.display = "block";
  }, 300);
}
document.getElementById("modalForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "modal-email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("modalForm").classList.remove("show");
      setTimeout(function () {
        document.getElementById("modalForm").style.display = "none";
        document.getElementById("thankYouMessage").classList.remove("hidden");
      }, 300);
    }
  };
  var formData = new FormData(document.getElementById("modalForm"));
  xhr.send(new URLSearchParams(formData).toString());
});
function validateForm() {
  var nameInput = document.getElementById("modalName");
  var phoneInput = document.getElementById("modalPhone");
  var isValid = true;
  nameInput.classList.remove("invalid-input");
  phoneInput.classList.remove("invalid-input");
  document.getElementById("modalNameError").innerHTML = "";
  document.getElementById("modalPhoneError").innerHTML = "";
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("invalid-input");
    document.getElementById("modalNameError").innerHTML = "Name is required";
    isValid = false;
  }
  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("invalid-input");
    document.getElementById("modalPhoneError").innerHTML = "Phone is required";
    isValid = false;
  }
  return isValid;
}

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    // Показываем прелоадер, пока страница загружается
    document.getElementById('loader-wrapper').style.display = 'flex';
    document.querySelector('.site-container').classList.add('site-container--hidden');
  } else {
    // Скрываем прелоадер и показываем контент после полной загрузки страницы
    document.getElementById('loader-wrapper').style.display = 'none';
    document.querySelector('.site-container').classList.remove('site-container--hidden');
  }
};

/***/ }),

/***/ "./src/js/components/replace.js":
/*!**************************************!*\
  !*** ./src/js/components/replace.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var aboutSwiper = new Swiper(".why-us__slider", {
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");
      tabs.forEach(tab => {
        tab.classList.remove("active");
      });
      tabContents.forEach(content => {
        content.classList.remove("active");
        if (content.getAttribute("data-tab") === targetTab) {
          content.classList.add("active");
        }
      });
      tab.classList.add("active");
    });
  });

  // Открытие первого таба при загрузке страницы
  tabs[0].click();
});

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
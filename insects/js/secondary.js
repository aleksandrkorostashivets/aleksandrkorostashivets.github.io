/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  let accordion = new Accordion('.service-accordion', {
    duration: 200,
    elementClass: 'service-accordion__item',
    triggerClass: 'service-accordion__top',
    panelClass: 'service-accordion__bottom'
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
  xhr.open("POST", "/wp-content/themes/maiditcleaner/email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  console.log("Sending data to server...");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 && xhr.responseText.trim() == "success") {
        window.location.href = '/success';
      } else {
        console.log("Failed to send email: " + xhr.responseText);
      }
    }
  };
  var formData = new FormData(document.getElementById("fcontactForm"));
  xhr.send(new URLSearchParams(formData).toString());
});
function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var PhoneInput = document.getElementById("phone");
  var Consent = document.getElementById("consent");
  var isValid = true;
  nameInput.classList.remove("invalid-input");
  emailInput.classList.remove("invalid-input");
  PhoneInput.classList.remove("invalid-input");
  Consent.classList.remove("invalid-input");
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("consentError").innerHTML = "";
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("invalid-input");
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  }
  if (PhoneInput.value.trim() === "") {
    PhoneInput.classList.add("invalid-input");
    document.getElementById("phoneError").innerHTML = "Phone is required";
    isValid = false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add("invalid-input");
    emailInput.value = "";
    document.getElementById("emailError").innerHTML = "Invalid Email";
    isValid = false;
  }
  if (!Consent.checked) {
    Consent.classList.add("invalid-input");
    document.getElementById("consentError").innerHTML = "Consent is required";
    isValid = false;
  }
  return isValid;
}

/***/ }),

/***/ "./src/js/components/custom-select.js":
/*!********************************************!*\
  !*** ./src/js/components/custom-select.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

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
    header.classList.add('hidden');
  } else {
    // Скролл вверх
    header.classList.remove('hidden');
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

/***/ "./src/js/components/hidden-input.js":
/*!*******************************************!*\
  !*** ./src/js/components/hidden-input.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const inputs = document.querySelectorAll('.form__input');
const icons = document.querySelectorAll('.form__input-icon');
inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    icons[index].classList.add('hidden');
  });
  input.addEventListener('blur', () => {
    if (!input.value) {
      icons[index].classList.remove('hidden');
    }
  });
  input.addEventListener('input', () => {
    if (!input.value) {
      icons[index].classList.remove('hidden');
    } else {
      icons[index].classList.add('hidden');
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
/*!*****************************!*\
  !*** ./src/js/secondary.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");
/* harmony import */ var _components_cokkie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cokkie.js */ "./src/js/components/cokkie.js");
/* harmony import */ var _components_disable_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/disable-scroll.js */ "./src/js/components/disable-scroll.js");
/* harmony import */ var _components_enable_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/enable-scroll.js */ "./src/js/components/enable-scroll.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/preloader.js */ "./src/js/components/preloader.js");
/* harmony import */ var _components_custom_select_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-select.js */ "./src/js/components/custom-select.js");
/* harmony import */ var _components_hidden_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hidden-input.js */ "./src/js/components/hidden-input.js");
/* harmony import */ var _components_fixed_header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fixed-header.js */ "./src/js/components/fixed-header.js");
/* harmony import */ var _components_contact_form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-form.js */ "./src/js/components/contact-form.js");










})();

/******/ })()
;
//# sourceMappingURL=secondary.js.map
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

/***/ "./src/js/components/aos.js":
/*!**********************************!*\
  !*** ./src/js/components/aos.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const isMobile = window.innerWidth < 768;
AOS.init({
  offset: 120,
  once: true,
  duration: 1100,
  disable: isMobile
});
window.addEventListener('resize', function () {
  const newIsMobile = window.innerWidth < 768;
  if (newIsMobile !== isMobile) {
    AOS.refresh();
  }
});

/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.querySelector('.page__body');
burger?.addEventListener('click', event => {
  body.classList.toggle('dis-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});
navItems.forEach(el => {
  el.addEventListener('click', event => {
    body.classList.remove('dis-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    const targetId = el.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
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
// Contact form
var popup = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  console.log("Sending data to server...");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("Response received from server:", xhr.responseText);
      popup.style.display = "block";
      document.getElementById("contactForm").reset();
    }
  };
  var formData = new FormData(document.getElementById("contactForm"));
  xhr.send(new URLSearchParams(formData).toString());
});
span.onclick = function () {
  popup.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var message = document.getElementById("message");
  var consent = document.getElementById("consent");
  var isValid = true;
  nameInput.classList.remove("invalid-input");
  emailInput.classList.remove("invalid-input");
  phoneInput.classList.remove("invalid-input");
  consent.classList.remove("invalid-input");
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("consentError").innerHTML = "";
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
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add("invalid-input");
    emailInput.value = "";
    document.getElementById("emailError").innerHTML = "Invalid Email";
    isValid = false;
  }
  if (!consent.checked) {
    consent.classList.add("invalid-input");
    document.getElementById("consentError").innerHTML = "Consent is required";
    isValid = false;
  }
  return isValid;
}

/***/ }),

/***/ "./src/js/components/counter.js":
/*!**************************************!*\
  !*** ./src/js/components/counter.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var scrolled = false;
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  checkViewport();
});
function onScroll() {
  checkViewport();
}
function checkViewport() {
  if (!scrolled && isInViewport(document.querySelector('.features__list'))) {
    scrolled = true;
    animateCounters();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  }
}
function animateCounters() {
  var counters = document.querySelectorAll('.number');
  counters.forEach(function (counter) {
    var value = parseInt(counter.getAttribute('data-value'));
    var duration = 2000; // Duration for the counter animation (in milliseconds)
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var increment = Math.floor(value * (progress / duration));
      counter.textContent = increment.toLocaleString();
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        counter.textContent = value.toLocaleString();
      }
    }
    window.requestAnimationFrame(step);
  });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
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

/***/ "./src/js/components/first-form.js":
/*!*****************************************!*\
  !*** ./src/js/components/first-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Contact form
var popup = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];
document.getElementById("first-form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "first-form-email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  console.log("Sending data to server...");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("Response received from server:", xhr.responseText);
      popup.style.display = "block";
      document.getElementById("first-form").reset();
    }
  };
  var formData = new FormData(document.getElementById("first-form"));
  xhr.send(new URLSearchParams(formData).toString());
});
span.onclick = function () {
  popup.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
function validateForm() {
  var firstNameInput = document.getElementById("firstFormName");
  var firstEmailInput = document.getElementById("firstFormEmail");
  var firstPhoneInput = document.getElementById("firstFormPhone");
  var firstConsent = document.getElementById("firstConsent");
  var isValid = true;
  firstNameInput.classList.remove("invalid-input");
  firstEmailInput.classList.remove("invalid-input");
  firstPhoneInput.classList.remove("invalid-input");
  firstConsent.classList.remove("invalid-input");
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("firstEmailError").innerHTML = "";
  document.getElementById("firstPhoneError").innerHTML = "";
  document.getElementById("firstConsentError").innerHTML = "";
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("invalid-input");
    document.getElementById("firstNameError").innerHTML = "Name is required";
    isValid = false;
  }
  if (firstPhoneInput.value.trim() === "") {
    firstPhoneInput.classList.add("invalid-input");
    document.getElementById("firstPhoneError").innerHTML = "Phone is required";
    isValid = false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(firstEmailInput.value.trim())) {
    firstEmailInput.classList.add("invalid-input");
    firstEmailInput.value = "";
    document.getElementById("firstEmailError").innerHTML = "Invalid Email";
    isValid = false;
  }
  if (!firstConsent.checked) {
    firstConsent.classList.add("invalid-input");
    document.getElementById("firstConsentError").innerHTML = "Consent is required";
    isValid = false;
  }
  return isValid;
}

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

/***/ "./src/js/components/header-height.js":
/*!********************************************!*\
  !*** ./src/js/components/header-height.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHeaderHeight: () => (/* binding */ getHeaderHeight)
/* harmony export */ });
const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
};

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

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map', {
    center: [43.651070, -79.347015],
    zoom: 10,
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  const locations = {
    "Downtown": [43.6548, -79.3883],
    "North York": [43.7711, -79.4136],
    "Midtown": [43.6978, -79.3974],
    "East York": [43.6896, -79.3297],
    "Etobicoke": [43.6541, -79.5671],
    "Scarborough": [43.7731, -79.2578],
    "Vaughan": [43.8563, -79.5085],
    "Toronto": [43.651070, -79.347015],
    "Newmarket": [44.0592, -79.4613],
    "Ajax": [43.8509, -79.0204],
    "Oakville": [43.4675, -79.6877],
    "Mississauga": [43.5890, -79.6441],
    "Milton": [43.5183, -79.8774],
    "Barrie": [44.3894, -79.6903]
  };
  const markers = {};
  for (const [location, coords] of Object.entries(locations)) {
    const icon = L.icon({
      iconUrl: '../img/pin.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });
    const marker = L.marker(coords, {
      icon
    }).addTo(map).bindPopup(location);
    markers[location] = marker;
  }
  document.querySelectorAll('.area__item').forEach(item => {
    item.addEventListener('click', () => {
      const location = item.getAttribute('data-location');
      const marker = markers[location];
      if (marker) {
        const currentIcon = marker.getIcon();
        const newIcon = L.icon({
          iconUrl: '../img/pin.png',
          iconSize: [currentIcon.options.iconSize[0] * 1.5, currentIcon.options.iconSize[1] * 1.5],
          iconAnchor: [currentIcon.options.iconAnchor[0] * 1.5, currentIcon.options.iconAnchor[1] * 1.5],
          popupAnchor: [currentIcon.options.popupAnchor[0], currentIcon.options.popupAnchor[1] * 1.5]
        });
        marker.setIcon(newIcon);
        map.setView(marker.getLatLng(), map.getZoom());
      }
    });
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

/***/ "./src/js/components/resize-slider.js":
/*!********************************************!*\
  !*** ./src/js/components/resize-slider.js ***!
  \********************************************/
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
  resizableSwiper('(max-width: 600px)', '.services__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    freeMode: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".services__nav-btn--next",
      prevEl: ".services__nav-btn--prev"
    }
  });
});

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var swiper = new Swiper(".reviews__slider", {
  pagination: {
    el: '.custom-progressbar',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return '<div class="' + progressbarFillClass + ' custom-progress"></div>';
    }
  },
  navigation: {
    nextEl: ".reviews__nav-btn--next",
    prevEl: ".reviews__nav-btn--prev"
  },
  slidesPerView: 1,
  spaceBetween: 15,
  effect: "slide",
  rewind: true,
  speed: 500,
  breakpoints: {
    550: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 4.5,
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});
var aboutSwiper = new Swiper(".about__slider", {
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: ".about__nav-btn--next",
    prevEl: ".about__nav-btn--prev"
  },
  breakpoints: {
    768: {
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      }
    }
  }
});
var allSwiper = new Swiper(".all__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  effect: "slide",
  rewind: true,
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".all--next"),
    prevEl: document.querySelector(".all--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        allSwiper.params.slidesPerView = 2.4;
        allSwiper.params.slidesPerColumn = 1;
        allSwiper.params.slidesPerGroup = 1;
      } else {
        allSwiper.params.slidesPerView = 1.1;
        allSwiper.params.slidesPerColumn = 1;
        allSwiper.params.slidesPerGroup = 1;
      }
      allSwiper.init();
    }
  }
});
var bnbSwiper = new Swiper(".bnb__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  rewind: true,
  effect: "slide",
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".bnb--next"),
    prevEl: document.querySelector(".bnb--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        bnbSwiper.params.slidesPerView = 2.4;
        bnbSwiper.params.slidesPerColumn = 1;
        bnbSwiper.params.slidesPerGroup = 1;
      } else {
        bnbSwiper.params.slidesPerView = 1.1;
        bnbSwiper.params.slidesPerColumn = 1;
        bnbSwiper.params.slidesPerGroup = 1;
      }
      bnbSwiper.init();
    }
  }
});
var leaningSwiper = new Swiper(".leaning__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  rewind: true,
  effect: "slide",
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".leaning--next"),
    prevEl: document.querySelector(".leaning--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        leaningSwiper.params.slidesPerView = 2.4;
        leaningSwiper.params.slidesPerColumn = 1;
        leaningSwiper.params.slidesPerGroup = 1;
      } else {
        leaningSwiper.params.slidesPerView = 1.1;
        leaningSwiper.params.slidesPerColumn = 1;
        leaningSwiper.params.slidesPerGroup = 1;
      }
      leaningSwiper.init();
    }
  }
});
var upholsterySwiper = new Swiper(".upholstery__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  rewind: true,
  effect: "slide",
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".upholstery--next"),
    prevEl: document.querySelector(".upholstery--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        upholsterySwiper.params.slidesPerView = 2.4;
        upholsterySwiper.params.slidesPerColumn = 1;
        upholsterySwiper.params.slidesPerGroup = 1;
      } else {
        upholsterySwiper.params.slidesPerView = 1.1;
        upholsterySwiper.params.slidesPerColumn = 1;
        upholsterySwiper.params.slidesPerGroup = 1;
      }
      upholsterySwiper.init();
    }
  }
});
var windowSwiper = new Swiper(".window__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  rewind: true,
  effect: "slide",
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".window--next"),
    prevEl: document.querySelector(".window--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        windowSwiper.params.slidesPerView = 2.4;
        windowSwiper.params.slidesPerColumn = 1;
        windowSwiper.params.slidesPerGroup = 1;
      } else {
        windowSwiper.params.slidesPerView = 1.1;
        windowSwiper.params.slidesPerColumn = 1;
        windowSwiper.params.slidesPerGroup = 1;
      }
      windowSwiper.init();
    }
  }
});
var balconySwiper = new Swiper(".balcony__slider", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  freeMode: true,
  rewind: true,
  effect: "slide",
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: document.querySelector(".balcony--next"),
    prevEl: document.querySelector(".balcony--prev")
  },
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        balconySwiper.params.slidesPerView = 2.4;
        balconySwiper.params.slidesPerColumn = 1;
        balconySwiper.params.slidesPerGroup = 1;
      } else {
        balconySwiper.params.slidesPerView = 1.1;
        balconySwiper.params.slidesPerColumn = 1;
        balconySwiper.params.slidesPerGroup = 1;
      }
      balconySwiper.init();
    }
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
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/preloader.js */ "./src/js/components/preloader.js");
/* harmony import */ var _components_disable_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/disable-scroll.js */ "./src/js/components/disable-scroll.js");
/* harmony import */ var _components_enable_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/enable-scroll.js */ "./src/js/components/enable-scroll.js");
/* harmony import */ var _components_fixed_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fixed-header.js */ "./src/js/components/fixed-header.js");
/* harmony import */ var _components_header_height_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header-height.js */ "./src/js/components/header-height.js");
/* harmony import */ var _components_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/counter.js */ "./src/js/components/counter.js");
/* harmony import */ var _components_resize_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/resize-slider.js */ "./src/js/components/resize-slider.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/slider.js */ "./src/js/components/slider.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_hidden_input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hidden-input.js */ "./src/js/components/hidden-input.js");
/* harmony import */ var _components_custom_select_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/custom-select.js */ "./src/js/components/custom-select.js");
/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/map.js */ "./src/js/components/map.js");
/* harmony import */ var _components_aos_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/aos.js */ "./src/js/components/aos.js");
/* harmony import */ var _components_first_form_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/first-form.js */ "./src/js/components/first-form.js");
/* harmony import */ var _components_contact_form_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact-form.js */ "./src/js/components/contact-form.js");
/* harmony import */ var _components_cokkie_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cokkie.js */ "./src/js/components/cokkie.js");


// import './components/active-link.js';















})();

/******/ })()
;
//# sourceMappingURL=main.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendor/accordion-vendor.js":
/*!*******************************************!*\
  !*** ./src/js/vendor/accordion-vendor.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


!function (e) {
  var t = 0,
    n = function e(n, i) {
      var s = this,
        o = this,
        r = !1;
      if (Array.isArray(n)) return !!n.length && n.map(function (t) {
        return new e(t, i);
      });
      var a = {
        init: function () {
          this.options = Object.assign({
            duration: 600,
            ariaEnabled: !0,
            collapse: !0,
            showMultiple: !1,
            onlyChildNodes: !0,
            openOnInit: [],
            elementClass: "ac",
            triggerClass: "ac-trigger",
            panelClass: "ac-panel",
            activeClass: "is-active",
            beforeOpen: function () {},
            onOpen: function () {},
            beforeClose: function () {},
            onClose: function () {}
          }, i);
          var e = "string" == typeof n;
          this.container = e ? document.querySelector(n) : n, this.createDefinitions(), o.attachEvents();
        },
        createDefinitions: function () {
          var e = this,
            n = this.options,
            i = n.elementClass,
            s = n.openOnInit,
            o = n.onlyChildNodes ? this.container.childNodes : this.container.querySelectorAll(".".concat(i));
          this.elements = Array.from(o).filter(function (e) {
            return e.classList && e.classList.contains(i);
          }), this.firstElement = this.elements[0], this.lastElement = this.elements[this.elements.length - 1], this.elements.filter(function (e) {
            return !e.classList.contains("js-enabled");
          }).forEach(function (n) {
            n.classList.add("js-enabled"), e.generateIDs(n), e.setARIA(n), e.setTransition(n);
            var i = e.elements.indexOf(n);
            t++, s.includes(i) ? e.showElement(n, !1) : e.closeElement(n, !1);
          });
        },
        setTransition: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.options,
            i = n.duration,
            s = n.panelClass,
            o = e.querySelector(".".concat(s)),
            r = c("transitionDuration");
          o.style[r] = t ? null : "".concat(i, "ms");
        },
        generateIDs: function (e) {
          var n = this.options,
            i = n.triggerClass,
            s = n.panelClass,
            o = e.querySelector(".".concat(i)),
            r = e.querySelector(".".concat(s));
          e.setAttribute("id", "ac-".concat(t)), o.setAttribute("id", "ac-trigger-".concat(t)), r.setAttribute("id", "ac-panel-".concat(t));
        },
        removeIDs: function (e) {
          var t = this.options,
            n = t.triggerClass,
            i = t.panelClass,
            s = e.querySelector(".".concat(n)),
            o = e.querySelector(".".concat(i));
          e.removeAttribute("id"), s.removeAttribute("id"), o.removeAttribute("id");
        },
        setARIA: function (e) {
          var n = this.options,
            i = n.ariaEnabled,
            s = n.triggerClass,
            o = n.panelClass;
          if (i) {
            var r = e.querySelector(".".concat(s)),
              a = e.querySelector(".".concat(o));
            r.setAttribute("role", "button"), r.setAttribute("aria-controls", "ac-panel-".concat(t)), r.setAttribute("aria-disabled", !1), r.setAttribute("aria-expanded", !1), a.setAttribute("role", "region"), a.setAttribute("aria-labelledby", "ac-trigger-".concat(t));
          }
        },
        updateARIA: function (e, t) {
          var n = t.ariaExpanded,
            i = t.ariaDisabled,
            s = this.options,
            o = s.ariaEnabled,
            r = s.triggerClass;
          if (o) {
            var a = e.querySelector(".".concat(r));
            a.setAttribute("aria-expanded", n), a.setAttribute("aria-disabled", i);
          }
        },
        removeARIA: function (e) {
          var t = this.options,
            n = t.ariaEnabled,
            i = t.triggerClass,
            s = t.panelClass;
          if (n) {
            var o = e.querySelector(".".concat(i)),
              r = e.querySelector(".".concat(s));
            o.removeAttribute("role"), o.removeAttribute("aria-controls"), o.removeAttribute("aria-disabled"), o.removeAttribute("aria-expanded"), r.removeAttribute("role"), r.removeAttribute("aria-labelledby");
          }
        },
        focus: function (e, t) {
          e.preventDefault();
          var n = this.options.triggerClass;
          t.querySelector(".".concat(n)).focus();
        },
        focusFirstElement: function (e) {
          this.focus(e, this.firstElement), this.currFocusedIdx = 0;
        },
        focusLastElement: function (e) {
          this.focus(e, this.lastElement), this.currFocusedIdx = this.elements.length - 1;
        },
        focusNextElement: function (e) {
          var t = this.currFocusedIdx + 1;
          if (t > this.elements.length - 1) return this.focusFirstElement(e);
          this.focus(e, this.elements[t]), this.currFocusedIdx = t;
        },
        focusPrevElement: function (e) {
          var t = this.currFocusedIdx - 1;
          if (t < 0) return this.focusLastElement(e);
          this.focus(e, this.elements[t]), this.currFocusedIdx = t;
        },
        showElement: function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            i = n.panelClass,
            s = n.activeClass,
            o = n.collapse,
            r = n.beforeOpen,
            a = e.querySelector(".".concat(i)),
            c = a.scrollHeight;
          e.classList.add(s), t && r(e), requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              a.style.height = t ? "".concat(c, "px") : "auto";
            });
          }), this.updateARIA(e, {
            ariaExpanded: !0,
            ariaDisabled: !o
          });
        },
        closeElement: function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            i = n.panelClass,
            s = n.activeClass,
            o = n.beforeClose,
            r = e.querySelector(".".concat(i)),
            a = r.scrollHeight;
          e.classList.remove(s), t ? (o(e), requestAnimationFrame(function () {
            r.style.height = "".concat(a, "px"), requestAnimationFrame(function () {
              r.style.height = 0;
            });
          }), this.updateARIA(e, {
            ariaExpanded: !1,
            ariaDisabled: !1
          })) : r.style.height = 0;
        },
        toggleElement: function (e) {
          var t = this.options,
            n = t.activeClass,
            i = t.collapse,
            s = e.classList.contains(n);
          if (!s || i) return s ? this.closeElement(e) : this.showElement(e);
        },
        closeElements: function () {
          var e = this,
            t = this.options,
            n = t.activeClass;
          t.showMultiple || this.elements.forEach(function (t, i) {
            t.classList.contains(n) && i !== e.currFocusedIdx && e.closeElement(t);
          });
        },
        handleClick: function (e) {
          var t = this,
            n = e.currentTarget;
          this.elements.forEach(function (i, s) {
            i.contains(n) && "A" !== e.target.nodeName && (t.currFocusedIdx = s, t.closeElements(), t.focus(e, i), t.toggleElement(i));
          });
        },
        handleKeydown: function (e) {
          var t = 38,
            n = 40,
            i = 36,
            s = 35;
          switch (e.keyCode) {
            case t:
              return this.focusPrevElement(e);
            case n:
              return this.focusNextElement(e);
            case i:
              return this.focusFirstElement(e);
            case s:
              return this.focusLastElement(e);
            default:
              return null;
          }
        },
        handleTransitionEnd: function (e) {
          if ("height" === e.propertyName) {
            var t = this.options,
              n = t.onOpen,
              i = t.onClose,
              s = e.currentTarget,
              o = parseInt(s.style.height),
              r = this.elements.find(function (e) {
                return e.contains(s);
              });
            o > 0 ? (s.style.height = "auto", n(r)) : i(r);
          }
        }
      };
      this.attachEvents = function () {
        if (!r) {
          var e = a.options,
            t = e.triggerClass,
            n = e.panelClass;
          a.handleClick = a.handleClick.bind(a), a.handleKeydown = a.handleKeydown.bind(a), a.handleTransitionEnd = a.handleTransitionEnd.bind(a), a.elements.forEach(function (e) {
            var i = e.querySelector(".".concat(t)),
              s = e.querySelector(".".concat(n));
            i.addEventListener("click", a.handleClick), i.addEventListener("keydown", a.handleKeydown), s.addEventListener("webkitTransitionEnd", a.handleTransitionEnd), s.addEventListener("transitionend", a.handleTransitionEnd);
          }), r = !0;
        }
      }, this.detachEvents = function () {
        if (r) {
          var e = a.options,
            t = e.triggerClass,
            n = e.panelClass;
          a.elements.forEach(function (e) {
            var i = e.querySelector(".".concat(t)),
              s = e.querySelector(".".concat(n));
            i.removeEventListener("click", a.handleClick), i.removeEventListener("keydown", a.handleKeydown), s.removeEventListener("webkitTransitionEnd", a.handleTransitionEnd), s.removeEventListener("transitionend", a.handleTransitionEnd);
          }), r = !1;
        }
      }, this.toggle = function (e) {
        var t = a.elements[e];
        t && a.toggleElement(t);
      }, this.open = function (e) {
        var t = a.elements[e];
        t && a.showElement(t);
      }, this.openAll = function () {
        a.elements.forEach(function (e) {
          return a.showElement(e, !1);
        });
      }, this.close = function (e) {
        var t = a.elements[e];
        t && a.closeElement(t);
      }, this.closeAll = function () {
        a.elements.forEach(function (e) {
          return a.closeElement(e, !1);
        });
      }, this.destroy = function () {
        s.detachEvents(), s.openAll(), a.elements.forEach(function (e) {
          a.removeIDs(e), a.removeARIA(e), a.setTransition(e, !0);
        }), r = !0;
      }, this.update = function () {
        a.createDefinitions(), s.detachEvents(), s.attachEvents();
      };
      var c = function (e) {
          return "string" == typeof document.documentElement.style[e] ? e : (e = l(e), e = "webkit".concat(e));
        },
        l = function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        };
      a.init();
    };
  "undefined" != typeof module && void 0 !== module.exports ? module.exports = n : e.Accordion = n;
}(window);

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

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
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_accordion_vendor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/accordion-vendor.js */ "./src/js/vendor/accordion-vendor.js");


})();

/******/ })()
;
//# sourceMappingURL=secondary.js.map
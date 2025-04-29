/* ===================================================================
 * Hudson 1.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {
    'use strict';

    /* preloader
     * -------------------------------------------------- */
    const ssPreloader = function() {
        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');

        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader')) {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });
    }; // end ssPreloader

    /* move header
     * -------------------------------------------------- */
    const ssMoveHeader = function() {
        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#intro');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function() {
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function() {
            let loc = window.scrollY;

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }
        });
    }; // end ssMoveHeader

    /* mobile menu
     * ---------------------------------------------------- */
    const ssMobileMenu = function() {
        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const mainNavWrap = document.querySelector('.s-header__nav');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
            link.addEventListener("click", function(event) {
                if (window.matchMedia('(max-width: 900px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
            }
        });
    }; // end ssMobileMenu

    /* highlight active menu link on pagescroll
     * ------------------------------------------------------ */
    const ssScrollSpy = function() {
        const sections = document.querySelectorAll('.target-section');
        if (!sections) return;

        window.addEventListener('scroll', navHighlight);

        function navHighlight() {
            let scrollY = window.pageYOffset;

            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.add('current');
                } else {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.remove('current');
                }
            });
        }
    }; // end ssScrollSpy

    /* smooth scroll
     * ------------------------------------------------------ */
    const ssSmoothScroll = function() {
        const triggers = document.querySelectorAll('.smoothscroll');

        triggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(event) {
                const targetId = this.getAttribute('href');

                if (targetId.startsWith('#')) {
                    event.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }; // end ssSmoothScroll

    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {
        ssPreloader();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssSmoothScroll();
    })();
})(document.documentElement);

document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.cookie-banner__btn');

    setTimeout(() => {
        cookieBanner.classList.add('cookie-banner--visible');
    }, 500);

    acceptBtn.addEventListener('click', () => {
        cookieBanner.classList.remove('cookie-banner--visible');
        localStorage.setItem('cookieAccepted', 'true');
    });

    if (localStorage.getItem('cookieAccepted')) {
        cookieBanner.style.display = 'none';
    }
});

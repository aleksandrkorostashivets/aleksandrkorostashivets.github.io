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

(()=>{var e=document.querySelector(".cookies-infobar"),n=document.querySelector("#cookies-infobar-close"),t=document.querySelector("#false");if(o()){i();return}function i(){e.className=e.classList.value+" cookies-infobar_accepted"}function o(){return"1"===r()}function r(){for(var e="cookieInfoHidden=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1);if(0===i.indexOf(e))return i.substring(e.length,i.length)}return""}function c(e){var n=new Date,t=n.getTime()+864e5*e,i=new Date(n.setTime(t));i=i.toUTCString(),document.cookie="cookieInfoHidden=1; expires="+i+"; path=/"}n.addEventListener("click",function(e){e.preventDefault(),i(),c(7)}),t.addEventListener("click",function(e){e.preventDefault(),i(),c(7)})})();


document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.getElementById('loader-wrapper').style.display = 'flex';
      document.querySelector('.site-container').classList.add('site-container--hidden');
  } else {
      document.getElementById('loader-wrapper').style.display = 'none';
      document.querySelector('.site-container').classList.remove('site-container--hidden');
  }
};


var scrolled = false;

window.addEventListener('scroll', function() {
  if (!scrolled && isInViewport(document.querySelector('.counter__list'))) {
    scrolled = true;
    animateCounters();
  }
});

function animateCounters() {
  var counters = document.querySelectorAll('.number');

  counters.forEach(function(counter) {
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
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

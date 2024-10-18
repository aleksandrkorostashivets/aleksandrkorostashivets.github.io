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

function countdown() {
  const endDate = new Date('2024-11-01T23:59:59').getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Промоцията приключи!";
    }
  }, 1000);
}

countdown();

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.getElementById('loader-wrapper').style.display = 'flex';
    document.querySelector('.site-container').classList.add('site-container--hidden');
  } else {
    document.getElementById('loader-wrapper').style.display = 'none';
    document.querySelector('.site-container').classList.remove('site-container--hidden');
  }
};

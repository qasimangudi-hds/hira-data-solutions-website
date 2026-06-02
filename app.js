/* Hira shared site script — vanilla JS, no libraries.
   Scroll-aware nav, mobile hamburger drawer, scroll-reveal. */
(function () {
  // Scroll-aware nav
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Hamburger menu
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mm-link, .mm-cta').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Mobile services submenu toggle
  var mmToggle = document.getElementById('mmServicesToggle');
  if (mmToggle) {
    mmToggle.addEventListener('click', function () {
      mmToggle.parentElement.classList.toggle('open');
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('in'); }, i * 70);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();

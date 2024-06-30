AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// TYPING ANIMATION
document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.querySelector('.typing');
  const texts = ['Integrity Officer', 'Private Tutor', 'Photographer'];
  let index = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < texts[index].length) {
          textElement.innerHTML += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
      } else {
          setTimeout(erase, 2000);
      }
  }

  function erase() {
      if (charIndex > 0) {
          textElement.innerHTML = texts[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
      } else {
          index = (index + 1) % texts.length;
          setTimeout(type, 500);
      }
  }

  type();
});

// Custom JS for auto-collapsing navbar
document.addEventListener('DOMContentLoaded', function() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var navbarToggler = document.querySelector('.navbar-toggler');
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

  window.addEventListener('scroll', function() {
      if (navbarCollapse.classList.contains('show')) {
          var navbarToggler = document.querySelector('.navbar-toggler');
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      }
  });
});
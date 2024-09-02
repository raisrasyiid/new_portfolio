// efek scrool pada navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});

// Set initial state
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.add("transparent");
  }
});

//   nav.active
// script.js
document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll(".nav-item .nav-link");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all nav items
      navItems.forEach(function (nav) {
        nav.classList.remove("active");
      });

      // Add 'active' class to the clicked nav item
      this.classList.add("active");
    });
  });
});

// loader
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
});

// scroll-to-top
window.addEventListener("scroll", function () {
  var scrollTopButton = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});


// text animation
document.addEventListener('DOMContentLoaded', function () {
  const words = document.querySelectorAll('.cd-words-wrapper b');
  let currentWordIndex = 0;

  function changeWord() {
    const currentWord = words[currentWordIndex];
    const nextWordIndex = (currentWordIndex + 1) % words.length;
    const nextWord = words[nextWordIndex];

    currentWord.classList.remove('is-visible');
    currentWord.classList.add('is-hidden');
    nextWord.classList.remove('is-hidden');
    nextWord.classList.add('is-visible');

    currentWordIndex = nextWordIndex;
  }

  setInterval(changeWord, 2000); // Change word every 2 seconds
});




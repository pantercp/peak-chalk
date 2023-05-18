// Burger Menu

const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navBar.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen = false;
    }
});

// Intersection Animations

const header = document.querySelector("#header");
const sectionOne = document.querySelector(".hero-section");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);

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

// Intersection For Header

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

// Intersection For Fader

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver
  (function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  },
    appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})


// Testimonial Carousel

const testimonials = [
  {
    name: "Reece Cooper",
    job: "Professional Photographer",
    image: "images/chalk.jpg",
    testimonial:
      "What can I say except the best chalk I have ever used, made out of fully compostable packaging and a brilliant local company. If any of you guys are looking for a better alternative to big branded chalk then look no further than Peak Chalk.",
  },
  {
    name: "Kris",
    job: "Climbing Blogger",
    image: "images/chalk.jpg",
    testimonial:
      "It lasts on your hands for a while - that is what I am looking for. If you love super fune chalk like me, this is the right chalk for you.",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "images/chalk.jpg",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image: "images/chalk.jpg",
    testimonial:
      "Sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
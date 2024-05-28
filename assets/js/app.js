// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Functionality Scroll to top
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger menu selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");

// Select nav links
const navLinks = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
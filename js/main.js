const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

// Toggle menu open/close
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  siteNav.classList.toggle("open");
});

// Event delegation: close menu when any nav link is clicked
siteNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    // Check if a link was clicked
    navToggle.classList.remove("active");
    siteNav.classList.remove("open");
  }
});

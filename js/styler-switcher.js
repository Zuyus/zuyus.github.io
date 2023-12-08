// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher On Scroll
const sections = document.querySelectorAll("section");
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open");
    }
  });
}

// Hide Style Switcher On Click Outside
document.addEventListener("click", (e) => {
  if (
    document.querySelector(".style-switcher").classList.contains("open") &&
    !e.target.closest(".style-switcher")
  ) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme Color Switcher
const alternateStyles = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (style.getAttribute("title") === color) {
      style.removeAttribute("disabled");
      localStorage.setItem("theme-color", color);
    } else {
      style.setAttribute("disabled", "True");
    }
  });
};

window.addEventListener("load", () => {
  if (!localStorage.getItem("theme-color")) {
    localStorage.setItem("theme-color", "color-1");
  }
  setActiveStyle(localStorage.getItem("theme-color"));
});

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  if (localStorage.getItem("theme-light-dark") === "dark") {
    localStorage.setItem("theme-light-dark", "light");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  } else {
    localStorage.setItem("theme-light-dark", "dark");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  }
});

window.addEventListener("load", () => {
  if (!localStorage.getItem("theme-light-dark")) {
    localStorage.setItem("theme-light-dark", "light");
  } else {
    document.body.classList.add(localStorage.getItem("theme-light-dark"));
  }
  if (localStorage.getItem("theme-light-dark") === "light") {
    dayNight.querySelector("i").classList.add("fa-moon");
  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});

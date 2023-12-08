// Preloader
const preloader = document.querySelector("#preloader");
const main = document.querySelector(".main");
window.addEventListener("load", () => {
  preloader.classList.add("hide-complete");
  setTimeout(() => {
    main.classList.remove("hidden");
  }, 50);
  setTimeout(() => {
    preloader.remove();
  }, 2500);
});

// Typing Animation
const typed = new Typed(".typing", {
  strings: ["", "Web Developer", "Web Designer", "Admin", "YouTuber"],
  typeSpeed: 75,
  backSpeed: 60,
  loop: true,
});

// Sidebar
const sidebar = document.querySelector(".nav"),
  sidebarList = sidebar.querySelectorAll("li"),
  totalSidebarList = sidebarList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalSidebarList; i++) {
  const a = sidebarList[i].querySelector("a");
  a.addEventListener("click", function () {
    document.title = `DUY Ú DEVELOPER -  ${a.innerText}`;
    removeBackSection();
    for (let j = 0; j < totalSidebarList; j++) {
      if (sidebarList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      sidebarList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    // hide sidebar when click on link
    if (window.innerWidth < 1451) {
      sideSectionTogglerBtn();
    }
  });
}

function showSection(el) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  } // remove active class from all section
  const target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  side = document.querySelector(".side");
navTogglerBtn.addEventListener("click", function () {
  sideSectionTogglerBtn();
});

function sideSectionTogglerBtn() {
  side.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

function addBackSection(num) {
  if (allSection[num]) {
    allSection[num].classList.add("back-section");
  }
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function updateNav(el) {
  for (let i = 0; i < totalSidebarList; i++) {
    sidebarList[i].querySelector("a").classList.remove("active");
    const target = el.getAttribute("href").split("#")[1];
    if (
      target ==
      sidebarList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      sidebarList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
  // hide sidebar when click on link
  if (window.innerWidth < 1451) {
    sideSectionTogglerBtn();
  }
});

document.getElementById("age").innerHTML = new Date().getFullYear() - 1999;

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = function (e) {
  // disable F12 key
  if (e.keyCode == 123) {
    return false;
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  // disable J key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  // disable U key
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
};

let countToJS = document.getElementsByClassName("skill-percent");

const countTo = (number, index, count, deplay) => {
  setTimeout(() => {
    setInterval(() => {
      if (count == number) {
        clearInterval();
      } else {
        count++;
        countToJS[index].innerHTML = count + "%";
      }
    });
  }, deplay);
};

// Progress bar animation
let progressBar = document.getElementsByClassName("progress-in");

const fProgress = (name, index, deplay) => {
  progressBar[
    index
  ].style.animation = `${name} 0.5s linear forwards ${deplay}s`;
};

const downloadURI = (uri, name) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
};

window.addEventListener("load", function () {
  const urlArr = ["home", "about", "project", "social", "contact"];
  url = window.location.href.split("#");

  countTo(76, 0, 0, 1400);
  countTo(70, 1, 0, 1400);
  countTo(95, 2, 0, 1400);
  countTo(95, 3, 0, 1400);

  fProgress("proJS", 0, 1.5);
  fProgress("proNode", 1, 1.5);
  fProgress("proHtml", 2, 1.5);
  fProgress("proCss", 3, 1.5);

  if (urlArr.includes(url[1]) && url.length == 2) {
    showSection(document.querySelector(`a[href="#${url[1]}"]`));
    updateNav(document.querySelector(`a[href="#${url[1]}"]`));
    addBackSection(url[1]);
    removeBackSection();
    const title = url[1].charAt(0).toUpperCase() + url[1].slice(1);
    document.title = `DUY Ú DEVELOPER - ${title}`;
  } else {
    showSection(document.querySelector(`a[href="#home"]`));
    updateNav(document.querySelector(`a[href="#home"]`));
    addBackSection("home");
    removeBackSection();
    this.window.location.href = "#home";
    document.title = `DUY Ú DEVELOPER - Home`;
  }
});

// Card Bank
VanillaTilt.init(document.querySelector(".card-bank"), {
  max: 25,
  speed: 400,
  startX: 12,
  startY: -12,
  glare: true,
  "max-glare": 0.5,
});

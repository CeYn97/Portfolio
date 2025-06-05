function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

var typingEffect = new Typed(".typedText", {
  strings: ["Front-end", "Разработчик"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Giper.fm-project";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event2");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Web-app_Hackaton";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event3");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/daslef/pyramid3d-frontend";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event4");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Weather-app";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event5");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/cardGameFinal";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event6");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Game2048 ";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event7");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/SubmitOrder";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event8");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Cull";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event9");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/IThub-tgbot";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event10");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Frontend-Hackaton";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event11");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/Backend-Hackaton";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const projectBoxes = document.querySelectorAll(".card-event12");
  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      window.location.href = "https://github.com/CeYn97/ithub-assignment-react";
    });
  });
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const a = document.createElement("a");

  a.href = "./Resume.pdf";

  a.download = "Резюме";

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
});

document.getElementById("downloadBtn2").addEventListener("click", function () {
  const a = document.createElement("a");

  a.href = "./Resume.pdf";

  a.download = "Резюме";

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
});

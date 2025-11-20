declare global {
  interface Window {
    myMenuFunction: () => void;
  }

  class Typed {
    constructor(element: string | Element, options: TypedOptions);
  }

  interface TypedOptions {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
  }

  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    reset?: boolean;
    delay?: number;
    interval?: number;
  }

  interface ScrollReveal {
    (options?: ScrollRevealOptions): ScrollReveal;
    reveal(selector: string, options?: ScrollRevealOptions): ScrollReveal;
  }

  const ScrollReveal: ScrollReveal;
}

interface ScrollRevealConfig {
  origin: string;
  distance: string;
  duration: number;
  reset: boolean;
  delay?: number;
  interval?: number;
}

interface TypedConfig {
  strings: string[];
  loop: boolean;
  typeSpeed: number;
  backSpeed: number;
  backDelay: number;
}

const getElementById = <T extends HTMLElement>(id: string): T | null => {
  return document.getElementById(id) as T | null;
};

const querySelectorAll = <T extends Element>(
  selector: string
): NodeListOf<T> => {
  return document.querySelectorAll(selector);
};

const toggleMobileMenu = (): void => {
  const menuBtn = getElementById<HTMLElement>("myNavMenu");
  if (!menuBtn) return;

  const isResponsive = menuBtn.classList.contains("responsive");
  if (isResponsive) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }
};

const handleHeaderShadow = (): void => {
  const navHeader = getElementById<HTMLElement>("header");
  if (!navHeader) return;

  const scrollTop = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );

  if (scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

const initializeTypedEffect = (): void => {
  const typedElement = document.querySelector(".typedText");
  if (!typedElement) return;

  const config: TypedConfig = {
    strings: ["Front-end", "Разработчик"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  };

  new Typed(".typedText", config);
};

const initializeScrollReveal = (): void => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  } as ScrollRevealConfig);

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
  } as ScrollRevealConfig);

  srLeft.reveal(".about-info", { delay: 100 });
  srLeft.reveal(".contact-info", { delay: 100 });

  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  } as ScrollRevealConfig);

  srRight.reveal(".skills-box", { delay: 100 });
  srRight.reveal(".form-control", { delay: 100 });
};

const handleScrollActive = (): void => {
  const sections = querySelectorAll<HTMLElement>("section[id]");
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (!sectionId) return;

    const navLink = document.querySelector(
      `.nav-menu a[href*="${sectionId}"]`
    ) as HTMLElement;
    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
};

const initializeProjectClickHandlers = (): void => {
  const projectBoxes = querySelectorAll<HTMLElement>(".project-box");

  projectBoxes.forEach((box) => {
    const repoUrl = box.getAttribute("data-repo");
    if (repoUrl) {
      box.addEventListener("click", () => {
        window.open(repoUrl, "_blank", "noopener,noreferrer");
      });
    }
  });
};

const initializeDownloadButtons = (): void => {
  const downloadBtn = getElementById<HTMLButtonElement>("downloadBtn");
  const downloadBtn2 = getElementById<HTMLButtonElement>("downloadBtn2");

  const downloadCV = (): void => {
    const link = document.createElement("a");
    link.href = "./Resume.pdf";
    link.download = "Резюме";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  downloadBtn?.addEventListener("click", downloadCV);
  downloadBtn2?.addEventListener("click", downloadCV);
};

const initializeContactForm = (): void => {
  const form = document.querySelector(".form-control");
  const submitBtn = form?.querySelector(".btn") as HTMLButtonElement;

  if (!submitBtn) return;

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = form?.querySelector(
      'input[placeholder="Имя"]'
    ) as HTMLInputElement;
    const emailInput = form?.querySelector(
      'input[placeholder="Email"]'
    ) as HTMLInputElement;
    const messageTextarea = form?.querySelector(
      "textarea"
    ) as HTMLTextAreaElement;

    if (!nameInput || !emailInput || !messageTextarea) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

    if (!name || !email || !message) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const subject = encodeURIComponent("Предложение сотрудничества");
    const body = encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`
    );
    const mailtoLink = `mailto:ceyyyn97@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  });
};

const initializeSmoothScroll = (): void => {
  const navLinks = querySelectorAll<HTMLAnchorElement>(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");

      if (!targetId || !targetId.startsWith("#")) return;

      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (!targetElement) return;

      const headerHeight = 90;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
};

const initializeApp = (): void => {
  initializeTypedEffect();
  initializeScrollReveal();

  initializeProjectClickHandlers();
  initializeDownloadButtons();
  initializeContactForm();
  initializeSmoothScroll();

  window.addEventListener("scroll", handleHeaderShadow);
  window.addEventListener("scroll", handleScrollActive);

  const menuBtn = document.querySelector(".nav-menu-btn i");
  menuBtn?.addEventListener("click", toggleMobileMenu);
};

window.myMenuFunction = toggleMobileMenu;

document.addEventListener("DOMContentLoaded", initializeApp);

export {
  toggleMobileMenu,
  handleHeaderShadow,
  initializeTypedEffect,
  initializeScrollReveal,
  handleScrollActive,
  initializeProjectClickHandlers,
  initializeDownloadButtons,
  initializeContactForm,
  initializeSmoothScroll,
  initializeApp,
};

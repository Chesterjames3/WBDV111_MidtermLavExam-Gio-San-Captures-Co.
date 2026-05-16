// ── Hamburger menu ──
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ── Sticky navbar scroll effect ──
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ── ScrollReveal ──
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", { ...scrollRevealOption, delay: 1500 });

ScrollReveal().reveal(".service__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".blog__content h4", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".blog__content p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".blog__content .blog__btn", { ...scrollRevealOption, delay: 1500 });

// ── Swiper ──
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// ── Instagram scroll duplicate ──
const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// ---- Booking form submission ----
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const dateInput = document.getElementById("bookingDate");
const dateMessage = document.getElementById("dateMessage");

// ── Disable past dates ──
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// ── Check invalid date selection ──
dateInput.addEventListener("change", () => {
  const selectedDate = new Date(dateInput.value);
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  if (selectedDate < todayDate) {
    dateMessage.innerHTML = "❌ Booking is unavailable on past dates.";
    dateMessage.style.color = "red";
    dateInput.value = "";
  } else {
    dateMessage.innerHTML = "";
  }
});

// ── Form submit ──
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedDate = new Date(dateInput.value);
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  // extra safety check
  if (!dateInput.value || selectedDate < todayDate) {
    message.innerHTML = "❌ Please select a valid available date.";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "Booking Submitted!";
  message.style.color = "green";
});

  // ---- FAQ toggle ----
  const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq__question");
  const icon = question.querySelector("span");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

    if(item.classList.contains("active")){
      icon.innerHTML = "−";
    } else {
      icon.innerHTML = "+";
    }

  });

});

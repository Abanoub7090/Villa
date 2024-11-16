let head = document.querySelector("header .head");
let menuIcon = document.querySelector("header .icon");
let accordion = document.querySelectorAll(".accordion .accordion-item");
let select = document.querySelectorAll(".best .btn");
let rooms = document.querySelectorAll(".best .item");
let filter = document.querySelectorAll(".filter span");

filter.forEach((a) => {
  a.addEventListener("click", () => {
    filter.forEach((el) => {
      el.classList.remove("active");
    });
    a.classList.add("active");
  });
});

select.forEach((btn) => {
  btn.addEventListener("click", () => {
    rooms.forEach((room) => {
      room.classList.remove("active");
    });
    select.forEach((el) => {
      el.classList.remove("active");
    });
    for (let room of rooms) {
      if (room.id === btn.id) {
        room.classList.add("active");
        room.classList.add("show");
      }
    }
    btn.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    head.classList.add("active");
  } else {
    head.classList.remove("active");
  }
});
menuIcon.addEventListener("click", () => {
  document.querySelector("header .navbar ul").classList.toggle("active");
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 767) {
    document.querySelector("header .navbar ul").classList.remove("active");
  }
});
accordion.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", {
  // effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

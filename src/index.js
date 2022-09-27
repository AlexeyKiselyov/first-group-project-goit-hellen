import AOS from 'aos';
import 'aos/dist/aos.css';

// скрипт для мобильного меню
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("#page");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    if (!expanded) {
      const header = document.getElementById("header");
      body.classList.add("no-scroll");
      header.classList.remove("header--no-transparency");
    } else {
      body.classList.remove("no-scroll");
      setTimeout(() => {
        changeHeaderBackground();
      },50);
    }
  });

  const linkBtnRef = document.querySelector(".mob-menu__link");
  linkBtnRef.addEventListener("click", () => {
    body.classList.remove("no-scroll");
  });

  const linkBtnLogo = document.querySelector(".logo");
  linkBtnLogo.addEventListener("click", () => {
$("html, body").animate({ 
      scrollTop:0 
    },1000);
  });
})();

//  скрипт для фиксированного полупрозрачного хедера
window.onscroll = () => changeHeaderBackground();


function changeHeaderBackground() {
  const header = document.getElementById("header");
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("header--no-transparency");
  } else {
    header.classList.remove("header--no-transparency");
  }
}

//  скрипт для плавного scroll
 $(document).ready(function(){ 
    $(".nav-scroll").on("click","a", function (event) { 
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
            top = $(id).offset().top; 
      $('body,html').animate({ scrollTop: top }, 1500);
       window.location.hash = id;
      if (document.documentElement.clientWidth >= 1366) return;
      const menuBtnRef = document.querySelector("[data-menu-button]");
      const mobileMenuRef = document.querySelector("[data-menu]");
      const body = document.querySelector("#page");
      const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.remove("no-scroll");
    }); 
 }); 

// Анімації
AOS.init();

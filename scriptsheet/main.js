/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    //   Menu show 

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER CLOTHING ===============*/

let swiperHome = new Swiper('.home_swiper', {
  
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        768:{
            slidesPerView: 3,
            centeredSlides:'auto',
        },
        1152:{
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    }
  
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // reset: true //animation repeat
})
sr.reveal(`.home_swiper, .home_footer`)
sr.reveal(`.home_circle`, {scale:1.5, delay: 300})
sr.reveal(`.home_subcircle`, {scale:1.5, delay: 500})
sr.reveal(`.home_title`, {scale:1,origin:`bottom`, delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin:`bottom`})
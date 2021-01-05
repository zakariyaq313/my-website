// Skill section animation on scroll


// Project carousel
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slideShadows: false,
    navigation: {
      nextEl: '.r_scroll',
      prevEl: '.l_scroll',
    },
})
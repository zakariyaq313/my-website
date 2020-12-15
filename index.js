// Skill section animation on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to("div.skills-container", {
    scrollTrigger: "div.skills-container",
    trigger: "section.section-skills",
    y: 0,
    opacity: 1,
    start: 20
});


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
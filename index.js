// Skill section animation on scroll
gsap.registerPlugin(ScrollTrigger);
gsap.to("div.skills-container", {
    scrollTrigger: "section.section-skills",
    y: 0,
    opacity: 1
});


// Project carousel
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slideShadows: false,
    autoplay: { 
        delay: 4000, 
    },
    navigation: {
      nextEl: '.r_scroll',
      prevEl: '.l_scroll',
    },
})
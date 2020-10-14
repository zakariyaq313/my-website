let menuOpen = document.querySelector("i.menu-open");
let menuClose = document.querySelector("i.menu-close");
let menuBackground = document.querySelector("span.menu-background");
let navbar = document.querySelector("nav.navigation");

menuOpen.addEventListener("click", () => {
    menuOpen.style.transform = "rotate(-90deg)";
    menuBackground.style.transform = "scale(50)";
    navbar.setAttribute("style", "opacity: 1; right: 20%;");

    setTimeout(() => {
        menuOpen.style.opacity = "0";
        menuOpen.style.visibility = "hidden";
        menuClose.setAttribute("style", "visibility: visible; opacity: 1;");
    }, 20);

    setTimeout(() => {
        menuBackground.style.opacity = "0";
    }, 100);
});

menuClose.addEventListener("click", () => {
    menuClose.setAttribute("style", "opacity: 0; visibility: hidden;");
    menuOpen.setAttribute("style", "visibility: visible; opacity: 1; transform: rotate(0);");
    navbar.setAttribute("style", "right: -30%; opacity: 0;");
    menuBackground.setAttribute("style", "transform: scale(0); opacity = 1");
});

let leftScrollButton = document.querySelector("i.l_scroll");
let rightScrollButton = document.querySelector("i.r_scroll");
let projects = document.querySelectorAll("div.project");

rightScrollButton.addEventListener("click", () => {
    projects[0].setAttribute("style", "opacity: 0; display: none;");
    projects[1].setAttribute("style", "display: grid; opacity: 1;");
});

leftScrollButton.addEventListener("click", () => {
    projects[1].setAttribute("style", "opacity: 0; display: none;");
    projects[0].setAttribute("style", "display: grid; opacity: 1;");
});

let skillSection = document.querySelector("div.skills-container");

document.addEventListener("scroll", () => {
    let skillSectionPosition = skillSection.getBoundingClientRect();
    console.log(skillSectionPosition.top);
    console.log(skillSectionPosition.bottom);
    if (skillSectionPosition.top > innerHeight || skillSectionPosition.bottom < 0) {
        skillSection.style.opacity = "0";
    } else {
        skillSection.style.opacity = "1";
    }
});

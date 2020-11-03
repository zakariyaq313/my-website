// Menu button on mobile devices

let menuOpen = document.querySelector("i.menu-open");
let menuClose = document.querySelector("i.menu-close");
let menuBackground = document.querySelector("span.menu-background");
let navbar = document.querySelector("nav.navigation");

function loaded() {
    menuBackground.style.opacity = "1";
    menuOpen.style.opacity = "1";
}

window.onload = loaded;

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
    menuBackground.setAttribute("style", "transform: scale(0); opacity: 1;");
});


// Skill section opacity change on scroll

let skillSection = document.querySelector("div.skills-container");

document.addEventListener("scroll", () => {
    let skillSectionPosition = skillSection.getBoundingClientRect();

    if (skillSectionPosition.top > innerHeight || skillSectionPosition.bottom < 0) {
        skillSection.style.opacity = "0";
    } else {
        skillSection.style.opacity = "1";
    }
});


// Project carousel

let leftScrollButton = document.querySelector("i.l_scroll");
let rightScrollButton = document.querySelector("i.r_scroll");
let projects = document.querySelectorAll("div.project");
let projectCount = 0;

function scrollReset() {
    for (let i = 0; i < projects.length; i++) {
        projects[i].setAttribute("style", "display:none; opacity:0;");
    }
}

function startSlide() {
    scrollReset();
    projects[0].setAttribute("style", "display:grid; opacity: 1;");
}

startSlide();

function scrollRight() {
    scrollReset();
    let currentlyVisible = projects[projectCount + 1];
    currentlyVisible.style.display = "grid";
    setTimeout( () => {
        currentlyVisible.style.opacity = "1";
    }, 100);
    projectCount++;
}

function scrollLeft() {
    scrollReset();
    let currentlyVisible = projects[projectCount - 1];
    currentlyVisible.style.display = "grid";
    setTimeout( () => {
        currentlyVisible.style.opacity = "1";
    }, 100);
    projectCount--;
}

rightScrollButton.addEventListener("click", () => {
    if (projectCount === (projects.length - 1)) {
        projectCount = -1;
    }
    scrollRight();
});

leftScrollButton.addEventListener("click", () => {
    if (projectCount === 0) {
        projectCount = projects.length;
    }
    scrollLeft();
});

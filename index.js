// Skill section animation on scroll

gsap.registerPlugin(ScrollTrigger);
gsap.to("div.skills-container", {
    scrollTrigger: "section.section-skills",
    y: 0,
    opacity: 1
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

(function() {
    scrollReset();
    projects[0].setAttribute("style", "display:grid; opacity: 1;");
})();

(function () {
    "use strict";
    // Menu button toggle
    let menu = document.querySelector("span.menu-button");
    let navbar = document.querySelector("div.navbar");
    menu.addEventListener("click", () => {
        menu.classList.toggle("menu-open");
        navbar.classList.toggle("navbar-open");
    })

    // Skeleton screen for project preview images
    const preloaderImages = document.querySelectorAll("img.project-preview");
    const skeletonScreens = document.querySelectorAll(".skeleton-background");
    skeletonScreens.forEach(element => {
        preloaderImages.forEach(image => {
            image.onload = setTimeout(() => {
                element.classList.remove("skeleton-background");
            }, 1000);
        });
    });

    // Projects show more button toggle
    const projects = document.querySelectorAll(".project");
    const showMoreProjects = document.querySelector(".show-more");
    let screenLarge = window.matchMedia("(min-width: 1201px)");
    let screenSmall = window.matchMedia("(max-width: 1000px)");
    let invisibleProjects = [];

    const hideProjects = (i) => {
        for (i; i < projects.length; i++) {
            invisibleProjects.push(projects[i]);
            invisibleProjects.forEach(project => {
                project.classList.add("hide-project");
            })
        }
    }

    if (screenLarge.matches) {
        hideProjects(4);
    } else if(screenSmall.matches) {
        hideProjects(2);
    } else {
        hideProjects(3);
    }

    showMoreProjects.addEventListener("click", () => {
        showMoreProjects.classList.toggle("projects-visible");
        invisibleProjects.forEach(project => {
            project.classList.toggle("hide-project");
        })
    });

    // const sections = document.querySelectorAll("section");
    // const options = {
    //     rootMargin: "-300px"
    // }
    // const callback = (entries => {
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle("slide-in", entry.isIntersecting);
    //         if (entry.isIntersecting) {
    //             observer.unobserve(entry.target);
    //         }
    //     })
    // })

    // const observer = new IntersectionObserver(callback, options);
    // sections.forEach(section => {
    //     observer.observe(section);
    // })
})();
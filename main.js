(function () {
    "use strict";
    (function () {
        // Menu button toggle
        const menuButton = document.querySelector("span.menu-button");
        const navbar = document.querySelector("div.navbar");
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("menu-open");
            navbar.classList.toggle("navbar-open");
        })
    })();

    (function () {
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
    })();
})();

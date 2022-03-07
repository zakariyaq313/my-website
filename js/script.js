(function () {
    let menu = document.querySelector("span.menu-button");
    let navbar = document.querySelector("div.navbar");
    menu.addEventListener("click", () => {
        menu.classList.toggle("menu-open");
        navbar.classList.toggle("navbar-open");
    })

    const preloaderImages = document.querySelectorAll("img.project-preview");
    const skeletonScreens = document.querySelectorAll("a.skeleton-background");
    skeletonScreens.forEach(element => {
        preloaderImages.forEach(image => {
            image.onload = setTimeout(() => {
                element.classList.remove("skeleton-background");
            }, 2000);
        });
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
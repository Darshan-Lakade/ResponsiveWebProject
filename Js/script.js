const navSlider = () => {
    const navBurger = document.querySelector(".nav-burger");
    const nav = document.querySelector(".main-nav");

    navBurger.addEventListener("click", () => {
        nav.classList.toggle("slider");
    })
}

navSlider();
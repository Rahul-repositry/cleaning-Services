const elementList = Array.from(
    document.querySelectorAll(".section5 .buttons .button")
);
const slideElement = document.querySelector(
    ".section5 .slides .slidesContainer"
);
elementList.forEach((element) => {
    element.addEventListener("click", () => {
        const distanceFromLeft = element.getAttribute("data-value");
        console.log(distanceFromLeft, slideElement);
        slideElement.style.left = `${distanceFromLeft}`;
    });
});

function myFunc() {
    const element = document.querySelector(".lord-home");
    element.classList.toggle("home");
}

const mobileNavElem = document.getElementById("mobile-nav-bar");
const buttonAuraElem = document.getElementById("button-aura");
const exploreButtonElem = document.getElementById("explore-btn");

function toggleMobileNav() {
    mobileNavElem.style.transform = "translateX(0%)";
}

function closeMobileNav() {
    mobileNavElem.style.transform = "translateX(100%)";
}

exploreButtonElem.addEventListener('mouseover', () => {
    buttonAuraElem.style.opacity = "1";
});

exploreButtonElem.addEventListener('mouseout', () => {
    buttonAuraElem.style.opacity = "0";
});

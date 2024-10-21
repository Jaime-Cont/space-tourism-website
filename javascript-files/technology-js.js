const mobileNavElem = document.getElementById("mobile-nav-bar");
const buttonAuraElem = document.getElementById("button-aura");
const techNameElem = document.getElementById("tech-name");
const techDescElem = document.getElementById("tech-description");
const techImageElem = document.getElementById("tech-image");
const tech1ButtonElem = document.getElementById("tech-btn1");
const tech2ButtonElem = document.getElementById("tech-btn2");
const tech3ButtonElem = document.getElementById("tech-btn3");

function toggleMobileNav() {
    mobileNavElem.style.transform = "translateX(0%)";
}

function closeMobileNav() {
    mobileNavElem.style.transform = "translateX(100%)";
}

fetch('../data.json')
.then(res => res.json())
.then(data => {
    techImageElem.style.backgroundImage = "url("+data.technology[0].images.portrait+")";
    techNameElem.innerHTML = data.technology[0].name;
    techDescElem.innerHTML = data.technology[0].description;
    tech1ButtonElem.classList.add('tech-btn-active');
    tech2ButtonElem.classList.remove('tech-btn-active');
    tech3ButtonElem.classList.remove('tech-btn-active');
})

function getTech1Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        techImageElem.style.backgroundImage = "url("+data.technology[0].images.portrait+")";
        techNameElem.innerHTML = data.technology[0].name;
        techDescElem.innerHTML = data.technology[0].description;
        tech1ButtonElem.classList.add('tech-btn-active');
        tech2ButtonElem.classList.remove('tech-btn-active');
        tech3ButtonElem.classList.remove('tech-btn-active');
    })
}

function getTech2Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        techImageElem.style.backgroundImage = "url("+data.technology[1].images.portrait+")";
        techNameElem.innerHTML = data.technology[1].name;
        techDescElem.innerHTML = data.technology[1].description;
        tech1ButtonElem.classList.remove('tech-btn-active');
        tech2ButtonElem.classList.add('tech-btn-active');
        tech3ButtonElem.classList.remove('tech-btn-active');
    })
}

function getTech3Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        techImageElem.style.backgroundImage = "url("+data.technology[2].images.portrait+")";
        techNameElem.innerHTML = data.technology[2].name;
        techDescElem.innerHTML = data.technology[2].description;
        tech1ButtonElem.classList.remove('tech-btn-active');
        tech2ButtonElem.classList.remove('tech-btn-active');
        tech3ButtonElem.classList.add('tech-btn-active');
    })
}
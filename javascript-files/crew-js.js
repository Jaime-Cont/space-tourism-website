const mobileNavElem = document.getElementById("mobile-nav-bar");
const buttonAuraElem = document.getElementById("button-aura");
const crewRoleElem1 = document.getElementById("crew-role1");
const crewRoleElem2 = document.getElementById("crew-role2");
const crewNameElem = document.getElementById("crew-name");
const crewDescElem = document.getElementById("crew-description");
const crewImageElem = document.getElementById("crew-image");
const crew1ButtonElem = document.getElementById("crew-btn1");
const crew2ButtonElem = document.getElementById("crew-btn2");
const crew3ButtonElem = document.getElementById("crew-btn3");
const crew4ButtonElem = document.getElementById("crew-btn4");

function toggleMobileNav() {
    mobileNavElem.style.transform = "translateX(0%)";
}

function closeMobileNav() {
    mobileNavElem.style.transform = "translateX(100%)";
}

fetch('../data.json')
.then(res => res.json())
.then(data => {
    crewImageElem.style.backgroundImage = "linear-gradient(transparent 90%, var(--blue-900) 100%), url("+data.crew[0].images.webp+")";
    crewRoleElem1.innerHTML = data.crew[0].role;
    crewRoleElem2.innerHTML = data.crew[0].role;
    crewNameElem.innerHTML = data.crew[0].name;
    crewDescElem.innerHTML = data.crew[0].bio;
    crew1ButtonElem.classList.add('crew-btn-active');
    crew2ButtonElem.classList.remove('crew-btn-active');
    crew3ButtonElem.classList.remove('crew-btn-active');
    crew4ButtonElem.classList.remove('crew-btn-active');
})

function getCrew1Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        crewImageElem.style.backgroundImage = "linear-gradient(transparent 90%, var(--blue-900) 100%), url("+data.crew[0].images.webp+")";
        crewRoleElem1.innerHTML = data.crew[0].role;
        crewRoleElem2.innerHTML = data.crew[0].role;
        crewNameElem.innerHTML = data.crew[0].name;
        crewDescElem.innerHTML = data.crew[0].bio;
        crew1ButtonElem.classList.add('crew-btn-active');
        crew2ButtonElem.classList.remove('crew-btn-active');
        crew3ButtonElem.classList.remove('crew-btn-active');
        crew4ButtonElem.classList.remove('crew-btn-active');
    })
}

function getCrew2Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        crewImageElem.style.backgroundImage = "linear-gradient(transparent 90%, var(--blue-900) 100%), url("+data.crew[1].images.webp+")";
        crewRoleElem1.innerHTML = data.crew[1].role;
        crewRoleElem2.innerHTML = data.crew[1].role;
        crewNameElem.innerHTML = data.crew[1].name;
        crewDescElem.innerHTML = data.crew[1].bio;
        crew1ButtonElem.classList.remove('crew-btn-active');
        crew2ButtonElem.classList.add('crew-btn-active');
        crew3ButtonElem.classList.remove('crew-btn-active');
        crew4ButtonElem.classList.remove('crew-btn-active');
    })
}

function getCrew3Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        crewImageElem.style.backgroundImage = "linear-gradient(transparent 90%, var(--blue-900) 100%), url("+data.crew[2].images.webp+")";
        crewRoleElem1.innerHTML = data.crew[2].role;
        crewRoleElem2.innerHTML = data.crew[2].role;
        crewNameElem.innerHTML = data.crew[2].name;
        crewDescElem.innerHTML = data.crew[2].bio;
        crew1ButtonElem.classList.remove('crew-btn-active');
        crew2ButtonElem.classList.remove('crew-btn-active');
        crew3ButtonElem.classList.add('crew-btn-active');
        crew4ButtonElem.classList.remove('crew-btn-active');
    })
}

function getCrew4Data() {
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        crewImageElem.style.backgroundImage = "linear-gradient(transparent 90%, var(--blue-900) 100%), url("+data.crew[3].images.webp+")";
        crewRoleElem1.innerHTML = data.crew[3].role;
        crewRoleElem2.innerHTML = data.crew[3].role;
        crewNameElem.innerHTML = data.crew[3].name;
        crewDescElem.innerHTML = data.crew[3].bio;
        crew1ButtonElem.classList.remove('crew-btn-active');
        crew2ButtonElem.classList.remove('crew-btn-active');
        crew3ButtonElem.classList.remove('crew-btn-active');
        crew4ButtonElem.classList.add('crew-btn-active');
    })
}
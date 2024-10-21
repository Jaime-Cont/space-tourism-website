const mobileNavElem = document.getElementById("mobile-nav-bar");
const buttonAuraElem = document.getElementById("button-aura");
const destinationPlanetElem = document.getElementById("destination-planet");
const destinationNameElem = document.getElementById("destination-name");
const destinationDescElem = document.getElementById("destination-description");
const destinationDistElem = document.getElementById("destination-distance");
const destinationTimeElem = document.getElementById("destination-time");
const moonButtonElem = document.getElementById("moon-btn");
const marsButtonElem = document.getElementById("mars-btn");
const europaButtonElem = document.getElementById("europa-btn");
const titanButtonElem = document.getElementById("titan-btn");

function toggleMobileNav() {
    mobileNavElem.style.transform = "translateX(0%)";
}

function closeMobileNav() {
    mobileNavElem.style.transform = "translateX(100%)";
}

fetch('./data.json')
.then(res => res.json())
.then(data => {
    destinationPlanetElem.style.backgroundImage = "url("+data.destinations[0].images.webp+")";
    destinationNameElem.innerHTML = data.destinations[0].name;
    destinationDescElem.innerHTML = data.destinations[0].description;
    destinationDistElem.innerHTML = data.destinations[0].distance;
    destinationTimeElem.innerHTML = data.destinations[0].travel;
    moonButtonElem.classList.add('destination-choice-selected');
})

function getMoonData() {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        destinationPlanetElem.style.backgroundImage = "url("+data.destinations[0].images.webp+")";
        destinationNameElem.innerHTML = data.destinations[0].name;
        destinationDescElem.innerHTML = data.destinations[0].description;
        destinationDistElem.innerHTML = data.destinations[0].distance;
        destinationTimeElem.innerHTML = data.destinations[0].travel;;
        moonButtonElem.classList.add('destination-choice-selected');
        marsButtonElem.classList.remove('destination-choice-selected');
        europaButtonElem.classList.remove('destination-choice-selected');
        titanButtonElem.classList.remove('destination-choice-selected');
    })
}

function getMarsData() {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        destinationPlanetElem.style.backgroundImage = "url("+data.destinations[1].images.webp+")";
        destinationNameElem.innerHTML = data.destinations[1].name;
        destinationDescElem.innerHTML = data.destinations[1].description;
        destinationDistElem.innerHTML = data.destinations[1].distance;
        destinationTimeElem.innerHTML = data.destinations[1].travel;;
        moonButtonElem.classList.remove('destination-choice-selected');
        marsButtonElem.classList.add('destination-choice-selected');
        europaButtonElem.classList.remove('destination-choice-selected');
        titanButtonElem.classList.remove('destination-choice-selected');
    })
}

function getEuropaData() {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        destinationPlanetElem.style.backgroundImage = "url("+data.destinations[2].images.webp+")";
        destinationNameElem.innerHTML = data.destinations[2].name;
        destinationDescElem.innerHTML = data.destinations[2].description;
        destinationDistElem.innerHTML = data.destinations[2].distance;
        destinationTimeElem.innerHTML = data.destinations[2].travel;
        moonButtonElem.classList.remove('destination-choice-selected');
        marsButtonElem.classList.remove('destination-choice-selected');
        europaButtonElem.classList.add('destination-choice-selected');
        titanButtonElem.classList.remove('destination-choice-selected');
    })
}

function getTitanData() {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        destinationPlanetElem.style.backgroundImage = "url("+data.destinations[3].images.webp+")";
        destinationNameElem.innerHTML = data.destinations[3].name;
        destinationDescElem.innerHTML = data.destinations[3].description;
        destinationDistElem.innerHTML = data.destinations[3].distance;
        destinationTimeElem.innerHTML = data.destinations[3].travel;
        moonButtonElem.classList.remove('destination-choice-selected');
        marsButtonElem.classList.remove('destination-choice-selected');
        europaButtonElem.classList.remove('destination-choice-selected');
        titanButtonElem.classList.add('destination-choice-selected');
    })
}

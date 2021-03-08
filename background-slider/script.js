const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('btn')
const rightBtn = document.getElementById('right');

let activeSlide = 0;

function setBgToBody() {
    body.style.backgroundImage = slide[activeSlide].s
}
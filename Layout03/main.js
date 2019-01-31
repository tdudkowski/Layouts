const clikerz = document.querySelector('div.up');
const slider = document.querySelector('div.bottom');
const ultxt = [...document.querySelectorAll('div.up>ul>li')];
const second_section = document.querySelector('section.second');
const logo_block = document.querySelector('div.logo_block');
const offer = document.querySelector('div.offer');
const offer_title = document.querySelector('div.offer>h3');
const third_section = document.querySelector('section.third');
const third_section_div = document.querySelector('section.third>div');
const fifth_section = document.querySelector('section.fifth');
const fifth_sectionspan = document.querySelector('section.fifth > span');
const fifth_section_div = document.getElementById('centered');
let i = 1;
let j = 1;


const changeTxt = () => {
 if (ultxt[j - 2]) {
  ultxt[j - 2].classList.remove('show');
 } else {
  ultxt[ultxt.length - 1].classList.remove('show');
 }
 // if (j == ultxt.length) {
 //  ultxt[ultxt.length].classList.remove('show');
 // }
 ultxt[j - 1].classList.add('show');
 // console.log(j, ultxt.length);
 j++;
 if (j == ultxt.length + 1) {
  j = 1;
 }
}

const sliderFunction = () => {
 changeTxt();
 slider.style.backgroundImage = `url(img/${i}.jpg)`;
 if (i % 2) {
  offer_title.classList.add('pale');
 } else {
  offer_title.classList.remove('pale');
 }
 // slider.style.backgroundSize = "150% 150%";
 i++
 if (i == 4) {
  i = 1;
 }
}

const pre_shuffle = () => {
 // logo_block.style.opacity = '.1';
 // offer.style = 'position:absolute; right:-100%;';
 logo_block.classList.add('transparent');
 offer.classList.add('outed', 'transparent');
 third_section_div.classList.add('transparent');
 // fifth_section.style.filter = 'grayscale(100%)';
 // fifth_section_div.style.filter = 'drop-shadow(0px 0px 0px rgba(200, 200, 0, .8))';
}

const scrollSpy = () => {
 if ((second_section.offsetTop - window.scrollY) < window.innerHeight / 1.5) {
  logo_block.classList.remove('transparent');
  offer.classList.add('nonouted');
  offer.classList.remove('transparent');
 }
 if ((third_section.offsetTop - window.scrollY) < window.innerHeight / 2) {
  third_section_div.classList.remove('transparent');
 }
 if ((fifth_section.offsetTop - window.scrollY) + fifth_section.offsetHeight <= window.innerHeight * 2) {
  let x = Math.floor((fifth_section.offsetTop - window.scrollY) / 5);
  // console.log(x);
  fifth_sectionspan.style.filter = `grayscale(${x}%)`;
  fifth_section_div.style.top = `${(window.innerHeight /2 - fifth_section_div.clientTop/2)}px`;
 } else {
  fifth_section_div.style.top = '0px'
 }

 // fifth_section_div.style.position = "absolute";
 // fifth_section_div.style.top = `${window.scrollY + (window.innerHeight/2)}px`;
 console.log(fifth_section_div.offsetTop)
 // fifth_section_div.style.left = '50%';
 // fifth_section_div.style.transform = "translate(-50%, -50%)";
}
window.addEventListener('scroll', scrollSpy);

const init = () => {
 setInterval(sliderFunction, 4000);
 pre_shuffle();
}

// CAROUSEL
const prevA = document.querySelector('.carousel-control-prev');
const nextA = document.querySelector('.carousel-control-next');
const slideList = document.querySelectorAll('.carousel-item');
const dots = [...document.querySelectorAll('.carousel-indicators li')];
let active = 0;

const changeDot = () => {
 let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
 console.log(active);
}

const shiftSlide = () => {

 slideList.forEach(slide => slide.classList.remove('active'));
 slideList[active].classList.add('active');
 changeDot();
}

const changeSlidePlus = () => {
 active++
 if (active == slideList.length) {
  active = 0;
 }
 shiftSlide();
}

const changeSlideMinus = () => {
 active--
 // console.log(active);
 if (active < 0) {
  active = slideList.length - 1;
 }
 shiftSlide();
}


lightbox.option({
 'resizeDuration': 200,
 'wrapAround': true
})

init();

nextA.addEventListener('click', changeSlidePlus)
prevA.addEventListener('click', changeSlideMinus)
clikerz.addEventListener('click', sliderFunction);
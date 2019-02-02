// GETTING ELEMENTS
const clikerz = document.querySelector('div.up');
const slider = document.querySelector('div.bottom');
const ultxt = [...document.querySelectorAll('div.up>ul>li')];
const second_section = document.querySelector('section.second');
const logo_block = document.querySelector('div.logo_block');
const offer = document.querySelector('div.offer');
const offer_title = document.querySelector('div.offer>h3');
const third_section = document.querySelector('section.third');
const third_section_div = document.querySelector('section.third>div');
const fourth_section = document.querySelector('section.fourth');
// const fourth_section_div = document.querySelector('section.fourth>div');
const fourth_p = document.querySelector('.fourth div p');
const fifth_section = document.querySelector('section.fifth');
const fifth_sectionspan = document.querySelector('section.fifth > span');
const fifth_section_div = document.getElementById('centered');

// VARIABLES
let i = 1;
let j = 1;

// FIRST SECTION CHANCHING TXT
const changeTxt = () => {
 if (ultxt[j - 2]) {
  ultxt[j - 2].classList.remove('show');
 } else {
  ultxt[ultxt.length - 1].classList.remove('show');
 }
 ultxt[j - 1].classList.add('show');
 j++;
 if (j == ultxt.length + 1) {
  j = 1;
 }
}

// FIRST SECTION SLIDER
const sliderFunction = () => {
 changeTxt();
 slider.style.backgroundImage = `url(img/${i}.jpg)`;
 if (i % 2) {
  offer_title.classList.add('pale');
 } else {
  offer_title.classList.remove('pale');
 }
 i++
 if (i == 4) {
  i = 1;
 }
}

// SECOND SECTION ACTIONS
const pre_shuffle = () => {
 logo_block.classList.add('transparent');
 offer.classList.add('outed', 'transparent');
 third_section_div.classList.add('transparent');
}

// SCROLLSPY RULES ACTIONS OF 2ND, 3RD, 4TH, AND 5TH SECTIONS
const scrollSpy = () => {
 // 2nd
 if ((second_section.offsetTop - window.scrollY) < window.innerHeight / 1.5) {
  logo_block.classList.remove('transparent');
  offer.classList.add('nonouted');
  offer.classList.remove('transparent');
 }
 // 3rd
 if ((third_section.offsetTop - window.scrollY) < window.innerHeight / 2) {
  third_section_div.classList.remove('transparent');
 }
 // 4th
 // fourth_p.style.top = `${fourth_p.offsetTop - window.scrollY}px`;
 fourth_p.style.top = `${(window.innerHeight / 4)- (fourth_section.offsetTop - window.pageYOffset)}px`;
 // 5th
 if ((fifth_section.offsetTop - window.scrollY) + fifth_section.offsetHeight <= window.innerHeight * 2) {
  let x = Math.floor((fifth_section.offsetTop - window.scrollY) / 5);
  // console.log(x);
  fifth_sectionspan.style.filter = `grayscale(${x}%)`;
  fifth_section_div.style.top = `${(window.innerHeight /2 - fifth_section_div.clientTop/2)}px`;
 } else {
  fifth_section_div.style.top = '0px'
 }
}

window.addEventListener('scroll', scrollSpy);

// INIT STARTING ACTIONS OF 1ST, 2ND, AND 3RD SECTIONS
const init = () => {
 setInterval(sliderFunction, 4000);
 pre_shuffle();
}

// CAROUSEL IN EIGHTH
const prevA = document.querySelector('.carousel-control-prev');
const nextA = document.querySelector('.carousel-control-next');
const slideList = document.querySelectorAll('.carousel-item');
const dots = [...document.querySelectorAll('.carousel-indicators li')];
let active = 0;

const changeDot = () => {
 let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const shiftSlide = () => {
 slideList.forEach(slide => slide.classList.remove('active'));
 slideList[active].classList.add('active');
 changeDot();
}

const dotControl = function () {
 for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
   slideList.forEach(slide => slide.classList.remove('active'));
   slideList[i].classList.add('active');
   dots.forEach(dot => dot.classList.remove('active'));
   dots[i].classList.add('active');
   active = i;
  })
 }
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

 if (active < 0) {
  active = slideList.length - 1;
 }
 shiftSlide();
}

lightbox.option({
 'resizeDuration': 200,
 'wrapAround': true
})

// INITS
dotControl();
init();

// LISTENERS
nextA.addEventListener('click', changeSlidePlus)
prevA.addEventListener('click', changeSlideMinus)
clikerz.addEventListener('click', sliderFunction);
const clikerz = document.querySelector('div.up');
const slider = document.querySelector('div.bottom');
const ultxt = [...document.querySelectorAll('div.up>ul>li')];
const second_section = document.querySelector('section.second');
const logo_block = document.querySelector('div.logo_block');
const offer = document.querySelector('div.offer');
const offer_title = document.querySelector('div.offer>h3');
const third_section = document.querySelector('section.third');
const third_section_div = document.querySelector('section.third>div');

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
}

const scrollSpy = () => {
 if ((second_section.offsetTop - window.scrollY) < window.innerHeight / 1.5) {
  logo_block.classList.remove('transparent');
  offer.classList.add('nonouted');
  offer.classList.remove('transparent');
 }
 if ((third_section.offsetTop - window.scrollY) < window.innerHeight / 2) {
  third_section_div.classList.remove('transparent');
  console.log(third_section.offsetTop);
 }
}
window.addEventListener('scroll', scrollSpy);

const init = () => {
 setInterval(sliderFunction, 4000);
 pre_shuffle();
}

init();

clikerz.addEventListener('click', sliderFunction);
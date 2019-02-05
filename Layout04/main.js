const counter = document.querySelector('span.info');
const picture = document.querySelector('aside');
const intro = document.querySelector('.intro');
const btnup = document.getElementById('up');
const btnprev = document.getElementById('prev');
const btnnext = document.getElementById('next');

const links = document.querySelectorAll('ul.menu li');
const articles = document.querySelectorAll('main article');
const linksArray = [...links];
const artArray = [...articles];
const picArray = ['77', '73', '59'];
let j = 0;
flag = false;

const init = () => {
 for (let i = 0; i < artArray.length; i++) {
  artArray[i].style.display = 'none';
 }
 intro.style.display = 'flex';
 counter.textContent = '';
 linksArray.forEach(link => link.classList.add('disabled'));
 picture.style.backgroundImage = `url(http://picsum.photos/300/1000?image=1053)`;
 flag = true;
 for (let i = 0; i < linksArray.length; i++) {
  linksArray[i].addEventListener('click', function () {
   j = i;
   schuffle();
   flag = false;
  });
 }
}

init();

const schuffle = () => {
 for (let i = 0; i < artArray.length; i++) {
  artArray[i].style.display = 'none';
 }
 intro.style.display = 'none';
 artArray[j].style.display = 'flex';
 counter.textContent = j + 1;
 picture.style.backgroundImage = `url(http://picsum.photos/300/1000?image=10${picArray[j]})`;
}

const prevChange = () => {
 j--;
 if (j < 0) {
  j = artArray.length - 1
 }
 if (flag) {
  j = artArray.length - 1;
  flag = false;
 }
 schuffle();
}

const nextChange = () => {
 j++;
 if (j == artArray.length) {
  j = 0
 }
 if (flag) {
  j = 0;
  flag = false;
 }
 schuffle();
}

// CHANGING SLIDES WHEN KBS IS CLICKED
const keyChangeSlide = (e) => {
 //left keyCode 37, right keyCode 39
 switch (e.keyCode) {
  case 37:
   prevChange();
   break;
  case 38:
   init();
   break;
  case 39:
   nextChange();
   break;
  default:
   console.log(e.keyCode);
 }
 // shiftSlide();
}

btnprev.addEventListener('click', prevChange);
btnnext.addEventListener('click', nextChange);
window.addEventListener('keydown', keyChangeSlide);
btnup.addEventListener('click', init);
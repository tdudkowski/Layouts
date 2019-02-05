const counter = document.querySelector('span.info');
const picture = document.querySelector('aside');
const intro = document.querySelector('.intro');
const btnup = document.getElementById('up');
const btnprev = document.getElementById('prev');
const btnnext = document.getElementById('next');

const links = document.querySelectorAll('section ul li');
const articles = document.querySelectorAll('main article');
const linksArray = [...links];
const artArray = [...articles];
const picArray = ['45', '65', '73']
let j = 0;
flag = false;

const linkTo = function () {
 let dataString = this.innerHTML;
 dataString = dataString.slice(0, -4)
 dataString = dataString.split('>');
 dataString = dataString[1].slice(-2);
 j = Number(dataString);
 j--;
 schuffle();
}

const init = () => {
 for (let i = 0; i < artArray.length; i++) {
  artArray[i].style.display = 'none';
 }
 intro.style.display = 'flex';
 counter.textContent = '';
 picture.style.backgroundImage = `url(http://picsum.photos/300/1000?image=1011)`;
 flag = true;
 linksArray.forEach(link => link.addEventListener('click', linkTo));
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

btnprev.addEventListener('click', prevChange);
btnnext.addEventListener('click', nextChange);
btnup.addEventListener('click', init);
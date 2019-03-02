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

const subcounter = document.querySelector('span.subinfo');
const btnsubup = document.getElementById('subup');
const btnsubprev = document.getElementById('subprev');
const btnsubnext = document.getElementById('subnext');

let subNumber = document.querySelector('main').dataset.key;
let j = 0;
flag = false;

// SUBNAV
const submenu = document.querySelectorAll('.submenu li');
const submenuArray = [...submenu];

// go to sublevel
const submenuGo = function () {
  console.log(this, j);
  window.open(`index${j+1}.html`, '_self');
}

for (let i = 0; i < submenuArray.length; i++) {
  submenuArray[i].addEventListener('click', submenuGo);
}

// init starts default display
const init = () => {
  if (flag) {
    window.open('index.html', '_self');
    return;
  }
  for (let i = 0; i < artArray.length; i++) {
    artArray[i].style.display = 'none';
  }
  intro.style.display = 'flex';
  if (counter) {
    counter.textContent = ``;
  }
  if (subcounter) {
    subcounter.textContent = `${subNumber}._`;
  }
  linksArray.forEach(link => link.classList.add('disabled'));
  picture.style.backgroundImage = `url(https://picsum.photos/300/1000?image=1053)`;
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

// schuffles slides inside levels
const schuffle = () => {
  for (let i = 0; i < artArray.length; i++) {
    artArray[i].style.display = 'none';
  }
  intro.style.display = 'none';
  artArray[j].style.display = 'flex';
  if (counter) {
    counter.textContent = `${j + 1}.`;
  }
  if (subcounter) {
    subcounter.textContent = `${subNumber}.${j + 1}`;
  }
  picture.style.backgroundImage = `url(https://picsum.photos/300/1000?image=10${picArray[j]})`;
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

// CHANGING SLIDES WHEN KB ARROW IS CLICKED
// LEFT: 37 UP: 38 RIGHT: 39 DOWN: 40
const keyChangeSlide = (e) => {
  if (e.keyCode == 37) {
    prevChange();
  }
  if (e.keyCode == 38) {
    if (document.querySelector('main').dataset.key != 0 || flag == false) {
      if (subcounter) {
        subcounter.textContent = `${subNumber}._`;
      }
      init();
    }
  }
  if (e.keyCode == 39) {
    nextChange();
  }
  if (e.keyCode == 40) {
    if (document.querySelector('div.intro').style.display == 'none' && document.querySelector('main').dataset.key == 0) {
      submenuGo();
    }
  }
  console.log(j);
}

window.addEventListener('keydown', keyChangeSlide);
if (btnprev) {
  btnprev.addEventListener('click', prevChange);
  btnnext.addEventListener('click', nextChange);
  btnup.addEventListener('click', init);
}

if (btnsubup) {
  btnsubup.addEventListener('click', init);
  btnsubprev.addEventListener('click', prevChange);
  btnsubnext.addEventListener('click', nextChange);
}

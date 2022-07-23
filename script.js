//placeholder searchbox//
function remove() {
  document.getElementById('search-id').setAttribute('placeholder', '');
}

function add() {
  document.getElementById('search-id').setAttribute('placeholder', '   Search');
}

//placeholder searchbox 2//
function remove1() {
  document.getElementById('search1').setAttribute('placeholder', '');
}

function add1() {
  document.getElementById('search1').setAttribute('placeholder', '     Search');
}

//LEFT-MENU toggle

let menu = document.getElementsByClassName('menu-bar')[0];
let list = document.getElementById('list');

menu.addEventListener('click', () => {
  list.classList.toggle('active');
});

//Close menu btn toggle
let closeBtn = document.getElementsByClassName('close-btn-a')[0];
let menuText = document.getElementsByClassName('menu-text')[0];

closeBtn.addEventListener('click', () => {
  list.classList.toggle('active');
});

menuText.addEventListener('click', () => {
  list.classList.toggle('active');
});

//Language btn dropdown

let langBtn = document.getElementById('lang-btn-id');
let langClass = document.getElementsByClassName('lang')[0];
let arrowClass = document.getElementById('arrow');
let btnClass = document.getElementById('lang-btn-id');

langBtn.addEventListener('click', () => {
  langClass.classList.toggle('active-lang');
});

function arrowAdd() {
  if (arrowClass.getAttribute('class') == 'fa fa-angle-down arrow-class-w') {
    arrowClass.setAttribute('class', 'fa fa-angle-up arrow-class-b');
  } else {
    arrowClass.setAttribute('class', 'fa fa-angle-down arrow-class-w');
  }
}

langBtn.addEventListener('click', arrowAdd);

//Language btn BG and color change

function changeBg() {
  if (btnClass.getAttribute('class') == 'lang-btn') {
    btnClass.setAttribute('class', 'lang-btn-active');
  } else {
    btnClass.setAttribute('class', 'lang-btn');
  }
}

langBtn.addEventListener('click', changeBg);

//popular Show/hide

let popularBtn = document.getElementById('popular-btn-id');
let popularList = document.getElementById('popular-list-id');
popularBtn.addEventListener('click', popularShow);

function popularShow() {
  if (window.innerWidth > 699) {
    popularList.setAttribute('class', 'popular-list popular-list-active');
    stormList.setAttribute('class', 'storm-list');
    covidList.setAttribute('class', 'covid-list');
  } else if (
    popularList.getAttribute('class') == 'popular-list popular-list-active' ||
    window.innerWidth > 699
  ) {
    popularList.setAttribute('class', 'popular-list');
  } else if (
    popularList.getAttribute('class') == 'popular-list' ||
    window.innerWidth > 699
  ) {
    popularList.setAttribute('class', 'popular-list popular-list-active');
  }
}

let stormBtn = document.getElementById('storm-btn-id');
let stormList = document.getElementById('storm-list-id');
stormBtn.addEventListener('click', stormShow);

function stormShow() {
  if (window.innerWidth > 699) {
    popularList.setAttribute('class', 'popular-list');
    stormList.setAttribute('class', 'storm-list storm-list-active');
    covidList.setAttribute('class', 'covid-list');
  } else if (
    stormList.getAttribute('class') == 'storm-list storm-list-active' ||
    window.innerWidth > 699
  ) {
    stormList.setAttribute('class', 'storm-list');
  } else if (
    stormList.getAttribute('class') == 'storm-list' ||
    window.innerWidth > 699
  ) {
    stormList.setAttribute('class', 'storm-list storm-list-active');
  }
}

let covidBtn = document.getElementById('covid-btn-id');
let covidList = document.getElementById('covid-list-id');
covidBtn.addEventListener('click', covidShow);

function covidShow() {
  if (window.innerWidth > 699) {
    popularList.setAttribute('class', 'popular-list');
    stormList.setAttribute('class', 'storm-list');
    covidList.setAttribute('class', 'covid-list covid-list-active');
  } else if (
    covidList.getAttribute('class') == 'covid-list covid-list-active' ||
    window.innerWidth > 699
  ) {
    covidList.setAttribute('class', 'covid-list');
  } else if (
    covidList.getAttribute('class') == 'covid-list' ||
    window.innerWidth > 699
  ) {
    covidList.setAttribute('class', 'covid-list covid-list-active');
  }
}

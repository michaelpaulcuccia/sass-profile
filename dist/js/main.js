//DOM ELEMENT SELECTORS
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        //update element's class
        hamburger.classList.add('open');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        showMenu = false;
    }
}

console.log('hello')
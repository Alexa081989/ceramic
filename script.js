// !BURGER MENU

const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".burger__menu");
const burgerIcon = document.querySelector(".burger__icon");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle('burger__menu--active');
    header.classList.toggle('header-mobile');
    body.classList.toggle('no-scroll');
})


// !MODAL

const modal = document.querySelector('.modal-wrapper');
const btnsModalOpen = document.querySelectorAll('.btn[type="button"]');

btnsModalOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('none');
        body.classList.add('no-scroll');
    });
})

const btnModalExit = document.querySelector('.modal__exit');

btnModalExit.addEventListener('click', () => {
    modal.classList.add('none');
    body.classList.remove('no-scroll');
})

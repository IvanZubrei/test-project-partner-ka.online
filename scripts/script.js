const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const menuBtnClose = document.querySelector('.menu-btn-close');
const navigationLink = document.querySelector('.menu-mobile');

const toggleMenuMobile = () => {
  menuBtn.classList.toggle('close-menu-btn');
  menuMobile.classList.toggle('menu-open');
  menuBtnClose.classList.toggle('open-close');
}

menuBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenuMobile();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menuMobile = target == menuMobile || menuMobile.contains(target);
  let its_menuBtn = target == menuBtn;
  let menuMobile_is_active = menuMobile.classList.contains('menu-open');
  
  if (!its_menuMobile && !its_menuBtn && menuMobile_is_active) {
    toggleMenuMobile();
  }
})

navigationLink.addEventListener('click', () => {
  menuBtnClose.classList.remove('open-close');
  menuMobile.classList.remove('menu-open');
  menuBtn.classList.remove('close-menu-btn');
});
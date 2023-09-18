const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const menuBtnClose = document.querySelector('.menu-btn-close');
const navigationLink = document.querySelector('.menu-mobile');
const sitesPopup = document.querySelector('.sites-popup');
const sitesPopupOpenClose = document.querySelector('.header__sites-popup');
const backgroundColorActiv = document.querySelector('.background-color');
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
});

navigationLink.addEventListener('click', () => {
  menuBtnClose.classList.remove('open-close');
  menuMobile.classList.remove('menu-open');
  menuBtn.classList.remove('close-menu-btn');
});

const toggleSitesPopup = () => {
  sitesPopupOpenClose.classList.toggle("popup-open-close"); 
  backgroundColorActiv.classList.toggle("popup-background-color");   
}

sitesPopup.addEventListener('click', e => {
  e.stopPropagation();
  toggleSitesPopup();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_sitesPopupOpenClose = target == sitesPopupOpenClose || sitesPopupOpenClose.contains(target);
  let its_sitesPopup = target == sitesPopup;
  let sitesPopupOpenClose_is_active = sitesPopupOpenClose.classList.contains('popup-open-close');
  
  if (!its_sitesPopupOpenClose && !its_sitesPopup && sitesPopupOpenClose_is_active) {
    toggleSitesPopup();
  }
});

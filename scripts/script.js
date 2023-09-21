const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const menuBtnClose = document.querySelector('.menu-btn-close');
const navigationLink = document.querySelector('.menu-mobile');
const sitesPopup = document.querySelector('.sites-popup');
const sitesPopupOpenClose = document.querySelector('.header__sites-popup');
const sitesBackgroundColorActiv = document.querySelector('.sites-background-color');
const adPopup = document.querySelector('.ad-popup');
const adPopupOpenClose = document.querySelector('.header__ad-popup');
const adBackgroundColorActiv = document.querySelector('.ad-background-color');
const contentPopup = document.querySelector('.content-popup');
const contentPopupOpenClose = document.querySelector('.header__content-popup');
const contentBackgroundColorActiv = document.querySelector('.content-background-color');

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
  sitesBackgroundColorActiv.classList.toggle("popup-background-color");  
  adPopupOpenClose.classList.remove("popup-open-close"); 
  adBackgroundColorActiv.classList.remove("popup-background-color");
  contentPopupOpenClose.classList.remove("popup-open-close"); 
  contentBackgroundColorActiv.classList.remove("popup-background-color");
};

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

const toggleAdPopup = () => {
  adPopupOpenClose.classList.toggle("popup-open-close"); 
  adBackgroundColorActiv.classList.toggle("popup-background-color"); 
  sitesPopupOpenClose.classList.remove("popup-open-close"); 
  sitesBackgroundColorActiv.classList.remove("popup-background-color"); 
  contentPopupOpenClose.classList.remove("popup-open-close"); 
  contentBackgroundColorActiv.classList.remove("popup-background-color");  
};

adPopup.addEventListener('click', e => {
  e.stopPropagation();
  toggleAdPopup();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_adPopupOpenClose = target == adPopupOpenClose || adPopupOpenClose.contains(target);
  let its_adPopup = target == adPopup;
  let adPopupOpenClose_is_active = adPopupOpenClose.classList.contains('popup-open-close');
  
  if (!its_adPopupOpenClose && !its_adPopup && adPopupOpenClose_is_active) {
    toggleAdPopup();
  }
});

const toggleContentPopup = () => {
  contentPopupOpenClose.classList.toggle("popup-open-close"); 
  contentBackgroundColorActiv.classList.toggle("popup-background-color"); 
  sitesPopupOpenClose.classList.remove("popup-open-close"); 
  sitesBackgroundColorActiv.classList.remove("popup-background-color"); 
  adPopupOpenClose.classList.remove("popup-open-close"); 
  adBackgroundColorActiv.classList.remove("popup-background-color");
};

contentPopup.addEventListener('click', e => {
  e.stopPropagation();
  toggleContentPopup();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_contentPopupOpenClose = target == contentPopupOpenClose || contentPopupOpenClose.contains(target);
  let its_contentPopup = target == contentPopup;
  let contentPopupOpenClose_is_active = contentPopupOpenClose.classList.contains('popup-open-close');
  
  if (!its_contentPopupOpenClose && !its_contentPopup && contentPopupOpenClose_is_active) {
    toggleContentPopup();
  }
});
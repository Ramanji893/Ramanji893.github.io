const menuBurger = document.querySelector('.menu-burger');
const menuParent = menuBurger.parentElement;
const bodyScroll = document.querySelector('#body-scroll');
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;
const sidebar = document.querySelector('.side-bar');
const menu = document.querySelector('#menu');
const menuBar = document.querySelector('.menu-bar');
const backMenu = document.querySelector('#back-menu');

const h = window.innerHeight;
let sideBarHeight = h - headerHeight;
sidebar.style.height = sideBarHeight + 'px';
sidebar.style.top = `${headerHeight}px`;

menuBurger.addEventListener('click', ()=>{
    if(menuBurger.classList.contains('fi-rr-menu-burger')){
        header.classList.add('fixed-shadow');
        sidebar.classList.add('open');
        bodyScroll.style.overflow = 'hidden';
        bodyScroll.style.height = `${h}px`;
        menuBurger.classList.remove('fi-rr-menu-burger');
        menuBurger.classList.add('fi-rr-minus');
        setTimeout(()=>{menuParent.classList.add('rotate')},100);
        setTimeout(()=>{
            menuBurger.classList.remove('fi-rr-minus');
            menuBurger.classList.add('fi-rr-cross');
        },190);
    }else{
        header.classList.remove('fixed-shadow');
        sidebar.classList.remove('open');
        bodyScroll.style.overflow = 'visible';
        bodyScroll.style.height = 'auto';
        menuBurger.classList.add('fi-rr-minus');
        menuBurger.classList.remove('fi-rr-cross');
        if(menuBar.classList.contains('open')){
            menuBar.classList.remove('open');
        }
        setTimeout(()=>{menuParent.classList.remove('rotate')},100);
        setTimeout(()=>{
            menuBurger.classList.remove('fi-rr-minus');
            menuBurger.classList.add('fi-rr-menu-burger');
        },190);
    }
});

menu.addEventListener('click', ()=>{
    menuBar.classList.add('open');
});

backMenu.addEventListener('click', ()=>{
    menuBar.classList.remove('open');
});

checkScreenSize = () => {
    let screenWidth = window.innerWidth;

    if(screenWidth > 820){
        if(header.classList.contains('fixed-shadow')){
            header.classList.remove('fixed-shadow');
            sidebar.classList.remove('open');
            bodyScroll.style.overflow = 'visible';
            bodyScroll.style.height = 'auto';
            menuBurger.classList.add('fi-rr-minus');
            menuBurger.classList.remove('fi-rr-cross');
            setTimeout(()=>{menuParent.classList.remove('rotate')},100);
            setTimeout(()=>{
                menuBurger.classList.remove('fi-rr-minus');
                menuBurger.classList.add('fi-rr-menu-burger');
            },190);
        }

        if(menuBar.classList.contains('open')){
            menuBar.classList.remove('open');
        }
    }

    setTimeout(()=>{checkScreenSize();},);
}
checkScreenSize();
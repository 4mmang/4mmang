window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

const contact = document.getElementById('contact-me')
contact.addEventListener('click', function(){
    console.log("sadsajdvad");
})
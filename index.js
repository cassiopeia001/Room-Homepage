const previousButton= document.getElementById('main__previous');
const nextButton= document.getElementById('main__next');
const menuIcon= document.querySelector('.nav__menu-icon');
const closeIcon= document.querySelector('.nav__close-icon');
const nav= document.querySelector('.nav');
const navLinks= document.querySelector('.nav__links');
const logo= document.querySelector('.nav__logo');
const heroImages= document.querySelectorAll('.main__hero-image');
const productDescriptions= document.querySelectorAll('.main__description');
const nextButtonMobile= document.getElementById('main__next-mobile');
const previousButtonMobile= document.getElementById('main__previous-mobile');

let currentIndex= 1;
let max= 3;

menuIcon.addEventListener('click', function(){
    
    navLinks.classList.add('nav__links--visible');
    nav.classList.add('nav--menu-opened');
});
closeIcon.addEventListener('click', function(){
    
    navLinks.classList.remove('nav__links--visible');
    nav.classList.remove('nav--menu-opened');
});
const assignNext= ()=>{
    heroImages.forEach(image=>{
        image.classList.add('main__hero-image--hidden');
    });
    productDescriptions.forEach(description=>{
        description.classList.add('main__description--hidden');
    });
    currentIndex++;
    if (currentIndex > max) {
        currentIndex = 1;
    }
    console.log(`Current Index: ${currentIndex}`);
    const nextProductImage= document.querySelector(`.main__hero-image[data-index="${currentIndex}"]`);
    const nextProductDescription= document.querySelector(`.main__description[data-index="${currentIndex}"]`);
    nextProductImage.classList.remove('main__hero-image--hidden');
    nextProductDescription.classList.remove('main__description--hidden');
}
const assignPrevious= () => {
    heroImages.forEach(image=>{
        image.classList.add('main__hero-image--hidden');
    });
    productDescriptions.forEach(description=>{
        description.classList.add('main__description--hidden');
    });
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = max;
    }
    const nextProductImage= document.querySelector(`.main__hero-image[data-index="${currentIndex}"]`);
    const nextProductDescription= document.querySelector(`.main__description[data-index="${currentIndex}"]`);
    nextProductImage.classList.remove('main__hero-image--hidden');
    nextProductDescription.classList.remove('main__description--hidden');
}
nextButton.addEventListener('click', assignNext);
previousButton.addEventListener('click', assignPrevious);
nextButtonMobile.addEventListener('click', assignNext);
previousButtonMobile.addEventListener('click', assignPrevious);
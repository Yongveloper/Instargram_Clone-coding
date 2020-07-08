'use strict';
// Feed Image Slider

const PREV_BUTTON = document.querySelectorAll('.main_feed_img_prev');
const NEXT_BUTTON = document.querySelectorAll('.main_feed_img_next');

let slideIndex = 1;
let i;

function showSlides() {

    if(this.className ==='main_feed_img_prev') {
        slideIndex += -1;
    } else {
        slideIndex += 1;
    }

    let slides = this.parentNode.parentNode.children;
    let slidsLength =  slides.length-1 ;

    if (slideIndex > slidsLength) {
        slideIndex = 1
    } else if (slideIndex < 1) {
        slideIndex = slidsLength
    }
        
    for (i = 0; i < slidsLength; i++) {
        slides[i].style.display = "none";  
    }
   
    slides[slideIndex-1].style.display = "block";  
    
  }

for (i=0; i < PREV_BUTTON.length; i++) {
    PREV_BUTTON[i].addEventListener('click',showSlides);
}

for (i=0; i < NEXT_BUTTON.length; i++) {
    NEXT_BUTTON[i].addEventListener('click',showSlides);
}

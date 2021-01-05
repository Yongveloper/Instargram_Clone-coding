'use strict';

const storyPrevBtn = document.querySelector('#story_prev_btn');
const storyNextBtn = document.querySelector('#story_next_btn');
const storySlide = document.querySelector('.main_story_slider');
const END_INDEX = 3;
let currentIndex = 0;

function moveSlide(num) {
  storySlide.style.left = `${-num * 76}px`;
  currentIndex = num;
}

storyNextBtn.addEventListener('click', () => {
  moveSlide(currentIndex + 1);

  if (currentIndex + 1 == END_INDEX) {
    storyNextBtn.classList.add('invisible');
  }

  if (currentIndex > 0) {
    storyPrevBtn.classList.remove('invisible');
  }
});

storyPrevBtn.addEventListener('click', () => {
  moveSlide(currentIndex - 1);

  if (currentIndex === 0) {
    storyPrevBtn.classList.add('invisible');
  }

  if (currentIndex !== END_INDEX) {
    storyNextBtn.classList.remove('invisible');
  }
});

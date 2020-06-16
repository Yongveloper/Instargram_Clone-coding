'use strict';

const test = document.querySelector('.comment_input_text');
const testBtn= document.querySelector('.comment_input_button');


test.addEventListener('keypress', ()=>{
   console.log('hi');
   testBtn.disabled=false;
});


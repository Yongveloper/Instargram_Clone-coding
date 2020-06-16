'use strict';


const likeNullBtn = document.querySelector('.like-null-btn');
const likeNullBtn2 = document.querySelector('.like-null-btn2');
const likeNullBtn3 = document.querySelector('.like-null-btn3');

const likeActionBtn = document.querySelector('.like-action-btn');
const likeActionBtn2 = document.querySelector('.like-action-btn2');
const likeActionBtn3 = document.querySelector('.like-action-btn3');

const CLICKED_CLASS = 'hide';

const likeCount= document.querySelector('#like-count');
const likeCount2= document.querySelector('#like-count2');
const likeCount3= document.querySelector('#like-count3');


function nullFunction(elm) {     
    const nullBtn = document.querySelector('.'+elm);          
    nullBtn.classList.add(CLICKED_CLASS);
    if(elm==='like-null-btn'){
    likeActionBtn.classList.remove(CLICKED_CLASS);
    likeCount.innerHTML = "좋아요 1,295개";
    } else if (elm==='like-null-btn2') {
        likeActionBtn2.classList.remove(CLICKED_CLASS);
        likeCount2.innerHTML = "좋아요 3,350개";
    } else {
        likeActionBtn3.classList.remove(CLICKED_CLASS);
        likeCount3.innerHTML = "좋아요 3,000개";
    }
};

function actionFunction(elm) { 
    const actionBtn = document.querySelector('.'+elm);    
    actionBtn.classList.add(CLICKED_CLASS);
    if(elm==='like-action-btn'){
    likeNullBtn.classList.remove(CLICKED_CLASS);
    likeCount.innerHTML = "좋아요 1,294개";
    } else if (elm==='like-action-btn2'){
        likeNullBtn2.classList.remove(CLICKED_CLASS);
        likeCount2.innerHTML = "좋아요 3,349개";
    } else {
        likeNullBtn3.classList.remove(CLICKED_CLASS);
        likeCount3.innerHTML = "좋아요 2,999개";
    }
};


function init() {
    
}
init();

/*
likeNullBtn.addEventListener('click', ()=> {
    likeNullBtn.classList.add(CLICKED_CLASS);
    likeActionBtn.classList.remove(CLICKED_CLASS);
    likeCount.innerHTML = "좋아요 1,295개";
});

likeActionBtn.addEventListener('click', ()=>{
    likeActionBtn.classList.add(CLICKED_CLASS);
    likeNullBtn.classList.remove(CLICKED_CLASS);
    likeCount.innerHTML = "좋아요 1,294개";
});


const likeNullBtn2 = document.querySelector('.like-null-btn2');
const likeActionBtn2 = document.querySelector('.like-action-btn2');
const likeCount2= document.querySelector('#like-count2');



likeNullBtn2.addEventListener('click', ()=> {
    likeNullBtn2.classList.add(CLICKED_CLASS);
    likeActionBtn2.classList.remove(CLICKED_CLASS);
    likeCount2.innerHTML = "좋아요 3,350개";
});

likeActionBtn2.addEventListener('click', ()=>{
    likeActionBtn2.classList.add(CLICKED_CLASS);
    likeNullBtn2.classList.remove(CLICKED_CLASS);
    likeCount2.innerHTML = "좋아요 3,349개";
});

const likeNullBtn3 = document.querySelector('.like-null-btn3');
const likeActionBtn3 = document.querySelector('.like-action-btn3');
const likeCount3= document.querySelector('#like-count3');



likeNullBtn3.addEventListener('click', ()=> {
    likeNullBtn3.classList.add(CLICKED_CLASS);
    likeActionBtn3.classList.remove(CLICKED_CLASS);
    likeCount3.innerHTML = "좋아요 3,000개";
});

likeActionBtn3.addEventListener('click', ()=>{
    likeActionBtn3.classList.add(CLICKED_CLASS);
    likeNullBtn3.classList.remove(CLICKED_CLASS);
    likeCount3.innerHTML = "좋아요 2,999개";
});
*/
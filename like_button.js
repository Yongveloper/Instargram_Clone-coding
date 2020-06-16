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

    if(elm === 'like-null-btn'){
        likeActionBtn.classList.remove(CLICKED_CLASS);
        likeCount.innerHTML = "5";

    } else if (elm === 'like-null-btn2') {
        likeActionBtn2.classList.remove(CLICKED_CLASS);
        likeCount2.innerHTML = "50";

    } else {
        likeActionBtn3.classList.remove(CLICKED_CLASS);
        likeCount3.innerHTML = "3,000";
    }
};

function actionFunction(elm) { 
    const actionBtn = document.querySelector('.'+elm);    
    actionBtn.classList.add(CLICKED_CLASS);

    if(elm === 'like-action-btn'){
        likeNullBtn.classList.remove(CLICKED_CLASS);
        likeCount.innerHTML = "4";

    } else if (elm === 'like-action-btn2'){
        likeNullBtn2.classList.remove(CLICKED_CLASS);
        likeCount2.innerHTML = "49";
        
    } else {
        likeNullBtn3.classList.remove(CLICKED_CLASS);
        likeCount3.innerHTML = "2,999";
    }
};
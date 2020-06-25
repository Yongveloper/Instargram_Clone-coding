'use strict';

// Like Button Event

const LIKE_BUTTON = document.querySelectorAll('.heart');

function LikeBtnHandler () {
    
    const likeCount = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1]; 

    const likeCountInt = parseInt(likeCount.innerHTML);
       
    if(this.classList.contains('fa-heart-o')){        
    likeCount.innerHTML= likeCountInt+1;    
    } else{
    likeCount.innerHTML= likeCountInt-1;    
    };    
     
    this.classList.toggle('fa-heart-o');
    this.classList.toggle('fa-heart');      
}

for (let i=0; i < LIKE_BUTTON.length; i++) {
    LIKE_BUTTON[i].addEventListener('click',LikeBtnHandler);
}
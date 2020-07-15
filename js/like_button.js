'use strict';

// Like Button Event

// 문서 내의 하트버튼 모두 잡기
const LIKE_BUTTON = document.querySelectorAll('.heart');
// 좋아요 기능 구현 함수
function LikeBtnHandler () {
    // 각각 다른 컨테이너에서 사용하기 위해 this의 부모,자식 요소로 잡음
    const likeCount = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1]; 
    // 좋아요 갯수를 문자에서 정수로 변환
    const likeCountInt = parseInt(likeCount.innerHTML);
    
    
    if(this.classList.contains('fa-heart-o')){
    // 빈 하트가 눌렸을 때 좋아요 갯수를 +1
    likeCount.innerHTML= likeCountInt+1;    
    } else{
    // 아니면 -1 
    likeCount.innerHTML= likeCountInt-1;    
    };    
    
    // 빈하트면 꽉찬하트로 변경, 꽉찬하트면 빈하트로 변경
    this.classList.toggle('fa-heart-o');
    this.classList.toggle('fa-heart');      
}

// 여러개의 버튼 중 하나만 사용하기 위함
for (let i=0; i < LIKE_BUTTON.length; i++) {
    // 하트버튼 클릭시 함수 실행
    LIKE_BUTTON[i].addEventListener('click',LikeBtnHandler);
}
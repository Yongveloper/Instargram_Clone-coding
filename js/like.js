'use strict';

// Like Button Event

// 문서 내의 하트버튼 모두 잡기
const LIKE_BUTTON = document.querySelectorAll('.heart');

// 문자를 포함한 숫자로된 문자들을 정수로 바꾸는 함수
function stringNumberToInt(stringNumber){
    return parseInt(stringNumber.replace(/,/g , ''));
}
// 천 자리 콤마 함수
function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 좋아요 기능 구현 함수
function likeBtnHandler () {
    // 각각 다른 컨테이너에서 사용하기 위해 '좋아요 갯수'를 this의 부모,자식 요소로 잡음
    const likeCount = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
    // 좋아요 갯수를 문자에서 정수로 변환
    const likeCountInt = stringNumberToInt(likeCount.innerHTML);
    
    if(this.classList.contains('fa-heart-o')){
    // 빈 하트가 눌렸을 때 좋아요 갯수를 +1
    likeCount.innerHTML= numberFormat(likeCountInt+1);    
    } else{
    // 아니면 -1 
    likeCount.innerHTML= numberFormat(likeCountInt-1);    
    };
    
    // 빈하트면 꽉찬하트로 변경, 꽉찬하트면 빈하트로 변경
    this.classList.toggle('fa-heart-o');
    this.classList.toggle('fa-heart'); 
    
}

// 클릭되는 각 좋아요 버튼을 찾기 위한 forEach 
LIKE_BUTTON.forEach((likeBtn) => likeBtn.addEventListener('click',likeBtnHandler));
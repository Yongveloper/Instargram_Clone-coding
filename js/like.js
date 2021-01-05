'use strict';

// Like Button Event

const LIKE_BUTTON = document.querySelectorAll('.heart');

// 문자를 포함한 숫자로된 문자들을 정수로 바꾸는 함수
function stringNumberToInt(stringNumber) {
  return parseInt(stringNumber.replace(/,/g, ''));
}
// 천 자리 콤마 함수
function numberFormat(inputNumber) {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function likeBtnHandler() {
  const likeCount = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
  const likeCountInt = stringNumberToInt(likeCount.innerHTML);

  if (this.classList.contains('fa-heart-o')) {
    likeCount.innerHTML = numberFormat(likeCountInt + 1);
  } else {
    likeCount.innerHTML = numberFormat(likeCountInt - 1);
  }

  this.classList.toggle('fa-heart-o');
  this.classList.toggle('fa-heart');
}

// 클릭되는 각 좋아요 버튼을 찾기 위한 forEach
LIKE_BUTTON.forEach((likeBtn) => likeBtn.addEventListener('click', likeBtnHandler));

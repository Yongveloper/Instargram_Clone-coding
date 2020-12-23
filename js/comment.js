'use strict';

// Post Comment

// 댓글 입력창 요소 잡기
const COMMENT_ADD = document.querySelectorAll('.comment_input_text');
// 댓글 기능 구현 함수
function commentHandler() {
  // 눌린 key가 enter일 시  실행
  if (window.event.keyCode === 13) {
    if (!this.value) {
      this.blur();
      return;
    }
    // 댓글 입력창에 입력된 문자들
    const newComment = this.value;
    // 댓글 리스트
    const commentList = this.parentNode.parentNode.parentNode.childNodes[7];
    // 댓글이 추가되기 위한 div 생성
    const commentNewDiv = document.createElement('div');

    // 생성된 div에 class를 추가
    commentNewDiv.classList.add('main_feed_comment');
    // 댓글 리스트에 div 생성
    commentList.append(commentNewDiv);
    // 생성된 div의 값에 입력된 문자들 추가
    commentNewDiv.innerHTML = `<span class="name">yoo.__.oong </span><span>${newComment}</span>`;

    // 댓글이 추가된 뒤, 댓글 입력창 clear
    this.value = '';
    // 댓글창 빠져나감
    this.blur();
  }
}

// 많은 댓글 입력창 요소 중 사용에 필요한 입력창 하나만 얻기 위한 forEach
COMMENT_ADD.forEach((comment) => comment.addEventListener('keydown', commentHandler));

'use strict';

// Post Comment

const COMMENT_ADD = document.querySelectorAll('.comment_input_text');

COMMENT_ADD.forEach((comment) =>
  comment.addEventListener('keydown', (e) => {
    if (window.event.keyCode === 13) {
      const inputComment = e.target;
      const content = inputComment.value;

      if (!content) {
        inputComment.blur();
        return;
      }

      const newComment = content;
      const commentList = inputComment.parentNode.parentNode.parentNode.childNodes[7];
      const commentNewDiv = document.createElement('div');
      commentNewDiv.classList.add('main_feed_comment');
      commentList.append(commentNewDiv);
      commentNewDiv.innerHTML = `<span class="name">yoo.__.oong </span><span>${newComment}</span>`;

      inputComment.value = '';
      inputComment.blur();
    }
  })
);

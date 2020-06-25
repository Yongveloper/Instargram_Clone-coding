'use strict';

// Post Comment

const COMMENT_ADD = document.querySelectorAll('.comment_input_text');

function commentHandler() {   

   if(window.event.keyCode === 13){     
      const newComment = this.value;
      
      const commentList = this.parentNode.parentNode.parentNode.childNodes[7];       
      
      const newDiv = document.createElement("div");      
      
      newDiv.classList.add('main_feed_comment');
      commentList.append(newDiv);
      newDiv.innerHTML = `<span class="name">yoo.__.oong </span><span>${newComment}</span>`;      

      this.value = '';    
      this.blur();
   }

}

for (let i = 0; i < COMMENT_ADD.length; i++){   
   COMMENT_ADD[i].addEventListener('keydown',commentHandler);
}
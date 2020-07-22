'use strict';

// Story Prev 버튼 요소 잡기
const storyPrevBtn = document.querySelector('#story_prev_btn');
// Story Next 버튼 요소 잡기
const storyNextBtn = document.querySelector('#story_next_btn');
// Story List 요소 잡기
const storyList = document.querySelector('.main_story_slider');

// story 사진 넓이
const storyWidth = 66;
// transition 속도
const slideSpeed = 300;

// 현재 인덱스 값 0으로 초기화
let curIndex = 0;
// 종료값 설정
const endIndex = 3;

function slideHandler() {
    // transition 속도 설정 
    storyList.style.transition = slideSpeed + "ms";  
    // next 버튼이 클릭 되었을 시  
    if(this.id === 'story_next_btn') {
        //storyList의 화면을 왼쪽으로 사진 넓이 + 인덱스+= 만큼 이동 
        storyList.style.transform = "translate3d(-" + (storyWidth * (curIndex += 1)) + "px, 0px, 0px)";
    } else {
        //storyList의 화면을 왼쪽으로 사진 넓이 + 인덱스-= 만큼 이동
        storyList.style.transform = "translate3d(-" + (storyWidth * (curIndex -= 1) + "px, 0px, 0px)");
    }
    
    if(curIndex === 0) {
        // 현재 인덱스 값이 0이면 prev버튼 숨김 
        storyPrevBtn.style.display = 'none';
    }else {
        // 아니면 prev버튼 보임
        storyPrevBtn.style.display = 'block';        
    }

    if(curIndex === endIndex) {
        // 현재 인덱스 값이 끝값이랑 같을 경우 next 버튼 숨김
        storyNextBtn.style.display = 'none';
    }else {
        // 아니면 next 버튼 보임
        storyNextBtn.style.display = 'block';
    }
}

// 버튼 클릭 이벤트
storyNextBtn.addEventListener('click', slideHandler);
storyPrevBtn.addEventListener('click', slideHandler);
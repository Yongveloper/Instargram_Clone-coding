'use strict';

// '마이마이슬라이더'라는 클래스를 생성
class MymySlider {
    constructor (id, opts) {
      // `#name`이 아닌 `name`만 받는 것에 주의
      // 아이디를 받는 것은 각 자바스크립트 클래스가 고유하게 동작하기 위한 좋은 조건
      this.selector = id;
      // 혹시 옵션을 제공하지 않으면 내부에서 문법 에러가 발생할테니 기본값을 명시
      this.options = opts || {};
      // 초기화
      this.initialize();
    }
    initialize() {
      // 매개변수 id와 opts 초기화를 제외한 나머지 초기화는 이 함수 내에서 진행.
      
      // 시작할 슬라이드 번호를 제공하되, 옵션이 없으면 기본값으로 0을 제공
      this.slideIndex = this.options.start || 0;
      // 기본 요소를 검색
      this.element = document.getElementById(this.selector);
      // 컨테이너 역할의 요소를 검색.
      this.containerElement = this.element.querySelector('.main_feed_img_container');
      // 컨테이너 요소의 크기를 옵션에서 따로 받거나 기본값을 사용
      this.containerElement.style.maxwidth = (this.options.width || 600) + 'px';
      this.containerElement.style.maxheight = (this.options.height || 600) + 'px';
      // 실제 슬라이드될 요소들을 검색
      this.slideElements = this.element.querySelectorAll('.main_feed_img_container .main_feed_img');
      // 이전/다음 버튼 요소들을 검색
      this.prevElement = this.element.querySelector('.main_feed_img_button .main_feed_img_prev');
      this.nextElement = this.element.querySelector('.main_feed_img_button .main_feed_img_next');
      // 슬라이드 요소의 개수를 파악
      this.slideLength = this.element.querySelectorAll('.main_feed_img_container .main_feed_img').length;
      // 각 버튼에 이벤트를 등록
      // 아래 이벤트 등록할 때 화살표 함수는 필수!(현재 코드 구조에서만..)
      // 화살표 함수 안의 this는 생성될 때 위치를 참조하기 때문.
      this.prevElement.addEventListener('click', () => {
        this.prevSlider()
      });
      this.nextElement.addEventListener('click', () => {
        this.nextSlider()
      });
      // 제공받거나 기본값은 슬라이드 번호를 기준으로 슬라이드를 시작.
      this.goToSlide(this.slideIndex);
    }
    goToSlide(index) {
      // 모든 슬라이드 요소를 반복.
      this.slideElements.forEach((el, i) => {
        // 반복 중 슬라이드가 입력받은 번호(index)라면 보이는 클래스를 추가해서 나타나게.
        if (i === index) {
          el.classList.add('show');
        // 나머지 슬라이드는 보이는 클래스를 삭제해서 숨겨지게.
        } else {
          el.classList.remove('show');
        }
      });
    }
    prevSlider() {
      // 현재 슬라이드 번호가 0보다 작아지려고 하면 최댓값을 가지게.
      if (this.slideIndex <= 0) {
        this.slideIndex = this.slideLength - 1;
      } else {
        // 현재 슬라이드 번호를 하나씩 줄임.
        this.slideIndex -= 1;
      }
      // 위에서 계산한 슬라이드 번호에 맞게 슬라이드를 동작시킴.
      this.goToSlide(this.slideIndex);
    }
    nextSlider() {
      // 현재 슬라이드 번호가 슬라이드 개수보다 커지려고 하면 최솟값을 가지게.
      if (this.slideIndex >= this.slideLength - 1) {
        this.slideIndex = 0;
      } else {
        // 현재 슬라이드 번호를 하나씩 늘림.
        this.slideIndex += 1;
      }
      // 위에서 계산한 슬라이드 번호에 맞게 슬라이드를 동작시킴.
      this.goToSlide(this.slideIndex);
    }
  }
  
  // 첫 번째 슬라이드를 만듦.
 new MymySlider('feed_img_slider1');
  // 두 번째 슬라이드를 만듦.
  new MymySlider('feed_img_slider2');
  // 세 번째 슬라이드를 만듦.
  new MymySlider('feed_img_slider3');
  // 네 번째 슬라이드를 만듦.
  new MymySlider('feed_img_slider4');
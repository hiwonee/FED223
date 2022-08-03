// 보그 PJ 갤러리 페이지 JS - gallery.js


///////////////// jQB ////////////////////////////
$(()=>{ 

    // 스와이퍼 설정하기 ////////////////
   
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, /* 한 화면 당 슬라이드 개수 */
        spaceBetween: 30, /* 슬라이드 사이간격 (px) */


        // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 200px
            200: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 700px
            700: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }, ////////// swiperjs.com/swiper-api에서 screen size 찾아서 보니 저거였음

        slidesPerGroup: 1, /* 한 번에 넘어가는 그룹 수 */
        loop: true, /* 무한루프 (기본값: false) */
        loopFillGroupWithBlank: true, /* 옆에 빈칸이 있으면 블랭크 */
        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
	    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        // 한 화면에 

        pagination: {
          el: ".swiper-pagination", /* 블릿설정 */
          clickable: true,/* 블릿클릭이동가능 */
        },
        navigation: {
          nextEl: ".swiper-button-next", /* 다음버튼 */
          prevEl: ".swiper-button-prev", /* 이전버튼 */
        },
        autoplay: { /* 자동넘김 .. api 잘 확인 */
            delay: 2000, /* 시간 간격 */
            disableOnInteraction: false,
            // 상호작용이 없으면 다시 재시작(flase일 때)
          },
        })
      


}); /////////////////// jQB ///////////////////////
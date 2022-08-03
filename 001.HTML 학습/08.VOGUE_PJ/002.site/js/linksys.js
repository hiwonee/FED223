// 보그 PJ 링크 시스템 JS - linksys.js /////////////

$(()=>{ //////////////////// jQB //////////////////////////


    // 로고 클릭시 첫페이지 이동하기 ////////////////////
    $(".logo a").click(()=>location.href='index.html');

    // GNB 링크 셋팅 ////////////////////////////
    // 대상: .gnb a
    $('.gnb a,.mognb a').click(function(e){
        // a 기본 이동 막기 
        e.preventDefault(); /* 휠이 안되고~~ 뭐가 안되고 이벤트 막아주는 거라 그렇대 */

        // 1. 클릭된 a요소의 글자 읽기
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자 변환
        // (참고) toUpperCase() 대문자 변환
        // trim()은 앞 뒤 공백제거
        console.log(txt);

        // 2. 서브페이지 이동하기
        if(txt!=="search") /* 만약 txt가 서치가 아니면 ~~ 검색이 아니면을 써준 이유는 검색은 이동하지 않을거거등 */
            location.href = 'category.html?cat='+encodeURIComponent(txt);

            // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
            // cat=카테고리명
            // 이것을 받아서 페이지 셋업을 한다!
            // 이렇게 데이터를 url로 전달하는 방식을 GET방식이라고 함!~!!~
            // 특수문자가 있으므로 (time & gem) 이것을 보낼 때 encodeURIComponent()로 변환하여 보내고,
            // 받는 곳에서는 decodeURIComponent()로 복원함@!!
        
    }); /////////////////////// click //////////////////

}); /////////////////////// jQB //////////////////////////
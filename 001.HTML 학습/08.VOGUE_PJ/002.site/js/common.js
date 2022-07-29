//  보그 PJ 공통 기능 JS - common.js

///////// 제이쿼리 블록 ///////////////////////
$(()=>{
    
    // 호출확인
    console.log("로딩완~")

    /********************************************************* 
    [페이지 스크롤시 변경 구현하기 ]
    
    - 이벤트 : scroll
    - 제이쿼리 메서드 : scroll()
    - 대상 : window
    *********************************************************/

    /* window.addEventListener("scroll",function(){
        console.log~~
    }); */

    let scTop; // 스크롤 위치 변수

    // 변경 대상 : 상단영역!(#top)
    let topA = $("#top");
    // top으로만 쓰지 않기 문제가 좀 생긴대

    // .cont 밑 section 개수 보려곻ㅎㅎ
    // console.log($(".cont section"));

    // 위치값 보기 offset() 위치값보기 메서드, 위에서부터 위치값보기 offset().top
    // console.log($(".cont section").eq(1).offset().top);

    // 각 등장액션 위치변수
    const scpos = [];
    // 스크롤 등장요소 (.scAct)만 위치값을 배열에 저장
    /* $(".scAct").each(()=>{}); */ /* each문 돌려서 setup 잡기 */
    $(".scAct").each((idx,ele)=>{ // idx 순번, ele 요소
        // console.log(idx,ele);

        // 위치값 변수에 넣는다
        scpos[idx] = $(ele).offset().top;
        // offset().top -> 맨위에서부터 top 위치값

    }); ////// each ////////////////////
    // console.log($(".cont section").eq(1).offset().top);

    // 위치 배열값 확인.. 각각 확인 위해 forEach scAct 준 애들 다 뜸
    scpos.forEach((val)=>console.log(val));
    // console.log(scpos[0]);


    // 윈도우에 스크롤 이벤트 설정하기~~
    $(window).scroll(function(){
        // 스크롤 위치값을 아는게 중요!!!

        // 윈도우 자신,, this
        scTop = $(this).scrollTop();

        // scrollTop() 메서드 -> 세로 스크롤 바의 위치값
        // scrollLeft() 메서드 -> 가로 스크롤 바의 위치값

        // 스크롤 확인
        // console.log("스크롤 중!!");
        // 스크롤확인+위치값
        console.log(scTop);

        // 1. 상단 영역 슬림 변경 클래스 on 주기
            // 스크롤 위치 기준은 100px 이상일 때!
            // 스크롤을 한번 작게 작동하면 그 값은 100px이동함~
        if(scTop >= 100){
            //상단영역에 클래스 on주기~~
            topA.addClass("on");
        } ////////// if 문 //////////////////////
        else{
            // 100 미만일 때는 클래스 on 빼라고~~~
            topA.removeClass("on");
        } ///////// else 문 ////////////////////


    }); //////////////////////// 스크롤 /////////////////////////

}); //////// jQB /////////////////////////////////////////////////
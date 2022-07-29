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

    // 번경 대상 : 위로 가기 버튼 (.tbtn)
    let tbtn = $(".tbtn");

    // .cont 밑 section 개수 보려곻ㅎㅎ
    // console.log($(".cont section"));

    // 위치값 보기 offset() 위치값보기 메서드, 위에서부터 위치값보기 offset().top
    // console.log($(".cont section").eq(1).offset().top);

    // 각 등장액션 위치변수
    const scpos = [];
    // 위치 값을 한 곳에 다 넣으려고
    // 상수네? 못바꾸게 하려고,, 아아 변수 빈 배열을 저장했어?!!
    // [] -여기에 담으면 되네,, 저 안은 파티션을 나눠서 넣을 수 있는~~
    // 가방을 못바꿔,, const로 못건들게. let이면 이름맘에들어! 하고 다른곳에 쓰고 다른거 담을 수 있음
    

    //각 등장 액션 요소 변수 담기
    const scAct = $(".scAct");

    // 각 등장 위치 보정값 (화면 크기 기준으로 고정값 만들어놓긔,,)
    const gap = $(window).height(); /* 높이값 딱 나옴 */
    // const gap = $(window).height() / 2; 이러면 절반인데 많이 올라가서,, 
    // height()는 선택요소의 높이값
    // width()는 ,,, 가로값
    // ()를 붙여주면 값을 구해와라 라는 의미,,

    // 스크롤 등장요소 (.scAct)만 위치값을 배열에 저장
    /* $(".scAct").each(()=>{}); */ /* each문 돌려서 setup 잡기 */
    scAct.each((idx,ele)=>{ // idx 순번, ele 요소
        // console.log(idx,ele);

        // 위치값 변수에 넣는다
        scpos[idx] = $(ele).offset().top;
        // offset().top -> 맨위에서부터 top 위치값

    }); ////// each ////////////////////
    // console.log($(".cont section").eq(1).offset().top);

    // 위치 배열값 확인.. 각각 확인 위해 forEach scAct 준 애들 다 뜸
    scpos.forEach((val)=>console.log(val));
    // console.log(scpos[0]);
    // scpos를 각각 돌아, 밸류 그 밸류 콘솔에 찍어
    // console.log(scpos) 이렇게 해도 되겠지!

    /************************************************* 
        함수 명 : scAction
        기능 : 스크롤 등장액션 주기
    *************************************************/

        function scAction(n){ //n은 순번값 seq할까 하다가 n으로 하심
            // 해당 영역일 경우 해당 요소에 클래스 on넣기~
            if(
                // 등장요소 스크롤 위치 전 보다 크고
                scTop > scpos[n] - gap && 
                // 등장요소 스크롤위치보다 작음
                scTop < scpos[n]
                )
                {
                //변경 대상: .scAct -> scAct변수
                scAct.eq(n).addClass("on");
    
            } ////////////// if ///////////////

        }///////////// scAction함수 //////////////////////////


        // 보통 브라우저 화면은 처음에 정해진 크기로 보는게 일반 유저들의 사용 습관.
        // 그러나 개발자가 실시간으로 화면 크기를 조정하거나 일반 유저가 화면 크기 전환을 할 경우 처음에 읽었던 위치값이 바뀌게 될 때 등장액션 위치에 문제가 생김....
        // 그래서 화면 크기가 변할 때 업데이트가 필요함.. 
        // 이 때 사용할 jQuery 메서드 : resize()
        // $ (window).resize(()=>{});

        
        // 등장 요소 위치 업데이트 하기
        $ (window).resize(()=>{
            // // 스크롤 등장요소 (.scAct)만 위치값을 배열에 저장
            scAct.each((idx,ele)=>{ // idx 순번, ele 요소
                // console.log(idx,ele);
        
                // 위치값 변수에 넣는다
                scpos[idx] = $(ele).offset().top;
                // offset().top -> 맨위에서부터 top 위치값
        
            }); ////// each ////////////////////

            // 위치 배열 값 확인!
            console.log(scpos);
        });



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

        // 2. 스크롤 등장 액션
/*         if(
            // 등장요소 스크롤 위치 전 보다 크고
            scTop > scpos[0]-600 && 
            // 등장요소 스크롤위치보다 작음
            scTop < scpos[0]
            )
            {
            //변경 대상: .scAct -> scAct변수
            scAct.eq(0).addClass("on");
            // eq(0) 0번째
          /* 만약에 스크롤 탑이 ㅇㅇ보다 크고 ㅇㅇ보다 작고 */

        //} ////////////// if ////////////////////////////// 

        // 20개면 이걸 20개 만들거야?? 아니지,, 함수로 만들어줘
        /* else if (
            //등장요소 스크롤 위치 전 보다 크고
            scTop > scpos[1]-600 && 
            // 등장요소 스크롤위치보다 작음
            scTop < scpos[1]
            )
            {
            //변경 대상: .scAct -> scAct변수
            scAct.eq(1).addClass("on");
        } */

        //2. 스크롤 등장액션 주기
        // 등장요소 만큼 scAction함수 호출하기!!

        // 요소로 호출하기
        scAct.each((idx)=>scAction(idx));
        // each() 에서드는 제이쿼리 전용임!!!
        // each((idx,ele){}) -> 첫번째 순번만 이용해서 each((idx){}) 이렇게 전달변수를 하나만 사용함

        /* 배열.forEach 써도 된다,, */

        // 또는 배열로 호출하기 val배열값 idx순번
        // scpos.forEach((val,idx)=>scAction(idx));
        // forEach()는 배열/요소용 for문
        // forEach((val,idx)=>{}) 두번째 전달 값 순번을 사용하므로 전달변수를 2개 모두 써야,, 이건 each도 마찬가지지 ele부분
        // forEach는 순수요소.forEach,, 순수배열.forEach 자바잖아,, 


        // 3. 위로가기 버튼 보이기 / 숨기기
        if (scTop >= 300){ //300 이상일 때
            // 변경대상: .tbtn -> tbtn 변수
            tbtn.addClass("on");
        } ////////// if ////////////////
        
        else { // 300 미만일 때
            tbtn.removeClass("on");
        } ///////// else //////////////////


    }); //////////////////////// 스크롤 /////////////////////////
    ////////////////////////////////////////////////////////////////////


    // 위로 가기 버튼 클릭시 맨 위로 스크롤 애니메이션 (스무스하게,, 그 로봇 pj랑 다름.. 그거랑 같이 쓰면 에러,,나나 이상해진대~~)
    // 대상: .tbtn -> tbtn 변수
    tbtn.click(()=>{
        // 변경 대상: html, body 이걸 같이 써서 스크롤 위치 변경 대상으로,,,?
        // -> 전체 스크롤 위치 이동 대상
        // 사용 메서드 : animate()    animate({속성},시간 이징)
        // 스크롤 위치 이동 속성은 scrollTop
        $("html,body").animate({
            // scrollTop:"위치"  스크롤 탑은 제이쿼리용
            scrollTop:"0" /* 세미콜론 하지말어~~~~ */
        },800,"easeOutQuart");
    }); ///////// click ///////////////////////////////

}); //////// jQB /////////////////////////////////////////////////



// 스크롤 등장 요소 (.scAct)만 위치값을  배열에 저장 더짧게~
// $(window).resize(()=>{scAct.each((idx,ele)=>scpos[idx]=$(ele).offset().top); });
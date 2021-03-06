// 제이쿼리 기본 JS - main.js 

// jQB //////////////////////////////////////////
$(() => {

    // 자주 쓰는 애들은 변수에 담아놓으신대
    // 0. 주인공들 변수 할당하기!!
    // (1) 미니언즈
    let mi = $(".mi");

    // (2) 건물 li
    let bd = $(".building li");

    // (3) 버튼들
    let btns = $(".btns button");

    // (4) 메시지 박스
    let msg = $(".msg");



    // 배열 응용 예시 let mm = ["해","달","별","달","별","달","별","달","별","달","별"];
    // 저기 text()에 text(mm, idx)이러나,,

    // 1. 건물에 각방 번호 넣기
    bd.each((idx, ele) => {
        // idx는 순번, ele는 요소
        // text() 텍스트 넣기
        $(ele).text(idx);
        // 9번방에 좀비 넣기
        if (idx === 9)
            $(ele).append('<img src="images/mz1.png" alt="좀비1" class="mz">'); /* 꼭 ele에 옷 입히긔 */
        else if (idx === 7)
            $(ele).append('<img src="images/mz2.png" alt="좀비2" class="mz">');
        else if (idx === 1)
            $(ele).append('<img src="images/zom.png" alt="좀비들" class="mz">');
        else if (idx === 2)
            $(ele).append('<img src="images/inj.png" alt="주사기" class="inj">');

    }); //// each ////////////////////////////////////////

    // 좀비는 모두 숨기기: hide()
    $(".mz").hide();

    // 2. 버튼 셋팅하기
    // 모든 버튼은 숨기고 첫번째 버튼만 보여
    // 버튼.숨겨().첫번째().보여()
    // btns.hide().first().show();
    // btns.hide().eq(4).show();
    // 다 숨기고, 4번부터 보여
    // 다 숨기고 마지막 버튼만 보여줘
    btns.hide().last().show();

    // 3. 공통 구현 함수 만들기
    // 각 스텝에서 미니언즈가 할 공통 기능 함수 구현!
    // const actMini = ()=>{}; /* actMini 에 함수! */
    const actMini = (ele, seq, fn) => {
        // ele= 버튼 자신, seq= 이동할 li 순번, fn= 실행 함수가 들어올것


        // 0. 버튼 자신 없애기!!
        // 없애기 방법 : hide(), slideUp()<-얘는 기본 시간이있음, fadeOut()
        $(ele).slideUp(300);

        // + 메시지 없애기 다음 메시지 나와야하니깜
        msg.hide();


        // 1. 위치이동을 위한 위치값 알아오기 (대상: building li)
        // eq(순번) -> 순번요소 선택 매서드

        let tg = bd.eq(seq); // 타겟 li.. bd.eq(seq)가 계속 반복되니깜
        
        // let tval = bd.eq(seq).offset().top;
        let tval = tg.offset().top;
        // let lval = bd.eq(seq).offset().left; 보정해주기
        let lval = tg.offset().left + tg.width()/2 - mi.width()/2;
        // left 위치 보정으로 미니언즈 li의 중앙위치!~
        // 계산 : left 위치에 li가로절반 더해서 밀어주고, 미니언즈 가로 절반 빼줘서 가운데로~~~
        // offset()메서드 - 요소세팅값(위치, 크기)
        // top, left, width, height 속성값 사용!!

        // 2. 위치이동 (이동대상: 미니언즈)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, "easeInOutElastic", fn);
        ////////////// animate ///////////////////

    }; ////////////////// actMini 함수 ///////////////////////
    //////////////////////////////////////////////////////////


    // 4. "들어가기"버튼 클릭시

    btns.first().click(function () {

            // 이동후 함수
            let fn = () => {
            // let fn = function(){
                //  arrow 펑션은 최상위를 this로 잡아 function(){}으로 한 건 .mi 요 게 this로 뜨는데!! 애로우로 잡으면 버튼이 잡히지


                // 메시지 변경하기 - 위에 할당해놓자 + 보이기
                msg.text("와~! 아늑하다! 옆방으로 가보자!")
                    .show();

                //다음 버튼 보이기
                $(this).next().fadeIn(300);
                // console.log(this);
                // this 키워드는 누구인가?
                // function(){} 일반 익명 함수에서는 가장 가깝게 싸고 있는 대상이 주인공임~~
                // mi의 콜백 함수로 실행하므로 this는 mi가 됨!!
                // 그.러.나!!!!!!!
                // 화살표 함수 ()=>{}는 this 키워드의 주인공은 최상위 이벤트 주인공인 버튼 자신~~~

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 8, fn);
        }) //////////////// 들어가기 click /////////////////

        // 이어서 할 것이기 때문에 세미콜론 하지마~~~ .next가 위에 btns.first 얘네랑 이어지는 것임~~

        // 5. "옆방으로"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 좀비 나타나기 (2s후)
                bd.eq(9).find(".mz").delay(2000).fadeIn(400,
                    // 9번 방에 .mz 찾아, 2초뒤에, 0.4초동안 페이드인
                    ()=>{ // 좀비 나온 후
                        
                        // 메시지 br 태그 쓸거라 html, 태그 안에서 백틱 사용가능,,,?
                        msg.html(` 
                        악!;;;; 좀비! <br> 어서피하자!!!
                        `)
                        .css({left:"-100%"})// 메시지 위치
                        .fadeIn(200);//보이기

                        //다음 버튼 보이기
                        // btns.eq(2).fadeIn(300);
                        $(this).next().fadeIn(300);
                        // 원래 페이드인 바깥에 놨는데, 좀비미니언즈랑 같이 등장하게 하려고!!
                        
                    }); ////////////// 페이드인 //////////////////

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 9, fn);
        }) ///////////////////// 옆방으로 click //////////////////////////

        // 6. "윗층으로 도망가!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html(`여긴 없겠지?`).fadeIn(200);

                // 좀비보이기
                bd.eq(7).find(".mz").delay(1000).fadeIn(400,()=>{
                    // 메시지 변경하기
                    msg.html(`악! 여기도!!`);
                    //다음 버튼 보이기
                    $(this).next().fadeIn(300);
                    
                }); /////////// 페이드인 ////////////
                

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 7, fn);
        }) ///////////////// 윗층으로 도망가 click //////////////////////////

        // 7. "다시 옆방으로!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {
                // 첫번째 메시지
                msg.html('여긴없겠지?').fadeIn(200).delay(1000).fadeIn(200,
                    // 두번째 메시지
                    ()=>{msg.html('그래도 무서우니<br>윗층으로 가자!')
                    //다음 버튼 보이기
                    $(this).next().fadeIn(300);
                }); ///////////// fadeIn /////////////////////
                // delay() 다음 지연 시간 앞에 사용 .. 지연시간은 애니메이션 앞에서 효과!!
                
                

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 6, fn);
        }) ///////////////// 다시 옆방으로 click //////////////////////////

        // 8. "무서우니 옆방으로!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 무.서.워...메시지
                msg.text('무').fadeIn(200/* 처음에 안보이니까 페이드인 시켜야 */)
                .delay(500).fadeIn(200,()=>msg.text('무.'))
                .delay(500).fadeIn(200,()=>msg.text('무.서'))
                .delay(500).fadeIn(200,()=>msg.text('무.서.'))
                .delay(500).fadeIn(200,()=>msg.text('무.서.워'))
                .delay(500).fadeIn(200,()=>msg.text('무.서.워.'))
                .delay(500).fadeIn(200,()=>msg.text('무.서.워..'))
                .delay(500).fadeIn(200,()=>msg.text('무.서.워...'))
                .delay(500).fadeIn(200,()=>{
                    // 7번방 좀비가 올라와서 달려드는 장면!
                    bd.eq(7).find(".mz")
                    .animate({ // 좀비 윗층으로 올라옴
                        bottom:bd.eq(7).height()+"px"
                        // mz가 앱솔에 바텀0 라0이라 바텀을 줘야겠네!
                        // 여기서 몇 번째는 중요하지 않다??? 높이값을 위한거였나봐
                    },300,"easeOutElastic")
                    .delay(500).animate({ // 달려듬~
                        right: (bd.eq(7).width()*1.1)+"px"
                        // right: (bd.eq(7).width()+bd.eq(7).width()/3)+"px"
                    },1000,"easeInExpo",/* 달려든 다음 메시지를 위한 펑션 */
                    ()=>{
                        // 물린 후 대사
                        msg.css({left:"-110%"}).html('아악☠치료주사💉')


                        // 미니언즈 좀비 이미지 변경(1초후) 이건 걍 setTimeOut임
                        setTimeout(()=>{
                            mi.find("img").attr("src","images/mz1.png");
                        },1000);
                        // 다음 버튼 보이기
                        $(this).next().fadeIn(300);
                    }); //////////// animate ////////////////
                }) ; //////////////////fadeIn //////////////////////
                

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 4, fn);
        }) ///////////////// 무서우니 옆방으로 click //////////////////////////

        // 9. "치료주사방으로!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 주사기 돌기
                $(".inj").css({
                    transform:"rotate(-150deg)",
                    transition: ".5s .5s",
                    zIndex: 9999 // z-index나 opacity 숫자만 주면 먹는애들이 있대
                }); ///// css //////

                // 미니언즈로 다시 태어나다
                setTimeout(()=>{

                    // 이미지변경
                    mi.find("img").attr("src","images/m2.png");

                    // 대사 
                    msg.html("이제 조금만 더 <br> 가면 탈출!")
                    .css({left:"-150%"})
                    .fadeIn(200)

                },1000);
                
                //다음 버튼 보이기
                $(this).next().fadeIn(300);

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 2, fn);
        }) ///////////////// 치료주사방으로 click //////////////////////////

        // 10. "3번 방으로!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html("어서 윗층으로 가자!")
                .fadeIn(200);
                
                
                //다음 버튼 보이기
                $(this).next().fadeIn(300);

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 3, fn);
        }) ///////////////// 3번 방으로 click //////////////////////////
        
        // 11. "1번 방으로!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html("이제 곧 탈출이다!")
                .fadeIn(200);
                
                //다음 버튼 보이기
                $(this).next().fadeIn(300);

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 1, fn);
        }) ///////////////// 1번 방으로 click //////////////////////////

        // 12. "헬기를 호출!"버튼 클릭시
        .next().click(function () {
            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html("도와줘요!").fadeIn(200);

                // 1번 좀비들이 나타나서 달려듦!
                bd.eq(1).find(".mz").fadeIn(300).animate({
                    right: bd.eq(1).width()+"px"
                },3000,"easeInExpo");

                //헬기 등장하기
                $(".heli").animate({
                    left:"20%"
                },4000,"easeOutBack",
                function(){
                    // 헬기 도착 후 탑승 이미지로 변경
                    $(this).attr("src","images/heli2.png");
                    // 미니언즈 없애기
                    mi.hide();
                })
                .delay(500).animate({ // .5초 쉬었다가
                    left: "70%" // 다시 오른쪽 끝으로 이동
                },4000,"easeInOutCirc",function(){ // 끝쪽에서 조정사 좀비로!
                    $(this).attr("src","images/heli3.png");
                })
                .delay(300)
                .animate({ // 아주 천천히 나감!
                    left:"100%"
                },5000,"linear",()=>{
                    // 최종 마무리 구역 /////

                    // 간판 떨어뜨리기
                    // 1단계: 중간까지 떨어짐
                    // -> 간판에 class "on"주기
                    // $(".tit").addClass("on");
                    let tit = $(".tit");
                    tit.addClass("on");
                    setTimeout(()=>tit.addClass("on2"),3000); /* 3초후 2단계 다 떨어짐~~ ////// 간판에 class "on2"추가 */
                    /* 만약 저 addClass("on2")여기에 ;붙이고 싶다? 그럼 중괄호 필요해 이거 그냥 중괄호 생략한 함수임!! */

                    // 빌딩 무너뜨리기
                    // 간판 떨이진 후 실행(6초후)
                    setTimeout(()=>bd.parent().addClass("on"),6000);
                    
                    // parent()는 부모요소인 .building 선택

                }); /// animate ///////////
                
                //다음 버튼 보이기
                $(this).next().fadeIn(300);

            }; //////////////// fn ///////////////////////

            // 공통 기능 구현 함수 호출!
            actMini(this, 0, fn);
        }) ///////////////// 헬기를 호출 click //////////////////////////



        // 간판에 마우스 오버시 / 아웃시 색상변경!
        // hover(함수1,함수2)
        // 함수1은 오버시, 함수2는 아웃시 실행
        $(".tit").hover(function(){ // over
            $(this).css({
                backgroundColor: "blue",
                color: "pink",
                transition: "none"
                // transition: "none" 이러면 무너질때 툭 떨어져ㅜ 그래서 css에서
                // 트랜지션에 트랜스폼만 적용에 넣음!!
            });
        },
        function(){ // out
            $(this).css({
                backgroundColor: "pink",
                color: "yellow"
            });
        }); //hover //////////////



    // 4. "들어가기" 버튼 클릭시 - 원래 3번이었음,,
    // btns.first().click(function(){

    // // 0. 버튼 자신 없애기!!
    // // 없애기 방법 : hide(), slideUp()<-얘는 기본 시간이있음, fadeOut()
    // $(this).slideUp(300);

    // // + 메시지 없애기 다음 메시지 나와야하니깜
    // msg.hide();


    // // 1. 위치이동을 위한 위치값 알아오기 (대상: building li)
    // // 8번방으로 갈 거 - 8번째 li
    // // eq(순번) -> 순번요소 선택 매서드
    // let tval = bd.eq(8).offset().top;
    // let lval = bd.eq(8).offset().left;
    // // offset()메서드 - 요소세팅값(위치, 크기)
    // // top, left, width, height 속성값 사용!!


    // // 2. 위치이동 (이동대상: 미니언즈)
    // mi.animate({
    //     top: tval+"px",
    //     left: lval+"px"
    // },1000, "easeInOutElastic",
    // function(){
    //     // call back
    //     // 이동 애니 후 

    //     // 메시지 변경하기 - 위에 할당해놓자
    //     msg.text("와~! 아늑하다! 옆방으로 가보자!")
    //     .show();
    //     //다음 버튼 보이기
    //     btns.eq(1).fadeIn(300);
    // }); /////////// animate //////////////

    // btns.first~~~~~부터 여기까지 계속 반복이니까 함수로 빼자! 
    // 버튼 자신 - this의 정보 필요하고, 위치값 정보 필요하고, 애니 이동 후에 function(){}이건 별도로 뽑아내야함~~~


    // }); //// click ///////////////////////////

}); //// jQB /////////////////////////////////////////
//////////////////////////////////////////ready 준비하라 이거지
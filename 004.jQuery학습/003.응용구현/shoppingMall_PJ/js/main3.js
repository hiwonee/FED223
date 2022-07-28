// 쇼핑몰 배너 JS - 03.페이드효과 //

    ////////// 제이쿼리 블록 ///////////////////////////
    $(()=>{

        // 0. 호출확인
        console.log("로딩완!");


        /*************************************************************** 
        [페이드 배너 요구사항] 

        1. 오른쪽 버튼을 클릭시 다음 슬라이드가 보임!!
        2. 윗쪽 버튼 클릭시 이전 슬라이드가 보임.
        3. 모든 배너는 무한 이동을 원칙으로 함.
        4. 배너 이동시 배너의 순번을 블릿으로 표시한다.
           1) 슬라이드 이미지 태그에 특정 값을 넣어서 그 값을 읽게 하기 - !!! data-!!!!
           2) 영상보기,, 영상있나,,,
        5. 자동 넘김이 세팅되어 있으며 사용자가 조작시 자동넘김이 멈춰지고 일정시간 놔두면 다시 자동넘김이 작동함.

        ***************************************************************/

        // 1. 무조건 클릭시 이동되게 해보기
        // 이벤트 대상: .abtn
        // 이벤트 : click() 메서드 사용
        // 양쪽 버튼 구분 : .ab1(왼쪽) / .ab2(오른쪽버튼)
        // 변경대상: #slide li
        // 변경내용: slide의 left값을 이동하여 애니메이션 함
        let slide = $("#slide li"); // li까지 선택함

        // 변경에 사용할 제이쿼리 메서드 : animate({CSS 속성},시간,이징,함수)
        

        // 변경 대상: 블릿!! 블릿 - .indic li
            let indic = $(".indic li");

        // 광클 금지 상태 변수
        let prot = 0; // 1-불허용, 0- 허용 0이 false, 1이 true잖아

        // 애니메이션 시간 변수
        const aniT = 600;


        // 애니메이션 이징 변수
        const aniE = "easeOutQuint";

        // 페이드 기능을 위한 초기화 설정
        // 슬라이드 li가 하나만 빼고 모두 불필요!!
        // display:none 처리함!! -> hide()메서드
        // slide.hide()  #slide li를 slide로 묶어줬잖아
        slide.hide().first().show();
        // 슬라이드li.다숨겨().첫번째().보여()

        // 현재 슬라이드 순번 변수
        let sno = 0; 

        // 버튼 클릭 설정
        $(".abtn").click(function(){
            // console.log("진입",prot);
            
            // 광클금지
            if(prot) return; /* prot가 true냐?? */
            prot = 1; //잠금!
            setTimeout(()=>prot=0,aniT) /* 한번만,,, 0.6초후 prot=0으로 잠금해제..*/

            // console.log("통과",prot);

            // 자동 넘김 지우기 함수 호출!
            clearAuto();

            // 1. 오른쪽 여부
            // is(클래스/아이디명)-> 선택요소의 해당여부 리턴
            let isR = $(this).is(".ab2");
            // 호출확인(방향확인)
            // console.log("오른쪽 버튼인가?", isR );
            // console.log("오른쪽 버튼인가?", $(this).is(".ab2"));
                // is메서드 x .is y x가 y인가 
            
            // 2. 버튼별 분기하여 기능구현

            if(isR){// 오른쪽 버튼
                
                // fadeIn으로 다음 순번 보이기
                // eq(순번) - sequance,,, eq -> 해당 순번 선택!

                slide.eq(sno).fadeOut(aniT,aniE); // 현재 슬라이드 숨기기

                sno++; // 슬라이드 순번 1 증가

                // slide.eq().fadeIn(aniT,aniE); 
                // 분기
                if(sno===slide.length) sno=0; // 슬라이드 한계값 체크 처음으로 변경! 한계값이냐? 그럼 처음으로 돌아가
                console.log("현재슬번:",sno); // slide.length는 li개수
                slide.eq(sno).fadeIn(aniT,aniE); // 다음 순번 슬라이드 나타남

                

            }/////////////////////// if ////////////////////

            else {///// 왼쪽 버튼

                // fadeIn으로 이전 순번 보이기
                // eq(순번) -> 해당 순번 선택

                slide.eq(sno).fadeOut(aniT,aniE); // 현재 슬라이드 숨기기

                sno--; // 슬라이드 순번 1 감소

                // slide.eq().fadeIn(aniT,aniE); 
                // 분기
                if(sno===-1) sno=slide.length-1; 
                // 슬라이드 한계값 체크 처음으로 변경! 한계값이냐? 그럼 처음으로 돌아가
                console.log("현재슬번:",sno); // slide.length는 li개수
                slide.eq(sno).fadeIn(aniT,aniE); // 다음 순번 슬라이드 나타남
                
            }///////////////////// else ///////////////////////

            
            // 3. 등장 슬라이드와 같은 순번의 블릿변경하기
            // 현재슬라이드번호(sno)와 같은 순번의 블릿 클래스 on
            indic.eq(sno).addClass("on")
            // 다른 형제들 블릿 클래스제거
            .siblings().removeClass("on");

            
        }); /////////// click ///////////////////////////

        // 블릿 순번을 결정하기 위한 슬라이드 고유번호
        // 새로운 속성 만들기!!!
        // 새로운 속성은 "data-"라는 이름으로 시작하면 만들 수 있다!!
        // 이게 바로 w3c 공식문법
        // 우리는 각 슬라이드에 each를 사용하여 data-seq 라는 이름의 순번(sequency..?)저장용 속성을 만들고자 한다!!!!!!
        // each()메서드   -   for문을 안 써도 됨~~~~~
        // each((idx,ele)=>{})
        // idx -> 첫번째 전달변수 : 순번
        // ele -> 두번째 전달변수 : 요소 자신
        
        // 속성넣기 제이쿼리 메서드는?? 
        // attr(속성명,값)
        // attr(속성명) -> 속성값 읽기
        // attr(속성명, 값) -> 속성값 세팅

        //자바스크립트의 속성 세팅은?  setAttribute(속성명, 값)
        //자바스크립트의 속성 읽기는?  getAttribute(속성명)

        


        // 배너 자동 호출 넘기기 세팅 //////
        // 인터발 함수 : setInterval(함수, 시간)
        // 인터발 지우기 함수 : clearInterval(변수)
        // 타임아웃함수 : setTimeout(함수,시간)
        // 타임아웃 지우기 함수 : clearTimeout(변수)
        // 타이밍 함수는 변수에 할당해야 지울 수 있다~~~

        // 인터발용 변수
        let autoI;

        // 타임 아웃용 변수
        let autoT;

        // 인터발 최초호출!
        autoSlide();

        // 인터발 호출 함수
        function autoSlide(){
            autoI = setInterval(()=>{
                
                    // fadeIn으로 다음 순번 보이기
                    // eq(순번) - sequance,,, eq -> 해당 순번 선택!
    
                    slide.eq(sno).fadeOut(aniT); // 현재 슬라이드 숨기기
    
                    sno++; // 슬라이드 순번 1 증가
    
                    // slide.eq().fadeIn(aniT); 
                    // 분기
                    if(sno===slide.length) sno=0; // 슬라이드 한계값 체크 처음으로 변경! 한계값이냐? 그럼 처음으로 돌아가
                    console.log("현재슬번:",sno); // slide.length는 li개수
                    slide.eq(sno).fadeIn(aniT); // 다음 순번 슬라이드 나타남
    
                    
                // 3. 등장 슬라이드와 같은 순번의 블릿변경하기
                // 현재슬라이드번호(sno)와 같은 순번의 블릿 클래스 on
                indic.eq(sno).addClass("on")
                // 다른 형제들 블릿 클래스제거
                .siblings().removeClass("on");
                       
            }, 3000);
        } /////////////////// autoSlide함수 ////////////////////////

        /// 인터발 지우기 함수 ////////////////////////////////
        function clearAuto(){
            // 인터발 지우기
            clearInterval(autoI);

            // 일정 시간후 다시 인터발 호출 (다시 넘어가게 해줘야할거아냐)
            // setTimeout(autoSlide, 4000); /* 이러면 4초 있다가 또 3초 뒤에 움직이겠지 */
            // 이러고 클릭 광클 해봐 setTimeout쓰나미 옴 우르르 넘어갘ㅋㅋㅋㅋㅋㅋ

            // 타임아웃지우기(실행쓰나미방지!)
            clearTimeout(autoT);

            // 일정시간후 다시 인터발호출!
            autoT = setTimeout(autoSlide,4000);


        }//////////// clearAuto함수 ////////////////////////////////




        // 근본적 해결 소스 아님....!!!!!!
        /* setInterval(() => {
            $(".ab2").trigger("click");
        }, 3000); */
        // 제이쿼리 trigger(이벤트명) 메서드 -> 선택 요소에 강제 이벤트 발생 이벤트..


    }); ////////////////////////// jQB ///////////////////////////
    //////////////////////////////////////////////////////////////////
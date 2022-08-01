// 무한 이동 클릭형 배너 JS - index.js

////////// 제이쿼리 블록 ///////////////////////////
$(()=>{

    // 0. 호출확인
    console.log("로딩완!");

    /*************************************************************** 
    [가로방향 배너 요구사항]
    1. 오른쪽 버튼을 클릭시 배너는 오른쪽에서 왼쪽으로 이동하여 다음 슬라이드가 보임!!
    2. 왼쪽 버튼 클릭시 배너는 왼쪽에서 오른쪽 방향으로 이동하여 이전 슬라이드가 보임.
    3. 모든 배너는 무한 이동을 원칙으로 함.
    4. 배너 이동시 배너의 순번을 블릿으로 표시한다.
       1) 슬라이드 이미지 태그에 특정 값을 넣어서 그 값을 읽게 하기 - !!! data-!!!!
       2) 영상보기,, 영상있나,,,
    5. 자동 넘김이 세팅되어 있으며 사용자가 조작시 자동넘김이 멈춰지고 일정시간 놔두면 다시 자동넘김이 작동함.

    ***************************************************************/

    // 1. 무조건 클릭시 이동되게 해보기
    // 이벤트 대상: .abtn
    // 이벤트 : click() 메서드 사용
    // 양쪽 버튼 구분 : .lb(왼쪽) / .rb(오른쪽버튼)
    // 변경대상: #viewer ul
    // 변경내용: slide의 left값을 이동하여 애니메이션 함
    let slide = $("#viewer ul");

    // 변경에 사용할 제이쿼리 메서드 : animate({CSS 속성},시간,이징,함수)
    

    // 변경 대상: 블릿!! 블릿 - #indic li
        let indic = $("#indic li");

    // 광클 금지 상태 변수
    let prot = 0; // 1-불허용, 0- 허용 0이 false, 1이 true잖아

    // 애니메이션 시간 변수
    const aniT = 600;

    // 애니메이션 이징 변수
    const aniE = "easeOutQuint";

    $(".abtn").click(function(){
        // console.log("진입",prot);
        
        // 광클금지
        if(prot) return; /* prot가 true냐?? */
        prot = 1; //잠금!
        setTimeout(()=>prot=0,aniT) /* 한번만,,, 0.6초후 prot=0으로 잠금해제..*/

        // console.log("통과",prot);

        // 자동 넘김 지우기 함수 호출!
        // clearAuto();

        // 1. 오른쪽 여부
        // is(클래스/아이디명)-> 선택요소의 해당여부 리턴
        let isR = $(this).is(".rb");
        // 호출확인(방향확인)
        // console.log("오른쪽 버튼인가?", isR );
        // console.log("오른쪽 버튼인가?", $(this).is(".rb"));
            // is메서드 x .is y x가 y인가 
        
        // 2. 버튼별 분기하여 기능구현

        if(isR){// 오른쪽 버튼
            slide.animate({left:"-100%"},aniT,aniE,
            function(){ /* 이동 후 실행 함수 refunction,,재실행,, */
                // append(요소) 
                // -> 요소를 자식요소로 맨 뒤에 추가 또는 이동
                // $(this).append("<span>hahaha</span>");
                $(this).append($("li",this).first()) 
                /* li 옷 입히고 나자신의 밑에있는 li들,, 중 첫번째를 선택해서 append 뒤로 보내
                첫번째 li요소 선택  -> 맨뒤로 이동 */
                // $(this) - slide 
                // $(요소, this) -> 나 자신 하위요소
                // first() 첫번째 요소  여기서는 li중에 첫번ㅉ ㅐ요소
                .css({left:"0"}); /* 처음상태 */
                //동시에 left값을 0으로 변경!!

            }); //////////////////animate /////////////////

        }/////////////////////// if ////////////////////

        else {///// 왼쪽 버튼

    //  맨뒤 요소를 맨 앞에 이동 동시에 left값 -100% // 그 후 left값 0으로 애니메이션
            // 앞에 추가는 prepend()  // .find() 자손을 찾아라
            // prepend(요소) 자식 요소로 앞에 추가(이동)
            // find(요소) 자손 요소 찾기
            // last() 마지막요소
            slide.prepend(slide.find("li").last())
            // 동시에 left값 -100%
            .css({left:"-100%"})
            // 그 후 left값 0으로 애니메이션
            .animate({left:"0"},aniT,aniE); ////// animate ////////
            
        }///////////////////// else ///////////////////////

        // 블릿 순번 표시 변경하기
        // 3. 등장 슬라이드와 같은 순번의 블릿변경하기
        // 변경 내용: 블릿 li에 class="on"을 주고 나머지 li에는 class="on"을 지움.
        // 같은 순번 슬라이드는 
        // 오른쪽일 때 2번째 슬라이드(순번1)
        // 왼쪽일 때는 1번째 슬라이드(순번 0)
        

        // eq(순번)는 순번 선택 메서드,,, -> 몇번째 요소 0부터 셈
        let sseq = slide.find("li").eq(isR?1:0).attr("data-seq");
        // slide의 li의 두번째 data-seq를 읽어오겠지
        // 오른쪽이면 1이지 isR?1:0 삼항연산자
        // isR이 트루이면(1이면) 1을 출력, 아니면 0출력
        // console.log("슬순:",sseq);

        /// 등장슬라이드 순번과 동일한 블릿 순번에 클래스 "on"주기
        // 제이쿼리 클래스주기 메서드는? addClass(클래스명)
        // 제이쿼리 클래스 컨트롤 메서드
        // 1. addClass() 2. removeClass() 3. toggleClass()

        // 변경대상: #indic li -> indic변수
        indic.eq(sseq).addClass("on")
        // 다른 형제 요소들 -> siblings()은 클래스 지워!! 
        // siblings(형제요소중 클래스가 어떤 것, 혹은 속성이 어떤것 이런 것도 넣을 수 있어)
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

    // 대상 : 슬라이드의 li
    slide.find("li").each((idx,ele)=>{
        // 'data-seq'라는 새로운 속성에 순번을 넣음!
        // ele.attr("data-seq",idx);
        // console.log(idx);
        // console.log(ele,idx);
        $(ele).attr("data-seq",idx);
        // console.log(ele,idx);
        
    }); /////// each ///////////////////


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
    // autoSlide();

    // 인터발 호출 함수
    function autoSlide(){
        autoI = setInterval(()=>{
            // slide 넘기기
            slide.animate(
               {left:"-100%"},aniT,aniE,
                    function(){ 
                        $(this).append($("li",this).first()) 
                        .css({left:"0"}); 
    
                    }); //////////////////animate /////////////////
                    //블릿변경하기
                    let sseq = slide.find("li").eq(1).attr("data-seq");
                    indic.eq(sseq).addClass("on")
                    .siblings().removeClass("on");
        },3000);
    } /////////////////// autoSlide함수 ////////////////////////

    /// 인터발 지우기 함수 ////////////////////////////////
    function clearAuto(){
        // 인터발 지우기
        clearInterval(autoI);

        // 일정 시간후 다시 인터발 호출 (다시 넘어가게 해줘야할거아냐)
        /* setTimeout(autoSlide, 4000); */ /* 이러면 4초 있다가 또 3초 뒤에 움직이겠지 */
        // 이러고 클릭 광클 해봐 setTimeout쓰나미 옴 우르르 넘어갘ㅋㅋㅋㅋㅋㅋ

        // 타임아웃지우기(실행쓰나미방지!)
        clearTimeout(autoT);

        // 일정시간후 다시 인터발호출!
        autoT = setTimeout(autoSlide,4000);


    }//////////// clearAuto함수 ////////////////////////////////




    // 근본적 해결 소스 아님....!!!!!!
    /* setInterval(() => {
        $(".rb").trigger("click");
    }, 3000); */
    // 제이쿼리 trigger(이벤트명) 메서드 -> 선택 요소에 강제 이벤트 발생 이벤트..

    /************************************************************ 
        블릿 클릭시 이동기능 구현하기
        - 대상: #indic li -> indic 변수에 담겨있음
        - 이벤트 : click ->> click() 메서드
        for 문으로 각각,, for문은 양수로 돌려야함
        아래 diff에 양수 음수 얘기가 나오는데 음수를 절대값으로,,해줄 필요가 있..

    ************************************************************/
    indic.click(function(){
        // 1. 클릭된 블릿 li 순번!
        let idx = $(this).index();  /* 선택된 애 순번 알려면 index() */
        console.log("블번:",idx);
        /* on이 들어간 순번과는 다르대,, */

        // 2. 현재 슬라이드 순번
        // 첫번째 슬라이드의 'data-seq'값
        let sidx = slide.find("li").first().attr("data-seq");
        console.log("슬번: ",sidx);

        // 1과2의 차를 알아보기 위해

        // 3. 블릿순번 - 슬라이드순번 : 두 순번의 차이값
        let diff = idx - sidx;
        console.log("차이: ", diff);
        // 음수냐 양수냐에 따라 이동방향이 달라짐
        // 해석: 양수면 오른쪽에서 들어오고, 음수면 왼쪽에서 들어와!

        // 차이수의 절대값
        let absd = Math.abs(diff);
        //  Math.abs(숫자) -> 양수로 결과 변환!!!
        console.log("차이절대값", absd);

        // 4. 이동 분기하기
        if(diff > 0){ /// 양수는 오른쪽에서 들어옴
            // 기본 이동이 오른쪽 버튼과 동일함~!~
            slide.animate({left:(-100*absd)+"%"},aniT,aniE,
            function(){ /* 이동 후 실행 함수 */

                // 절대 차이 수만큼 반복한다!
                // 임시변수(감소하는 left값)
                let temp = absd;

                for(let i=0; i<absd; i++){
                    // 만약 차이수가 0보다 갯수보다 작을때까지 ++...?
                    temp--; // 1씩 감소
                    $(this)
                    .append($("li",this).first()) 
                    .css({left: (-100*temp)+"%"}); 
                    /* li는 반복, left값은 변동 */

                } ////////// for /////////////////////////


            }); //////////////////animate /////////////////

        } ////////// if ///////////////////////////////////

        else if (diff < 0) { // 음수는 왼쪽에서 들어옴!
            // 왼쪽 버튼 클릭시와 기본 기능 동일~~
            let temp = 0; // left에 적용할 증가값
            for(let i=0;i<absd;i++){
                temp++; // 1씩 증가
                slide.prepend(slide.find("li").last())
                // 동시에 left값 -100%
                .css({left:(-100*temp)+"%"})
            }

            // 그 후 left값 0으로 애니메이션
            slide.animate({left:"0"},aniT,aniE /* t 시간 e 이징 */
            );   ////// animate ////////
            

        }; //////// else if ///////////////////////

        // 공통 블릿 변경하기!!
        // $(this)는 클릭된 블릿li
        $(this).addClass("on").siblings().removeClass("on");
        // siblings() -> 다른 블릿 li 형제들

    }); ///////////////////// click ////////////////////////


}); ////////////////////////// jQB ///////////////////////////
//////////////////////////////////////////////////////////////////
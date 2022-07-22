//CGV 메인 페이지 JS - main.JS////

///로딩 구역 /////////////////////////////////
// 이벤트 : load, DOMContentLoaded
window.addEventListener("DOMContentLoaded",()=>{

    //1. 실행 확인 호출확인
    console.log("로딩완료!");
    
    ///////////////////////////////////////////
    //클릭시 극장가는 길 클릭시 구글맵 보이기///
    /////////////////////////////////////////////

    // 이벤트대상: .goMV
    let goMV = document.querySelector(".goMV");
    // 이벤트대상: .cbtn
    let cbtn = document.querySelector(".cbtn");
    // 변경대상: .gmap
    let gmap = document.querySelector(".gmap");

    //변경 방법 : goMV 클릭시 gmap에 "on"클래스 넣기만!
    //사용 메서드: classList.add()
    goMV.onclick=()=>{
        // 구글맵박스에 on넣기
        gmap.classList.add("on");
        // 자기 자신(this===goMV)에 on넣기
        // 이건 화살표 함수에서 의미 다름
        // 그냥 goMV로!
        goMV.classList.add("on");
    }; /////클릭/////* 실행ㄷ되면 발생되는 함수..? */

    //닫기 버튼 클릭시 gmap에 클래스 on 빼기
    // cbtn.onclick=()=>gmap.classList.remove("on");
    //명령문이 하나면 함수의 중괄호{} 생략가능!

    cbtn.onclick = () => {
        //구글맵박스에 on빼기
        gmap.classList.remove("on");
        // goMV에 on빼기
        goMV.classList.remove("on");
    };


});//////////////////////로딩구역///////////////////////////


/* ***********************************************************
        함수명 : 멍멍
        기능 : 포스터 메뉴 클릭시 유튜브 iframe src 속성값 변경하여 영화바꾸기!!
        *********************************************************** */
        function 멍멍(먹이){// 함수값은 소괄호로 불른다?? 먹이 - 전달값을 담는 변수
            // 1. 호출 및 전달값 확인!!!! 먹이는 그릇
            console.log("먹이줘",먹이); //이 안에서 멍멍을 부르면 뭐가 뜨나 확인 먹이라는 그릇에 닥스, 등등이 뜨겠지!!!!
            // 먹이 변수에 영화 고유코드를 담는다!!
    
            // 2. 변경 대상 : 아이프레임 -> #screen iframe
            var 아이 = document.querySelector('#screen iframe');
    
            // 3. 변경내용 : 아이프레임의 src 속성값 변경하기!
            아이.src = "https://www.youtube.com/embed/"+먹이+"?autoplay=1"; /* 3번째 수업 다시 듣기!@@! */
            // 이퀄(=)을 만나는 순간 이퀄 오른쪽의 값을 만든 후 왼쪽의 변수나 속성에 값을 넣는다!!!!!!!!
    
            /* 아이.style.border = 100px solid lime"; */
    
            // 전달 변수 먹이 에 담긴 값을 다른 문자 값과 합쳐서 하나의 문자로 만들어 준다!!!
            // +는 문자를 합치는 연산자!!!!
        
    
           }///////////////멍멍 함수 /////////////////////////////////////////////
           //////////////////////////////////////////////////////////////////////
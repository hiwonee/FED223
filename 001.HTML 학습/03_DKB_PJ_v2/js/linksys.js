// 도깨비 PJ 링크 시스템 JS - linksys.js

/////////////// jQuery 코드 구역///////////////////////////////
$(()=>{
    // 실행구역 확인
    console.log("로딩완료!");

    // 메뉴 a 링크 세팅하기!!///////
    // 대상: .gnb a + .tmenu a

    // 여기 펑션에 function(e) 이렇게 넣으면,, 발생한 event에 관련된 전달 함수를,,
    // () 안에 뭐를 써도 됨~~~ 변수 명은 아무거나 상관없!
    // e변수 : 이벤트 발생 요소의 이벤트 관련 속성/메서드 전달
    $(".gnb a, .tmenu a").click(function(e){
        // 1. 기본 이동 막기
        e.preventDefault();

        // 클릭된 텍스트 읽기
        // this는 클릭된 a 요소 자신
        let txt = $(this).text().trim();
        console.log(txt);
        // trim() 문자열 앞뒤 공백 제거!! (콘솔에서 확인)

        // 이동 페이지 주소 변수
        let url;

        // 이동버튼에 해당하는 페이지 주소 분기
        switch(txt){
            case "인물관계도" : url = "cat"; break;
                case "프로그램 소개": url = "cat"; break;
            case "시청자 게시판" : url = "board"; break;
            case "로그인" : url = "login"; break;
            case "회원가입" : url = "member"; break;
            case "트위터 바로가기" : url = "twitter"; break;
            case "인스타그램 바로가기" : url = "instagram"; break;
            case "페이스북 바로가기" : url = "facebook"; break;
            default: url = "etc";
        }/////////////// switch case ////////////////////

        // 3. 페이지 이동하기
        // location.href = 주소 -> 페이지 이동하기
        if(url === "etc") alert("현재 페이지는 오픈 준비중입니다! \n인물 관계도, 시청자 게시판, 로그인, 회원가입 페이지만 들어가실 수 있습니다."); /* 기타 경우 */
        else if (url==="twitter"){
            alert("트위터가 없어서 네이버TV로 이동합니다!");
            window.open().location.href = "http://tvcast.naver.com/cjenm.tvndokebi";
        }
        else if (url==="instagram"){
            alert("인스타그램이 없어서 카카오 스토리로 이동합니다!");
            window.open().location.href = "http://story.kakao.com/ch/tvndrama";
        }
        else if (url==="facebook"){
            alert("페이스북은 로그인 후 볼 수 있습니다!");
            window.open().location.href = "https://www.facebook.com/DokeVGameKR/";
        }
        // window.open() 새창열기
        else location.href = url+".html" /* 이동 페이지의 경우 */


    }); /////////////////////// click /////////////////


}); ///////////////////////////// jQB //////////////////////////
/////////////////////////////////////////////////////////////////

// 참고) 본 파일을 html에서 불러올 때 defer 속성을 사용하면 html이 모두 로딩 후 실행됨
// 예) <script src="외부js 파일" defer></script>
// 그러나!!!!! defer 속성의 누락 등으로 위험성이 존재하므로 JS코딩 자체에 로딩구역을 만드는게 좋음

        /****************************************** 
         함수명 : goR
         기능 : 큐브 돌기/멈추기
        ******************************************/
       function goR(){
        // 1. 함수 호출 확인
        console.log("나야나");

        // 2. 대상선정: 큐브 - .cube  // 버튼 - .btns button
        var cube = document.querySelector(".cube");
        var btns = document.querySelector(".btns button");

        // 3. 변경 - 큐브에 클래스 넣고 빼기
        // 클래스 제어 내장 객체!!
        // classList
        // 이 객체가 메서드를 가짐
        // (1) add(클래스 명) 
        // (2) remove(클래스명) 
        // (3) toggle(클래스명) -> 유무에 따라 토글.. <<220720 수업 2교시 또 듣기
        cube.classList.toggle("on")
        
        var sts = cube.classList.contains("on");

        console.log("on있니?", sts);

        //  이러면 true, false 나오니까 if문 사용가능~~~ if 문 꼭 써야하나?

        //  조건연산자..삼항연산자(비?집:놀이동산)
        /* sts?btns.innerHTML="멈춰":
        sts?btns.innerHTML="멈춰"; */
        /* sts? sts="멈춰" : sts = "돌아!" */
        // true / false 가 나오는 sts변수에 값을 담음..

        /* btns.innerText=sts; */ /* 버튼 글자 바꾸기 */

        //버튼 글자 바꾸기
        btns.innerText = sts? "멈춰" : "돌아"
        //조건연산자(비?집:놀이동산)  <<< 엄청 많이 쓰는 방식이래 실제 개발자가
        // 이퀄 오른쪽 조건연산자가 값을 결정하여 왼쪽으로 할당되게 한다!@

       }/////////////////////////goR 함수//////////////////////


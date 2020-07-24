// JS DOM Functions //

// Html을 JS로 바꿔보기

const title = document.getElementById("title");
console.log(title); // 결과 -> <h1  id="title">This works!</h1>

// DOM = Document Object Module
// JavaScript는 내 Html에 있는 모든 요소를 가져온다. 그리고 그것을 객체(Object)로 바꾼다.

title.innerHTML = "Hi! JS"; // title이 "Hi! JS"로 바뀜 but html 파일은 그대로 This works!임

//======================================================================================= //
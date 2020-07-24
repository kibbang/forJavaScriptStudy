// JS DOM Functions //

// Html을 JS로 바꿔보기

const title = document.querySelector("#title"); //querySelector는 노드의 첫번째 자식을 반환함.
console.log(title)                              // id로 찾겠다는 의미 # class로 찾을거면 .title
const title2 = document.getElementById("title");
console.log(title2); // 결과 -> <h1  id="title">This works!</h1>

// DOM = Document Object Module
// JavaScript는 내 Html에 있는 모든 요소를 가져온다. 그리고 그것을 객체(Object)로 바꾼다.

title.innerHTML = "Hi! JS"; // title이 "Hi! JS"로 바뀜 but html 파일은 그대로 This works!임

//======================================================================================= //

// Modifying the DOM with JS //

console.dir(title);
title.style.color = "red";
console.dir(document);
document.title = "hello";

//======================================================================================= //

//  Events and event handlers //

// JavaScript는 이벤트에 반응하기 위해 만들어 졌다.
// 그럼 그 '이벤트'는 무엇인가?
// -> 웹사이트에서 발생하는 것들! (click, resize, submit, inputchange, load...)
// 중간에 가로챌 수 있다.

function handleClick(){ // event는 JavaScript로 부터 온 것! 이벤트를 다룰 함수를 만들 때 마다
  title.style.color = "blue";        // JavaScript가 자동으로 붙임
  // console.log("I have been resized!");
}

title.addEventListener("click", handleClick); // function()이거 아님 주의할 것!

//======================================================================================= //

// If, else, and, or //

// if-else의 동작(조건)
// if-else의 구조
// if(condition){
//  block;
// }
// else
// {
//   block;
// }

if(10 === 5){ // ===는 체크만 한다.  if조건은 항상 참이여야 한다.(실행 시키기 위해선)
  console.log("hi");
} else{
  console.log("hello");
}

// 피연산자: 다른 조건을 합치는 것
if(20>5 && "shin" === "kim"){ // &&: and
  console.log("Yes"); // 이걸 실행시키고 싶으면 둘 다 '참' 이여야 함
} else{
  console.log("No");
}

if(20>5 || "shin" === "kim"){ // ||: or
  console.log("Yes"); // 이걸 실행시키고 싶으면 둘 중 하나만이라도 '참' 이여야 함
} else{
  console.log("No");
}

// prompt 무언가를 물어보는 것 (지금은 잘 쓰지 않음)
const age = prompt("How old are you?");
if(age >= 18 && age <=  21){
  console.log("You can Drink but you should not");
}
else if(age >21){
  console.log("You can Drink");
}
else {
  console.log("You are too Young for Drink");
}

//======================================================================================= //

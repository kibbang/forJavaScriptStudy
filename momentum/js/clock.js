// for Clock //

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();  // new Date()는 class 지만 일단 Object라고 생각하기
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}
init();

// 초를 매번 업데이트 하기 위해 setInterval() 이란 함수를 쓴다.
// setInterval(fuction, 인자로 받은 함수를 실행하고 싶은 시간(실행할 간격) ms단위)
// {
//    block;
// }

// seconds를 01,02 이렇게 표시하는 법
// 삼항 연산자 사용
// ? -> if
// : -> else
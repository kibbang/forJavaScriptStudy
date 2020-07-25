// for Clock //

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();  // new Date()는 class 지만 일단 Object라고 생각하기
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
  getTime();
}
init();
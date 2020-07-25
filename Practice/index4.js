// DOM - If else - Function practice Two //

// 각 파일은 자기 역할을 하는게 좋다!

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
  // const hasClass = title.classList.contains(CLICKED_CLASS)
  // hasClass는 CLICKED_CLASS를 가지는지 체크한다.

  // if(hasClass){ // 갖지 않는 경우를 체크하고 싶다.
  //   title.classList.remove(CLICKED_CLASS);
  // }
  // else{
  //   title.classList.add(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}
// toggle 8~16번째 라인의 처리를 요약해주는 것!
function init(){
  title.addEventListener("click", handleClick);
}

init();
// ========================================================= //
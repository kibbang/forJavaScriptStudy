// DOM - If else - Function practice //

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)"; // css에 있는 것을 삭제 JS only works with colors on rgb.
const OTHER_COLOR = "#e74c3c";

function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

// event를 찾고 싶으면 MDN을 찾아 볼 것

// ======================================================================================= //

// DOM - If else - Function practice Two //
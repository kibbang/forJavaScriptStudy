let a = 21;
let b = a-5;
a = 4;

console.log(b , a);

// 변수는 3가지 단계를 거침
// 1. 선언
// 2. 초기화
// (초기화와 선언을 동시에 할 수 있음) 변수를 초기화 하기전에 let을 넣어야함 (사용할 때는 안 써도 됨)
// 3. 사용

// js는 코드를 위에서 아래로 실행 3번 라인은 선언이 아니라 업데이트 한 것
// ================================================================================== //

// const c = 210;
// let d = c-5;
// c = 4;
// console.log(d, c); //(error 발생) -> const로 값을 고정했는데 업데이트를 했기 때문

// 변수의 값을 바꾸고 싶지 않을 때는 let이 아닌 const를 사용( 안정적이라는 뜻(상수))
// 19번라인의 에러내용 -> Uncaught TypeError: Assignment to constant variable.
// -> 상수변수에 대입(불가능한 것)
// 다른 사람이 변수를 못 바꾸게 하려면 const를 사용하자!
// 바꿔도 괜찮다면 let을 사용하도록!
// 결론: let은 값을 바꿀수 있고 const는 불가능!

// var = varible
// var도 let처럼 값을 바꿀 수 있다.
// =========================================================================== //

// Lecture 8 Data Type On Js

// 변수를 선언할 때는 기본적으로 const를 사용해라!(필요할 때까지 let은 쓰지 않도록!)

// String = 일반적으로 TextString을 말함

// String
const what = "Coffee"; // 여기서 ""을 빼면? -> 에러! Uncaught ReferenceError: Coffee is not defined
console.log(what); // 이모티콘도 가능
// 숫자를 넣어도 숫자가 아닌 스트링임!

// Boolean
// Boolean은 True or False

const forBool = false; // or const forBool = true; 소문자로 써야 함, true = 1, false = 0;
// true,false는 String이 아님!

// Number
const forNum = 777;
console.log(forNum); // 말 그대로 숫자 출력

// Float (숫자인데 소수점을 가지고 있음)
const forFloat = 77.1;
console.log(forFloat);

// =========================================================================== //

// Lecture 9 Organizing Data with Arrays

// Data Type의 정렬 방법은 2가지!
// 1. Array  2. Object
// Array = List같은 것

const anything = "Hello";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, anything];
// 변수명은 Camel case로 작성하는 것이 보기 좋음 (시작은 소문자)
// []가 Array의 선언
console.log(daysOfWeek);

// Array는 규칙을 가지고 있음(Array 안에 규칙을 가지고 있음)
// If 3번째 것을 보고싶다!
console.log(daysOfWeek[2]); // 컴퓨터는 0부터 세기 시작함 그래서 3이 아닌 2임!

// =========================================================================== //

// Lecture 10 Organizing Data with Objects

// Array와 Object의 차이점은 Object는 각 value에 이름을 줄 수 있다는 것
// List로 만들고 싶으면 Array로 정렬
// if 내 개인정보를 저장하고 싶다면?
// -> Array는 단순 리스트이기때문에 효율적이지 않음
// -> 이것이 Object를 써야 하는 이유!

// Array는 []로 선언
// Object는 {}로 선언
// Object는 Array처럼 동작하지 않음

//const myInfo = {"Kim", "aaa"} Error: Uncaught SyntaxError: Unexpected token ','

// Object는 label에 data를 저장하는 것

const myInfo = {
  name: "Shin", // 여기서 name은 변수이기 때문에 그냥 적는 것
  age: "29",
  gender: "M",
  liveInTokyo: true
}
console.log(myInfo);

// 여기서 특정 값만 보고 싶을 때

console.log(myInfo.name); // Shin

myInfo.name = "Kim" // 값 변경 가능 Kim

console.log(myInfo.name);

// myInfo 안의 값은 바꿀 수 있다.
// const 안의 값(name)을  바꿀 수 있다.
// But myInfo 자체를 바꿀 수는 없다.
// myInfo = true 이런건 안 됨

// 데이터를 정렬하는 방법은 Array,Object 2가지
// Array -> DB에서 가져온 ListData일 때 사용
// Array를 Object에 넣을 수 있다.

const myInfo2 = {
  name: "Shin",
  age: "29",
  gender: "M",
  liveInTokyo: true,
  favGames:["Starcraft", "LoL", "AFK"],
  favFood: [
    {
      name: "Kimchi", // , 빼먹지 말 것!!
      fatty: false
    },
    {
      name: "Pizza",
      fatty: true
    }
  ]
}
console.log(myInfo2);

// Object안에 Array가 있고 그 안에 Object가 있음
// Console.log 읽는 거 중요함
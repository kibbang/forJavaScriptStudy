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
// ===========================================================================//

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


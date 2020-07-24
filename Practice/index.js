const myInfo = {
  name: "Shin",
  age: "29",
  gender: "M",
  liveInTokyo: true
}
console.log(myInfo);

// Your first JS Function //

// console.log도 object임 (console이라는 Object안에 log라는 key가 있는 것)
// 그렇다면 console.log로 console이라는 Object를 찍어보면?
// console.log(console);

/* console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} f -> function
assert: ƒ assert()
clear: ƒ clear()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: (...)
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
Symbol(Symbol.toStringTag): "Object"
get memory: ƒ ()
set memory: ƒ ()
*/

// 그렇다면 console.log는 어디서 왔는가?
// -> console.log, alert 등등은 '내장함수'(built-in function)이다!
// 그러면 함수는 무엇인가?
// 함수는 함수다. (기능적인 것) 어떤 것을 수행하려는 한 부분. (원하는 만큼 쓸 수 있다.)
// if console.log로 Hello를 찍히게 하는 코드를 쓰고 싶다.
// 함수가 없다면? -> console.log("Hello");
// 한번은 그냥 하면 된다. 그러나 100개가 있는데 내용을 바꾸고 싶으면? 귀찮아짐

// JavaScript에서 함수를 만드는 방법
// 1. 함수선언 function
// 2. 함수 이름 선언 function ~~~
// 3. 내용 입력

function sayHello(){  // 원하는 것을 적어주면 됨 아무거나 (coffee가 함수안에서 사용하게 될 이름이 됨)
  console.log(" Hello "); // 여기에서 coffee를 사용해준다.
}

function sayHello2(name, age){  // 원하는 것을 적어주면 됨 아무거나 (coffee가 함수안에서 사용하게 될 이름이 됨)
  console.log(" Hello ", name, " Your age is ", age); // 여기에서 coffee를 사용해준다.
}

// 함수 사용
sayHello();

// console.log()의 log()도 함수임! console이라는 Object안에 있는 함수
// log()는 메시지가 없으면 안돌아감
// 함수의 () 안에 무엇인가를 넣으면 함수가 사용하게 됨
sayHello("Bro!"); // 이렇게 실행하면 sayHello();와 똑같음

// 왜 안되는가
// ("Bro!")의 "Bro!"는 인자(argument)임
// sayHello()는 인자를 받음. 인자(argument)는 변수 같은 것. 주는 값을 저장함
// 인자를 가져가는 방법은 함수를 선언할 때 적어줌 57라인 참조
// "Bro!"를 coffee에 넣고 그것을 사용하게 됨
sayHello2("Bro!", 20);
// 이것이 외부에 있는 데이터를 읽는 함수를 만드는 방법
// console.log()는 인자(argument)를 무한히 가질 수 있고 뭘 넣든 다 할 수 있다.
// sayHello()는 2개의 인자(argument)를 가짐.

// ================================================================================================ //


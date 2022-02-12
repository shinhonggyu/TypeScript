let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array[string] = ["mon", "tue", "wed"];
week1.push(3);

// 튜플 (Tuple) index별로 다른타입
let b: [string, number];

b = ["2", 1];
b[0].toLowerCase();
b[1].toLowerCase();

// void, never
function sayHello(): void {
  console.log("hello");
}

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}

/* 
enum 이란, 연관된 아이템들을
함께 묶어서 표현 할 수 있는 수단,
특정값만 입력할수있도록 강제
그 값들이 공통점이 있을때
*/

enum Os {
  Window = 3,
  Ios = 10,
  Android,
}

console.log(Os[10]) = "Ios";
console.log(Os["Ios"]) = 10;

enum Os2 {
  Window = "Win",
  Ios = "ios",
  Android = "and",
}

let myOs: Os2;
myOs = Os2.Window;

// compile
const Os = {
  Window: "Win",
  Ios: "ios",
  Android: "and",
};

// case2
// 숫자 열거형 Numeric Enum
enum GenderType {
  Male = 0,
  Female = 1,
}

// 문자형 열거형 String Enum
enum GenderType2 {
  Male = "male",
  Female = "female",
}

// null, undefined
let s: null = null;
let c: undefined = undefined;

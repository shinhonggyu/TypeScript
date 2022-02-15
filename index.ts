let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

let 이름: unknown; // 모든 자료형 허용
이름 = {};
// any 는 실드 해제
let 변수1: string = 이름;
이름 - 1;

// TS는 타입 엄격한거 좋아함⭐
// Union type은 새로운 type⭐
// string타입 + 1 (허용)
// number타입 + 1 (허용)
// string|number + 1 (불가)
let 나이: string | number;
나이 + 1;

let 나이2: unknown = 1;
나이2 - 1;

// 타입스크립트는 엄격하기때문에
// Narrowing / Assertion 쓰셈⭐

// 타입 지정 해주기
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// ------------함수에 타입 지정-----------------------

// 변수?:number = 변수: number | undefined⭐
function 함수(x?: number) {
  console.log(x); // undefined
}

함수();

// 문제
// Union type은 새로운 type⭐
// TS는 타입 엄격한거 좋아함⭐
// 아직 이 파라미터의 타입이 확실하지 않으니까 파라미터 조작을 일단 실드로 막고 금지하는 것
function 함수2(x: number | string): void {
  // number + number (가능)
  // string + number (가능)

  // x는 지금 string 도 number도 아닌 Union type
  console.log(x + 3);
}
// 실행할때 바뀌는게 아님..
함수2(2);
함수2("2");

// case2
function 내함수(x?: number): undefined {
  return x * 2; // paremeter x : number | undefined
}

내함수();

// 숙제1
function sayHi(x?: string): void {
  if (x) {
    console.log(`안녕하세요 ${x}`);
  } else {
    console.log("이름이 없습니다");
  }
}

sayHi("홍규");
sayHi();

// 숙제2
// 힘수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력
function printLength(x: number | string): number {
  return String(x).length;
}

printLength(123);
printLength("1234");

// 숙제3 결혼 가능 확률

function 결혼가능확률(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score = score + money;

  if (house === true) {
    score = score + 500;
  }

  if (charm === "상") {
    score = score + 100;
  }

  if (score >= 600) {
    return "결혼가능";
  }
}

결혼가능확률(700, false, "중"); // "결혼가능"을 return

결혼가능확률(100, false, "상"); // void

// ---------- 타입 확정하기 Narrowing & Assertion ---------------------

function 내함수X(x: number | string) {
  // return x + 1
  // string | number 같은 union type 에는 일반적으로 조작을 못함
  // 이안에서 x는 Union type이라 type애매함
  // Type이 아직 하나로 확정되지 않았을경우! Narrowing
  // (Union type등) 어떤 변수가 타입이 아직 불확실할때
  if (typeof x === "string") {
    return x + 1;
    // 주의점 else문 끝까지 서줘야 안전
  } else {
    return x + 1;
  }
}

function 내함수Y(x: number | string) {
  let array: number[] = [];
  // 어떤 변수 타입이 아직 불확실하면 Narrowing
  // 또는 assertion 문법 디버깅용 비상용
  array[0] = x as number;
}

// -----------------------------------------------------

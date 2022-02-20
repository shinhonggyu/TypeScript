export {}; // 로컬모듈
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

//💖------------함수에 타입 지정-----------------------

// 변수?:number = 변수: number | undefined => undefined라는 타입도 가질수있다⭐
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
function 내함수(x?: number) {
  // x는 undefined 라는 타입도 가질수있다⭐
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

//💖---------- 타입 확정하기 Narrowing & Assertion ---------------------

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

// 숙제1
function 클리닝함수(array: (number | string)[]): number[] {
  return array.map((item) => {
    if (typeof item === "string") {
      return parseInt(item, 10);
    } else {
      return item;
    }
  });
}

클리닝함수(["1", 2, "3"]);

// 숙제2
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다

function 만들함수(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    // 주의점 else문 끝까지 서줘야 안전
    return "에러";
  }
}

//💖------타입도 변수에 담아쓰세요 type 키워드 써서 & readonly------

// Type 변수 쓸때는 영어대문자 국룰
type Person = { name: string; age: number };
let 사람: Person = { name: "shin", age: 31 };

type Girlfriend = {
  readonly name?: string; // (name | undefined)
};

const 여친: Girlfriend = {
  name: "엠버",
};
// TS 에러는 에디터 & 터미널에서만 존재
// 실제 변환된 js파일은 에러없이 실행됨
여친.name = "유라";

// type 변수 합치기
type Name = string;
type Age = number;
type PersonX = Name | Age;

// & 연사자로 object타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// type 키워드는 재정의가 불가능
// interface 키워드는 재정의가 가능❗ 하며 & 하는거랑 똑같은 기능⭐

// (숙제 2)
type X = {
  color?: string;
  size: number;
  readonly position: number[];
};

//💖--------Literal Types로 만드는 const 변수 유사품-------

type T = "가위" | "바위" | "보";

function 함수z(a: T): T[] {
  return ["가위"];
}

함수z("가위");

// Literal type의 문제점
var 자료 = {
  name: "kim",
} as const;

// 'kim' 이라는 자료 X 'kim' 이라는 타입만
function 내함수z(a: "kim") {}
// 자료.name은 타입이 'kim'이 아닌 string
내함수z(자료.name);

//💖 ------함수와 methods에 type alias 지정하는 법-------

// 함수 타입 type alias로 저장
type NumOut = (x: number, y: number) => number;

// 함수표현식, arrow function 에만 type alias 사용가능
let ABC: NumOut = function (x, y) {
  return x + y;
};

// 메소드 타입지정은 어떻게?

type Info = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Info = {
  name: "shin",
  age: 31,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

// (숙제2)
//  함수에 타입지정시 type alias를 꼭 써보도록 합시다.

type CutZero = (x: string) => string;

const cutZero: CutZero = (x) => {
  if (x.indexOf("0") === 0) {
    return x.slice(1);
  } else {
    return x;
  }
};

type RemoveDash = (x: string) => number;

const removeDash: RemoveDash = (x) => {
  if (x.includes("-")) {
    const replace = x.replace(/-/g, "");
    return parseInt(replace, 10);
  } else {
    return parseInt(x, 10);
  }
};

// (숙제3)
type 숙제타입 = (a: string, b: CutZero, c: RemoveDash) => number;

let 숙제: 숙제타입 = function (a, b, c) {
  const result = cutZero(a);
  const result2 = removeDash(result);
  return result2;
};

숙제("010-1111-2222", cutZero, removeDash);

//💖-----타입스크립트로 HTML 변경과 조작할 때 주의점-----

//💖-------class 만들 때 타입지정 가능-------

class PersonQ {
  // class 필드값(constructor와 같은 역할)
  name: string;
  age: number = 31;
  constructor(name: string) {
    this.name = name;
  }
}

let 사람1 = new PersonQ("shin");
let 사람2 = new PersonQ("kim");

// (숙제1)
class 숙제class {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  // prototype
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new 숙제class("소나타", 3000);

// (숙제2)
class Word {
  numArray: number[];
  strArray: string[];
  constructor(...rest: (string | number)[]) {
    this.numArray = this.filterNumber(rest);
    this.strArray = this.filterString(rest);
  }

  filterNumber(rest: (string | number)[]): number[] {
    let result: number[] = [];
    rest.forEach((item) => {
      if (typeof item === "number") {
        result.push(item);
      }
    });
    return result;
  }

  filterString(rest: (string | number)[]): string[] {
    let result: string[] = [];
    rest.forEach((item) => {
      if (typeof item === "string") {
        result.push(item);
      }
    });
    return result;
  }
}

const 결과 = new Word(1, "a", 2, "b", 3, "c");

//💖 -------- Object에 타입지정하려면 interface 이것도 있음 ------------
type Animal = { name: string };
type Cat = { age: number } & Animal;

let 네모: Cat = { name: "cat", age: 16 };

// type vs interface .. interface는 중복선언 가능
// 외부 라이브러리같은경우 interface 많이쓰므로
// 추후에 타입 더하는게 쉽다
interface Student2 {
  name: string;
}

interface Student2 {
  score: number;
}

interface Teacher extends Student2 {
  age: number;
}

let 전생: Teacher = { name: "shin", age: 31, score: 100 };

// (숙제 1)
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// (숙제2)

interface Product2 {
  product: string;
  price: number;
}

let 장바구니: Product2[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// (슥제3)
interface UpdateProduct2 {
  card: boolean;
}

let updateProduct: UpdateProduct2 & Product2 = {
  product: "커피",
  price: 3200,
  card: false,
};

// (숙제4)

interface 숙제4 {
  name: string;
  age: number;
  plus(a: number, b: number): number;
  minus: (a: number, b: number) => number;
}

const 숙제4: 숙제4 = {
  name: "shin",
  age: 31,
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

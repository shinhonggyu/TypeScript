// interface처럼 함수의 선택적 매개변수
function hello(name?: string) {
  return `hello, ${name || "world"}`;
}

const result = hello();
const result2 = hello("Sam");
const result3 = hello(123);

//JS
function hello2(name = "world") {
  return `hello, ${name}`;
}

hello2(31);

// case2
function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello3("Sam"));
console.log(hello3("Sam", 30));

function hello4(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello4(undefined, "shin"));
console.log(hello4("s", "shin"));

// -----------------------------------

// Rest Parameter 타입작성

function add(...nums: number[]) {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

add(1, 2, 3); // 6

// -------------------------------------

This;
interface User {
  name: string;
}

const Sam: User = {
  name: "Sam",
};

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");

// --------------------------------------------
//
interface User {
  name: string;
  age: number;
}
// 동일한 함수이지만 매개변수의 타입이나 개수에따라 다른방식으로 동작
// 전달받은 매개변수의 개수나 타입에따라 다른동작을 하도록 하는 오버로드
function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    // 타입가드
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("shin", 31);
const jane: string = join("jane", "30");

export {}; // 로컬모듈
// Literal Types
// 세로줄은 Union Type이라 한다.
// 정해진 string값을 가진 문자열리터럴
const userName1 = "Bob";

let userName2: string | number = "Tom";
userName2 = 3;

// 정해진 string값을 가진 문자열리터럴
type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "shin",
  job: "developer",
};

// 숫자형 리터럴 타입
interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}

// Union Types
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}
// 동일한 속성의 타입(string이 아니다)을 다르게해서 식별가능한 Union Types
function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  // 복잡해질경우 switch문
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

// Intersection Types 교차타입
// Union A | B 의 반대
// 여러 타입을 함쳐서 사용하는 And
interface Car2 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy2 & Car2 = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000,
};

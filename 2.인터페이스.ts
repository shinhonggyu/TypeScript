// 코딩앙마❗
let user: object;

user = {
  name: "shin",
  age: 31,
};
// object는 에는 name이없다
// property를 정의해서 객체표현 -> 인터페이스
console.log(user.name);

// 문자열 리터럴 타입
type Score = "A" | "B" | "C" | "F";
// property를 정의해서 객체표현!
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  // 1? : string;
  // 2? : string;
  // 3? : string;
  // 4? : string;
  // kye값number, value값string인 propertys
  [grade: number]: Score;
}

let user2: User = {
  name: "shin",
  age: 30,
  birthYear: 1992,
  1: "A",
  2: "B",
  3: "",
};

user2.age = 31;
user2.gender = "male";
user2.birthYear = readonly;

// ----------------------------
// interface로 함수도정의!
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(6, 9);

// case2
// 나이를받아 성인인지 아닌지
interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

// ----------------------------
// interface로 class 도정의
// implements라는 키워드사용
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go..");
  }
}

const b = new Bmw("green");

// interface 확장 extends 키워드
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log("stop");
  },
  color: "red",
  wheels: 4,
  start() {
    console.log("start");
  },
};

class Bmw2 implements Benz {
  color;
  wheels = 4;
  door = 4;
  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log("start..");
  }

  stop() {
    console.log("stop..");
  }
}

const c = new Bmw2("green");
console.log(c);
c.start();
c.stop();

// --------------------------
// 여러개 확장
interface Car {
  color: string;
  wheels: string;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

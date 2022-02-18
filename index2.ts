//🧡 --- 함수 rest 파라미터, destructuring 할 때 타입지정
const person = { student: true, age: 20 };

type Desc = {
  student: boolean;
  age: number;
};

function 함수({ student, age }: Desc) {
  console.log(student, age);
}
함수(person);

// (숙재1) 최댓값 return
function 최댓값(...rest: number[]): number {
  let max = 0;
  rest.forEach((item) => {
    if (max < item) {
      max = item;
    }
  });
  return max;
}

// (숙제2)
interface Desc2 {
  user: string;
  comment: number[];
  admin: boolean;
}

function desc2({ user, comment, admin }: Desc2): void {
  console.log(user);
  console.log(comment);
  console.log(admin);
}

desc2({ user: "kim", comment: [3, 5, 4], admin: false });

// (숙제3)
type 어레이 = (number | string | boolean)[];

function 함수([a, b, c]: 어레이) {
  console.log(a, b, c);
}

함수([40, "wine", false]);

//💛Narrowing 할 수 있는 방법 더 알아보기

// 실제로 개발할 때 어떤 변수나 함수파라미터에 null, undefined가 들어올 경우
// 어떻게 대처할지 if문으로 코드짜는 경우가 매우 많을 겁니다.
// && 연산자로 null & undefined 타입체크하기
function Narrow(a: string | undefined) {
  // 안써도 if/else쓰면 명확함
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

function Narrow2(animal: Fish | Bird) {
  // in키워드로 object narrowing 가능
  if ("swim" in animal) {
    console.log(animal.swim);
  } else {
    console.log(animal.fly);
  }
}

// 1. 애초에 비슷한 타입을 만들지만들기
// 2. literal type 강제로 만들어두기
type NarrowCar = {
  wheel: "4개";
  color: string;
};

type NarrowBike = {
  wheel: "2개";
  color: string;
};

function Narrow3(x: NarrowCar | NarrowBike) {
  // 속성명 in 오브젝트자료 (불가능)
  // 오브젝트 instanceof 부모class (불가능)
  if (x.wheel === "4개") {
  }
}

//🧡 public, private
class 유저 {
  public name: string;
  public name2: string;
  private familyName: string = "shin";

  constructor(name: string) {
    this.name = name;
    this.name2 = this.familyName;
  }
  changeSecret(name: string) {
    console.log("this값", this);
    this.familyName = name;
  }
}

let 유저1 = new 유저("shin");
유저1.changeSecret("son");
console.log("유저1", 유저1);
let 유저2 = new 유저("sun");
유저2.changeSecret("joe");
console.log("유저2", 유저2);

// constructor 안에서 this.name = name 생략가능
class 사람3 {
  constructor(public name: string) {}
}
let person3 = new 사람3("john");

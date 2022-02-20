export {}; // 로컬모듈로 만들기
//🧡 --- 함수 rest 파라미터, destructuring 할 때 타입지정
const person = { student: true, age: 20 };

type Desc = {
  student: boolean;
  age: number;
};

function 함수1({ student, age }: Desc) {
  console.log(student, age);
}
함수1(person);

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

//🧡 --- Narrowing 할 수 있는 방법 더 알아보기 ---

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

//🧡 --- public, private ---

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

//🧡 --- protected, static ---

class Userf {
  protected x = 10;
}

class NewUserf extends Userf {
  doThis() {
    this.x = 20;
  }
}

//  class에 직접 변수나 함수를 부여하고 싶으면 static 키워드
// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다
class Userp {
  static skill = "js";
  intro = Userp.skill + "전문가입니다";
}

let 철수 = new Userp();
Userp.skill = "python";
let 영희 = new Userp();
// private 쓰고 수정함수를 만들어서 사용하는게 더 안전

// (숙제1)
class 속성 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// (숙제2)
class AddNumber {
  private static x = 10;
  public static y = 20;

  static addOne(x: number) {
    AddNumber.x = AddNumber.x + x;
  }

  static PrintX() {
    console.log(AddNumber.x);
  }
}

AddNumber.addOne(3); //이렇게 하면 x가 3 더해져야함

// (숙제3)
class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}

  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let addBlock = new Square(30, 30, "red");
addBlock.draw();
addBlock.draw();
addBlock.draw();
addBlock.draw();

//🧡 --- 타입을 파라미터로 입력하는 Generic
function 함수W(x: unknown[]) {
  return x[0];
}

let w = 함수W([4, 2]);
// console.log(w + 1) x는 unknown

function Generic<MyType>(x: MyType[]): MyType {
  return x[0];
}

let l = Generic<number>([4, 2]);

// ❌ Error => extends number로 타입제한
function 함수t<MyType extends number>(x: MyType) {
  return x - 1;
}

let g = 함수t<number>(100);

// 타입파라미터 제한두기
// MyType이 우측에있는 속성을 가지고 있는지
// if문 같은거임
function Generic2<MyType extends number>(x: MyType) {
  return x - 1;
}

let p = Generic2<number>(100);

// 커스텀 타입으로도 타입파라미터 제한가능
interface LengthCheck {
  length: number;
}

function Generic3<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

Generic3<string[]>(["a", "b", "c"]);
// Generic3<number>(100) ❌

// (숙제1)
interface PrintLength {
  length: number;
}

function G숙제1<Type extends string | string[]>(x: Type) {
  console.log(x.length);
}

G숙제1<string>("hello"); // 5
G숙제1<string[]>(["kim", "park"]); // 2
// G숙제1<number[]>([3, 5, 7]) ❌

// (숙제2)
interface Animal2 {
  name: string;
  age: number;
}

let data = '{"name":"dog","age":1}';

function G숙제2<Type>(x: string): Type {
  return JSON.parse(x);
}

G숙제2<Animal2>(data);

// 숙제3
class G숙제3<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}

let o = new G숙제3<string>("어쩌구");
o.name;

//🧡 --- array 자료에 붙일 수 있는 tuple type
let 멍멍: (string | boolean)[] = ["dog", true];

// 위치까지 고려한 타입지정 가능 , 옵션은마지막
let 멍멍2: [string, boolean?] = ["dog", true];

// rest parameter 타입도 tuple가능

function restT(...rest: [number, string]) {
  console.log(rest);
}
// 똑같음, rest는 배열에담김
// function restT(a: number, b: string) {
//   console.log([a, b]);
// }

restT(111, "222");

// spread
let Arr = [1, 2, 3];
let Arr2: [number, number, ...number[]] = [4, 5, ...Arr];

//🧡 --- d.ts 파일 이용하기
// d.ts파일은 글로벌아니므로 export default
// 글로벌로 설정한 d.ts파일은 위험할수있으므로
// import, export 쓰기
import * as type from "./types/common/test.d";
import { Age, Person } from "./types/common/test.d";

let TEST: Age = 213;

interface Person2 extends Person {
  age: number;
}

let TESTUSER: Person2 = {
  name: "shin",
  age: 31,
};

//🧡 --- implements 키워드
//interface는 object 타입지정뿐 아니라
//implements 키워드와 함께 class 타입을 확인하고 싶을때도 사용
interface CarType {
  model: string;
  price: number;
  tax: (price: number) => number;
}
// ⭐결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심.
class Car implements CarType {
  // "이 class가 이 interface에 있는 속성을 다 들고있냐"
  model; //any 타입됨
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
  // a 파라미터는 any 타입됨
  tax(a) {
    return a * 0.1;
  }
}

const testCar = new Car("sd");
testCar.tax(123);

let 붕붕이 = new Car("morning");

//🧡 --- object index signatures

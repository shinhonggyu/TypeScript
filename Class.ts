class Car {
  // TS에서 class작성할때 멤버변수는 미리선언 해주어야한다.
  // color: string;

  // 멤버변수를 미리 선언하지않는 방법: 접근자연자, readonly
  // public 혹은 readonly
  constructor(readonly color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

const bmw = new Car("red");

// ---------------------------------------------------------------------

// TS에서는 접근제한자(Access modifier) 지원 - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스에서 모두 접근 가능
private, #변수명 - 해당 클래스 내부에서만 접근 가능
protected - 자식 클래스에서 접근 가능
*/
class Car2 {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car2.wheels);
  }
}

class Bmw extends Car2 {
  constructor(color: string, name: string) {
    super(color, name);
  }
  showName() {
    console.log(this.name);
  }
}

const z4 = new Bmw("black", "zzz4");
console.log(z4.name);
console.log(Car2.wheels);
z4.name = "zzz4";

// --------------------------------------

// 추상 class
abstract class Car3 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  // 추상화란 프로퍼티나 메소드의 이름만 선언해주고 구체적인 기능은 상속받는쪽에서 구현해주는것.
  // 구체적인 기능은 가지각색일수있다
  abstract doSomething(): void;
}
// 추상 class는 new를 이용해 객체를 만들수없다
// 상속을 통해서만 사용이 가능하다
const car = new Car3("red");
// 추상 classs내부의 추상메소드는 반드시 상속받은쪽에서 구체적인 구현을 해줘야한다.
class Bmw3 extends Car3 {
  constructor(color: string) {
    super(color);
  }
  doSomething(): void {
    alert(3);
  }
}

const z4 = new Bmw3("black");

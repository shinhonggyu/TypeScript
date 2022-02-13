class Car {
  // TS에서 class작성할때 멤버변수는 미리선언 해주어야한다.
  color: string;

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
public - 자식 클래스, 클래스 인스턴스에서 모두 접근 가능 표기안할경우 모두 public
private, #변수명 - 해당 클래스 내부에서만 접근 가능
protected - 자식 클래스에서 접근 가능
*/
class Car2 {
  readonly name: string = "car";
  color: string;
  // static은 정적멤버변수를 만들어 클래스.로접근가능
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
    // 부모의멤버변수 name을 보여줌
    // Car의 named이 public이므로 자식에서 접근가능
    // name이 private | #일경우 에러
    // protedted경우 자식클래스에서 참조가능하나 인스턴스에서는 불가능
    console.log(super.name);
    console.log(this.name);
  }
}
// name을 바꾸고싶을경우 constructor내부에서 바꿔줌
const z4 = new Bmw("black", "zzz4");
console.log(z4.name); // public일경우
console.log(Car2.wheels);
// public이라 수정가능하지만 readonly로 못하게해줌
z4.name = "zzz4";

// --------------------------------------

// 추상 Class
abstract class Car3 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  // 추상 Class내부의 추상메소드는 여기서는 단순히 이름만 알려주고
  // 반드시 상속받은쪽에서 구체적인 구현을 해준다.
  // 추상화란 프로퍼티나 메소드의 이름만 선언해주고 구체적인 기능은 상속받는쪽에서 구현해주는것.
  // ex:) filter
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

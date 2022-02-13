// 사용하는이유
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  return arr.length;
}

const arr = [1, 2, 3];
getSize(arr); // 3

// 매개변수의 타입이 바뀌었는데 동일한 함수를 재사용
// 오버로드 또는 유니온 타입
const arr2 = ["a", "b", "c"];
getSize(arr2);

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "shin" }];
getSize(arr4);

// Generic
// 클래스나 함수 인터페이스를 다양한 타입으로 재사용 할수있다.
// 선언할때는 타입파라미터만 적어주고 생성시점에 사용하는 타입을 결정한다.
// Type Parameter T는 어떤 Type을 전달받아 이함수에서 사용할수있게 해준다.
function getSize2<T>(arr: T[]): number {
  return arr.length;
}
// 사용하는 쪽에서 Type을 결정해준다
const arr5 = [1, 2, 3];
getSize2<number | string>(arr5); // 3

const arr6 = ["a", "b", "c"];
getSize2<string>(arr6);
// Type을 기입해주지 않아도 TS는 전달되는매개변수를보고 알고있다
const arr7 = [false, true, true];
getSize2(arr7);

const arr8 = [{}, {}, { name: "shin" }];
getSize2(arr8);

// -----------------------------------------

// case2

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

// -------------------------------------------------

// case3
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

// book은 사용하면안됨, Generic을 이용
function showName<T>(data: T): string {
  return data.name;
}
showName(user);
showName(car);
showName(book);

// function showName<T extends { name: string }>(data: T): string {
//   return data.name;
// }

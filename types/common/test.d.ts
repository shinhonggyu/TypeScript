// 1.타입정의 보관용 파일입니다.
// 2.각파일 레퍼런스용
// 다른 ts 파일에서 import 가능.
// 그냥 d.ts 파일은 글로벌 모듈 아님.
// 글로벌 모듈로 만들면 export안해도됨
export type Age = number;
export interface Person {
  name: string;
}

// 코딩앙마❗
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ["mon", "tue", "wed"];
var week2 = ["mon", "tue", "wed"];
week1.push(3);
// 튜플 (Tuple) index별로 다른타입
var b;
b = ["2", 1];
b[0].toLowerCase();
b[1].toLowerCase();
// void, never
function sayHello() {
    console.log("hello");
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something..
    }
}
/*
enum 이란, 연관된 아이템들을
함께 묶어서 표현 할 수 있는 수단,
특정값만 입력할수있도록 강제
그 값들이 공통점이 있을때
*/
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
console.log(Os[10]) = "Ios";
console.log(Os["Ios"]) = 10;
// 숫자가아니기때문에 단방향 매핑만됨
var Os2;
(function (Os2) {
    Os2["Window"] = "Win";
    Os2["Ios"] = "ios";
    Os2["Android"] = "and";
})(Os2 || (Os2 = {}));
// compile
var Os = {
    Window: "Win",
    Ios: "ios",
    Android: "and",
};
var myOs;
myOs = Os2.Window;
// null, undefined
var a = null;
var b = undefined;
// case2
// 숫자 열거형 Numeric Enum
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
// 문자형 열거형 String Enum
var GenderType2;
(function (GenderType2) {
    GenderType2["Male"] = "male";
    GenderType2["Female"] = "female";
})(GenderType2 || (GenderType2 = {}));
export {};

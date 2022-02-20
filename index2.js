var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//🧡 --- 함수 rest 파라미터, destructuring 할 때 타입지정
var person = { student: true, age: 20 };
function 함수1(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수1(person);
// (숙재1) 최댓값 return
function 최댓값() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var max = 0;
    rest.forEach(function (item) {
        if (max < item) {
            max = item;
        }
    });
    return max;
}
function desc2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user);
    console.log(comment);
    console.log(admin);
}
desc2({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수([40, "wine", false]);
//🧡 --- Narrowing 할 수 있는 방법 더 알아보기 ---
// 실제로 개발할 때 어떤 변수나 함수파라미터에 null, undefined가 들어올 경우
// 어떻게 대처할지 if문으로 코드짜는 경우가 매우 많을 겁니다.
// && 연산자로 null & undefined 타입체크하기
function Narrow(a) {
    // 안써도 if/else쓰면 명확함
    if (a && typeof a === "string") {
    }
}
function Narrow2(animal) {
    // in키워드로 object narrowing 가능
    if ("swim" in animal) {
        console.log(animal.swim);
    }
    else {
        console.log(animal.fly);
    }
}
function Narrow3(x) {
    // 속성명 in 오브젝트자료 (불가능)
    // 오브젝트 instanceof 부모class (불가능)
    if (x.wheel === "4개") {
    }
}
//🧡 --- public, private ---
var 유저 = /** @class */ (function () {
    function 유저(name) {
        this.familyName = "shin";
        this.name = name;
        this.name2 = this.familyName;
    }
    유저.prototype.changeSecret = function (name) {
        console.log("this값", this);
        this.familyName = name;
    };
    return 유저;
}());
var 유저1 = new 유저("shin");
유저1.changeSecret("son");
console.log("유저1", 유저1);
var 유저2 = new 유저("sun");
유저2.changeSecret("joe");
console.log("유저2", 유저2);
// constructor 안에서 this.name = name 생략가능
var 사람3 = /** @class */ (function () {
    function 사람3(name) {
        this.name = name;
    }
    return 사람3;
}());
var person3 = new 사람3("john");
//🧡 --- protected, static ---
var Userf = /** @class */ (function () {
    function Userf() {
        this.x = 10;
    }
    return Userf;
}());
var NewUserf = /** @class */ (function (_super) {
    __extends(NewUserf, _super);
    function NewUserf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUserf.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUserf;
}(Userf));
//  class에 직접 변수나 함수를 부여하고 싶으면 static 키워드
// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다
var Userp = /** @class */ (function () {
    function Userp() {
        this.intro = Userp.skill + "전문가입니다";
    }
    Userp.skill = "js";
    return Userp;
}());
var 철수 = new Userp();
Userp.skill = "python";
var 영희 = new Userp();
// private 쓰고 수정함수를 만들어서 사용하는게 더 안전
// (숙제1)
var 속성 = /** @class */ (function () {
    function 속성() {
        this.z = 30;
    }
    속성.x = 10;
    속성.y = 20;
    return 속성;
}());
// (숙제2)
var AddNumber = /** @class */ (function () {
    function AddNumber() {
    }
    AddNumber.addOne = function (x) {
        AddNumber.x = AddNumber.x + x;
    };
    AddNumber.PrintX = function () {
        console.log(AddNumber.x);
    };
    AddNumber.x = 10;
    AddNumber.y = 20;
    return AddNumber;
}());
AddNumber.addOne(3); //이렇게 하면 x가 3 더해져야함
// (숙제3)
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var addBlock = new Square(30, 30, "red");
addBlock.draw();
addBlock.draw();
addBlock.draw();
addBlock.draw();
//🧡 --- 타입을 파라미터로 입력하는 Generic
function 함수W(x) {
    return x[0];
}
var w = 함수W([4, 2]);
// console.log(w + 1) x는 unknown
function Generic(x) {
    return x[0];
}
var l = Generic([4, 2]);
// ❌ Error => extends number로 타입제한
function 함수t(x) {
    return x - 1;
}
var g = 함수t(100);
// 타입파라미터 제한두기
// MyType이 우측에있는 속성을 가지고 있는지
// if문 같은거임
function Generic2(x) {
    return x - 1;
}
var p = Generic2(100);
function Generic3(x) {
    return x.length;
}
Generic3(["a", "b", "c"]);
function G숙제1(x) {
    console.log(x.length);
}
G숙제1("hello"); // 5
G숙제1(["kim", "park"]); // 2
var data = '{"name":"dog","age":1}';
function G숙제2(x) {
    return JSON.parse(x);
}
G숙제2(data);
// 숙제3
var G숙제3 = /** @class */ (function () {
    function G숙제3(a) {
        this.name = a;
    }
    return G숙제3;
}());
var o = new G숙제3("어쩌구");
o.name;
//🧡 --- array 자료에 붙일 수 있는 tuple type
var 멍멍 = ["dog", true];
// 위치까지 고려한 타입지정 가능 , 옵션은마지막
var 멍멍2 = ["dog", true];
// rest parameter 타입도 tuple가능
function restT() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
// 똑같음, rest는 배열에담김
// function restT(a: number, b: string) {
//   console.log([a, b]);
// }
restT(111, "222");
// spread
var Arr = [1, 2, 3];
var Arr2 = __spreadArray([4, 5], Arr, true);
export {};

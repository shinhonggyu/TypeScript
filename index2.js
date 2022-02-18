//🧡 --- 함수 rest 파라미터, destructuring 할 때 타입지정
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수(person);
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
//💛Narrowing 할 수 있는 방법 더 알아보기
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
//🧡 public, private
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

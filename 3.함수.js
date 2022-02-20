// interface처럼 함수의 선택적 매개변수
function hello(name) {
    return "hello, ".concat(name || "world");
}
var result = hello();
var result2 = hello("Sam");
var result3 = hello(123);
//JS
function hello2(name) {
    if (name === void 0) { name = "world"; }
    return "hello, ".concat(name);
}
hello2(31);
// case2
function hello3(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hello3("Sam"));
console.log(hello3("Sam", 30));
function hello4(age, name) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hello4(undefined, "shin"));
console.log(hello4("s", "shin"));
// -----------------------------------
// Rest Parameter 타입작성
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
}
add(1, 2, 3); // 6
var Sam = {
    name: "Sam",
};
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var a = showName.bind(Sam);
a(30, "m");
function join(name, age) {
    if (typeof age === "number") {
        // 타입가드
        return {
            name: name,
            age: age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
var sam = join("shin", 31);
var jane = join("jane", "30");
export {};

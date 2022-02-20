// 코딩앙마❗
var user;
user = {
    name: "shin",
    age: 31,
};
// object는 에는 name이없다
// property를 정의해서 객체표현 -> 인터페이스
console.log(user.name);
var user2 = {
    name: "shin",
    age: 30,
    birthYear: 1992,
    1: "A",
    2: "B",
    3: "",
};
user2.age = 31;
user2.gender = "male";
user2.birthYear = readonly;
var addx = function (x, y) {
    return x + y;
};
addx(6, 9);
var a = function (age) {
    return age > 19;
};
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log("go..");
    };
    return Bmw;
}());
var b = new Bmw("green");
var benz = {
    door: 5,
    stop: function () {
        console.log("stop");
    },
    color: "red",
    wheels: 4,
    start: function () {
        console.log("start");
    },
};
var Bmw2 = /** @class */ (function () {
    function Bmw2(c) {
        this.wheels = 4;
        this.door = 4;
        this.color = c;
    }
    Bmw2.prototype.start = function () {
        console.log("start..");
    };
    Bmw2.prototype.stop = function () {
        console.log("stop..");
    };
    return Bmw2;
}());
var c = new Bmw2("green");
console.log(c);
c.start();
c.stop();
export {};

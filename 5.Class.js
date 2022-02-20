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
var Car = /** @class */ (function () {
    // TS에서 class작성할때 멤버변수는 미리선언 해주어야한다.
    // color: string;
    // 멤버변수를 미리 선언하지않는 방법: 접근자연자, readonly
    // public 혹은 readonly
    function Car(color2) {
        this.color2 = color2;
        this.color = color2;
    }
    Car.prototype.start = function () {
        console.log("start");
    };
    return Car;
}());
var bmw = new Car("red");
// ---------------------------------------------------------------------
// TS에서는 접근제한자(Access modifier) 지원 - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스에서 모두 접근 가능 표기안할경우 모두 public
private, #변수명 - 해당 클래스 내부에서만 접근 가능
protected - 자식 클래스에서 접근 가능
*/
var Car5 = /** @class */ (function () {
    function Car5(color) {
        this.name = "car";
        this.color = color;
    }
    Car5.prototype.start = function () {
        console.log("start");
        console.log(this.name);
    };
    Car5.wheels = 4;
    return Car5;
}());
var Benz2 = /** @class */ (function (_super) {
    __extends(Benz2, _super);
    function Benz2(color) {
        return _super.call(this, color) || this;
    }
    Benz2.prototype.showName = function () {
        _super.prototype.name = "updateCar";
    };
    return Benz2;
}(Car5));
var z5 = new Benz2("black");
z5.showName();
z5.start();
// --------------------------------------
// 추상 Class
var Car3 = /** @class */ (function () {
    function Car3(color) {
        this.color = color;
    }
    Car3.prototype.start = function () {
        console.log("start");
    };
    return Car3;
}());
// 추상 class는 new를 이용해 객체를 만들수없다
// 상속을 통해서만 사용이 가능하다
var car = new Car3("red");
// 추상 classs내부의 추상메소드는 반드시 상속받은쪽에서 구체적인 구현을 해줘야한다.
var Bmw3 = /** @class */ (function (_super) {
    __extends(Bmw3, _super);
    function Bmw3(color) {
        return _super.call(this, color) || this;
    }
    Bmw3.prototype.doSomething = function () {
        alert(3);
    };
    return Bmw3;
}(Car3));
var z4 = new Bmw3("black");
export {};

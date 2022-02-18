var 회원들 = [1, "2", 3];
var 오브젝트 = { a: 123 };
var 이름; // 모든 자료형 허용
이름 = {};
// any 는 실드 해제
var 변수1 = 이름;
이름 - 1;
// TS는 타입 엄격한거 좋아함⭐
// Union type은 새로운 type⭐
// string타입 + 1 (허용)
// number타입 + 1 (허용)
// string|number + 1 (불가)
var 나이;
나이 + 1;
var 나이2 = 1;
나이2 - 1;
// 타입스크립트는 엄격하기때문에
// Narrowing / Assertion 쓰셈⭐
// 타입 지정 해주기
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John"
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
//💖------------함수에 타입 지정-----------------------
// 변수?:number = 변수: number | undefined => undefined라는 타입도 가질수있다⭐
function 함수(x) {
    console.log(x); // undefined
}
함수();
// 문제
// Union type은 새로운 type⭐
// TS는 타입 엄격한거 좋아함⭐
// 아직 이 파라미터의 타입이 확실하지 않으니까 파라미터 조작을 일단 실드로 막고 금지하는 것
function 함수2(x) {
    // number + number (가능)
    // string + number (가능)
    // x는 지금 string 도 number도 아닌 Union type
    console.log(x + 3);
}
// 실행할때 바뀌는게 아님..
함수2(2);
함수2("2");
// case2
function 내함수(x) {
    // x는 undefined 라는 타입도 가질수있다⭐
    return x * 2; // paremeter x : number | undefined
}
내함수();
// 숙제1
function sayHi(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log("이름이 없습니다");
    }
}
sayHi("홍규");
sayHi();
// 숙제2
// 힘수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력
function printLength(x) {
    return String(x).length;
}
printLength(123);
printLength("1234");
// 숙제3 결혼 가능 확률
function 결혼가능확률(money, house, charm) {
    var score = 0;
    score = score + money;
    if (house === true) {
        score = score + 500;
    }
    if (charm === "상") {
        score = score + 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
결혼가능확률(700, false, "중"); // "결혼가능"을 return
결혼가능확률(100, false, "상"); // void
//💖---------- 타입 확정하기 Narrowing & Assertion ---------------------
function 내함수X(x) {
    // return x + 1
    // string | number 같은 union type 에는 일반적으로 조작을 못함
    // 이안에서 x는 Union type이라 type애매함
    // Type이 아직 하나로 확정되지 않았을경우! Narrowing
    // (Union type등) 어떤 변수가 타입이 아직 불확실할때
    if (typeof x === "string") {
        return x + 1;
        // 주의점 else문 끝까지 서줘야 안전
    }
    else {
        return x + 1;
    }
}
function 내함수Y(x) {
    var array = [];
    // 어떤 변수 타입이 아직 불확실하면 Narrowing
    // 또는 assertion 문법 디버깅용 비상용
    array[0] = x;
}
// 숙제1
function 클리닝함수(array) {
    return array.map(function (item) {
        if (typeof item === "string") {
            return parseInt(item, 10);
        }
        else {
            return item;
        }
    });
}
클리닝함수(["1", 2, "3"]);
// 숙제2
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
function 만들함수(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        // 주의점 else문 끝까지 서줘야 안전
        return "에러";
    }
}
var 사람 = { name: "shin", age: 31 };
var 여친 = {
    name: "엠버"
};
// TS 에러는 에디터 & 터미널에서만 존재
// 실제 변환된 js파일은 에러없이 실행됨
여친.name = "유라";
var position = { x: 10, y: 20 };
function 함수z(a) {
    return ["가위"];
}
함수z("가위");
// Literal type의 문제점
var 자료 = {
    name: "kim"
};
// 'kim' 이라는 자료 X 'kim' 이라는 타입만
function 내함수z(a) { }
// 자료.name은 타입이 'kim'이 아닌 string
내함수z(자료.name);
// 함수표현식, arrow function 에만 type alias 사용가능
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "shin",
    age: 31,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
var cutZero = function (x) {
    if (x.indexOf("0") === 0) {
        return x.slice(1);
    }
    else {
        return x;
    }
};
var removeDash = function (x) {
    if (x.includes("-")) {
        var replace = x.replace(/-/g, "");
        return parseInt(replace, 10);
    }
    else {
        return parseInt(x, 10);
    }
};
var 숙제 = function (a, b, c) {
    var result = cutZero(a);
    var result2 = removeDash(result);
    return result2;
};
숙제("010-1111-2222", cutZero, removeDash);
//💖-----타입스크립트로 HTML 변경과 조작할 때 주의점-----
//💖-------class 만들 때 타입지정 가능-------
var PersonQ = /** @class */ (function () {
    function PersonQ(name) {
        this.age = 31;
        this.name = name;
    }
    return PersonQ;
}());
var 사람1 = new PersonQ("shin");
var 사람2 = new PersonQ("kim");
// (숙제1)
var 숙제class = /** @class */ (function () {
    function 숙제class(model, price) {
        this.model = model;
        this.price = price;
    }
    // prototype
    숙제class.prototype.tax = function () {
        return this.price * 0.1;
    };
    return 숙제class;
}());
var car1 = new 숙제class("소나타", 3000);
// (숙제2)
var Word = /** @class */ (function () {
    function Word() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.numArray = this.filterNumber(rest);
        this.strArray = this.filterString(rest);
    }
    Word.prototype.filterNumber = function (rest) {
        var result = [];
        rest.forEach(function (item) {
            if (typeof item === "number") {
                result.push(item);
            }
        });
        return result;
    };
    Word.prototype.filterString = function (rest) {
        var result = [];
        rest.forEach(function (item) {
            if (typeof item === "string") {
                result.push(item);
            }
        });
        return result;
    };
    return Word;
}());
var 결과 = new Word(1, "a", 2, "b", 3, "c");
var 네모 = { name: "cat", age: 16 };
var 전생 = { name: "shin", age: 31, score: 100 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"]
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var updateProduct = {
    product: "커피",
    price: 3200,
    card: false
};
var 숙제4 = {
    name: "shin",
    age: 31,
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};

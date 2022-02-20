// Literal Types
// 세로줄은 Union Type이라 한다.
// 정해진 string값을 가진 문자열리터럴
var userName1 = "Bob";
var userName2 = "Tom";
userName2 = 3;
var user = {
    name: "shin",
    job: "developer",
};
// 동일한 속성의 타입(string이 아니다)을 다르게해서 식별가능한 Union Types
function getGift(gift) {
    console.log(gift.color);
    // 복잡해질경우 switch문
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
var toyCar = {
    name: "타요",
    start: function () { },
    color: "red",
    price: 1000,
};
export {};

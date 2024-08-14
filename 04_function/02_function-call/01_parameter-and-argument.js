/* 01_parameter-and-argument (매개변수와 인수) */

// 함수 선언문
function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
    console.log(arguments);

    return `${name}님 안녕하세요!`;
}

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(name);


// 함수 호출
var result = hello('홍길동');
console.log(`result1 : ${result}`);

// 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
result = hello();
console.log(`result2 : ${result}`);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('홍길동', '유관순');
console.log(`result3 : ${result}`);

function hi(name = '아무개') {
    return `${name} 안녕~`;
}

// 매개변수 기본값 활용
result = hi();
console.log(`result4 : ${result}`);

/*
매개변수의 최대 개수에 대해 명시적인 제한은 없다.
하지만 이상적인 함수는 한 가지 일만 해야하며 가급적 작게 만들어야 하므로
최대 3개 이상을 넘지 않는 것을 권장한다.
*/
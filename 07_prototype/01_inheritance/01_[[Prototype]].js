// 01_[[Prototype]]
// 자바스크립트의 객체는 [[Prototype]]이라는 숨김 프로퍼티를 갖는다.
// 이 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데,
// 다른 객체를 참조하는 경우 참조 대상을 프로토타입(prototype)이라 부른다.
// object에서 프로퍼티를 읽으려 할 때 해당 프로퍼티가 없으면
// 자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾는다.
// 이것을 프로토타입 상속이라 한다.


const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
};

const student = {
    passion : true
};

// student 객체의 프로토타입을 user 객체로 설정
student.__proto__ = user;

// student 객체 자체에는 activate 프로퍼티가 없지만,
// student의 프로토타입인 user 객체에 activate 프로퍼티가 있어서 이를 상속받아 사용할 수 있게 되었다.
console.log(student.activate);

// 메소드 login도 student를 통해 호출 가능하다.
student.login();

console.log(student.passion);

// student의 프로토타입은 user이다.
// 혹은 student는 user를 상속 받는다. 라고 한다.
// 프로토타입에서 상속받은 프로퍼티를 '상속 프로퍼티'라고 한다.


// 프로토타입 체인
const ohgiraffersStudent = {
    class : `3강의장`,
    __proto__ : student
};

console.log(ohgiraffersStudent. activate); // user에서 상속
console.log(ohgiraffersStudent. passion); // student에서 상속

// 프로토타입 체이닝은 순환 참조가 허용되지 않는다.
// __proto__ 의 값은 객체 또는 null 가능하며 다른 자료형은 무시된다.
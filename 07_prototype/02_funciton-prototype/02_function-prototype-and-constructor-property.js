// 함수의 프로토타입과 생성자 프로퍼티
// 개발자가 특별히 할당하지 않더라도 모든 함수는 기본적으로 "prototype" 프로퍼티를 갖는다.
// 여기서 constructor 프로퍼티는 함수 자신을 가리킨다.
function Student() { 

}

console.log(Student.prototype);
console.log(Student.prototype.constructor == Student);

const student = new Student();
console.log(student.constructor == Student);
/* 01_object-constructor-function (Object 생성자 함수)
new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
빈 객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성시킬 수 있다.
*/

// 빈 객체 생성
const student = new Object();

// 동적으로 프로퍼티 추가
student.name = '유관순';
student.age = 16;

console.log(student);
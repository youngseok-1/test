/* 02_nullish-coalescing-operator (null 병합 연산자) 
ES11(ECMAScript2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우
우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
변수에 기본 값을 설정할 때 유용하다.
*/
var test = null ?? '기본 값';
console.log(test);

// null 병합 연산자 이전에는 논리연산자 ||를 사용한 단축 평가로 변수에 기본 값을 설정했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.
// 빈 문자열로 유효하게 처리하고 싶지만 기본 값 문자열이 대입 된다.
var value = '' ?? '기본 값';
console.log(value);